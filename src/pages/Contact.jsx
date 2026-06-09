import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import SEO from '../components/SEO.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <SEO
        title="Contact — Devis Gratuit"
        description="Contactez GALERIE-ARTISAN.CI pour un devis gratuit. Immobilier, rénovation, déménagement, garde-meuble, ameublement à Abidjan. Réponse rapide garantie."
        keywords="contact GALERIE-ARTISAN.CI, devis immobilier Abidjan, devis rénovation Abidjan, contact déménagement Côte d'Ivoire"
        path="/contact"
      />
      <PageHero
        breadcrumb={['Accueil', 'Contact']}
        tag="Contact"
        title="Parlons de votre projet"
        subtitle="Une équipe à votre écoute pour répondre à toutes vos questions. Devis gratuit sous 48 heures, sans engagement."
      />

      {/* Coordonnées */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid grid-3 contact-cards">
            <div className="contact-card">
              <div className="cc-icon">
                <Icon name="pin" size={28} color="white" />
              </div>
              <h3>Notre adresse</h3>
              <p>Modeste, Nouveau goudron, cité 3CB<br/>Grand Bassam, Côte d'Ivoire</p>
              <a href="https://maps.google.com/?q=Grand+Bassam,+Côte+d'Ivoire" target="_blank" rel="noopener noreferrer" className="cc-link">
                Voir sur la carte <Icon name="arrow" size={14} />
              </a>
            </div>

            <div className="contact-card">
              <div className="cc-icon">
                <Icon name="phone" size={28} color="white" />
              </div>
              <h3>Téléphone</h3>
              <p>
                <a href="tel:+2250758986069">(+225) 0758 98 60 69</a><br/>
                <a href="tel:+2250544050707">(+225) 0544 05 07 07</a>
              </p>
              <a href="https://wa.me/2250758986069" target="_blank" rel="noopener noreferrer" className="cc-link">
                WhatsApp Business <Icon name="arrow" size={14} />
              </a>
            </div>

            <div className="contact-card">
              <div className="cc-icon">
                <Icon name="mail" size={28} color="white" />
              </div>
              <h3>Email & Web</h3>
              <p>
                <a href="mailto:contact@galerie-artisan.ci">contact@galerie-artisan.ci</a><br/>
                <a href="https://www.galerie-artisan.ci">www.galerie-artisan.ci</a>
              </p>
              <a href="#formulaire" className="cc-link">
                Nous écrire <Icon name="arrow" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire + carte */}
      <section id="formulaire" className="bg-gray">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="section-tag">Formulaire</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Écrivez-nous
              </h2>
              <p style={{ color: 'var(--color-gray-500)', fontSize: 16, marginBottom: 32, maxWidth: 480 }}>
                Remplissez ce formulaire et notre équipe vous contactera dans les 48 heures
                par email, SMS ou WhatsApp.
              </p>

              <form className="contact-form" onSubmit={submit}>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input className="form-control" type="text" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nom</label>
                    <input className="form-control" type="text" required />
                  </div>
                </div>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input className="form-control" type="tel" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Service concerné</label>
                  <select className="form-control" required>
                    <option value="">Choisir un service</option>
                    <option>Immobilier</option>
                    <option>Rénovation & Construction</option>
                    <option>Déménagement</option>
                    <option>Garde-Meuble</option>
                    <option>Ameublement</option>
                    <option>Autre demande</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Sujet</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Votre message</label>
                  <textarea className="form-control" rows={5} required></textarea>
                </div>
                <label className="contact-consent">
                  <input type="checkbox" required />
                  <span>J'accepte d'être recontacté(e) par GALERIE-ARTISAN.CI</span>
                </label>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 16 }}>
                  Envoyer mon message
                  <Icon name="send" size={18} />
                </button>

                {sent && (
                  <div className="form-success">
                    <Icon name="check" size={20} color="var(--color-orange)" strokeWidth={3} />
                    Message envoyé. Nous vous recontactons sous 48h.
                  </div>
                )}
              </form>
            </div>

            <div>
              <div className="contact-map">
                <div className="map-placeholder">
                  <Icon name="pin" size={48} color="var(--color-orange)" />
                  <strong>Grand Bassam — Modeste</strong>
                  <span>Nouveau goudron, cité 3CB</span>
                  <a
                    href="https://maps.google.com/?q=Grand+Bassam,+Côte+d'Ivoire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 16 }}
                  >
                    Ouvrir Google Maps
                  </a>
                </div>
              </div>

              <div className="contact-hours">
                <h3>Horaires d'ouverture</h3>
                <ul>
                  <li><span>Lundi - Vendredi</span> <strong>08h - 18h</strong></li>
                  <li><span>Samedi</span> <strong>09h - 16h</strong></li>
                  <li><span>Dimanche</span> <strong>Fermé</strong></li>
                </ul>
                <div className="hours-note">
                  <Icon name="clock" size={14} color="var(--color-orange)" />
                  Permanence WhatsApp 7j/7 en cas d'urgence
                </div>
              </div>

              <div className="contact-zones">
                <h3>Nous intervenons à</h3>
                <div className="zones-list">
                  {['Abidjan', 'Grand Bassam', 'Bingerville', 'Adjamé', 'Plateau', 'Cocody', 'Yopougon', 'Treichville', 'Marcory', 'Abobo'].map((z, i) => (
                    <span key={i} className="zone-tag">{z}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paiements */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Paiements acceptés</span>
            <h2 className="section-title">Solutions de paiement flexibles</h2>
          </div>

          <div className="grid grid-4 paiements-grid">
            {[
              { nom: 'Orange Money', desc: 'Paiement mobile sécurisé' },
              { nom: 'MTN Money', desc: 'Transfert depuis votre wallet' },
              { nom: 'Wave', desc: 'Sans frais de transaction' },
              { nom: 'À la livraison', desc: 'Espèces ou chèque' }
            ].map((p, i) => (
              <div key={i} className="paiement-card">
                <div className="paiement-logo">{p.nom.charAt(0)}</div>
                <h3>{p.nom}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-cards {
          margin-top: -40px;
          margin-bottom: 0;
        }

        .contact-card {
          background: white;
          padding: 40px 32px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          text-align: center;
          transition: all var(--transition);
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: transparent;
        }

        .cc-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 20px;
          background: var(--color-black);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-card:hover .cc-icon {
          background: var(--color-orange);
        }

        .contact-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 12px;
        }

        .contact-card p {
          font-size: 14px;
          color: var(--color-gray-500);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .contact-card a {
          color: var(--color-gray-700);
          font-weight: 500;
        }

        .contact-card a:hover {
          color: var(--color-orange);
        }

        .cc-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-orange) !important;
          padding-top: 16px;
          border-top: 1px solid var(--color-gray-100);
          margin-top: 8px;
        }

        /* Contact grid */
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 56px;
          align-items: start;
        }

        .contact-form {
          background: white;
          padding: 40px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-sm);
        }

        .contact-consent {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--color-gray-500);
          margin-top: 8px;
          cursor: pointer;
        }

        .contact-consent input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--color-orange);
        }

        .form-success {
          margin-top: 16px;
          padding: 14px 18px;
          background: rgba(255, 106, 0, 0.08);
          border: 1px solid var(--color-orange);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-orange);
          animation: fadeIn 0.3s;
        }

        /* Map */
        .contact-map {
          background: var(--color-black);
          aspect-ratio: 16 / 11;
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: 24px;
          position: relative;
        }

        .map-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          padding: 32px;
          text-align: center;
          background:
            radial-gradient(circle at 30% 30%, rgba(255, 106, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 106, 0, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, var(--color-black) 0%, var(--color-gray-700) 100%);
        }

        .map-placeholder strong {
          font-size: 20px;
          font-weight: 700;
          margin-top: 12px;
        }

        .map-placeholder > span {
          font-size: 14px;
          color: var(--color-gray-300);
        }

        /* Horaires */
        .contact-hours {
          background: white;
          padding: 28px;
          border-radius: var(--radius-xl);
          margin-bottom: 24px;
        }

        .contact-hours h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .contact-hours ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-hours li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }

        .contact-hours li span {
          color: var(--color-gray-500);
        }

        .contact-hours li strong {
          color: var(--color-black);
          font-weight: 700;
        }

        .hours-note {
          margin-top: 16px;
          padding: 12px;
          background: rgba(255, 106, 0, 0.06);
          border-radius: var(--radius-md);
          font-size: 12px;
          color: var(--color-gray-600);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Zones */
        .contact-zones {
          background: white;
          padding: 28px;
          border-radius: var(--radius-xl);
        }

        .contact-zones h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 16px;
        }

        .zones-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .zone-tag {
          padding: 6px 14px;
          background: var(--color-gray-50);
          color: var(--color-gray-700);
          font-size: 13px;
          font-weight: 500;
          border-radius: var(--radius-full);
        }

        /* Paiements */
        .paiements-grid { gap: 20px; }

        .paiement-card {
          padding: 32px 24px;
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-gray-100);
          text-align: center;
          transition: all var(--transition);
        }

        .paiement-card:hover {
          border-color: var(--color-orange);
          transform: translateY(-4px);
        }

        .paiement-logo {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: var(--color-black);
          color: var(--color-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
        }

        .paiement-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 6px;
        }

        .paiement-card p {
          font-size: 13px;
          color: var(--color-gray-500);
        }

        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        @media (max-width: 640px) {
          .contact-form { padding: 28px 24px; }
          .contact-card { padding: 32px 24px; }
        }
      `}</style>
    </>
  )
}
