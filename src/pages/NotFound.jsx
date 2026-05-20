import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="nf-inner">
          <div className="nf-code">404</div>
          <h1 className="nf-title">Page introuvable</h1>
          <p className="nf-text">
            La page que vous cherchez n'existe pas ou a été déplacée.
            Retournez à l'accueil pour découvrir nos services.
          </p>
          <div className="nf-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              Retour à l'accueil
              <Icon name="arrow" size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .notfound {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
        }

        .nf-inner {
          text-align: center;
          max-width: 540px;
          margin: 0 auto;
        }

        .nf-code {
          font-size: 160px;
          font-weight: 900;
          letter-spacing: -0.05em;
          color: var(--color-orange);
          line-height: 1;
          background: linear-gradient(180deg, var(--color-orange) 0%, var(--color-orange-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nf-title {
          font-size: 36px;
          font-weight: 800;
          color: var(--color-black);
          margin: 16px 0 16px;
        }

        .nf-text {
          font-size: 16px;
          color: var(--color-gray-500);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .nf-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .nf-code { font-size: 100px; }
        }
      `}</style>
    </section>
  )
}
