import { Link } from 'react-router-dom'

export default function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light'
  return (
    <Link to="/" className="logo" aria-label="GALERIE-ARTISAN.CI - Accueil">
      <div className="logo-mark" aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="36" height="36" rx="8" fill="var(--color-orange)" />
          <path d="M12 24 L12 16 L20 11 L28 16 L28 24 L23 24 L23 19 L17 19 L17 24 Z" fill="white" />
        </svg>
      </div>
      <div className="logo-text">
        <span className="logo-name" style={{ color: isLight ? 'var(--color-white)' : 'var(--color-black)' }}>
          GALERIE<span style={{ color: 'var(--color-orange)' }}>-</span>ARTISAN
        </span>
        <span className="logo-tagline" style={{ color: isLight ? 'var(--color-gray-300)' : 'var(--color-gray-400)' }}>
          L'art de vivre chez soi
        </span>
      </div>
      <style>{`
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        .logo-mark {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .logo-name {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        .logo-tagline {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 3px;
        }
        @media (max-width: 480px) {
          .logo-tagline { display: none; }
          .logo-name { font-size: 15px; }
        }
      `}</style>
    </Link>
  )
}
