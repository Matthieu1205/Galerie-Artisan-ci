import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { FLYERS, PACKS_RESIDENCE, PACK_SERIE, PARTENAIRE } from '../data/flyers.js'
import SEO from '../components/SEO.jsx'

export default function PacksPromoteurs() {
  return (
    <>
      <SEO
        title="Packs Promoteurs — Solutions Résidence Clé en Main"
        description="Packs résidence clé en main pour promoteurs immobiliers en Côte d'Ivoire. Équipement complet de villas, appartements et immeubles. GALERIE-ARTISAN.CI."
        keywords="packs promoteurs immobilier Côte d'Ivoire, résidence clé en main Abidjan, équipement immeuble, ameublement résidence promoteur"
        path="/packs-promoteurs"
      />
      <PageHero
        breadcrumb={['Accueil', 'Packs Promoteurs']}
        tag="Solution Promoteurs"
        title="Pack Résidence Clé en Main"
        subtitle="Cinq packs modulables pour équiper rapidement et professionnellement vos résidences, immeubles et investissements locatifs."
      />

      {/* Bannière flyer principal */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="pp-banner">
            <div className="pp-banner-image">
              <img src={FLYERS.packResidenceCleEnMain} alt="Pack Résidence Clé en Main - GALERIE-ARTISAN.CI" />
            </div>
            <div className="pp-banner-content">
              <span className="section-tag">Notre solution</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Une offre complète pour les promoteurs immobiliers
              </h2>
              <p style={{ fontSize: 16, color: 'var(--color-gray-500)', lineHeight: 1.7, marginBottom: 24 }}>
                Cinq packs spécialement conçus pour vos projets résidentiels.
                Du pack appartement témoin au pack installation complète,
                nous accompagnons vos résidences de A à Z.
              </p>

              <div className="pp-promesse">
                {['Étude gratuite', 'Devis personnalisé', 'Installation rapide', 'Suivi qualité'].map((p, i) => (
                  <div key={i} className="pp-promesse-item">
                    <Icon name="check" size={14} color="var(--color-orange)" strokeWidth={3} />
                    {p}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>
                Étudier mon projet
                <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Les 5 packs détaillés */}
      <section className="bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos cinq packs</span>
            <h2 className="section-title">Cinq solutions, un seul partenaire</h2>
          </div>

          <div className="pp-packs">
            {PACKS_RESIDENCE.map((p, i) => (
              <div key={i} className="pp-pack">
                <div className="pp-pack-num">{p.num}</div>
                <h3>{p.titre}</h3>
                <ul>
                  {p.points.map((pt, k) => (
                    <li key={k}>
                      <Icon name="check" size={14} color="var(--color-orange)" strokeWidth={3} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="pp-pack-objectif">
                  <Icon name="award" size={14} color="var(--color-orange)" />
                  <span><strong>Objectif :</strong> {p.objectif}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Argumentaires Pack Série */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos avantages</span>
            <h2 className="section-title">Pourquoi choisir notre pack ?</h2>
            <p className="section-subtitle">
              La solution clé en main pour équiper plusieurs logements avec style,
              rapidement et à moindre coût.
            </p>
          </div>

          <div className="pp-arguments">
            {PACK_SERIE.argumentaires.map((a, i) => (
              <div key={i} className="pp-argument">
                <div className="pp-argument-num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{a.titre}</h4>
                <p>{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaire DAF STAR */}
      <section className="bg-gray">
        <div className="container">
          <div className="pp-partenaire">
            <div>
              <span className="section-tag">Notre partenaire logistique</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                {PARTENAIRE.nom}
              </h2>
              <p style={{ fontSize: 15, color: 'var(--color-gray-500)', marginTop: 12 }}>
                {PARTENAIRE.services}
              </p>
              <p style={{ fontSize: 14, color: 'var(--color-gray-500)', lineHeight: 1.7, marginTop: 16 }}>
                Pour garantir l'acheminement de vos équipements à temps,
                nous travaillons en partenariat avec DAF STAR, expert en logistique
                import-export et déménagement international.
              </p>
            </div>

            <div className="pp-partenaire-logo">
              <div className="pp-logo-box">
                <Icon name="globe" size={64} color="var(--color-orange)" />
                <strong>DAF STAR</strong>
                <span>Global Forwarding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="pp-cta">
            <h2 className="section-title" style={{ color: 'white' }}>
              Lancez votre projet aujourd'hui
            </h2>
            <p style={{ color: 'var(--color-gray-300)', fontSize: 16, maxWidth: 600, margin: '16px auto 32px', lineHeight: 1.6 }}>
              Notre équipe analyse votre projet sous 48h et vous propose un devis
              personnalisé sans engagement. Tarifs dégressifs selon le volume.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Demander un devis
                <Icon name="arrow" size={18} />
              </Link>
              <a href="tel:+2250758986069" className="btn btn-outline-white btn-lg">
                <Icon name="phone" size={18} />
                (+225) 0758 98 60 69
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Banner */
        .pp-banner {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
        }

        .pp-banner-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 3 / 4;
        }

        .pp-banner-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pp-promesse {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 24px;
        }

        .pp-promesse-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-black);
        }

        /* Packs */
        .pp-packs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .pp-packs > :last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }

        .pp-pack {
          background: white;
          padding: 32px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          transition: all var(--transition);
        }

        .pp-pack:hover {
          transform: translateY(-4px);
          border-color: var(--color-orange);
          box-shadow: var(--shadow-md);
        }

        .pp-pack-num {
          width: 56px;
          height: 56px;
          background: var(--color-black);
          color: var(--color-orange);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .pp-pack h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 16px;
        }

        .pp-pack ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .pp-pack li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--color-gray-600);
        }

        .pp-pack-objectif {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 14px 16px;
          background: rgba(255, 106, 0, 0.06);
          border-left: 3px solid var(--color-orange);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .pp-pack-objectif span {
          font-size: 13px;
          color: var(--color-gray-700);
        }

        .pp-pack-objectif strong {
          color: var(--color-orange);
          font-weight: 700;
        }

        /* Arguments */
        .pp-arguments {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .pp-argument {
          padding: 28px 20px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          text-align: center;
          transition: all var(--transition);
        }

        .pp-argument:hover {
          transform: translateY(-4px);
          border-color: var(--color-orange);
        }

        .pp-argument-num {
          font-size: 11px;
          font-weight: 800;
          color: var(--color-orange);
          letter-spacing: 0.15em;
          margin-bottom: 12px;
        }

        .pp-argument h4 {
          font-size: 16px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 6px;
        }

        .pp-argument p {
          font-size: 12px;
          color: var(--color-gray-500);
        }

        /* Partenaire */
        .pp-partenaire {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .pp-logo-box {
          background: var(--color-black);
          padding: 48px;
          border-radius: var(--radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: white;
          aspect-ratio: 1;
        }

        .pp-logo-box strong {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-top: 12px;
        }

        .pp-logo-box span {
          font-size: 12px;
          color: var(--color-orange);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        /* CTA */
        .pp-cta {
          background: var(--color-black);
          padding: 80px 48px;
          border-radius: var(--radius-xl);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .pp-banner, .pp-partenaire {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .pp-banner-image, .pp-logo-box { max-width: 480px; margin: 0 auto; }
          .pp-arguments {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pp-packs, .pp-promesse {
            grid-template-columns: 1fr;
          }
          .pp-arguments {
            grid-template-columns: repeat(2, 1fr);
          }
          .pp-cta { padding: 48px 24px; }
        }

        @media (max-width: 480px) {
          .pp-arguments { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
