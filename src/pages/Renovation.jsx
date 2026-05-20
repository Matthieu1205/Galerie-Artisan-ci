import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { FLYERS, PACK_DECORATION } from '../data/flyers.js'

const SERVICES = [
  { icon: 'building', title: 'Construction de maison', desc: 'Construction neuve clé en main, de la fondation à la finition.' },
  { icon: 'hammer', title: 'Réhabilitation', desc: 'Restauration complète de bâtiments anciens ou dégradés.' },
  { icon: 'tools', title: 'Travaux de rénovation', desc: 'Rénovation partielle ou totale, intérieure et extérieure.' },
  { icon: 'paint', title: 'Décoration intérieure', desc: 'Conception et aménagement design adapté à vos goûts.' },
  { icon: 'sofa', title: 'Revêtement', desc: 'Carrelage, parquet, faux plafond, lambris et finitions.' },
  { icon: 'paint', title: 'Peinture', desc: 'Peinture intérieure et extérieure, effets décoratifs.' },
  { icon: 'tools', title: 'Électricité', desc: 'Installation, mise aux normes et dépannage électrique.' },
  { icon: 'tools', title: 'Plomberie', desc: 'Installation sanitaire, dépannage et travaux complets.' }
]

const REALISATIONS = [
  { title: 'Salon transformé', avant: 'Salon vieillissant', apres: 'Espace contemporain', tag: 'Décoration' },
  { title: 'Façade rénovée', avant: 'Façade défraîchie', apres: 'Façade moderne', tag: 'Peinture' },
  { title: 'Cuisine équipée', avant: 'Cuisine basique', apres: 'Cuisine haut de gamme', tag: 'Rénovation' },
  { title: 'Bureaux professionnels', avant: 'Open space brut', apres: 'Bureaux design', tag: 'Aménagement' }
]

const FORMULES = [
  { nom: 'Pack Essentiel', sub: 'Décoration simple + optimisation de l\'espace', features: ['Conseil déco', 'Plan d\'aménagement', 'Liste de matériaux', 'Suivi 1 mois'] },
  { nom: 'Pack Confort', sub: 'Décoration prêt à vivre + mobilier', features: ['Pack Essentiel', 'Fourniture mobilier', 'Installation complète', 'Suivi 3 mois'], populaire: true },
  { nom: 'Pack Premium', sub: 'Décoration sculptée et sensationnelle', features: ['Pack Confort', 'Pièces sur mesure', 'Finitions haut de gamme', 'Suivi 6 mois'] }
]

