import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { BIENS, formatFcfa } from '../mockData.js'

export default function AdminBiens() {
  const [biens, setBiens] = useState(BIENS)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [confirmDel, setConfirmDel] = useState(null)

  const openNew = () => {
    setEditing({
      titre: '', type: 'Vente', categorie: 'Maison', prix: 0,
      ville: 'Abidjan', quartier: '', surface: 0, chambres: 0, statut: 'Disponible'
    })
    setModalOpen(true)
  }

  const openEdit = (bien) => {
    setEditing({ ...bien })
    setModalOpen(true)
  }

  const save = (e) => {
    e.preventDefault()
    if (editing.id) {
      setBiens(b => b.map(x => x.id === editing.id ? { ...x, ...editing } : x))
    } else {
      const newBien = { ...editing, id: Date.now(), vues: 0, demandes: 0 }
      setBiens(b => [newBien, ...b])
    }
    setModalOpen(false)
    setEditing(null)
  }

  const remove = () => {
    setBiens(b => b.filter(x => x.id !== confirmDel.id))
    setConfirmDel(null)
  }

  const columns = [
    {
      key: 'titre',
      label: 'Bien',
      render: (v, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 8,
            background: row.categorie === 'Maison' ? 'var(--color-black)' :
                       row.categorie === 'Appartement' ? 'var(--color-orange)' :
                       'var(--color-gray-500)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Icon name={row.categorie === 'Terrain' ? 'ruler' : row.categorie === 'Maison' ? 'home' : 'building'} size={20} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-black)' }}>{v}</div>
            <div style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{row.quartier}, {row.ville}</div>
          </div>
        </div>
      )
    },
    { key: 'type', label: 'Type', render: v => <Badge variant={v === 'Vente' ? 'dark' : 'success'}>{v}</Badge> },
    { key: 'categorie', label: 'Catégorie' },
    { key: 'prix', label: 'Prix', align: 'right', render: v => <strong>{formatFcfa(v)}</strong> },
    { key: 'surface', label: 'Surface', align: 'right', render: v => `${v} m²` },
    {
      key: 'statut',
      label: 'Statut',
      render: v => <Badge variant={v === 'Disponible' ? 'success' : v === 'Réservé' ? 'warn' : 'neutral'}>{v}</Badge>
    },
    {
      key: 'vues',
      label: 'Vues',
      align: 'right',
      render: (v, row) => (
        <div style={{ fontSize: 12 }}>
          <div><strong>{v}</strong> vues</div>
          <div style={{ color: 'var(--color-orange)' }}>{row.demandes} demandes</div>
        </div>
      )
    }
  ]

  const actions = [
    { icon: 'tools', label: 'Modifier', onClick: openEdit },
    { icon: 'plus', label: 'Supprimer', onClick: setConfirmDel, variant: 'danger' }
  ]

  return (
    <div className="admin-page">
      <div className="admin-page-bar">
        <h2>{biens.length} biens dans le catalogue</h2>
        <button onClick={openNew} className="btn-admin btn-admin-orange">
          <Icon name="plus" size={14} /> Ajouter un bien
        </button>
      </div>

      <DataTable
        columns={columns}
        data={biens}
        searchKey={['titre', 'quartier', 'ville']}
        actions={actions}
        pageSize={6}
      />

      <Modal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditing(null) }}
        title={editing?.id ? 'Modifier le bien' : 'Nouveau bien immobilier'}
        size="lg"
        footer={
          <>
            <button className="btn-admin btn-admin-ghost" onClick={() => setModalOpen(false)}>
              Annuler
            </button>
            <button className="btn-admin btn-admin-orange" onClick={save}>
              {editing?.id ? 'Enregistrer les modifications' : 'Créer le bien'}
            </button>
          </>
        }
      >
        {editing && (
          <form className="adm-form" onSubmit={save}>
            <div className="form-group">
              <label className="form-label">Titre du bien</label>
              <input
                className="form-control"
                value={editing.titre}
                onChange={e => setEditing({ ...editing, titre: e.target.value })}
                placeholder="Villa moderne 5 pièces..."
                required
              />
            </div>

            <div className="adm-form-row adm-form-row-3">
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-control" value={editing.type} onChange={e => setEditing({ ...editing, type: e.target.value })}>
                  <option>Vente</option>
                  <option>Location</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Catégorie</label>
                <select className="form-control" value={editing.categorie} onChange={e => setEditing({ ...editing, categorie: e.target.value })}>
                  <option>Maison</option>
                  <option>Appartement</option>
                  <option>Terrain</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Statut</label>
                <select className="form-control" value={editing.statut} onChange={e => setEditing({ ...editing, statut: e.target.value })}>
                  <option>Disponible</option>
                  <option>Réservé</option>
                  <option>Vendu</option>
                </select>
              </div>
            </div>

            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Ville</label>
                <input className="form-control" value={editing.ville} onChange={e => setEditing({ ...editing, ville: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Quartier</label>
                <input className="form-control" value={editing.quartier} onChange={e => setEditing({ ...editing, quartier: e.target.value })} required />
              </div>
            </div>

            <div className="adm-form-row adm-form-row-3">
              <div className="form-group">
                <label className="form-label">Prix (FCFA)</label>
                <input type="number" className="form-control" value={editing.prix} onChange={e => setEditing({ ...editing, prix: Number(e.target.value) })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Surface (m²)</label>
                <input type="number" className="form-control" value={editing.surface} onChange={e => setEditing({ ...editing, surface: Number(e.target.value) })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Chambres</label>
                <input type="number" className="form-control" value={editing.chambres} onChange={e => setEditing({ ...editing, chambres: Number(e.target.value) })} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description (optionnel)</label>
              <textarea className="form-control" rows={3} placeholder="Description du bien..."></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Photos du bien</label>
              <div style={{
                padding: 24,
                border: '2px dashed var(--color-gray-200)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                color: 'var(--color-gray-400)'
              }}>
                <Icon name="download" size={24} color="var(--color-gray-400)" />
                <p style={{ marginTop: 8, fontSize: 13 }}>Cliquez ou glissez vos photos ici</p>
              </div>
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
            <button className="btn-admin btn-admin-ghost" onClick={() => setConfirmDel(null)}>
              Annuler
            </button>
            <button className="btn-admin btn-admin-orange" onClick={remove}>
              Supprimer
            </button>
          </>
        }
      >
        <p style={{ fontSize: 14, color: 'var(--color-gray-700)', lineHeight: 1.6 }}>
          Êtes-vous sûr de vouloir supprimer le bien <strong>{confirmDel?.titre}</strong> ?
          Cette action est irréversible.
        </p>
      </Modal>
    </div>
  )
}
