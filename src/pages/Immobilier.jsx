import { useState, useMemo } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import SEO from '../components/SEO.jsx'

const BIENS = [
  { id: 1, titre: 'Villa moderne 5 pièces', type: 'Vente', categorie: 'Maison', prix: 85000000, ville: 'Abidjan', quartier: 'Cocody', surface: 280, statut: 'Disponible', chambres: 4 },
  { id: 2, titre: 'Appartement haut standing', type: 'Location', categorie: 'Appartement', prix: 450000, ville: 'Abidjan', quartier: 'Plateau', surface: 110, statut: 'Disponible', chambres: 3 },
  { id: 3, titre: 'Terrain résidentiel 600 m²', type: 'Vente', categorie: 'Terrain', prix: 18000000, ville: 'Bingerville', quartier: 'Cité ADO', surface: 600, statut: 'Disponible', chambres: 0 },
  { id: 4, titre: 'Duplex avec piscine', type: 'Vente', categorie: 'Maison', prix: 145000000, ville: 'Abidjan', quartier: 'Riviera', surface: 350, statut: 'Réservé', chambres: 5 },
  { id: 5, titre: 'Studio meublé', type: 'Location', categorie: 'Appartement', prix: 180000, ville: 'Abidjan', quartier: 'Marcory', surface: 38, statut: 'Disponible', chambres: 1 },
  { id: 6, titre: 'Maison familiale rénovée', type: 'Vente', categorie: 'Maison', prix: 62000000, ville: 'Grand Bassam', quartier: 'Modeste', surface: 220, statut: 'Disponible', chambres: 4 },
  { id: 7, titre: 'Terrain commercial 1000 m²', type: 'Vente', categorie: 'Terrain', prix: 45000000, ville: 'Abidjan', quartier: 'Yopougon', surface: 1000, statut: 'Disponible', chambres: 0 },
  { id: 8, titre: 'Appartement 3 pièces neuf', type: 'Location', categorie: 'Appartement', prix: 350000, ville: 'Abidjan', quartier: 'Cocody', surface: 90, statut: 'Disponible', chambres: 2 }
]

const TYPES = ['Tous', 'Vente', 'Location']
const CATEGORIES = ['Tous', 'Maison', 'Appartement', 'Terrain']
const VILLES = ['Toutes', 'Abidjan', 'Grand Bassam', 'Bingerville']

function formatPrice(p) {
  return new Intl.NumberFormat('fr-FR').format(p) + ' FCFA'
}

