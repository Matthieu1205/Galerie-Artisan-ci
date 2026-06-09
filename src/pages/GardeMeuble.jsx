import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import SEO from '../components/SEO.jsx'

const TYPES = [
  { icon: 'warehouse', title: 'Stockage de meubles', desc: 'Espace dédié et propre pour vos meubles et objets de valeur.' },
  { icon: 'shield', title: 'Stockage sécurisé', desc: 'Surveillance 24/7, contrôle d\'accès et système anti-intrusion.' },
  { icon: 'clock', title: 'Longue durée', desc: 'Tarifs dégressifs à partir de 6 mois de stockage.' },
  { icon: 'key', title: 'Temporaire', desc: 'Solutions flexibles, à partir d\'une semaine.' }
]

const SECURITE = [
  { icon: 'shield', title: 'Surveillance vidéo', desc: 'Caméras 24h/24, 7j/7' },
  { icon: 'key', title: 'Accès sécurisé', desc: 'Badge personnel et codes d\'accès' },
  { icon: 'document', title: 'Assurance incluse', desc: 'Vos biens couverts pendant toute la durée' },
  { icon: 'users', title: 'Personnel dédié', desc: 'Équipe formée et présente sur site' }
]

export default function GardeMeuble() {
  const [m3, setM3] = useState(10)
  const [duree, setDuree] = useState(3)

  const tarif = m3 * 18000 * duree
  const formatFcfa = n => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'

  return (
    <>
      <SEO
        title="Garde-Meuble Abidjan — Stockage Sécurisé"
        description="Garde-meuble sécurisé à Abidjan. Stockage de meubles courte et longue durée, surveillance 24/7. Tarifs dégressifs à partir de 6 mois. GALERIE-ARTISAN.CI."
        keywords="garde-meuble Abidjan, stockage meubles Abidjan, self-stockage Côte d'Ivoire, stockage sécurisé Abidjan, entrepôt meubles"
        path="/garde-meuble"
      />
      <PageHero
        breadcrumb={['Accueil', 'Garde-Meuble']}
        tag="Garde-Meuble"
        title="Stockez vos biens en toute sécurité"
        subtitle="Des entrepôts modernes, surveillés et assurés pour le stockage de vos meubles et objets. Solutions courte ou longue durée."
      />

      {/* Types de stockage */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos solutions</span>
            <h2 className="section-title">Le stockage adapté à votre besoin</h2>
          </div>

          <div className="grid grid-4 gm-types">
            {TYPES.map((t, i) => (
              <div key={i} className="gm-type">
                <div className="gm-type-icon">
                  <Icon name={t.icon} size={28} color="var(--color-orange)" />
                </div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimateur volume + tarif */}
      <section className="bg-gray">
        <div className="container">
          <div className="gm-calc-grid">
            <div className="gm-calc-info">
              <span className="section-tag">Estimation</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Combien d'espace vous faut-il ?
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 32px' }}>
                Utilisez notre outil d'estimation pour évaluer le volume nécessaire
                et obtenir un tarif indicatif.
              </p>

              <div className="gm-references">
                <div className="gm-ref">
                  <span className="gm-ref-vol">5 m³</span>
                  <span>Studio</span>
                </div>
                <div className="gm-ref">
                  <span className="gm-ref-vol">15 m³</span>
                  <span>Appartement 2P</span>
                </div>
                <div className="gm-ref">
                  <span className="gm-ref-vol">30 m³</span>
                  <span>Appartement 4P</span>
                </div>
                <div className="gm-ref">
                  <span className="gm-ref-vol">50 m³</span>
                  <span>Maison</span>
                </div>
              </div>
            </div>

            <div className="gm-calc-box">
              <h3>Calculateur tarif</h3>

              <div className="calc-field">
                <div className="calc-label">
                  <span>Volume nécessaire</span>
                  <strong>{m3} m³</strong>
                </div>
                <input
                  type="range"
                  min="2"
                  max="80"
                  value={m3}
                  onChange={e => setM3(Number(e.target.value))}
                  className="range"
                />
              </div>

              <div className="calc-field">
                <div className="calc-label">
                  <span>Durée</span>
                  <strong>{duree} mois</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={duree}
                  onChange={e => setDuree(Number(e.target.value))}
                  className="range"
                />
              </div>

              <div className="gm-result">
                <div>
                  <span className="gm-result-label">Tarif estimé</span>
                  <strong>{formatFcfa(tarif)}</strong>
                </div>
                <button className="btn btn-primary">Réserver</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Sécurité maximale</span>
            <h2 className="section-title">Vos biens, notre priorité</h2>
            <p className="section-subtitle">
              Tous nos entrepôts disposent des dernières technologies de sécurité
              et d'un personnel formé.
            </p>
          </div>

          <div className="grid grid-4 gm-secu">
            {SECURITE.map((s, i) => (
              <div key={i} className="gm-secu-card">
                <div className="gm-secu-icon">
                  <Icon name={s.icon} size={28} color="white" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation entrepôt */}
      <section className="bg-gray">
        <div className="container">
          <div className="warehouse-grid">
            <div className="warehouse-visual">
              <div className="wv-main">
                <Icon name="warehouse" size={96} color="white" />
                <span>Entrepôt sécurisé</span>
              </div>
              <div className="wv-stat wv-stat-1">
                <strong>2500 m²</strong>
                <span>Surface totale</span>
              </div>
              <div className="wv-stat wv-stat-2">
                <strong>24/7</strong>
                <span>Surveillance</span>
              </div>
            </div>

            <div>
              <span className="section-tag">Nos entrepôts</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Des installations modernes et propres
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-gray-500)', lineHeight: 1.7, marginBottom: 24 }}>
                Nos entrepôts sont conçus pour offrir un environnement optimal au stockage
                de tous types de biens : meubles, électroménagers, archives, marchandises.
              </p>

              <ul className="warehouse-list">
                {[
                  'Boxes individuels et compartiments dédiés',
                  'Hygrométrie et température contrôlées',
                  'Accès simple pour camions et utilitaires',
                  'Aide à la manutention disponible',
                  'Inventaire numérique de vos biens',
                  'Devis sans engagement'
                ].map((item, i) => (
                  <li key={i}>
                    <Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>

              <button className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
                Visiter nos entrepôts
                <Icon name="arrow" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="gm-cta">
            <Icon name="warehouse" size={48} color="var(--color-orange)" />
            <h2 className="section-title" style={{ color: 'white', marginTop: 16 }}>
              Réservez votre espace dès maintenant
            </h2>
            <p style={{ color: 'var(--color-gray-300)', fontSize: 16, maxWidth: 540, margin: '0 auto 32px' }}>
              Premier mois offert sur tout engagement de 6 mois ou plus.
              Devis personnalisé en moins de 2 heures.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-lg">Demander un devis</button>
              <a
                href="https://wa.me/2250758986069"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-lg"
              >
                <Icon name="whatsapp" size={18} /> Contacter par WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .gm-types {
          gap: 20px;
        }

        .gm-type {
          padding: 32px 24px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          text-align: center;
          transition: all var(--transition);
        }

        .gm-type:hover {
          border-color: var(--color-orange);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .gm-type-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          background: rgba(255, 106, 0, 0.08);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gm-type h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .gm-type p {
          font-size: 13px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* Calc */
        .gm-calc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .gm-references {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .gm-ref {
          padding: 20px;
          background: white;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .gm-ref-vol {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-orange);
        }

        .gm-ref span:last-child {
          font-size: 13px;
          color: var(--color-gray-500);
        }

        .gm-calc-box {
          background: white;
          padding: 40px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
        }

        .gm-calc-box h3 {
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

        .gm-result {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--color-gray-100);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .gm-result-label {
          display: block;
          font-size: 11px;
          color: var(--color-gray-400);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .gm-result strong {
          font-size: 24px;
          font-weight: 800;
          color: var(--color-orange);
        }

        /* Sécurité */
        .gm-secu {
          gap: 20px;
        }

        .gm-secu-card {
          padding: 32px 24px;
          background: var(--color-black);
          color: white;
          border-radius: var(--radius-xl);
          text-align: center;
          transition: all var(--transition);
        }

        .gm-secu-card:hover {
          background: var(--color-gray-700);
          transform: translateY(-4px);
        }

        .gm-secu-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          background: var(--color-orange);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gm-secu-card h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .gm-secu-card p {
          font-size: 13px;
          color: var(--color-gray-300);
        }

        /* Warehouse */
        .warehouse-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .warehouse-visual {
          position: relative;
          aspect-ratio: 4 / 3;
        }

        .wv-main {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--color-black) 0%, var(--color-gray-700) 100%);
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .wv-stat {
          position: absolute;
          background: white;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
        }

        .wv-stat-1 {
          top: 32px;
          right: -20px;
        }

        .wv-stat-2 {
          bottom: 32px;
          left: -20px;
        }

        .wv-stat strong {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-orange);
        }

        .wv-stat span {
          font-size: 12px;
          color: var(--color-gray-500);
          margin-top: 2px;
        }

        .warehouse-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .warehouse-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--color-gray-700);
        }

        /* CTA */
        .gm-cta {
          background: var(--color-black);
          padding: 80px 48px;
          border-radius: var(--radius-xl);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .gm-calc-grid, .warehouse-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .wv-stat-1 { right: 16px; }
          .wv-stat-2 { left: 16px; }
        }

        @media (max-width: 640px) {
          .gm-cta { padding: 48px 24px; }
          .gm-calc-box { padding: 24px; }
        }
      `}</style>
    </>
  )
}
