import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { DEVIS, formatFcfa, formatDate } from '../mockData.js'

const STATUTS = ['En attente', 'Envoyé', 'Accepté', 'Refusé']

export default function AdminDevis() {
  const [devis, setDevis] = useState(DEVIS)
  const [detail, setDetail] = useState(null)
  const [filter, setFilter] = useState('Tous')

  const filtered = filter === 'Tous' ? devis : devis.filter(d => d.statut === filter)

  const changeStatut = (id, statut) => {
    setDevis(arr => arr.map(d => d.id === id ? { ...d, statut } : d))
    if (detail?.id === id) setDetail({ ...detail, statut })
  }

  const enAttente = devis.filter(d => d.statut === 'En attente').length
  const acceptes = devis.filter(d => d.statut === 'Accepté').length
  const montantTotal = devis.filter(d => d.statut === 'Accepté').reduce((s, d) => s + d.montant, 0)

  const columns = [
    { key: 'id', label: 'Référence', render: v => <strong style={{ color: 'var(--color-orange)' }}>{v}</strong> },
    {
      key: 'client',
      label: 'Client',
      render: v => <strong style={{ color: 'var(--color-black)' }}>{v}</strong>
    },
    {
      key: 'service',
      label: 'Service demandé',
      render: v => <span style={{ fontSize: 13, color: 'var(--color-gray-600)' }}>{v}</span>
    },
    { key: 'date', label: 'Date', render: v => formatDate(v) },
    {
      key: 'priority',
      label: 'Priorité',
      render: v => (
        <Badge variant={v === 'Haute' ? 'success' : v === 'Basse' ? 'neutral' : 'warn'}>{v}</Badge>
      )
    },
    { key: 'montant', label: 'Montant', align: 'right', render: v => <strong>{formatFcfa(v)}</strong> },
    {
      key: 'statut',
      label: 'Statut',
      render: v => (
        <Badge variant={
          v === 'Accepté' ? 'success' :
          v === 'Refusé' ? 'neutral' :
          v === 'Envoyé' ? 'warn' : 'dark'
        }>{v}</Badge>
      )
    }
  ]

  const actions = [
    { icon: 'search', label: 'Voir', onClick: setDetail },
    { icon: 'send', label: 'Renvoyer', onClick: () => alert('Devis renvoyé au client par email') }
  ]

  return (
    <div className="admin-page">
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">À traiter</span>
            <div className="kpi-icon"><Icon name="clock" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{enAttente}</div>
          <div className="kpi-evolution kpi-evolution--down">en attente de traitement</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Devis acceptés</span>
            <div className="kpi-icon"><Icon name="check" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{acceptes}</div>
          <div className="kpi-evolution kpi-evolution--up">conversion</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">CA confirmé</span>
            <div className="kpi-icon"><Icon name="award" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value" style={{ fontSize: 22 }}>{formatFcfa(montantTotal)}</div>
          <div className="kpi-evolution kpi-evolution--up">devis acceptés</div>
        </div>
      </div>

      <div className="admin-page-bar">
        <div className="filter-tabs">
          {['Tous', ...STATUTS].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`filter-tab ${filter === s ? 'filter-tab--active' : ''}`}
            >
              {s}
            </button>
          ))}
        </div>
        <button className="btn-admin btn-admin-orange">
          <Icon name="plus" size={14} /> Nouveau devis
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        searchKey={['id', 'client', 'service']}
        actions={actions}
        pageSize={8}
      />

      <Modal
        open={!!detail}
        onClose={() => setDetail(null)}
        title={`Devis ${detail?.id}`}
        size="lg"
        footer={
          <>
            <button className="btn-admin btn-admin-ghost">Télécharger PDF</button>
            <button className="btn-admin btn-admin-orange">Envoyer au client</button>
          </>
        }
      >
        {detail && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              padding: 24,
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{detail.client}</h4>
                <p style={{ fontSize: 13, color: 'var(--color-gray-500)' }}>
                  {detail.service} · {formatDate(detail.date)}
                </p>
              </div>
              <Badge variant={
                detail.statut === 'Accepté' ? 'success' :
                detail.statut === 'Refusé' ? 'neutral' :
                detail.statut === 'Envoyé' ? 'warn' : 'dark'
              }>{detail.statut}</Badge>
            </div>

            <div style={{
              padding: 24,
              background: 'var(--color-black)',
              color: 'white',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                fontSize: 11,
                color: 'var(--color-gray-300)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 8
              }}>
                Montant proposé
              </div>
              <strong style={{ fontSize: 32, color: 'var(--color-orange)', fontWeight: 800 }}>
                {formatFcfa(detail.montant)}
              </strong>
            </div>

            <div>
              <label className="form-label">Notes internes</label>
              <textarea className="form-control" rows={3} placeholder="Ajouter des notes sur ce devis..."></textarea>
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
          </div>
        )}
      </Modal>
    </div>
  )
}
