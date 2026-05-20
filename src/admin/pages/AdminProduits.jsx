import { useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Modal from '../components/Modal.jsx'
import Icon from '../../components/Icon.jsx'
import { PRODUITS, formatFcfa } from '../mockData.js'

export default function AdminProduits() {
  const [produits, setProduits] = useState(PRODUITS)
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [confirmDel, setConfirmDel] = useState(null)

  const openNew = () => {
    setEditing({ nom: '', cat: 'Salon', prix: 0, stock: 0, type: 'Vente' })
    setModalOpen(true)
  }

  const openEdit = (p) => {
    setEditing({ ...p })
    setModalOpen(true)
  }

  const save = (e) => {
    e.preventDefault()
    if (editing.id) {
      setProduits(arr => arr.map(x => x.id === editing.id ? { ...x, ...editing } : x))
    } else {
      const newP = { ...editing, id: Date.now(), ventes: 0 }
      setProduits(arr => [newP, ...arr])
    }
    setModalOpen(false)
    setEditing(null)
  }

  const remove = () => {
    setProduits(arr => arr.filter(x => x.id !== confirmDel.id))
    setConfirmDel(null)
  }

  // Stats produits
  const totalStock = produits.reduce((s, p) => s + p.stock, 0)
  const rupture = produits.filter(p => p.stock === 0).length
  const totalVentes = produits.reduce((s, p) => s + p.ventes * p.prix, 0)

  const columns = [
    {
      key: 'nom',
      label: 'Produit',
      render: (v, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 8,
            background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Icon name="sofa" size={20} color="white" />
          </div>
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-black)' }}>{v}</div>
            <div style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{row.cat}</div>
          </div>
        </div>
      )
    },
    { key: 'type', label: 'Type', render: v => <Badge variant="neutral">{v}</Badge> },
    { key: 'prix', label: 'Prix unitaire', align: 'right', render: v => <strong>{formatFcfa(v)}</strong> },
    {
      key: 'stock',
      label: 'Stock',
      align: 'right',
      render: v => (
        <Badge variant={v === 0 ? 'warn' : v < 5 ? 'warn' : 'success'}>
          {v === 0 ? 'Rupture' : `${v} en stock`}
        </Badge>
      )
    },
    { key: 'ventes', label: 'Ventes', align: 'right', render: v => <strong style={{ color: 'var(--color-orange)' }}>{v}</strong> }
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
            <span className="kpi-label">Stock total</span>
            <div className="kpi-icon"><Icon name="warehouse" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{totalStock}</div>
          <div className="kpi-evolution kpi-evolution--down">unités disponibles</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">Produits en rupture</span>
            <div className="kpi-icon"><Icon name="shield" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value">{rupture}</div>
          <div className="kpi-evolution kpi-evolution--down">à réapprovisionner</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-head">
            <span className="kpi-label">CA ventes total</span>
            <div className="kpi-icon"><Icon name="cart" size={18} color="var(--color-orange)" /></div>
          </div>
          <div className="kpi-value" style={{ fontSize: 22 }}>{formatFcfa(totalVentes)}</div>
          <div className="kpi-evolution kpi-evolution--up">cumul</div>
        </div>
      </div>

      <div className="admin-page-bar">
        <h2>{produits.length} produits dans le catalogue</h2>
        <button onClick={openNew} className="btn-admin btn-admin-orange">
          <Icon name="plus" size={14} /> Nouveau produit
        </button>
      </div>

      <DataTable
        columns={columns}
        data={produits}
        searchKey={['nom', 'cat']}
        actions={actions}
        pageSize={8}
      />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing?.id ? 'Modifier le produit' : 'Nouveau produit'}
        footer={
          <>
            <button className="btn-admin btn-admin-ghost" onClick={() => setModalOpen(false)}>Annuler</button>
            <button className="btn-admin btn-admin-orange" onClick={save}>Enregistrer</button>
          </>
        }
      >
        {editing && (
          <form className="adm-form" onSubmit={save}>
            <div className="form-group">
              <label className="form-label">Nom du produit</label>
              <input className="form-control" value={editing.nom} onChange={e => setEditing({ ...editing, nom: e.target.value })} required />
            </div>

            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Catégorie</label>
                <select className="form-control" value={editing.cat} onChange={e => setEditing({ ...editing, cat: e.target.value })}>
                  <option>Salon</option>
                  <option>Chambre</option>
                  <option>Bureau</option>
                  <option>Cuisine</option>
                  <option>Extérieur</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-control" value={editing.type} onChange={e => setEditing({ ...editing, type: e.target.value })}>
                  <option>Vente</option>
                  <option>Location</option>
                  <option>Sur mesure</option>
                  <option>Location/Vente</option>
                </select>
              </div>
            </div>

            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Prix unitaire (FCFA)</label>
                <input type="number" className="form-control" value={editing.prix} onChange={e => setEditing({ ...editing, prix: Number(e.target.value) })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Stock</label>
                <input type="number" className="form-control" value={editing.stock} onChange={e => setEditing({ ...editing, stock: Number(e.target.value) })} required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={3}></textarea>
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
        <p>Supprimer le produit <strong>{confirmDel?.nom}</strong> ?</p>
      </Modal>
    </div>
  )
}
