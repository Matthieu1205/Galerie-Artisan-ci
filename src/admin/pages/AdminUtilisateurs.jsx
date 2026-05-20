import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { ADMINS } from '../mockData.js'

const ROLES = [
  { value: 'Super Admin', desc: 'Accès complet à toutes les fonctionnalités' },
  { value: 'Admin', desc: 'Gestion du contenu, sans accès paramètres' },
  { value: 'Éditeur', desc: 'Édition catalogue et contenus uniquement' },
  { value: 'Commercial', desc: 'Gestion devis, commandes et clients' },
  { value: 'Logistique', desc: 'Gestion déménagement et garde-meuble' }
]

export default function AdminUtilisateurs() {
  const [admins, setAdmins] = useState(ADMINS)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [confirmDel, setConfirmDel] = useState(null)

  const openNew = () => {
    setEditing({ nom: '', email: '', role: 'Éditeur', statut: 'Actif', password: '', dernierAcces: 'Jamais' })
    setModalOpen(true)
  }

  const openEdit = (u) => {
    setEditing({ ...u, password: '' })
    setModalOpen(true)
  }

  const save = (e) => {
    e.preventDefault()
    if (editing.id) {
      setAdmins(arr => arr.map(x => x.id === editing.id ? { ...x, ...editing } : x))
    } else {
      setAdmins(arr => [{ ...editing, id: Date.now() }, ...arr])
    }
    setModalOpen(false)
    setEditing(null)
  }

  const remove = () => {
    setAdmins(arr => arr.filter(x => x.id !== confirmDel.id))
    setConfirmDel(null)
  }

  const columns = [
    {
      key: 'nom',
      label: 'Utilisateur',
      render: (v, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'var(--color-black)',
            color: 'var(--color-orange)',
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
    {
      key: 'role',
      label: 'Rôle',
      render: v => <Badge variant={v === 'Super Admin' ? 'vip' : 'dark'}>{v}</Badge>
    },
    {
      key: 'statut',
      label: 'Statut',
      render: v => <Badge variant={v === 'Actif' ? 'success' : 'neutral'}>{v}</Badge>
    },
    {
      key: 'dernierAcces',
      label: 'Dernier accès',
      render: v => <span style={{ fontSize: 12, color: 'var(--color-gray-600)' }}>{v}</span>
    }
  ]

  const actions = [
    { icon: 'tools', label: 'Modifier', onClick: openEdit },
    { icon: 'plus', label: 'Supprimer', onClick: setConfirmDel, variant: 'danger' }
  ]

  return (
    <div className="admin-page">
      <div className="kpi-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Comptes admins</span>
            <div className="kpi-icon"><Icon name="shield" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{admins.length}</div>
          <div className="kpi-evolution kpi-evolution--up">utilisateurs back-office</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Comptes actifs</span>
            <div className="kpi-icon"><Icon name="check" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{admins.filter(a => a.statut === 'Actif').length}</div>
          <div className="kpi-evolution kpi-evolution--up">connectés récemment</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Super Admins</span>
            <div className="kpi-icon"><Icon name="award" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{admins.filter(a => a.role === 'Super Admin').length}</div>
          <div className="kpi-evolution kpi-evolution--up">accès complet</div>
        </div>
      </div>

      <div className="admin-page-bar">
        <h2>{admins.length} comptes administrateurs</h2>
        <button onClick={openNew} className="btn-admin btn-admin-orange">
          <Icon name="plus" size={14} /> Ajouter un admin
        </button>
      </div>

      <DataTable
        columns={columns}
        data={admins}
        searchKey={['nom', 'email', 'role']}
        actions={actions}
        pageSize={8}
      />

      {/* Tableau des rôles */}
      <div className="admin-card">
        <div className="admin-card-head">
          <h3>Définition des rôles et permissions</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {ROLES.map(r => (
            <div key={r.value} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 18px',
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-md)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Icon name="shield" size={16} color="var(--color-orange)" />
                <div>
                  <strong style={{ fontSize: 14, color: 'var(--color-black)' }}>{r.value}</strong>
                  <p style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 2 }}>{r.desc}</p>
                </div>
              </div>
              <Badge variant="dark">
                {admins.filter(a => a.role === r.value).length} membre{admins.filter(a => a.role === r.value).length > 1 ? 's' : ''}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing?.id ? 'Modifier l\'administrateur' : 'Nouvel administrateur'}
        footer={
          <>
            <button className="btn-admin btn-admin-ghost" onClick={() => setModalOpen(false)}>Annuler</button>
            <button className="btn-admin btn-admin-orange" onClick={save}>Enregistrer</button>
          </>
        }
      >
        {editing && (
          <form className="adm-form" onSubmit={save}>
            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Nom complet</label>
                <input className="form-control" value={editing.nom} onChange={e => setEditing({ ...editing, nom: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email professionnel</label>
                <input type="email" className="form-control" value={editing.email} onChange={e => setEditing({ ...editing, email: e.target.value })} required />
              </div>
            </div>

            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Rôle</label>
                <select className="form-control" value={editing.role} onChange={e => setEditing({ ...editing, role: e.target.value })}>
                  {ROLES.map(r => <option key={r.value} value={r.value}>{r.value}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Statut</label>
                <select className="form-control" value={editing.statut} onChange={e => setEditing({ ...editing, statut: e.target.value })}>
                  <option>Actif</option>
                  <option>Inactif</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">{editing.id ? 'Nouveau mot de passe (optionnel)' : 'Mot de passe initial'}</label>
              <input type="password" className="form-control" value={editing.password} onChange={e => setEditing({ ...editing, password: e.target.value })} placeholder={editing.id ? 'Laisser vide pour ne pas modifier' : 'Minimum 8 caractères'} />
            </div>
          </form>
        )}
      </Modal>

      <Modal
        open={!!confirmDel}
        onClose={() => setConfirmDel(null)}
        title="Confirmer la suppression"
        size="sm"
        footer={
          <>
            <button className="btn-admin btn-admin-ghost" onClick={() => setConfirmDel(null)}>Annuler</button>
            <button className="btn-admin btn-admin-orange" onClick={remove}>Supprimer</button>
          </>
        }
      >
        <p>Supprimer le compte <strong>{confirmDel?.nom}</strong> ? Cet utilisateur n'aura plus accès au back-office.</p>
      </Modal>
    </div>
  )
}