export default function Renovation() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <>
      <PageHero
        breadcrumb={['Accueil', 'Rénovation']}
        tag="Rénovation & Construction"
        title="Transformez vos espaces avec des experts de confiance"
        subtitle="De la construction neuve à la rénovation complète, nos artisans qualifiés donnent vie à tous vos projets, avec respect des délais et du budget."
      />

      {/* Services */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos prestations</span>
            <h2 className="section-title">Tous corps de métier</h2>
            <p className="section-subtitle">
              Menuiserie, ébénisterie, tapisserie, ferronnerie, vernissage,
              peinture et génie civil — un atelier d'artisans et créateurs sous un seul toit.
            </p>
          </div>

          <div className="grid grid-4 reno-services">
            {SERVICES.map((s, i) => (
              <div key={i} className="reno-service">
                <div className="reno-icon">
                  <Icon name={s.icon} size={24} color="var(--color-orange)" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="bg-gray">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Galerie</span>
            <h2 className="section-title">Avant / Après nos interventions</h2>
            <p className="section-subtitle">
              Quelques exemples de transformations réalisées par nos équipes.
            </p>
          </div>

          <div className="grid grid-2 ba-grid">
            {REALISATIONS.map((r, i) => (
              <div key={i} className="ba-card">
                <div className="ba-images">
                  <div className="ba-side ba-avant">
                    <span className="ba-label">Avant</span>
                    <div className="ba-img">
                      <Icon name="tools" size={48} color="rgba(255,255,255,0.4)" />
                      <p>{r.avant}</p>
                    </div>
                  </div>
                  <div className="ba-side ba-apres">
                    <span className="ba-label ba-label--orange">Après</span>
                    <div className="ba-img">
                      <Icon name="star" size={48} color="rgba(255,255,255,0.6)" />
                      <p>{r.apres}</p>
                    </div>
                  </div>
                </div>
                <div className="ba-body">
                  <span className="ba-tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nos formules</span>
            <h2 className="section-title">Pack Décoration Intérieure & Extérieure</h2>
            <p className="section-subtitle">
              Donnez du style et de la personnalité à vos espaces.
              Nous créons des ambiances uniques, élégantes et sur mesure.
            </p>
          </div>

          <div className="grid grid-3 formules-grid">
            {FORMULES.map((f, i) => (
              <div key={i} className={`formule-card ${f.populaire ? 'formule-card--pop' : ''}`}>
                {f.populaire && <span className="formule-badge">Le plus choisi</span>}
                <h3 className="formule-nom">{f.nom}</h3>
                <p className="formule-sub">{f.sub}</p>
                <ul className="formule-features">
                  {f.features.map((feat, k) => (
                    <li key={k}>
                      <Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setFormOpen(true)} className={`btn ${f.populaire ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
                  Demander un devis
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-gray">
        <div className="container">
          <div className="grid grid-2 pour-qui">
            <div>
              <span className="section-tag">Pour qui ?</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Des solutions pour tous types de projets
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', margin: 0 }}>
                Que vous soyez particulier, entreprise ou institution,
                nos équipes adaptent leur intervention à vos besoins spécifiques.
              </p>
            </div>

            <div className="cibles">
              {[
                { label: 'Particuliers', desc: 'Maisons, appartements, résidences privées' },
                { label: 'Entreprises', desc: 'Bureaux, locaux commerciaux, restaurants' },
                { label: 'Hôtels & restaurants', desc: 'Aménagement et décoration' },
                { label: 'Bureaux & commerces', desc: 'Espaces professionnels modernes' },
                { label: 'Événementiel', desc: 'Aménagement temporaire d\'espaces' }
              ].map((c, i) => (
                <div key={i} className="cible-item">
                  <Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} />
                  <div>
                    <strong>{c.label}</strong>
                    <span>{c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pack Décoration (flyer pack-decoration) */}
      <section>
        <div className="container">
          <div className="pack-deco-grid">
            <div className="pack-deco-image">
              <img src={FLYERS.packDecoration} alt="Pack Décoration intérieure et extérieure - GALERIE-ARTISAN.CI" />
            </div>
            <div className="pack-deco-content">
              <span className="section-tag">Offre signature</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Pack Décoration<br />Intérieure & Extérieure
              </h2>
              <p className="pack-deco-slogan">"{PACK_DECORATION.slogan}"</p>
              <p className="pack-deco-intro">
                Donnez du style et de la personnalité à vos espaces.
                Nous créons des ambiances uniques, élégantes et sur mesure.
              </p>

              <div className="pack-deco-services">
                {PACK_DECORATION.services.map((s, i) => (
                  <div key={i} className="pack-deco-service">
                    <Icon name="check" size={14} color="var(--color-orange)" strokeWidth={3} />
                    {s}
                  </div>
                ))}
              </div>

              <div className="pack-deco-avantages">
                <strong>Nos avantages :</strong>
                <ul>
                  {PACK_DECORATION.avantages.map((a, i) => (
                    <li key={i}>
                      <Icon name="star" size={14} color="var(--color-orange)" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Devis */}
      <section>
        <div className="container">
          <div className="devis-cta">
            <div>
              <h2 className="section-title" style={{ color: 'white', textAlign: 'left' }}>
                Décrivez-nous votre projet
              </h2>
              <p style={{ color: 'var(--color-gray-300)', fontSize: 16, marginBottom: 24 }}>
                Téléchargez vos plans ou documents et recevez une estimation détaillée
                sous 48 heures.
              </p>
              <div className="devis-features">
                <div><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Devis gratuit</div>
                <div><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Réponse sous 48h</div>
                <div><Icon name="check" size={16} color="var(--color-orange)" strokeWidth={3} /> Sans engagement</div>
              </div>
            </div>

            <form className="devis-form" onSubmit={e => { e.preventDefault(); alert('Votre demande a été envoyée. Nous vous recontactons sous 48h.') }}>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Nom complet" required />
              </div>
              <div className="grid grid-2">
                <input className="form-control" type="tel" placeholder="Téléphone" required />
                <input className="form-control" type="email" placeholder="Email" required />
              </div>
              <select className="form-control" required style={{ marginTop: 16 }}>
                <option value="">Type de projet</option>
                <option>Construction neuve</option>
                <option>Rénovation complète</option>
                <option>Rénovation partielle</option>
                <option>Décoration uniquement</option>
                <option>Autre</option>
              </select>
              <textarea className="form-control" placeholder="Décrivez votre projet..." style={{ marginTop: 16 }} rows={4}></textarea>
              <label className="file-upload">
                <Icon name="download" size={18} />
                <span>Joindre plans ou photos (optionnel)</span>
                <input type="file" multiple style={{ display: 'none' }} />
              </label>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 16 }}>
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .reno-services {
          gap: 20px;
        }

        .reno-service {
          padding: 28px 24px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          transition: all var(--transition);
        }

        .reno-service:hover {
          border-color: var(--color-orange);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .reno-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: rgba(255, 106, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .reno-service h3 {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .reno-service p {
          font-size: 13px;
          color: var(--color-gray-500);
          line-height: 1.6;
        }

        /* Avant Après */
        .ba-card {
          background: white;
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: all var(--transition);
        }

        .ba-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .ba-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }

        .ba-side {
          aspect-ratio: 4 / 3;
          position: relative;
          overflow: hidden;
        }

        .ba-avant { background: linear-gradient(135deg, #404040 0%, #1a1a1a 100%); }
        .ba-apres { background: linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%); }

        .ba-label {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 5px 12px;
          background: white;
          color: var(--color-black);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-full);
          z-index: 2;
        }

        .ba-label--orange {
          background: var(--color-black);
          color: var(--color-orange);
        }

        .ba-img {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: rgba(255,255,255,0.8);
          font-size: 13px;
          padding: 16px;
          text-align: center;
        }

        .ba-body {
          padding: 24px;
        }

        .ba-tag {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-orange);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .ba-body h3 {
          font-size: 20px;
          font-weight: 700;
          color: var(--color-black);
          margin-top: 6px;
        }

        /* Formules */
        .formule-card {
          padding: 40px 32px;
          background: white;
          border-radius: var(--radius-xl);
          border: 2px solid var(--color-gray-100);
          position: relative;
          transition: all var(--transition);
        }

        .formule-card--pop {
          border-color: var(--color-orange);
          background: linear-gradient(180deg, white 0%, rgba(255, 106, 0, 0.02) 100%);
          transform: scale(1.02);
        }

        .formule-badge {
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

        .formule-nom {
          font-size: 22px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 6px;
        }

        .formule-sub {
          font-size: 14px;
          color: var(--color-gray-500);
          margin-bottom: 24px;
        }

        .formule-features {
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .formule-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--color-gray-700);
        }

        /* Pour qui */
        .pour-qui {
          align-items: center;
          gap: 64px;
        }

        .cibles {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cible-item {
          background: white;
          padding: 20px 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all var(--transition);
        }

        .cible-item:hover {
          transform: translateX(4px);
        }

        .cible-item strong {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black);
        }

        .cible-item span {
          font-size: 13px;
          color: var(--color-gray-500);
        }

        /* Devis CTA */
        .devis-cta {
          background: var(--color-black);
          padding: 64px;
          border-radius: var(--radius-xl);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: center;
        }

        .devis-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .devis-features > div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-gray-300);
          font-size: 14px;
        }

        .devis-form {
          background: var(--color-gray-700);
          padding: 32px;
          border-radius: var(--radius-lg);
        }

        .devis-form .form-control {
          background: var(--color-black);
          color: white;
          border-color: var(--color-gray-600);
        }

        .devis-form .form-control::placeholder {
          color: var(--color-gray-400);
        }

        .file-upload {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          border: 2px dashed var(--color-gray-600);
          border-radius: var(--radius-md);
          cursor: pointer;
          color: var(--color-gray-300);
          font-size: 14px;
          margin-top: 16px;
          transition: all var(--transition);
        }

        .file-upload:hover {
          border-color: var(--color-orange);
          color: var(--color-orange);
        }

        /* Pack Décoration */
        .pack-deco-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 64px;
          align-items: center;
        }

        .pack-deco-image {
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4 / 5;
        }

        .pack-deco-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .pack-deco-slogan {
          font-size: 18px;
          color: var(--color-orange);
          font-weight: 700;
          font-style: italic;
          margin: 16px 0 16px;
          letter-spacing: -0.01em;
        }

        .pack-deco-intro {
          font-size: 16px;
          color: var(--color-gray-500);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .pack-deco-services {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-bottom: 24px;
        }

        .pack-deco-service {
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

        .pack-deco-avantages {
          padding: 20px;
          background: var(--color-black);
          color: white;
          border-radius: var(--radius-md);
        }

        .pack-deco-avantages strong {
          display: block;
          font-size: 11px;
          color: var(--color-orange);
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .pack-deco-avantages ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pack-deco-avantages li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--color-gray-300);
        }

        @media (max-width: 1024px) {
          .pour-qui { grid-template-columns: 1fr; gap: 40px; }
          .devis-cta { grid-template-columns: 1fr; padding: 40px 32px; }
          .pack-deco-grid { grid-template-columns: 1fr; gap: 40px; }
          .pack-deco-image { max-width: 480px; margin: 0 auto; }
        }

        @media (max-width: 640px) {
          .pack-deco-services { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .formule-card--pop { transform: none; }
        }
      `}</style>
    </>
  )
}
