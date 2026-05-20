import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { RESERVATIONS, formatDate } from '../mockData.js'

const TYPES = ['Tous', 'Visite immobilier', 'Déménagement', 'Garde-meuble', 'Location événementiel']
const STATUTS = ['En attente', 'Confirmée', 'Terminée', 'Annulée']

export default function AdminReservations() {
  const [reservations, setReservations] = useState(RESERVATIONS)
  const [detail, setDetail] = useState(null)
  const [type, setType] = useState('Tous')

  const filtered = type === 'Tous' ? reservations : reservations.filter(r => r.type === type)

  const changeStatut = (id, statut) => {
    setReservations(arr => arr.map(r => r.id === id ? { ...r, statut } : r))
    if (detail?.id === id) setDetail({ ...detail, statut })
  }

  const enAttente = reservations.filter(r => r.statut === 'En attente').length
  const confirmees = reservations.filter(r => r.statut === 'Confirmée').length
  const aujourdhui = reservations.filter(r => r.date === '2026-05-19').length

  const typeIcon = {
    'Visite immobilier': 'building',
    'Déménagement': 'truck',
    'Garde-meuble': 'warehouse',
    'Location événementiel': 'sofa'
  }

  const columns = [
    { key: 'id', label: 'Référence', render: v => <strong style={{ color: 'var(--color-orange)' }}>{v}</strong> },
    {
      key: 'type',
      label: 'Type',
      render: v => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'var(--color-gray-50)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Icon name={typeIcon[v]} size={14} color="var(--color-orange)" />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{v}</span>
        </div>
      )
    },
    { key: 'client', label: 'Client', render: v => <strong style={{ color: 'var(--color-black)' }}>{v}</strong> },
    { key: 'bien', label: 'Objet' },
    {
      key: 'date',
      label: 'Date prévue',
      render: v => (
        <span style={{ fontSize: 13, color: 'var(--color-gray-700)', fontWeight: 600 }}>
          {formatDate(v)}
        </span>
      )
    },
    {
      key: 'statut',
      label: 'Statut',
      render: v => (
        <Badge variant={
          v === 'Confirmée' ? 'success' :
          v === 'Terminée' ? 'neutral' :
          v === 'Annulée' ? 'neutral' : 'warn'
        }>{v}</Badge>
      )
    }
  ]

  const actions = [
    { icon: 'search', label: 'Détails', onClick: setDetail },
    { icon: 'check', label: 'Confirmer', onClick: r => changeStatut(r.id, 'Confirmée') }
  ]

  return (
    <div className="admin-page">
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">À confirmer</span>
            <div className="kpi-icon"><Icon name="clock" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{enAttente}</div>
          <div className="kpi-evolution kpi-evolution--down">en attente</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Confirmées</span>
            <div className="kpi-icon"><Icon name="check" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{confirmees}</div>
          <div className="kpi-evolution kpi-evolution--up">à venir</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Aujourd'hui</span>
            <div className="kpi-icon"><Icon name="star" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{aujourdhui}</div>
          <div className="kpi-evolution kpi-evolution--up">interventions prévues</div>
        </div>
      </div>

      <div className="admin-page-bar">
        <div className="filter-tabs">
          {TYPES.map(t => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`filter-tab ${type === t ? 'filter-tab--active' : ''}`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="btn-admin btn-admin-orange">
          <Icon name="plus" size={14} /> Nouvelle réservation
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        searchKey={['id', 'client', 'bien']}
        actions={actions}
        pageSize={8}
      />

      <Modal
        open={!!detail}
        onClose={() => setDetail(null)}
        title={`Réservation ${detail?.id}`}
        size="md"
      >
        {detail && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              padding: 20,
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              gap: 16,
              alignItems: 'center'
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 12,
                background: 'var(--color-orange)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon name={typeIcon[detail.type]} size={24} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{detail.type}</h4>
                <p style={{ fontSize: 13, color: 'var(--color-gray-500)' }}>{detail.bien}</p>
              </div>
              <Badge variant={
                detail.statut === 'Confirmée' ? 'success' :
                detail.statut === 'Terminée' ? 'neutral' :
                detail.statut === 'Annulée' ? 'neutral' : 'warn'
              }>{detail.statut}</Badge>
            </div>

            <div className="adm-form-row adm-form-row-2">
              <InfoCell label="Client" value={detail.client} />
              <InfoCell label="Date prévue" value={formatDate(detail.date)} />
            </div>

            <div>
              <label className="form-label">Mettre à jour le statut</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {STATUTS.map(s => (
                  <button
                    key={s}
                    onClick={() => changeStatut(detail.id, s)}
                    className={`statut-btn ${detail.statut === s ? 'statut-btn--active' : ''}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="form-label">Notes</label>
              <textarea className="form-control" rows={3} placeholder="Notes internes sur cette réservation..."></textarea>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

function InfoCell({ label, value }) {
  return (
    <div style={{
      padding: 16,
      background: 'var(--color-gray-50)',
      borderRadius: 'var(--radius-md)'
    }}>
      <div style={{
        fontSize: 11,
        color: 'var(--color-gray-500)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: 600,
        marginBottom: 6
      }}>{label}</div>
      <strong style={{ fontSize: 14, color: 'var(--color-black)' }}>{value}</strong>
    </div>
  )
}