export default function Immobilier() {
  const [type, setType] = useState('Tous')
  const [categorie, setCategorie] = useState('Tous')
  const [ville, setVille] = useState('Toutes')
  const [recherche, setRecherche] = useState('')
  const [showVisite, setShowVisite] = useState(null)

  const filtres = useMemo(() => {
    return BIENS.filter(b => {
      if (type !== 'Tous' && b.type !== type) return false
      if (categorie !== 'Tous' && b.categorie !== categorie) return false
      if (ville !== 'Toutes' && b.ville !== ville) return false
      if (recherche && !b.titre.toLowerCase().includes(recherche.toLowerCase()) &&
          !b.quartier.toLowerCase().includes(recherche.toLowerCase())) return false
      return true
    })
  }, [type, categorie, ville, recherche])

  return (
    <>
      <SEO
        title="Immobilier — Vente, Location, Terrain à Abidjan"
        description="Achetez ou louez votre bien immobilier à Abidjan et en Côte d'Ivoire. Villas, appartements, terrains à Cocody, Plateau, Marcory, Bingerville. GALERIE-ARTISAN.CI."
        keywords="immobilier Abidjan, vente maison Abidjan, location appartement Abidjan, terrain Côte d'Ivoire, villa Cocody, appartement Plateau"
        path="/immobilier"
      />
      <PageHero
        breadcrumb={['Accueil', 'Immobilier']}
        tag="Immobilier"
        title="Trouvez votre prochain bien"
        subtitle="Vente, location et gestion immobilière à Abidjan et en Côte d'Ivoire. Un catalogue de biens vérifiés pour les particuliers, entreprises et investisseurs."
      />

      {/* Services immobiliers */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-4 imm-services">
            <div className="imm-service">
              <Icon name="key" size={28} color="var(--color-orange)" />
              <h3>Location</h3>
              <p>Maisons, appartements, studios meublés ou vides.</p>
            </div>
            <div className="imm-service">
              <Icon name="home" size={28} color="var(--color-orange)" />
              <h3>Vente de maisons</h3>
              <p>Villas, duplex et résidences clés en main.</p>
            </div>
            <div className="imm-service">
              <Icon name="ruler" size={28} color="var(--color-orange)" />
              <h3>Vente de terrains</h3>
              <p>Terrains nus, lotis, titrés et viabilisés.</p>
            </div>
            <div className="imm-service">
              <Icon name="shield" size={28} color="var(--color-orange)" />
              <h3>Gestion immobilière</h3>
              <p>Mandat de gestion et suivi locatif complet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="bg-gray">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 40 }}>
            <span className="section-tag">Catalogue</span>
            <h2 className="section-title">Nos biens disponibles</h2>
          </div>

          {/* Filtres */}
          <div className="filtres-bar">
            <div className="search-box">
              <Icon name="search" size={18} color="var(--color-gray-400)" />
              <input
                type="text"
                placeholder="Rechercher par titre ou quartier..."
                value={recherche}
                onChange={e => setRecherche(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label>Type</label>
              <select value={type} onChange={e => setType(e.target.value)}>
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Catégorie</label>
              <select value={categorie} onChange={e => setCategorie(e.target.value)}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Ville</label>
              <select value={ville} onChange={e => setVille(e.target.value)}>
                {VILLES.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>

            <div className="filter-result">
              <strong>{filtres.length}</strong> bien{filtres.length > 1 ? 's' : ''}
            </div>
          </div>

          {/* Grille des biens */}
          <div className="grid grid-3 biens-grid">
            {filtres.length === 0 ? (
              <div className="no-results">
                <Icon name="search" size={48} color="var(--color-gray-300)" />
                <p>Aucun bien ne correspond à vos critères.</p>
              </div>
            ) : filtres.map(bien => (
              <article key={bien.id} className="bien-card">
                <div className="bien-image" data-cat={bien.categorie}>
                  <span className={`bien-status bien-status--${bien.statut === 'Disponible' ? 'ok' : 'wait'}`}>
                    {bien.statut}
                  </span>
                  <span className="bien-type">{bien.type}</span>
                  <div className="bien-img-icon">
                    <Icon name={bien.categorie === 'Terrain' ? 'ruler' : bien.categorie === 'Maison' ? 'home' : 'building'} size={64} color="rgba(255,255,255,0.3)" />
                  </div>
                </div>
                <div className="bien-body">
                  <div className="bien-cat">{bien.categorie} · {bien.quartier}</div>
                  <h3 className="bien-titre">{bien.titre}</h3>
                  <div className="bien-meta">
                    <span><Icon name="pin" size={14} color="var(--color-gray-400)" /> {bien.ville}</span>
                    <span><Icon name="ruler" size={14} color="var(--color-gray-400)" /> {bien.surface} m²</span>
                    {bien.chambres > 0 && <span><Icon name="home" size={14} color="var(--color-gray-400)" /> {bien.chambres} ch.</span>}
                  </div>
                  <div className="bien-footer">
                    <div className="bien-prix">
                      {formatPrice(bien.prix)}
                      {bien.type === 'Location' && <span className="bien-prix-suffix">/mois</span>}
                    </div>
                    <button
                      className="bien-action"
                      onClick={() => setShowVisite(bien)}
                      disabled={bien.statut !== 'Disponible'}
                    >
                      Demander une visite
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Avantages</span>
            <h2 className="section-title">Pourquoi choisir GALERIE-ARTISAN.CI</h2>
          </div>

          <div className="grid grid-3 avantages-grid">
            {[
              { icon: 'shield', title: 'Biens vérifiés', desc: 'Tous nos biens sont contrôlés juridiquement et techniquement avant publication.' },
              { icon: 'users', title: 'Accompagnement', desc: 'Un conseiller dédié vous guide de la visite jusqu\'à la signature.' },
              { icon: 'globe', title: 'Diaspora-friendly', desc: 'Procédures à distance, visite virtuelle et signatures digitalisées pour la diaspora.' }
            ].map((a, i) => (
              <div key={i} className="avantage-card">
                <div className="avantage-icon">
                  <Icon name={a.icon} size={28} color="var(--color-orange)" />
                </div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Visite */}
      {showVisite && (
        <div className="modal-overlay" onClick={() => setShowVisite(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVisite(null)} aria-label="Fermer">
              <Icon name="plus" size={20} color="var(--color-black)" />
            </button>
            <h3>Demande de visite</h3>
            <p className="modal-bien">{showVisite.titre} — {showVisite.quartier}</p>
            <form className="visite-form" onSubmit={e => { e.preventDefault(); alert('Votre demande a été envoyée. Nous vous contacterons rapidement.'); setShowVisite(null) }}>
              <div className="form-group">
                <label className="form-label">Nom complet</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Téléphone</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Date souhaitée</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-control" placeholder="Précisions sur votre demande..."></textarea>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">Envoyer la demande</button>
                <a
                  href={`https://wa.me/2250758986069?text=Bonjour, je souhaite visiter le bien "${showVisite.titre}"`}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={16} /> WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .imm-services {
          margin-top: -40px;
          margin-bottom: 0;
        }

        .imm-service {
          padding: 32px 24px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          transition: all var(--transition);
        }

        .imm-service:hover {
          border-color: var(--color-orange);
          transform: translateY(-4px);
        }

        .imm-service h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-black);
          margin: 16px 0 8px;
        }

        .imm-service p {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* Filtres */
        .filtres-bar {
          background: white;
          padding: 20px;
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr auto;
          gap: 16px;
          margin-bottom: 32px;
          box-shadow: var(--shadow-sm);
          align-items: end;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-box svg {
          position: absolute;
          left: 16px;
          z-index: 1;
        }

        .search-box input {
          width: 100%;
          padding: 14px 14px 14px 44px;
          font-size: 14px;
          background: var(--color-gray-50);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          transition: all var(--transition);
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--color-orange);
          background: white;
        }

        .filter-group label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-gray-500);
          margin-bottom: 6px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .filter-group select {
          width: 100%;
          padding: 12px 14px;
          font-size: 14px;
          background: var(--color-gray-50);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          color: var(--color-black);
          cursor: pointer;
          transition: all var(--transition);
        }

        .filter-group select:focus {
          outline: none;
          border-color: var(--color-orange);
        }

        .filter-result {
          padding: 12px 20px;
          background: var(--color-black);
          color: white;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
        }

        .filter-result strong {
          color: var(--color-orange);
        }

        /* Biens */
        .bien-card {
          background: white;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition);
          border: 1px solid var(--color-gray-100);
        }

        .bien-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .bien-image {
          aspect-ratio: 16 / 10;
          position: relative;
          overflow: hidden;
          background: var(--color-black);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bien-image[data-cat="Maison"] {
          background: linear-gradient(135deg, #1a1a1a 0%, #404040 100%);
        }

        .bien-image[data-cat="Appartement"] {
          background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%);
        }

        .bien-image[data-cat="Terrain"] {
          background: linear-gradient(135deg, #525252 0%, #1a1a1a 100%);
        }

        .bien-img-icon {
          opacity: 0.6;
        }

        .bien-status {
          position: absolute;
          top: 14px;
          right: 14px;
          padding: 6px 12px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
        }

        .bien-status--ok {
          background: white;
          color: var(--color-black);
        }

        .bien-status--ok::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          background: var(--color-orange);
          border-radius: 50%;
          margin-right: 6px;
          vertical-align: middle;
        }

        .bien-status--wait {
          background: var(--color-black);
          color: var(--color-orange);
        }

        .bien-type {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 6px 12px;
          background: var(--color-orange);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
        }

        .bien-body {
          padding: 24px;
        }

        .bien-cat {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-gray-500);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .bien-titre {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-black);
          margin: 8px 0 16px;
        }

        .bien-meta {
          display: flex;
          gap: 16px;
          padding: 12px 0;
          border-top: 1px solid var(--color-gray-100);
          border-bottom: 1px solid var(--color-gray-100);
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .bien-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--color-gray-600);
        }

        .bien-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .bien-prix {
          font-size: 18px;
          font-weight: 800;
          color: var(--color-orange);
          letter-spacing: -0.02em;
        }

        .bien-prix-suffix {
          font-size: 12px;
          color: var(--color-gray-400);
          font-weight: 500;
        }

        .bien-action {
          padding: 10px 16px;
          background: var(--color-black);
          color: white;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 600;
          transition: all var(--transition);
        }

        .bien-action:hover:not(:disabled) {
          background: var(--color-orange);
        }

        .bien-action:disabled {
          background: var(--color-gray-200);
          color: var(--color-gray-400);
          cursor: not-allowed;
        }

        .no-results {
          grid-column: 1 / -1;
          padding: 64px 24px;
          text-align: center;
          color: var(--color-gray-400);
        }

        .no-results p {
          margin-top: 16px;
          font-size: 16px;
        }

        /* Avantages */
        .avantage-card {
          padding: 40px 32px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          text-align: center;
        }

        .avantage-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 20px;
          background: rgba(255, 106, 0, 0.08);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avantage-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 12px;
        }

        .avantage-card p {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s;
        }

        .modal {
          background: white;
          border-radius: var(--radius-xl);
          padding: 40px;
          max-width: 560px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: scaleIn 0.3s;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
        }

        .modal h3 {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .modal-bien {
          color: var(--color-orange);
          font-weight: 600;
          margin-bottom: 24px;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        @media (max-width: 1024px) {
          .filtres-bar {
            grid-template-columns: 1fr 1fr;
          }
          .search-box { grid-column: 1 / -1; }
          .filter-result { grid-column: 1 / -1; text-align: center; }
        }

        @media (max-width: 640px) {
          .filtres-bar { grid-template-columns: 1fr; }
          .modal { padding: 32px 24px; }
          .modal-actions { flex-direction: column; }
        }
      `}</style>
    </>
  )
}
