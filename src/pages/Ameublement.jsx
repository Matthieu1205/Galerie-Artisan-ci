import { useState, useMemo } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { FLYERS, PACK_SERIE, EVENEMENTS, SLOGANS } from '../data/flyers.js'

const CATEGORIES = [
  { id: 'all', label: 'Tous' },
  { id: 'salon', label: 'Salon' },
  { id: 'chambre', label: 'Chambre' },
  { id: 'bureau', label: 'Bureau' },
  { id: 'cuisine', label: 'Cuisine' },
  { id: 'exterieur', label: 'Extérieur' }
]

const PRODUITS = [
  { id: 1, nom: 'Canapé palette 2 places', cat: 'salon', prix: 185000, dim: '160 × 80 × 70 cm', stock: true, type: 'Vente', desc: 'Bois recyclé, coussins déhoussables.' },
  { id: 2, nom: 'Table basse design', cat: 'salon', prix: 95000, dim: '110 × 60 × 40 cm', stock: true, type: 'Vente', desc: 'Bois massif et finition vernie.' },
  { id: 3, nom: 'Lit double avec rangement', cat: 'chambre', prix: 320000, dim: '180 × 200 cm', stock: true, type: 'Vente', desc: 'Sommier inclus avec tiroirs latéraux.' },
  { id: 4, nom: 'Armoire dressing 3 portes', cat: 'chambre', prix: 280000, dim: '180 × 60 × 220 cm', stock: false, type: 'Sur mesure', desc: 'Sur mesure avec miroir intégré.' },
  { id: 5, nom: 'Bureau exécutif', cat: 'bureau', prix: 245000, dim: '160 × 80 × 75 cm', stock: true, type: 'Vente', desc: 'Tiroirs verrouillables, finition bois.' },
  { id: 6, nom: 'Chaise ergonomique', cat: 'bureau', prix: 89000, dim: '60 × 60 × 110 cm', stock: true, type: 'Vente', desc: 'Maille respirante, accoudoirs réglables.' },
  { id: 7, nom: 'Îlot de cuisine', cat: 'cuisine', prix: 450000, dim: '180 × 90 × 90 cm', stock: false, type: 'Sur mesure', desc: 'Marbre et bois sur mesure.' },
  { id: 8, nom: 'Tabourets de bar (x2)', cat: 'cuisine', prix: 75000, dim: '40 × 40 × 80 cm', stock: true, type: 'Vente', desc: 'Bois et métal, hauteur ajustable.' },
  { id: 9, nom: 'Salon de jardin palette', cat: 'exterieur', prix: 380000, dim: 'Ensemble 4 pièces', stock: true, type: 'Location/Vente', desc: 'Bois traité, coussins outdoor.' },
  { id: 10, nom: 'Table extérieure 6 places', cat: 'exterieur', prix: 220000, dim: '180 × 90 × 75 cm', stock: true, type: 'Vente', desc: 'Bois résistant aux intempéries.' },
  { id: 11, nom: 'Lit simple enfant', cat: 'chambre', prix: 145000, dim: '90 × 190 cm', stock: true, type: 'Vente', desc: 'Bois massif, design coloré.' },
  { id: 12, nom: 'Étagère murale', cat: 'salon', prix: 65000, dim: '120 × 25 × 30 cm', stock: true, type: 'Vente', desc: '4 niveaux, fixation murale.' }
]

const formatFcfa = n => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'

