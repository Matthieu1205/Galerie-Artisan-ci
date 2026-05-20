import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../AuthContext.jsx'
import Icon from '../../components/Icon.jsx'

export default function Login() {
  const { user, login } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('admin@galerie-artisan.ci')
  const [password, setPassword] = useState('admin123')
  const [showPwd, setShowPwd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (user) {
    const to = location.state?.from?.pathname || '/admin'
    return <Navigate to={to} replace />
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await login(email, password)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="login-bg-circle login-bg-c1"></div>
        <div className="login-bg-circle login-bg-c2"></div>
      </div>

      <div className="login-grid">
        <div className="login-left">
          <div className="login-brand">
            <div className="login-logo">
              <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
                <rect x="2" y="2" width="36" height="36" rx="8" fill="#ff6a00" />
                <path d="M12 24 L12 16 L20 11 L28 16 L28 24 L23 24 L23 19 L17 19 L17 24 Z" fill="white" />
              </svg>
              <div>
                <div className="login-name">GALERIE-ARTISAN.CI</div>
                <div className="login-sub">Espace Administration</div>
              </div>
            </div>
          </div>

          <div className="login-quote">
            <h1>Pilotez votre activité<br/>en un coup d'œil.</h1>
            <p>
              Tableau de bord complet pour gérer vos biens immobiliers, produits,
              commandes, devis, clients et statistiques.
            </p>

            <ul className="login-features">
              <li><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Statistiques en temps réel</li>
              <li><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Gestion complète du catalogue</li>
              <li><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Suivi commandes et devis</li>
              <li><Icon name="check" size={18} color="var(--color-orange)" strokeWidth={3} /> Gestion multi-utilisateurs</li>
            </ul>
          </div>
        </div>

        <div className="login-right">
          <div className="login-card">
            <h2 className="login-title">Connexion</h2>
            <p className="login-desc">Accédez à votre espace d'administration</p>

            <form onSubmit={submit} className="login-form">
              <div className="form-group">
                <label className="form-label">Email professionnel</label>
                <div className="login-input">
                  <Icon name="mail" size={18} color="var(--color-gray-400)" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="admin@galerie-artisan.ci"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Mot de passe</label>
                <div className="login-input">
                  <Icon name="key" size={18} color="var(--color-gray-400)" />
                  <input
                    type={showPwd ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    className="login-eye"
                    onClick={() => setShowPwd(!showPwd)}
                    aria-label={showPwd ? 'Cacher le mot de passe' : 'Afficher le mot de passe'}
                  >
                    <Icon name="search" size={16} color="var(--color-gray-400)" />
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="login-remember">
                  <input type="checkbox" />
                  <span>Se souvenir de moi</span>
                </label>
                <a href="#" className="login-forgot">Mot de passe oublié ?</a>
              </div>

              {error && <div className="login-error">{error}</div>}

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                disabled={loading}
              >
                {loading ? 'Connexion...' : 'Se connecter'}
                {!loading && <Icon name="arrow" size={18} />}
              </button>
            </form>

            <div className="login-demo">
              <strong>Comptes de démonstration</strong>
              <code>admin@galerie-artisan.ci / admin123</code>
              <code>editor@galerie-artisan.ci / editor123</code>
            </div>
          </div>

          <a href="/" className="login-back">
            <Icon name="arrow" size={14} /> Retour au site public
          </a>
        </div>
      </div>

      <style>{`
        .login-page {
          min-height: 100vh;
          background: var(--color-gray-50);
          position: relative;
          overflow: hidden;
        }

        .login-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .login-bg-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
        }

        .login-bg-c1 {
          top: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: rgba(255, 106, 0, 0.3);
        }

        .login-bg-c2 {
          bottom: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: rgba(10, 10, 10, 0.4);
        }

        .login-grid {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          z-index: 1;
        }

        .login-left {
          background: var(--color-black);
          color: white;
          padding: 64px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .login-left::before {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.15) 0%, transparent 60%);
          border-radius: 50%;
        }

        .login-brand {
          position: relative;
          z-index: 1;
        }

        .login-logo {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .login-name {
          font-size: 16px;
          font-weight: 800;
          color: white;
          letter-spacing: -0.01em;
        }

        .login-sub {
          font-size: 11px;
          color: var(--color-orange);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .login-quote {
          position: relative;
          z-index: 1;
        }

        .login-quote h1 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: white;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .login-quote p {
          font-size: 16px;
          color: var(--color-gray-300);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 440px;
        }

        .login-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .login-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--color-gray-300);
        }

        /* Right */
        .login-right {
          padding: 48px 64px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 24px;
        }

        .login-card {
          background: white;
          padding: 48px 40px;
          border-radius: var(--radius-xl);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 440px;
        }

        .login-title {
          font-size: 32px;
          font-weight: 800;
          color: var(--color-black);
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .login-desc {
          color: var(--color-gray-500);
          font-size: 15px;
          margin-bottom: 32px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .login-input {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--color-gray-50);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          transition: all var(--transition);
        }

        .login-input:focus-within {
          background: white;
          border-color: var(--color-orange);
        }

        .login-input input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: 14px;
          color: var(--color-black);
        }

        .login-eye {
          padding: 4px;
          opacity: 0.6;
          transition: opacity var(--transition);
        }

        .login-eye:hover { opacity: 1; }

        .login-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0 24px;
        }

        .login-remember {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--color-gray-500);
          cursor: pointer;
        }

        .login-remember input {
          width: 16px;
          height: 16px;
          accent-color: var(--color-orange);
        }

        .login-forgot {
          font-size: 13px;
          color: var(--color-orange);
          font-weight: 600;
        }

        .login-error {
          padding: 12px 16px;
          background: rgba(255, 106, 0, 0.08);
          border-left: 3px solid var(--color-orange);
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--color-black);
          margin-bottom: 16px;
        }

        .login-demo {
          margin-top: 32px;
          padding: 20px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .login-demo strong {
          font-size: 11px;
          color: var(--color-gray-500);
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .login-demo code {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: var(--color-orange);
          background: white;
          padding: 6px 10px;
          border-radius: var(--radius-sm);
        }

        .login-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--color-gray-500);
          font-weight: 500;
        }

        .login-back svg { transform: rotate(180deg); }

        .login-back:hover { color: var(--color-orange); }

        @media (max-width: 1024px) {
          .login-grid { grid-template-columns: 1fr; }
          .login-left {
            padding: 40px 32px;
            min-height: 40vh;
          }
          .login-right { padding: 40px 32px; }
        }

        @media (max-width: 480px) {
          .login-card { padding: 32px 24px; }
        }
      `}</style>
    </div>
  )
}
