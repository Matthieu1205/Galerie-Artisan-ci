import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { FLYERS, SLOGANS } from '../data/flyers.js'
import SEO from '../components/SEO.jsx'

const SERVICES = [
  { icon: 'truck', title: 'Déménagement local & national', desc: 'Emballage sécurisé de vos biens. Transport rapide et fiable. Chargement et déchargement professionnels.' },
  { icon: 'tools', title: 'Installation complète', desc: 'Montage et démontage de meubles. Installation électroménager. Mise en place bureaux, maisons et commerces.' },
  { icon: 'home', title: 'Aménagement après déménagement', desc: 'Organisation des espaces. Optimisation du rangement. Installation décorative finale.' },
  { icon: 'shield', title: 'Sécurité & protection', desc: 'Matériel d\'emballage professionnel. Équipe qualifiée et ponctuelle. Tarifs adaptés à votre budget.' }
]

const FORMULES = [
  { nom: 'Pack Économique', desc: 'Transport simple + manutention', features: ['Camion équipé', 'Équipe de 2 manutentionnaires', 'Trajet inclus', 'Devis sous 24h'] },
  { nom: 'Pack Confort', desc: 'Transport + emballage + installation', features: ['Pack Économique', 'Emballage professionnel', 'Démontage & remontage', 'Protection du mobilier'], populaire: true },
  { nom: 'Pack Premium', desc: 'Service complet + aménagement + installation totale', features: ['Pack Confort', 'Aménagement post-déménagement', 'Nettoyage final', 'Garantie casse incluse'] }
]