export default function Ameublement() {
  const [cat, setCat] = useState('all')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const items = useMemo(() => {
    return cat === 'all' ? PRODUITS : PRODUITS.filter(p => p.cat === cat)
  }, [cat])

  const ajouter = (produit) => {
    setCart(c => {
      const exist = c.find(i => i.id === produit.id)
      if (exist) return c.map(i => i.id === produit.id ? { ...i, qty: i.qty + 1 } : i)
      return [...c, { ...produit, qty: 1 }]
    })
    setCartOpen(true)
  }

  const retirer = (id) => setCart(c => c.filter(i => i.id !== id))

  const modifier = (id, delta) => {
    setCart(c => c.map(i => {
      if (i.id !== id) return i
      const newQty = i.qty + delta
      return newQty <= 0 ? null : { ...i, qty: newQty }
    }).filter(Boolean))
  }

  const total = cart.reduce((s, i) => s + i.prix * i.qty, 0)
  const totalItems = cart.reduce((s, i) => s + i.qty, 0)

  return (
    <>
      <PageHero
        breadcrumb={['Accueil', 'Ameublement']}
        tag="Ameublement"
        title="Le confort au naturel"
        subtitle="Vente, location et fabrication sur mesure de meubles. Bois recyclé, design contemporain et confort optimal pour tous vos espaces."
      />

      {/* Services ameublement */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid grid-4 am-services">
            <div className="am-service">
              <Icon name="cart" size={24} color="var(--color-orange)" />
              <h3>Vente de meubles</h3>
              <p>Catalogue complet, livraison à domicile.</p>
            </div>
            <div className="am-service">
              <Icon name="clock" size={24} color="var(--color-orange)" />
              <h3>Location événementielle</h3>
              <p>Mariages, anniversaires, réceptions privées.</p>
            </div>
            <div className="am-service">
              <Icon name="tools" size={24} color="var(--color-orange)" />
              <h3>Fabrication sur mesure</h3>
              <p>Sur cahier des charges, par nos artisans.</p>
            </div>
            <div className="am-service">
              <Icon name="home" size={24} color="var(--color-orange)" />
              <h3>Ameublement intérieur</h3>
              <p>Conseils déco et installation complète.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique */}
      <section className="bg-gray">
        <div className="container">
          <div className="boutique-header">
            <div>
              <span className="section-tag">Boutique</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 4 }}>
                Notre catalogue
              </h2>
              <p style={{ color: 'var(--color-gray-500)', fontSize: 16 }}>
                Découvrez notre sélection de meubles design et durables.
              </p>
            </div>
            <button
              className="cart-toggle"
              onClick={() => setCartOpen(true)}
              aria-label="Voir le panier"
            >
              <Icon name="cart" size={22} color="var(--color-black)" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
          </div>

          {/* Catégories */}
          <div className="cat-tabs">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`cat-tab ${cat === c.id ? 'cat-tab--active' : ''}`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Produits */}
          <div className="grid grid-4 produits-grid">
            {items.map(p => (
              <article key={p.id} className="produit-card">
                <div className={`produit-image produit-image-${p.cat}`}>
                  <span className="produit-type">{p.type}</span>
                  {!p.stock && <span className="produit-stock">Sur commande</span>}
                  <div className="produit-img-bg">
                    <Icon name={p.cat === 'bureau' ? 'document' : p.cat === 'cuisine' ? 'home' : 'sofa'} size={64} color="rgba(255,255,255,0.3)" />
                  </div>
                </div>
                <div className="produit-body">
                  <h3>{p.nom}</h3>
                  <p className="produit-desc">{p.desc}</p>
                  <div className="produit-meta">
                    <Icon name="ruler" size={12} color="var(--color-gray-400)" />
                    <span>{p.dim}</span>
                  </div>
                  <div className="produit-footer">
                    <div className="produit-prix">{formatFcfa(p.prix)}</div>
                    <button
                      onClick={() => ajouter(p)}
                      className="produit-add"
                      aria-label={`Ajouter ${p.nom} au panier`}
                    >
                      <Icon name="cart" size={16} color="white" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Canapé palette - produit phare (flyers canape-palette-confort et 2places) */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Produit phare</span>
            <h2 className="section-title">Canapé 2 places en palette</h2>
            <p className="section-subtitle">
              "{SLOGANS.ameublement}" — Adoptez un canapé en bois recyclé,
              respectueux de l'environnement et ultra stylé.
            </p>
          </div>

          <div className="canape-grid">
            <div className="canape-image">
              <img src={FLYERS.canapePalette2Places} alt="Canapé 2 places en palette - Alliez style, confort et originalité" />
            </div>
            <div className="canape-image canape-image-secondary">
              <img src={FLYERS.canapePaletteConfort} alt="Canapé palette - Le confort au naturel" />
            </div>
            <div className="canape-content">
              <h3>Alliez style, confort et originalité</h3>
              <ul className="canape-features">
                <li><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Design moderne & écologique</li>
                <li><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Bois recyclé de qualité</li>
                <li><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Coussins ultra confort inclus</li>
                <li><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Idéal pour salon, terrasse ou jardin</li>
                <li><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Parfait pour une déco tendance</li>
              </ul>
              <p className="canape-tag">Fabrication sur mesure · Livraison rapide</p>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Commandez le vôtre
                <Icon name="arrow" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Offre Location événementielle (flyer location-meubles-palette) */}
      <section className="bg-gray">
        <div className="container">
          <div className="event-grid">
            <div>
              <span className="section-tag">Offre spéciale événement</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Location de meubles<br />en palette
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-gray-500)', lineHeight: 1.7, marginBottom: 24 }}>
                Pour vos événements, donnez du caractère à votre lieu avec notre mobilier
                en bois recyclé. Confort optimal et design tendance.
              </p>

              <div className="event-types">
                {EVENEMENTS.map((e, i) => (
                  <div key={i} className="event-tag">
                    <Icon name="check" size={14} color="var(--color-orange)" strokeWidth={3} />
                    {e}
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-lg" style={{ marginTop: 32 }}>
                Demander un devis location
                <Icon name="arrow" size={18} />
              </button>
            </div>

            <div className="event-image">
              <img src={FLYERS.locationMeublesPalette} alt="Location de meubles en palette pour vos événements" />
            </div>
          </div>
        </div>
      </section>

      {/* Pack Ameublement en Série (flyer pack-ameublement-serie) */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Solution promoteurs & investisseurs</span>
            <h2 className="section-title">Pack Ameublement en Série</h2>
            <p className="section-subtitle">
              La solution clé en main pour équiper plusieurs logements avec style,
              rapidement et à moindre coût.
            </p>
          </div>

          <div className="serie-grid">
            <div className="serie-image">
              <img src={FLYERS.packAmeublementSerie} alt="Pack Ameublement en Série - GALERIE-ARTISAN.CI" />
            </div>
            <div className="serie-content">
              <h3 className="serie-h3">Contenu du pack</h3>
              <div className="serie-pieces">
                {PACK_SERIE.contenu.map((p, i) => (
                  <div key={i} className="serie-piece">
                    <div className="serie-piece-head">
                      <Icon name="sofa" size={18} color="var(--color-orange)" />
                      <strong>{p.piece}</strong>
                    </div>
                    <ul>
                      {p.items.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="serie-options">
                <strong>Options premium :</strong>
                <div className="serie-options-list">
                  {PACK_SERIE.optionsPremium.map((o, i) => (
                    <span key={i} className="serie-option-pill">{o}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="serie-cibles">
            <strong>Conçu pour :</strong>
            <div className="serie-cibles-list">
              {PACK_SERIE.cibles.map((c, i) => (
                <div key={i} className="serie-cible">
                  <Icon name="building" size={18} color="var(--color-orange)" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sur mesure */}
      <section className="bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Sur mesure</span>
            <h2 className="section-title">Fabrication artisanale</h2>
            <p className="section-subtitle">
              Atelier d'artisans : menuiserie, ébénisterie, tapisserie, ferronnerie,
              vernissage. Chaque pièce est unique.
            </p>
          </div>

          <div className="grid grid-3 metiers-grid">
            {[
              { title: 'Menuiserie', desc: 'Mobilier en bois massif, sur plan' },
              { title: 'Ébénisterie', desc: 'Pièces nobles et finitions haut de gamme' },
              { title: 'Tapisserie', desc: 'Garnissage et habillage de sièges' },
              { title: 'Ferronnerie', desc: 'Mobilier métallique et structures' },
              { title: 'Vernissage', desc: 'Finitions, protection et entretien du bois' },
              { title: 'Peinture mobilier', desc: 'Personnalisation et rénovation' }
            ].map((m, i) => (
              <div key={i} className="metier-card">
                <div className="metier-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <button className="btn btn-dark btn-lg">
              Demander un devis sur mesure
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Panneau panier */}
      {cartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setCartOpen(false)} />
          <aside className="cart-panel">
            <div className="cart-head">
              <h3>Mon panier {totalItems > 0 && <span>({totalItems})</span>}</h3>
              <button
                className="cart-close"
                onClick={() => setCartOpen(false)}
                aria-label="Fermer le panier"
              >
                <Icon name="plus" size={20} color="var(--color-black)" />
              </button>
            </div>

            <div className="cart-body">
              {cart.length === 0 ? (
                <div className="cart-empty">
                  <Icon name="cart" size={48} color="var(--color-gray-300)" />
                  <p>Votre panier est vide.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className={`cart-item-img produit-image-${item.cat}`}>
                      <Icon name="sofa" size={28} color="rgba(255,255,255,0.5)" />
                    </div>
                    <div className="cart-item-info">
                      <h4>{item.nom}</h4>
                      <span>{formatFcfa(item.prix)}</span>
                      <div className="cart-qty">
                        <button onClick={() => modifier(item.id, -1)}>
                          <Icon name="minus" size={12} color="var(--color-black)" />
                        </button>
                        <span>{item.qty}</span>
                        <button onClick={() => modifier(item.id, 1)}>
                          <Icon name="plus" size={12} color="var(--color-black)" />
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-remove"
                      onClick={() => retirer(item.id)}
                      aria-label={`Retirer ${item.nom}`}
                    >
                      <Icon name="plus" size={14} color="var(--color-gray-400)" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-foot">
                <div className="cart-total">
                  <span>Total</span>
                  <strong>{formatFcfa(total)}</strong>
                </div>
                <p className="cart-payment">
                  Paiement à la livraison · Orange Money · MTN Money · Wave
                </p>
                <button className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Passer la commande
                </button>
              </div>
            )}
          </aside>
        </>
      )}

      <style>{`
        .am-services {
          gap: 20px;
        }

        .am-service {
          padding: 28px 24px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
        }

        .am-service svg { margin-bottom: 16px; }

        .am-service h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 6px;
        }

        .am-service p {
          font-size: 13px;
          color: var(--color-gray-500);
        }

        /* Boutique */
        .boutique-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
        }

        .cart-toggle {
          position: relative;
          width: 52px;
          height: 52px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition);
        }

        .cart-toggle:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 22px;
          height: 22px;
          background: var(--color-orange);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 800;
          border: 2px solid white;
        }

        .cat-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 32px;
          scrollbar-width: none;
        }

        .cat-tabs::-webkit-scrollbar { display: none; }

        .cat-tab {
          padding: 10px 20px;
          background: white;
          color: var(--color-gray-600);
          border-radius: var(--radius-full);
          font-size: 14px;
          font-weight: 600;
          transition: all var(--transition);
          white-space: nowrap;
        }

        .cat-tab--active {
          background: var(--color-black);
          color: white;
        }

        .cat-tab:hover:not(.cat-tab--active) {
          background: var(--color-gray-100);
        }

        /* Produits */
        .produits-grid {
          gap: 20px;
        }

        .produit-card {
          background: white;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition);
          border: 1px solid var(--color-gray-100);
        }

        .produit-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .produit-image {
          aspect-ratio: 4 / 3;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .produit-image-salon { background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%); }
        .produit-image-chambre { background: linear-gradient(135deg, #404040 0%, #1a1a1a 100%); }
        .produit-image-bureau { background: linear-gradient(135deg, #525252 0%, #262626 100%); }
        .produit-image-cuisine { background: linear-gradient(135deg, #737373 0%, #404040 100%); }
        .produit-image-exterieur { background: linear-gradient(135deg, var(--color-orange-light) 0%, var(--color-orange) 100%); }

        .produit-type {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 10px;
          background: var(--color-black);
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
        }

        .produit-stock {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 4px 10px;
          background: white;
          color: var(--color-black);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
        }

        .produit-body {
          padding: 20px;
        }

        .produit-body h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 4px;
          min-height: 40px;
        }

        .produit-desc {
          font-size: 12px;
          color: var(--color-gray-500);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .produit-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: var(--color-gray-400);
          padding: 8px 0;
          border-top: 1px solid var(--color-gray-100);
          border-bottom: 1px solid var(--color-gray-100);
          margin-bottom: 12px;
        }

        .produit-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .produit-prix {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-orange);
        }

        .produit-add {
          padding: 8px 14px;
          background: var(--color-black);
          color: white;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition);
        }

        .produit-add:hover {
          background: var(--color-orange);
        }

        /* Event */
        .event-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .event-types {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .event-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-black);
        }

        .event-image {
          aspect-ratio: 3 / 4;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .event-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Canapé section */
        .canape-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr;
          grid-template-rows: 1fr 1fr;
          gap: 16px;
          height: 540px;
        }

        .canape-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          grid-row: 1 / 3;
        }

        .canape-image-secondary {
          grid-row: 1 / 3;
          grid-column: 2;
        }

        .canape-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .canape-content {
          background: var(--color-black);
          color: white;
          padding: 32px;
          border-radius: var(--radius-xl);
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .canape-content h3 {
          font-size: 22px;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
        }

        .canape-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .canape-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--color-gray-300);
        }

        .canape-tag {
          padding: 10px 14px;
          background: rgba(255, 106, 0, 0.15);
          color: var(--color-orange);
          font-size: 12px;
          font-weight: 600;
          border-radius: var(--radius-full);
          text-align: center;
          margin-bottom: 16px;
        }

        /* Pack Ameublement Série */
        .serie-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: start;
          margin-bottom: 48px;
        }

        .serie-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4 / 3;
          position: sticky;
          top: 100px;
        }

        .serie-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .serie-h3 {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 20px;
        }

        .serie-pieces {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .serie-piece {
          padding: 20px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
        }

        .serie-piece-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .serie-piece-head strong {
          font-size: 15px;
          color: var(--color-black);
          font-weight: 700;
        }

        .serie-piece ul {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .serie-piece li {
          font-size: 13px;
          color: var(--color-gray-600);
          padding-left: 16px;
          position: relative;
        }

        .serie-piece li::before {
          content: '•';
          position: absolute;
          left: 4px;
          color: var(--color-orange);
          font-weight: 800;
        }

        .serie-options {
          padding: 20px;
          background: var(--color-black);
          color: white;
          border-radius: var(--radius-md);
        }

        .serie-options strong {
          display: block;
          font-size: 11px;
          color: var(--color-orange);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .serie-options-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .serie-option-pill {
          padding: 6px 14px;
          background: var(--color-gray-700);
          color: white;
          font-size: 12px;
          font-weight: 600;
          border-radius: var(--radius-full);
        }

        .serie-cibles {
          background: var(--color-gray-50);
          padding: 32px;
          border-radius: var(--radius-xl);
          text-align: center;
        }

        .serie-cibles strong {
          display: block;
          font-size: 11px;
          color: var(--color-gray-500);
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .serie-cibles-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .serie-cible {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: white;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-black);
        }

        /* Métiers */
        .metiers-grid { gap: 20px; }

        .metier-card {
          padding: 32px 28px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          transition: all var(--transition);
        }

        .metier-card:hover {
          border-color: var(--color-orange);
          transform: translateY(-4px);
        }

        .metier-num {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-orange);
          letter-spacing: -0.03em;
          margin-bottom: 12px;
          line-height: 1;
        }

        .metier-card h3 {
          font-size: 19px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .metier-card p {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* Cart panel */
        .cart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.5);
          backdrop-filter: blur(4px);
          z-index: 199;
          animation: fadeIn 0.2s;
        }

        .cart-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 440px;
          max-width: 100vw;
          background: white;
          z-index: 200;
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 32px rgba(0,0,0,0.15);
          animation: slideInRight 0.3s;
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .cart-head {
          padding: 24px 28px;
          border-bottom: 1px solid var(--color-gray-100);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cart-head h3 {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-black);
        }

        .cart-head h3 span {
          color: var(--color-orange);
        }

        .cart-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
        }

        .cart-body {
          flex: 1;
          overflow-y: auto;
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cart-empty {
          text-align: center;
          padding: 80px 24px;
          color: var(--color-gray-400);
        }

        .cart-empty p {
          margin-top: 16px;
          font-size: 15px;
        }

        .cart-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          position: relative;
        }

        .cart-item-img {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cart-item-info {
          flex: 1;
        }

        .cart-item-info h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 4px;
        }

        .cart-item-info > span {
          font-size: 13px;
          color: var(--color-orange);
          font-weight: 700;
        }

        .cart-qty {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          background: white;
          border-radius: var(--radius-full);
          padding: 4px;
        }

        .cart-qty button {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--color-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-qty span {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-black);
          min-width: 20px;
          text-align: center;
        }

        .cart-remove {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
        }

        .cart-foot {
          padding: 24px 28px;
          border-top: 1px solid var(--color-gray-100);
          background: var(--color-gray-50);
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .cart-total span {
          font-size: 14px;
          color: var(--color-gray-500);
        }

        .cart-total strong {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-orange);
        }

        .cart-payment {
          font-size: 11px;
          color: var(--color-gray-500);
          text-align: center;
          margin-bottom: 16px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 1024px) {
          .event-grid { grid-template-columns: 1fr; gap: 40px; }
          .canape-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto;
            height: auto;
          }
          .canape-image { grid-row: 1; aspect-ratio: 4 / 3; }
          .canape-image-secondary { grid-row: 1; grid-column: 2; aspect-ratio: 4 / 3; }
          .canape-content { grid-row: 2; grid-column: 1 / -1; }
          .serie-grid { grid-template-columns: 1fr; gap: 32px; }
          .serie-image { position: static; max-width: 480px; margin: 0 auto; }
          .event-image { max-width: 480px; margin: 0 auto; }
        }

        @media (max-width: 640px) {
          .boutique-header { flex-direction: column; gap: 16px; align-items: flex-start; }
          .cart-panel { width: 100vw; }
          .canape-grid { grid-template-columns: 1fr; }
          .canape-image-secondary { grid-column: 1; }
          .serie-pieces { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
