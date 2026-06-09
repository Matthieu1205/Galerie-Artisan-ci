import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import SEO from '../components/SEO.jsx'
import { FLYERS, ATELIER_METIERS, ZONES, PROMESSE, PACKS_RESIDENCE } from '../data/flyers.js'

const SERVICES = [
  { icon: 'building', title: 'Immobilier', desc: 'Vente et location de maisons, terrains et gestion immobilière.', to: '/immobilier' },
  { icon: 'hammer', title: 'Rénovation', desc: 'Construction, réhabilitation, peinture, électricité, plomberie.', to: '/renovation' },
  { icon: 'truck', title: 'Déménagement', desc: 'Déménagement local et national, emballage et montage.', to: '/demenagement' },
  { icon: 'warehouse', title: 'Garde-Meuble', desc: 'Stockage sécurisé courte et longue durée.', to: '/garde-meuble' },
  { icon: 'sofa', title: 'Ameublement', desc: 'Vente, location et fabrication sur mesure de meubles.', to: '/ameublement' },
  { icon: 'paint', title: 'Décoration', desc: 'Décoration intérieure et extérieure, design personnalisé.', to: '/renovation' }
]

const STATS = [
  { value: '500+', label: 'Projets réalisés' },
  { value: '12', label: 'Années d\'expertise' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24/7', label: 'Support disponible' }
]

const REALISATIONS = [
  { title: 'Villa moderne — Cocody', cat: 'Construction', tag: 'Immobilier' },
  { title: 'Rénovation appartement — Plateau', cat: 'Rénovation', tag: 'Rénovation' },
  { title: 'Aménagement bureaux — Marcory', cat: 'Ameublement', tag: 'Ameublement' },
  { title: 'Pack salon palette — Bingerville', cat: 'Mobilier', tag: 'Mobilier' }
]

const TESTIMONIALS = [
  {
    name: 'Aïcha K.',
    role: 'Propriétaire à Cocody',
    text: 'Une équipe sérieuse et à l\'écoute. La rénovation de mon salon a été livrée en avance et avec un rendu impeccable.'
  },
  {
    name: 'Société DAFSTAR',
    role: 'Partenaire logistique',
    text: 'GALERIE-ARTISAN.CI nous accompagne pour l\'aménagement de nos résidences. Qualité et délais respectés.'
  },
  {
    name: 'Mr Konan',
    role: 'Investisseur immobilier',
    text: 'Le pack ameublement en série a permis d\'équiper trois logements rapidement avec un design moderne et homogène.'
  }
]

const PROCESS = [
  { num: '01', title: 'Étude du projet', desc: 'Analyse de vos besoins et estimation gratuite.' },
  { num: '02', title: 'Devis personnalisé', desc: 'Proposition adaptée à votre budget et vos délais.' },
  { num: '03', title: 'Réalisation', desc: 'Mise en œuvre par nos artisans qualifiés.' },
  { num: '04', title: 'Suivi qualité', desc: 'Contrôle final et accompagnement après livraison.' }
]

export default function Accueil() {
  return (
    <>
      <SEO
        title="Immobilier, Rénovation, Déménagement à Abidjan"
        description="GALERIE-ARTISAN.CI — Solution complète pour vos projets immobiliers et d'aménagement à Abidjan. Immobilier, rénovation, déménagement, garde-meuble, ameublement sur mesure. Devis gratuit."
        keywords="immobilier Abidjan, rénovation Abidjan, déménagement Abidjan, garde-meuble Abidjan, ameublement sur mesure, construction Côte d'Ivoire, artisan Abidjan"
        path="/"
      />
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="section-tag">Bienvenue chez GALERIE-ARTISAN.CI</span>
            <h1 className="hero-title">
              La solution complète pour vos projets
              <span className="hero-accent"> immobiliers</span> et
              <span className="hero-accent"> d'aménagement</span>
            </h1>
            <p className="hero-sub">
              Immobilier, rénovation, déménagement, garde-meuble et ameublement.
              Du projet à la réalisation, nous nous occupons de tout.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Demander un devis
                <Icon name="arrow" size={18} />
              </Link>
              <Link to="/immobilier" className="btn btn-outline btn-lg">
                Découvrir nos biens
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <Icon name="check" size={18} color="var(--color-orange)" />
                <span>Devis gratuit</span>
              </div>
              <div className="trust-item">
                <Icon name="check" size={18} color="var(--color-orange)" />
                <span>Artisans qualifiés</span>
              </div>
              <div className="trust-item">
                <Icon name="check" size={18} color="var(--color-orange)" />
                <span>Délais respectés</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card hero-card-1">
              <div className="hc-icon"><Icon name="building" size={20} color="white" /></div>
              <div>
                <div className="hc-num">500+</div>
                <div className="hc-label">Projets livrés</div>
              </div>
            </div>
            <div className="hero-card hero-card-2">
              <div className="hc-icon hc-icon-dark"><Icon name="star" size={20} color="white" /></div>
              <div>
                <div className="hc-num">4.9/5</div>
                <div className="hc-label">Note clients</div>
              </div>
            </div>
            <div className="hero-image">
              <img src={FLYERS.vitrineServices} alt="GALERIE-ARTISAN.CI - Vitrine de nos services" />
              <div className="hi-overlay-bottom">
                <span>L'art de vivre chez soi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau partenaires */}
      <section className="bandeau">
        <div className="container">
          <div className="bandeau-grid">
            <div className="bandeau-item"><strong>Modeste</strong> · Grand Bassam</div>
            <div className="bandeau-item">Adjamé · Plateau · Cocody</div>
            <div className="bandeau-item">Yopougon · Treichville · Marcory</div>
            <div className="bandeau-item">Abobo · Bingerville</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos Services</span>
            <h2 className="section-title">Six expertises, une seule adresse</h2>
            <p className="section-subtitle">
              Une plateforme multiservices qui couvre l'ensemble de vos besoins,
              de l'acquisition à l'aménagement.
            </p>
          </div>

          <div className="grid grid-3 services-grid">
            {SERVICES.map((s, i) => (
              <Link key={i} to={s.to} className="service-card">
                <div className="service-icon">
                  <Icon name={s.icon} size={28} color="var(--color-orange)" />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-link">
                  Découvrir <Icon name="arrow" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Notre méthode</span>
            <h2 className="section-title">Un processus clair, du A à Z</h2>
            <p className="section-subtitle">
              Quatre étapes simples pour transformer votre projet en réalité.
            </p>
          </div>

          <div className="grid grid-4 process-grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="process-card">
                <div className="process-num">{p.num}</div>
                <h3 className="process-title">{p.title}</h3>
                <p className="process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="bg-gray realisations">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Réalisations récentes</span>
            <h2 className="section-title">Notre travail parle pour nous</h2>
          </div>

          <div className="grid grid-4 realisations-grid">
            {REALISATIONS.map((r, i) => (
              <div key={i} className="reali-card">
                <div className={`reali-image reali-image-${i + 1}`}>
                  <span className="reali-tag">{r.tag}</span>
                </div>
                <div className="reali-body">
                  <span className="reali-cat">{r.cat}</span>
                  <h3 className="reali-title">{r.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Témoignages</span>
            <h2 className="section-title">Ce que disent nos clients</h2>
          </div>

          <div className="grid grid-3 testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testi-card">
                <div className="testi-stars">
                  {[...Array(5)].map((_, k) => (
                    <Icon key={k} name="star" size={16} color="var(--color-orange)" />
                  ))}
                </div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier d'artisans (issu des flyers présentation) */}
      <section className="atelier-section">
        <div className="container">
          <div className="atelier-grid">
            <div className="atelier-image">
              <img src={FLYERS.presentationGrandBassam} alt="GALERIE-ARTISAN.CI - Atelier d'artisans à Grand Bassam" />
              <div className="atelier-badge">
                <Icon name="pin" size={14} color="white" />
                Situé à Grand Bassam (Modeste)
              </div>
            </div>
            <div className="atelier-content">
              <span className="section-tag">Atelier d'artisans</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                La vitrine du génie<br />créatif Africain
              </h2>
              <p className="atelier-text">
                Sept métiers d'artisans et de créateurs réunis sous un même toit pour donner vie
                à vos projets, du sur-mesure au clé en main.
              </p>

              <div className="atelier-metiers">
                {ATELIER_METIERS.map((m, i) => (
                  <div key={i} className="atelier-metier">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {m}
                  </div>
                ))}
              </div>

              <div className="atelier-zones">
                <strong>Nous intervenons à :</strong>
                <div className="zones-list">
                  {ZONES.map((z, i) => (
                    <span key={i} className="zone-pill">{z}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pack Résidence Clé en Main (issu du flyer pack-residence) */}
      <section className="bg-gray packs-residence">
        <div className="container">
          <div className="packs-head">
            <div>
              <span className="section-tag">Solution promoteurs</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Pack Résidence<br />Clé en Main
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 24px' }}>
                Cinq packs modulables pour équiper rapidement et professionnellement
                vos résidences, immeubles et investissements locatifs.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Étudier votre projet
                <Icon name="arrow" size={18} />
              </Link>
            </div>
            <div className="packs-illustration">
              <img src={FLYERS.packResidenceCleEnMain} alt="Pack Résidence Clé en Main - GALERIE-ARTISAN.CI" />
            </div>
          </div>

          <div className="packs-list">
            {PACKS_RESIDENCE.map((p, i) => (
              <div key={i} className="pack-row">
                <div className="pack-row-num">{p.num}</div>
                <div className="pack-row-content">
                  <h3>{p.titre}</h3>
                  <ul>
                    {p.points.map((pt, k) => (
                      <li key={k}>
                        <Icon name="check" size={14} color="var(--color-orange)" strokeWidth={3} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="pack-row-objectif">
                    <strong>Objectif :</strong> {p.objectif}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie des offres (flyers) */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos offres en images</span>
            <h2 className="section-title">Découvrez nos packs et offres</h2>
            <p className="section-subtitle">
              Une sélection d'offres conçues pour transformer vos espaces et faciliter vos projets.
            </p>
          </div>

          <div className="flyers-grid">
            <Link to="/ameublement" className="flyer-card flyer-card-large">
              <img src={FLYERS.packAmeublementSerie} alt="Pack Ameublement en Série" />
              <div className="flyer-card-info">
                <span>Pack Ameublement</span>
                <strong>En série</strong>
              </div>
            </Link>
            <Link to="/renovation" className="flyer-card">
              <img src={FLYERS.packDecoration} alt="Pack Décoration intérieure et extérieure" />
              <div className="flyer-card-info">
                <span>Pack Décoration</span>
                <strong>Intérieur & extérieur</strong>
              </div>
            </Link>
            <Link to="/demenagement" className="flyer-card">
              <img src={FLYERS.packDemenagement} alt="Pack Installation et Déménagement" />
              <div className="flyer-card-info">
                <span>Pack Déménagement</span>
                <strong>Installation incluse</strong>
              </div>
            </Link>
            <Link to="/ameublement" className="flyer-card">
              <img src={FLYERS.locationMeublesPalette} alt="Location de meubles en palette pour événements" />
              <div className="flyer-card-info">
                <span>Offre événement</span>
                <strong>Location palette</strong>
              </div>
            </Link>
            <Link to="/ameublement" className="flyer-card">
              <img src={FLYERS.canapePalette2Places} alt="Canapé 2 places en palette - Design moderne" />
              <div className="flyer-card-info">
                <span>Mobilier phare</span>
                <strong>Canapé palette</strong>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div>
              <span className="section-tag" style={{ color: 'var(--color-orange-light)', background: 'rgba(255, 138, 51, 0.15)' }}>
                Prêt à démarrer ?
              </span>
              <h2 className="cta-title">Donnez vie à vos projets dès aujourd'hui</h2>
              <p className="cta-text">
                Notre équipe d'experts vous accompagne à chaque étape.
                Demandez votre devis gratuit en moins de 2 minutes.
              </p>
            </div>
            <div className="cta-actions">
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
        /* ============ HERO ============ */
        .hero {
          padding: 140px 0 80px;
          background: linear-gradient(180deg, var(--color-white) 0%, var(--color-gray-50) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 100px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--color-black);
          margin: 24px 0;
        }

        .hero-accent {
          color: var(--color-orange);
          position: relative;
          white-space: nowrap;
        }

        .hero-sub {
          font-size: 18px;
          color: var(--color-gray-500);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .hero-trust {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--color-gray-600);
          font-weight: 500;
        }

        .hero-visual {
          position: relative;
          height: 540px;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--color-black);
          box-shadow: var(--shadow-lg);
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hi-overlay-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 20px 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.85) 100%);
          color: white;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-align: center;
        }

        .hero-card {
          position: absolute;
          background: white;
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 2;
        }

        .hero-card-1 { top: 40px; left: -30px; }
        .hero-card-2 { bottom: 60px; right: -20px; }

        .hc-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--color-orange);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hc-icon-dark { background: var(--color-black); }

        .hc-num {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-black);
          line-height: 1;
        }

        .hc-label {
          font-size: 12px;
          color: var(--color-gray-500);
          margin-top: 2px;
        }

        /* ============ BANDEAU ============ */
        .bandeau {
          padding: 32px 0;
          background: var(--color-black);
          color: var(--color-white);
        }

        .bandeau-grid {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .bandeau-item {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-gray-300);
        }

        .bandeau-item strong {
          color: var(--color-orange);
          font-weight: 700;
        }

        /* ============ SERVICES ============ */
        .service-card {
          padding: 32px;
          background: var(--color-white);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all var(--transition);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity var(--transition);
        }

        .service-card:hover {
          border-color: transparent;
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-icon {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-md);
          background: rgba(255, 106, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }

        .service-card:hover .service-icon {
          background: var(--color-orange);
        }

        .service-card:hover .service-icon svg {
          fill: white;
        }

        .service-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--color-black);
        }

        .service-desc {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.6;
          flex: 1;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-orange);
          margin-top: 4px;
        }

        /* ============ STATS ============ */
        .stats-section {
          padding: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: var(--color-black);
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin: 0 auto;
          max-width: 1100px;
        }

        .stat-card {
          padding: 48px 24px;
          text-align: center;
          color: white;
          border-right: 1px solid var(--color-gray-700);
        }

        .stat-card:last-child { border-right: none; }

        .stat-value {
          font-size: 48px;
          font-weight: 800;
          color: var(--color-orange);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .stat-label {
          font-size: 13px;
          color: var(--color-gray-300);
          margin-top: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ============ PROCESS ============ */
        .process-card {
          padding: 32px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          position: relative;
        }

        .process-num {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-orange);
          letter-spacing: 0.15em;
          margin-bottom: 16px;
          padding: 6px 12px;
          background: rgba(255, 106, 0, 0.08);
          border-radius: var(--radius-full);
          display: inline-block;
        }

        .process-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .process-desc {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* ============ RÉALISATIONS ============ */
        .reali-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition);
        }

        .reali-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .reali-image {
          aspect-ratio: 4 / 3;
          position: relative;
          overflow: hidden;
        }

        .reali-image-1 { background: linear-gradient(135deg, #2a2a2a 0%, #525252 100%); }
        .reali-image-2 { background: linear-gradient(135deg, var(--color-orange) 0%, #cc4f00 100%); }
        .reali-image-3 { background: linear-gradient(135deg, #404040 0%, #1a1a1a 100%); }
        .reali-image-4 { background: linear-gradient(135deg, #737373 0%, #262626 100%); }

        .reali-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 12px;
          background: white;
          color: var(--color-black);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
        }

        .reali-body {
          padding: 20px;
        }

        .reali-cat {
          font-size: 12px;
          color: var(--color-orange);
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .reali-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-black);
          margin-top: 6px;
        }

        /* ============ TÉMOIGNAGES ============ */
        .testi-card {
          padding: 32px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          transition: all var(--transition);
        }

        .testi-card:hover {
          border-color: var(--color-orange);
          transform: translateY(-2px);
        }

        .testi-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 20px;
        }

        .testi-text {
          font-size: 15px;
          color: var(--color-gray-600);
          line-height: 1.7;
          margin-bottom: 24px;
          font-style: italic;
        }

        .testi-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--color-gray-100);
        }

        .testi-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-black);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
        }

        .testi-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-black);
        }

        .testi-role {
          font-size: 13px;
          color: var(--color-gray-500);
        }

        /* ============ CTA ============ */
        .cta-section {
          padding-bottom: 0;
        }

        .cta-box {
          background: var(--color-black);
          border-radius: var(--radius-xl);
          padding: 64px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .cta-box::before {
          content: '';
          position: absolute;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.2) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-title {
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          color: white;
          margin: 16px 0;
          letter-spacing: -0.02em;
          position: relative;
        }

        .cta-text {
          font-size: 16px;
          color: var(--color-gray-300);
          line-height: 1.6;
          position: relative;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          position: relative;
        }

        /* ============ ATELIER ============ */
        .atelier-section {
          background: var(--color-white);
        }

        .atelier-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .atelier-image {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4 / 5;
        }

        .atelier-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .atelier-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--color-orange);
          color: white;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-md);
        }

        .atelier-text {
          font-size: 16px;
          color: var(--color-gray-500);
          line-height: 1.7;
          margin: 16px 0 32px;
        }

        .atelier-metiers {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-bottom: 32px;
        }

        .atelier-metier {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-black);
          transition: all var(--transition);
        }

        .atelier-metier:hover {
          background: var(--color-black);
          color: var(--color-white);
          transform: translateX(4px);
        }

        .atelier-metier:hover span {
          color: var(--color-orange);
        }

        .atelier-metier span {
          font-size: 11px;
          font-weight: 800;
          color: var(--color-orange);
          letter-spacing: 0.05em;
        }

        .atelier-zones strong {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gray-500);
          margin-bottom: 12px;
        }

        .zones-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .zone-pill {
          padding: 6px 14px;
          background: var(--color-white);
          color: var(--color-gray-700);
          font-size: 12px;
          font-weight: 600;
          border: 1px solid var(--color-gray-100);
          border-radius: var(--radius-full);
          transition: all var(--transition);
        }

        .zone-pill:hover {
          border-color: var(--color-orange);
          color: var(--color-orange);
        }

        /* ============ PACKS RÉSIDENCE ============ */
        .packs-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 64px;
        }

        .packs-illustration {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 3 / 4;
        }

        .packs-illustration img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .packs-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pack-row {
          background: white;
          border-radius: var(--radius-xl);
          padding: 32px;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          align-items: start;
          border: 1px solid var(--color-gray-100);
          transition: all var(--transition);
        }

        .pack-row:hover {
          transform: translateX(4px);
          border-color: var(--color-orange);
          box-shadow: var(--shadow-md);
        }

        .pack-row-num {
          font-size: 56px;
          font-weight: 800;
          color: var(--color-orange);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .pack-row-content h3 {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 16px;
        }

        .pack-row-content ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .pack-row-content li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--color-gray-600);
        }

        .pack-row-objectif {
          padding: 12px 16px;
          background: rgba(255, 106, 0, 0.06);
          border-left: 3px solid var(--color-orange);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 13px;
          color: var(--color-gray-700);
        }

        .pack-row-objectif strong {
          color: var(--color-orange);
          font-weight: 700;
        }

        /* ============ FLYERS GALERIE ============ */
        .flyers-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 16px;
          height: 640px;
        }

        .flyer-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--color-black);
          transition: all var(--transition);
          display: block;
        }

        .flyer-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .flyer-card-large {
          grid-row: 1 / 3;
        }

        .flyer-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition);
        }

        .flyer-card:hover img {
          transform: scale(1.03);
        }

        .flyer-card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.85) 100%);
          color: white;
        }

        .flyer-card-info span {
          font-size: 11px;
          font-weight: 600;
          color: var(--color-orange);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }

        .flyer-card-info strong {
          font-size: 18px;
          font-weight: 800;
          color: white;
        }

        /* ============ RESPONSIVE ============ */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .hero-visual { height: 400px; }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stat-card:nth-child(2) { border-right: none; }
          .stat-card:nth-child(1), .stat-card:nth-child(2) {
            border-bottom: 1px solid var(--color-gray-700);
          }
          .cta-box {
            grid-template-columns: 1fr;
            padding: 48px 32px;
            text-align: center;
          }
          .cta-actions { align-items: center; }
        }

        @media (max-width: 1024px) {
          .atelier-grid, .packs-head {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .atelier-image, .packs-illustration {
            max-width: 480px;
            margin: 0 auto;
          }
          .flyers-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            height: auto;
          }
          .flyer-card-large { grid-row: auto; grid-column: 1 / -1; aspect-ratio: 16 / 10; }
          .flyer-card:not(.flyer-card-large) { aspect-ratio: 4 / 3; }
        }

        @media (max-width: 768px) {
          .hero { padding: 120px 0 60px; }
          .hero-card-1 { left: 0; top: 20px; }
          .hero-card-2 { right: 0; bottom: 20px; }
          .bandeau-grid { flex-direction: column; gap: 12px; text-align: center; }
          .stat-value { font-size: 36px; }
          .cta-box { padding: 40px 24px; }
          .atelier-metiers { grid-template-columns: 1fr; }
          .pack-row { grid-template-columns: 56px 1fr; padding: 24px; gap: 16px; }
          .pack-row-num { font-size: 40px; }
          .flyers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
