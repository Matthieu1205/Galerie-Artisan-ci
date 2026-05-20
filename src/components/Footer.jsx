import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo variant="light" />
            <p className="footer-tagline">
              La vitrine du génie créatif Africain. Solutions complètes pour vos projets
              immobiliers, d'aménagement, de rénovation et de déménagement en Côte d'Ivoire.
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.51a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.94z"/></svg>
              </a>
              <a href="https://wa.me/2250758986069" aria-label="WhatsApp" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.971.999-3.6-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Nos Services</h4>
            <ul className="footer-list">
              <li><Link to="/immobilier">Immobilier</Link></li>
              <li><Link to="/renovation">Rénovation</Link></li>
              <li><Link to="/demenagement">Déménagement</Link></li>
              <li><Link to="/garde-meuble">Garde-Meuble</Link></li>
              <li><Link to="/ameublement">Ameublement</Link></li>
              <li><Link to="/packs-promoteurs">Packs Promoteurs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">L'entreprise</h4>
            <ul className="footer-list">
              <li><Link to="/">À propos</Link></li>
              <li><Link to="/contact">Réalisations</Link></li>
              <li><Link to="/contact">Témoignages</Link></li>
              <li><Link to="/contact">Carrières</Link></li>
              <li><Link to="/contact">Devis gratuit</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list footer-contact">
              <li>
                <span className="footer-label">Adresse</span>
                <span>Modeste, Nouveau goudron, cité 3CB<br/>Grand Bassam, Côte d'Ivoire</span>
              </li>
              <li>
                <span className="footer-label">Téléphone</span>
                <a href="tel:+2250758986069">(+225) 0758986069</a><br/>
                <a href="tel:+2250544050707">(+225) 0544050707</a>
              </li>
              <li>
                <span className="footer-label">Site web</span>
                <a href="https://www.galerie-artisan.ci">www.galerie-artisan.ci</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} GALERIE-ARTISAN.CI — Tous droits réservés.</p>
          <p className="footer-credit">Qualité · Harmonie · Rentabilité</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-black);
          color: var(--color-gray-300);
          padding: 80px 0 32px;
          margin-top: 80px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid var(--color-gray-700);
        }

        .footer-tagline {
          margin-top: 20px;
          font-size: 14px;
          color: var(--color-gray-300);
          line-height: 1.7;
          max-width: 320px;
        }

        .socials {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-gray-700);
          color: var(--color-white);
          border-radius: var(--radius-full);
          transition: all var(--transition);
        }

        .social-link:hover {
          background: var(--color-orange);
          transform: translateY(-2px);
        }

        .footer-heading {
          color: var(--color-white);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .footer-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-list a {
          font-size: 14px;
          color: var(--color-gray-300);
          transition: color var(--transition);
        }

        .footer-list a:hover {
          color: var(--color-orange);
        }

        .footer-contact li {
          font-size: 14px;
          line-height: 1.6;
        }

        .footer-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-gray-400);
          margin-bottom: 4px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          font-size: 13px;
          color: var(--color-gray-400);
        }

        .footer-credit {
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