export default function Demenagement() {
  const [volume, setVolume] = useState(20)
  const [distance, setDistance] = useState(15)
  const [formule, setFormule] = useState('Confort')

  const baseTarif = { Économique: 8000, Confort: 12000, Premium: 18000 }
  const estimation = Math.round(volume * baseTarif[formule] + distance * 2500)

  const formatFcfa = n => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'

  return (
    <>
      <SEO
        title="Déménagement Abidjan et Côte d'Ivoire"
        description="Service de déménagement professionnel à Abidjan et dans toute la Côte d'Ivoire. Emballage, transport, installation. Tarifs adaptés à votre budget. GALERIE-ARTISAN.CI."
        keywords="déménagement Abidjan, déménagement Côte d'Ivoire, transport meubles Abidjan, installation appartement, déménagement professionnel"
        path="/demenagement"
      />
      <PageHero
        breadcrumb={['Accueil', 'Déménagement']}
        tag="Déménagement"
        title="Changez d'espace en toute sérénité"
        subtitle="Du transport à l'installation, nous nous occupons de tout. Une équipe qualifiée, du matériel professionnel et des délais respectés."
      />

      {/* Bannière flyer Pack Déménagement */}
      <section className="demo-banner" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="demo-banner-grid">
            <div className="demo-banner-img">
              <img src={FLYERS.packDemenagement} alt="Pack Installation et Déménagement - GALERIE-ARTISAN.CI" />
            </div>
            <div className="demo-banner-content">
              <span className="section-tag">Offre signature</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 12 }}>
                Pack Installation<br />& Déménagement
              </h2>
              <p className="demo-banner-slogan">"{SLOGANS.demenagement}"</p>
              <p style={{ fontSize: 16, color: 'var(--color-gray-500)', lineHeight: 1.7 }}>
                Une équipe qualifiée et ponctuelle. Du matériel d'emballage professionnel.
                Des tarifs adaptés à votre budget. Intervention rapide partout en Côte d'Ivoire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos services</span>
            <h2 className="section-title">Pack Installation & Déménagement</h2>
          </div>

          <div className="grid grid-2 demo-services">
            {SERVICES.map((s, i) => (
              <div key={i} className="demo-service">
                <div className="ds-icon">
                  <Icon name={s.icon} size={28} color="white" />
                </div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculateur estimation */}
      <section className="bg-gray">
        <div className="container">
          <div className="calc-grid">
            <div>
              <span className="section-tag">Estimation rapide</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Estimez le coût de votre déménagement
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 32px' }}>
                Une estimation indicative en moins d'une minute. Pour un devis exact,
                contactez notre équipe.
              </p>

              <div className="calc-points">
                <div><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Calcul instantané</div>
                <div><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Sans engagement</div>
                <div><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Devis détaillé sur demande</div>
              </div>
            </div>

            <div className="calc-box">
              <h3 className="calc-title">Calculateur</h3>

              <div className="calc-field">
                <div className="calc-label">
                  <span>Volume estimé</span>
                  <strong>{volume} m³</strong>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={volume}
                  onChange={e => setVolume(Number(e.target.value))}
                  className="range"
                />
                <div className="calc-range-labels">
                  <span>Studio (5m³)</span>
                  <span>Villa (100m³)</span>
                </div>
              </div>

              <div className="calc-field">
                <div className="calc-label">
                  <span>Distance</span>
                  <strong>{distance} km</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="200"
                  value={distance}
                  onChange={e => setDistance(Number(e.target.value))}
                  className="range"
                />
                <div className="calc-range-labels">
                  <span>Local</span>
                  <span>National</span>
                </div>
              </div>

              <div className="calc-field">
                <div className="calc-label">
                  <span>Formule</span>
                </div>
                <div className="calc-formules">
                  {['Économique', 'Confort', 'Premium'].map(f => (
                    <button
                      key={f}
                      onClick={() => setFormule(f)}
                      className={`calc-formule-btn ${formule === f ? 'active' : ''}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div className="calc-result">
                <div>
                  <span className="calc-result-label">Estimation</span>
                  <strong className="calc-result-value">{formatFcfa(estimation)}</strong>
                </div>
                <button className="btn btn-primary">
                  Obtenir un devis exact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formules */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos formules</span>
            <h2 className="section-title">Choisissez votre pack</h2>
            <p className="section-subtitle">
              "On transporte, on installe, vous profitez."
            </p>
          </div>

          <div className="grid grid-3 demo-formules">
            {FORMULES.map((f, i) => (
              <div key={i} className={`demo-formule ${f.populaire ? 'demo-formule--pop' : ''}`}>
                {f.populaire && <span className="demo-formule-badge">Populaire</span>}
                <h3>{f.nom}</h3>
                <p className="demo-formule-desc">{f.desc}</p>
                <ul>
                  {f.features.map((feat, k) => (
                    <li key={k}>
                      <Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`btn ${f.populaire ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                  Réserver ce pack
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation rapide */}
      <section className="bg-gray">
        <div className="container">
          <div className="resa-grid">
            <div>
              <span className="section-tag">Réservation</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Réservez votre déménagement en ligne
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 24px' }}>
                Choisissez votre date et recevez une confirmation par email, SMS et WhatsApp.
              </p>

              <div className="resa-steps">
                {['Remplir le formulaire', 'Validation du devis', 'Confirmation de la date', 'Jour J : déménagement'].map((step, i) => (
                  <div key={i} className="resa-step">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <form className="resa-form" onSubmit={e => { e.preventDefault(); alert('Réservation prise en compte. Confirmation par email et WhatsApp.') }}>
              <h3 className="resa-form-title">Formulaire de réservation</h3>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Nom</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone</label>
                  <input className="form-control" type="tel" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" required />
              </div>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Adresse de départ</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Adresse d'arrivée</label>
                  <input className="form-control" type="text" required />
                </div>
              </div>
              <div className="grid grid-2">
                <div className="form-group">
                  <label className="form-label">Date souhaitée</label>
                  <input className="form-control" type="date" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Pack</label>
                  <select className="form-control" required>
                    <option>Économique</option>
                    <option>Confort</option>
                    <option>Premium</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                Confirmer ma réservation
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .demo-services {
          gap: 24px;
        }

        .demo-service {
          background: white;
          padding: 32px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: all var(--transition);
        }

        .demo-service:hover {
          border-color: var(--color-orange);
          transform: translateY(-2px);
        }

        .ds-icon {
          width: 60px;
          height: 60px;
          background: var(--color-black);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .demo-service:hover .ds-icon {
          background: var(--color-orange);
        }

        .demo-service h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .demo-service p {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* Calculateur */
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 64px;
          align-items: center;
        }

        .calc-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calc-points > div {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--color-gray-700);
          font-weight: 500;
        }

        .calc-box {
          background: white;
          padding: 40px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
        }

        .calc-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .calc-field {
          margin-bottom: 24px;
        }

        .calc-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .calc-label span {
          font-size: 13px;
          color: var(--color-gray-500);
          font-weight: 500;
        }

        .calc-label strong {
          font-size: 18px;
          color: var(--color-orange);
          font-weight: 800;
        }

        .range {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: var(--color-gray-100);
          appearance: none;
          outline: none;
        }

        .range::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-orange);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(255, 106, 0, 0.4);
        }

        .range::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--color-orange);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(255, 106, 0, 0.4);
        }

        .calc-range-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 11px;
          color: var(--color-gray-400);
        }

        .calc-formules {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .calc-formule-btn {
          padding: 12px;
          background: var(--color-gray-50);
          color: var(--color-gray-600);
          border-radius: var(--radius-md);
          font-size: 13px;
          font-weight: 600;
          transition: all var(--transition);
          border: 2px solid transparent;
        }

        .calc-formule-btn.active {
          background: var(--color-black);
          color: white;
          border-color: var(--color-orange);
        }

        .calc-result {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--color-gray-100);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .calc-result-label {
          display: block;
          font-size: 11px;
          color: var(--color-gray-400);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .calc-result-value {
          font-size: 26px;
          font-weight: 800;
          color: var(--color-orange);
          letter-spacing: -0.02em;
        }

        /* Formules */
        .demo-formule {
          padding: 40px 32px;
          background: white;
          border-radius: var(--radius-xl);
          border: 2px solid var(--color-gray-100);
          position: relative;
        }

        .demo-formule--pop {
          border-color: var(--color-orange);
          background: var(--color-black);
          color: white;
        }

        .demo-formule--pop h3,
        .demo-formule--pop .demo-formule-desc {
          color: white;
        }

        .demo-formule--pop li {
          color: var(--color-gray-300);
        }

        .demo-formule-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 16px;
          background: var(--color-orange);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
        }

        .demo-formule h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .demo-formule-desc {
          font-size: 14px;
          color: var(--color-gray-500);
          margin-bottom: 24px;
        }

        .demo-formule ul {
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .demo-formule li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--color-gray-700);
        }

        /* Réservation */
        .resa-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }

        .resa-steps {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .resa-step {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: white;
          border-radius: var(--radius-md);
          transition: all var(--transition);
        }

        .resa-step:hover {
          transform: translateX(4px);
        }

        .resa-step span {
          font-size: 18px;
          font-weight: 800;
          color: var(--color-orange);
          letter-spacing: 0.05em;
          min-width: 36px;
        }

        .resa-step p {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-black);
        }

        .resa-form {
          background: white;
          padding: 40px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
        }

        .resa-form-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-gray-100);
        }

        /* Banner */
        .demo-banner-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
          padding-top: 24px;
        }

        .demo-banner-img {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4 / 3;
        }

        .demo-banner-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .demo-banner-slogan {
          font-size: 18px;
          color: var(--color-orange);
          font-weight: 700;
          font-style: italic;
          margin: 12px 0 16px;
        }

        @media (max-width: 1024px) {
          .calc-grid, .resa-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .demo-banner-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .demo-banner-img { max-width: 480px; margin: 0 auto; }
        }

        @media (max-width: 640px) {
          .calc-box, .resa-form { padding: 24px; }
          .demo-service { flex-direction: column; }
        }
      `}</style>
    </>
  )
}
