import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { CLIENTS, formatFcfa, formatDate } from '../mockData.js'

export default function AdminClients() {
  const [clients, setClients] = useState(CLIENTS)
  const [detail, setDetail] = useState(null)
  const [filter, setFilter] = useState('Tous')

  const filtered = filter === 'Tous' ? clients : clients.filter(c => c.statut === filter)

  const totalCA = clients.reduce((s, c) => s + c.total, 0)
  const vipCount = clients.filter(c => c.statut === 'VIP').length
  const actifs = clients.filter(c => c.statut === 'Actif' || c.statut === 'VIP').length

  const columns = [
    {
      key: 'nom',
      label: 'Client',
      render: (v, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: row.statut === 'VIP' ? 'var(--color-orange)' : 'var(--color-black)',
            color: row.statut === 'VIP' ? 'white' : 'var(--color-orange)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: 14
          }}>
            {v.charAt(0)}
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-black)' }}>{v}</div>
            <div style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{row.email}</div>
          </div>
        </div>
      )
    },
    { key: 'tel', label: 'Téléphone', render: v => <span style={{ fontSize: 13 }}>{v}</span> },
    { key: 'ville', label: 'Ville' },
    { key: 'commandes', label: 'Commandes', align: 'center', render: v => <strong>{v}</strong> },
    { key: 'total', label: 'Total dépensé', align: 'right', render: v => <strong style={{ color: 'var(--color-orange)' }}>{formatFcfa(v)}</strong> },
    {
      key: 'statut',
      label: 'Statut',
      render: v => (
        <Badge variant={v === 'VIP' ? 'vip' : v === 'Actif' ? 'success' : 'neutral'}>{v}</Badge>
      )
    },
    { key: 'dateInscription', label: 'Inscrit le', render: v => <span style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{formatDate(v)}</span> }
  ]

  const actions = [
    { icon: 'search', label: 'Voir profil', onClick: setDetail },
    { icon: 'mail', label: 'Envoyer email', onClick: c => alert(`Email à ${c.email}`) }
  ]

  return (
    <div className="admin-page">
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Total clients</span>
            <div className="kpi-icon"><Icon name="users" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{clients.length}</div>
          <div className="kpi-evolution kpi-evolution--up">enregistrés</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Clients actifs</span>
            <div className="kpi-icon"><Icon name="check" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{actifs}</div>
          <div className="kpi-evolution kpi-evolution--up">{((actifs / clients.length) * 100).toFixed(0)}% du total</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Clients VIP</span>
            <div className="kpi-icon"><Icon name="award" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{vipCount}</div>
          <div className="kpi-evolution kpi-evolution--up">programme fidélité</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">CA cumulé</span>
            <div className="kpi-icon"><Icon name="cart" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value" style={{ fontSize: 22 }}>{formatFcfa(totalCA)}</div>
          <div className="kpi-evolution kpi-evolution--up">tous clients</div>
        </div>
      </div>

      <div className="admin-page-bar">
        <div className="filter-tabs">
          {['Tous', 'Actif', 'VIP', 'Inactif'].map(s => (
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
          <Icon name="download" size={14} /> Exporter la base
        </button>
      </div>

      <DataTable
        columns={columns}
        data={filtered}
        searchKey={['nom', 'email', 'tel', 'ville']}
        actions={actions}
        pageSize={8}
      />

      <Modal
        open={!!detail}
        onClose={() => setDetail(null)}
        title={`Profil client`}
        size="lg"
      >
        {detail && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{
              padding: 32,
              background: 'var(--color-black)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 20
            }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: detail.statut === 'VIP' ? 'var(--color-orange)' : 'var(--color-gray-700)',
                color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: 28
              }}>
                {detail.nom.charAt(0)}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 6 }}>
                  {detail.nom}
                </h3>
                <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--color-gray-300)' }}>
                  <span><Icon name="mail" size={12} /> {detail.email}</span>
                  <span><Icon name="phone" size={12} /> {detail.tel}</span>
                </div>
              </div>
              <Badge variant={detail.statut === 'VIP' ? 'vip' : detail.statut === 'Actif' ? 'success' : 'neutral'}>
                {detail.statut}
              </Badge>
            </div>

            <div className="adm-form-row adm-form-row-3">
              <InfoCell label="Ville" value={detail.ville} />
              <InfoCell label="Commandes" value={`${detail.commandes} commandes`} />
              <InfoCell label="Inscrit le" value={formatDate(detail.dateInscription)} />
            </div>

            <div style={{
              padding: 24,
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: 12,
                color: 'var(--color-gray-500)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}>
                Total dépensé
              </span>
              <strong style={{ fontSize: 24, color: 'var(--color-orange)', fontWeight: 800 }}>
                {formatFcfa(detail.total)}
              </strong>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn-admin btn-admin-orange">
                <Icon name="mail" size={14} /> Envoyer un email
              </button>
              <button className="btn-admin btn-admin-ghost">
                <Icon name="whatsapp" size={14} /> Contacter WhatsApp
              </button>
              <button className="btn-admin btn-admin-ghost">
                <Icon name="document" size={14} /> Historique
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

function InfoCell({ label, value }) {
  return (
    <div style={{ padding: 16, background: 'var(--color-gray-50)', borderRadius: 'var(--radius-md)' }}>
      <div style={{ fontSize: 11, color: 'var(--color-gray-500)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>{label}</div>
      <strong style={{ fontSize: 14, color: 'var(--color-black)' }}>{value}</strong>
    </div>
  )
}
