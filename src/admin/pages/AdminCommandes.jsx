import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { COMMANDES, formatFcfa, formatDate } from '../mockData.js'

const STATUTS = ['En préparation', 'En cours', 'Livrée', 'Annulée']

export default function AdminCommandes() {
  const [commandes, setCommandes] = useState(COMMANDES)
  const [detail, setDetail] = useState(null)
  const [filter, setFilter] = useState('Tous')

  const filtered = filter === 'Tous'
    ? commandes
    : commandes.filter(c => c.statut === filter)

  const changeStatut = (id, statut) => {
    setCommandes(arr => arr.map(c => c.id === id ? { ...c, statut } : c))
    if (detail && detail.id === id) setDetail({ ...detail, statut })
  }

  const ca = commandes.filter(c => c.statut !== 'Annulée').reduce((s, c) => s + c.montant, 0)
  const enCours = commandes.filter(c => c.statut === 'En cours' || c.statut === 'En préparation').length
  const livrees = commandes.filter(c => c.statut === 'Livrée').length

  const columns = [
    { key: 'id', label: 'N°', render: v => <strong style={{ color: 'var(--color-orange)' }}>#{v}</strong> },
    {
      key: 'client',
      label: 'Client',
      render: (v, row) => (
        <div>
          <div style={{ fontWeight: 600, color: 'var(--color-black)' }}>{v}</div>
          <div style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{row.tel}</div>
        </div>
      )
    },
    { key: 'date', label: 'Date', render: v => formatDate(v) },
    { key: 'articles', label: 'Articles', align: 'center', render: v => `${v} item${v > 1 ? 's' : ''}` },
    { key: 'paiement', label: 'Paiement', render: v => <Badge variant="neutral">{v}</Badge> },
    { key: 'montant', label: 'Montant', align: 'right', render: v => <strong>{formatFcfa(v)}</strong> },
    {
      key: 'statut',
      label: 'Statut',
      render: v => (
        <Badge variant={
          v === 'Livrée' ? 'success' :
          v === 'Annulée' ? 'neutral' :
          v === 'En cours' ? 'warn' : 'dark'
        }>{v}</Badge>
      )
    }
  ]

  const actions = [
    { icon: 'search', label: 'Voir détails', onClick: setDetail }
  ]

  return (
    <div className="admin-page">
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Chiffre d'affaires</span>
            <div className="kpi-icon"><Icon name="cart" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value" style={{ fontSize: 22 }}>{formatFcfa(ca)}</div>
          <div className="kpi-evolution kpi-evolution--up">{commandes.length} commandes</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">En cours</span>
            <div className="kpi-icon"><Icon name="clock" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{enCours}</div>
          <div className="kpi-evolution kpi-evolution--down">à traiter</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Livrées</span>
            <div className="kpi-icon"><Icon name="check" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{livrees}</div>
          <div className="kpi-evolution kpi-evolution--up">terminées</div>
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
          <Icon name="download" size={14} /> Exporter (CSV)
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        searchKey={['id', 'client', 'tel']}
        actions={actions}
        pageSize={8}
      />

      <Modal
        open={!!detail}
        onClose={() => setDetail(null)}
        title={`Commande #${detail?.id}`}
        size="lg"
      >
        {detail && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Client */}
            <div style={{
              padding: 20,
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{detail.client}</h4>
                  <div style={{ fontSize: 13, color: 'var(--color-gray-500)' }}>
                    {detail.email} · {detail.tel}
                  </div>
                </div>
                <Badge variant={
                  detail.statut === 'Livrée' ? 'success' :
                  detail.statut === 'Annulée' ? 'neutral' :
                  detail.statut === 'En cours' ? 'warn' : 'dark'
                }>{detail.statut}</Badge>
              </div>
            </div>

            {/* Infos */}
            <div className="adm-form-row adm-form-row-3">
              <InfoBox label="Date" value={formatDate(detail.date)} />
              <InfoBox label="Articles" value={`${detail.articles} item${detail.articles > 1 ? 's' : ''}`} />
              <InfoBox label="Paiement" value={detail.paiement} />
            </div>

            {/* Montant */}
            <div style={{
              padding: 24,
              background: 'var(--color-black)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: 13, color: 'var(--color-gray-300)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Montant total
              </span>
              <strong style={{ fontSize: 26, color: 'var(--color-orange)', fontWeight: 800 }}>
                {formatFcfa(detail.montant)}
              </strong>
            </div>

            {/* Actions */}
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

      <style>{`
        .filter-tabs {
          display: flex;
          gap: 6px;
          background: white;
          padding: 4px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-gray-100);
          overflow-x: auto;
        }

        .filter-tab {
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-gray-600);
          border-radius: var(--radius-full);
          transition: all var(--transition);
          white-space: nowrap;
        }

        .filter-tab--active {
          background: var(--color-black);
          color: white;
        }

        .filter-tab:hover:not(.filter-tab--active) {
          background: var(--color-gray-50);
        }

        .statut-btn {
          padding: 10px 16px;
          font-size: 12px;
          font-weight: 600;
          color: var(--color-gray-700);
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          border: 2px solid transparent;
          transition: all var(--transition);
        }

        .statut-btn--active {
          background: var(--color-orange);
          color: white;
          border-color: var(--color-orange);
        }

        .statut-btn:hover:not(.statut-btn--active) {
          background: var(--color-gray-100);
        }
      `}</style>
    </div>
  )
}

function InfoBox({ label, value }) {
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
