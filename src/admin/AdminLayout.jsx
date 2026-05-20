import { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext.jsx'
import Icon from '../components/Icon.jsx'

const MENU = [
  { to: '/admin', label: 'Tableau de bord', icon: 'home', end: true },
  { section: 'Catalogue' },
  { to: '/admin/biens', label: 'Biens immobiliers', icon: 'building' },
  { to: '/admin/produits', label: 'Produits', icon: 'sofa' },
  { section: 'Activité' },
  { to: '/admin/commandes', label: 'Commandes', icon: 'cart' },
  { to: '/admin/devis', label: 'Devis', icon: 'document' },
  { to: '/admin/reservations', label: 'Réservations', icon: 'clock' },
  { section: 'Utilisateurs' },
  { to: '/admin/clients', label: 'Clients', icon: 'users' },
  { to: '/admin/utilisateurs', label: 'Admins', icon: 'shield' },
  { section: 'Système' },
  { to: '/admin/parametres', label: 'Paramètres', icon: 'tools' }
]

const PAGE_TITLES = {
  '/admin': { title: 'Tableau de bord', sub: 'Vue d\'ensemble de votre activité' },
  '/admin/biens': { title: 'Biens immobiliers', sub: 'Gérez votre catalogue de biens' },
  '/admin/produits': { title: 'Produits', sub: 'Catalogue ameublement' },
  '/admin/commandes': { title: 'Commandes', sub: 'Suivi des commandes en ligne' },
  '/admin/devis': { title: 'Devis', sub: 'Demandes et propositions commerciales' },
  '/admin/reservations': { title: 'Réservations', sub: 'Visites, déménagements et garde-meuble' },
  '/admin/clients': { title: 'Clients', sub: 'Base clients et historique' },
  '/admin/utilisateurs': { title: 'Administrateurs', sub: 'Comptes utilisateurs back-office' },
  '/admin/parametres': { title: 'Paramètres', sub: 'Configuration du site' }
}

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  const meta = PAGE_TITLES[location.pathname] || { title: 'Administration', sub: '' }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="admin-shell">
      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="admin-brand">
          <div className="admin-logo">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <rect x="2" y="2" width="36" height="36" rx="8" fill="var(--color-orange)" />
              <path d="M12 24 L12 16 L20 11 L28 16 L28 24 L23 24 L23 19 L17 19 L17 24 Z" fill="white" />
            </svg>
            <div>
              <div className="admin-brand-name">GALERIE-ARTISAN</div>
              <div className="admin-brand-sub">Administration</div>
            </div>
          </div>
        </div>

        <nav className="admin-nav">
          {MENU.map((item, i) => {
            if (item.section) {
              return <div key={i} className="admin-nav-section">{item.section}</div>
            }
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `admin-nav-link ${isActive ? 'admin-nav-link--active' : ''}`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="admin-sidebar-foot">
          <a href="/" target="_blank" rel="noopener noreferrer" className="admin-back-site">
            <Icon name="globe" size={16} />
            <span>Voir le site public</span>
          </a>
        </div>
      </aside>

      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              className="admin-burger"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Ouvrir le menu"
            >
              <span></span><span></span><span></span>
            </button>
            <div>
              <h1 className="admin-page-title">{meta.title}</h1>
              <p className="admin-page-sub">{meta.sub}</p>
            </div>
          </div>

          <div className="admin-topbar-right">
            <div className="admin-search">
              <Icon name="search" size={16} color="var(--color-gray-400)" />
              <input type="text" placeholder="Rechercher..." />
              <kbd>⌘K</kbd>
            </div>

            <button className="admin-notif" aria-label="Notifications">
              <Icon name="mail" size={18} color="var(--color-gray-600)" />
              <span className="admin-notif-dot"></span>
            </button>

            <div className="admin-user-wrap">
              <button
                className="admin-user"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="admin-avatar">{user?.name?.charAt(0) || 'A'}</div>
                <div className="admin-user-info">
                  <span className="admin-user-name">{user?.name || 'Admin'}</span>
                  <span className="admin-user-role">{user?.role || 'Administrateur'}</span>
                </div>
              </button>

              {userMenuOpen && (
                <div className="admin-user-menu">
                  <div className="admin-user-card">
                    <div className="admin-avatar admin-avatar-lg">{user?.name?.charAt(0) || 'A'}</div>
                    <div>
                      <strong>{user?.name}</strong>
                      <span>{user?.email}</span>
                    </div>
                  </div>
                  <NavLink to="/admin/parametres" onClick={() => setUserMenuOpen(false)}>
                    <Icon name="tools" size={16} /> Paramètres
                  </NavLink>
                  <button onClick={handleLogout} className="admin-user-logout">
                    <Icon name="arrow" size={16} />
                    Se déconnecter
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </div>

      <style>{`
        .admin-shell {
          min-height: 100vh;
          background: var(--color-gray-50);
          display: grid;
          grid-template-columns: 260px 1fr;
        }

        .admin-sidebar {
          background: var(--color-black);
          color: white;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          overflow-y: auto;
        }

        .admin-sidebar::-webkit-scrollbar {
          width: 6px;
        }

        .admin-sidebar::-webkit-scrollbar-thumb {
          background: var(--color-gray-700);
          border-radius: 3px;
        }

        .admin-brand {
          padding: 0 24px 24px;
          border-bottom: 1px solid var(--color-gray-700);
          margin-bottom: 24px;
        }

        .admin-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .admin-brand-name {
          font-size: 14px;
          font-weight: 800;
          color: white;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .admin-brand-sub {
          font-size: 10px;
          color: var(--color-orange);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .admin-nav {
          flex: 1;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .admin-nav-section {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-gray-400);
          padding: 16px 12px 8px;
        }

        .admin-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 12px;
          border-radius: var(--radius-md);
          font-size: 13.5px;
          font-weight: 500;
          color: var(--color-gray-300);
          transition: all var(--transition);
        }

        .admin-nav-link:hover {
          background: var(--color-gray-700);
          color: white;
        }

        .admin-nav-link--active {
          background: var(--color-orange);
          color: white;
          font-weight: 600;
          box-shadow: var(--shadow-orange);
        }

        .admin-nav-link--active:hover {
          background: var(--color-orange);
        }

        .admin-nav-link svg {
          flex-shrink: 0;
          opacity: 0.9;
        }

        .admin-sidebar-foot {
          padding: 16px 24px 0;
          border-top: 1px solid var(--color-gray-700);
          margin-top: 24px;
        }

        .admin-back-site {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: var(--radius-md);
          font-size: 12px;
          color: var(--color-gray-400);
          transition: all var(--transition);
        }

        .admin-back-site:hover {
          background: var(--color-gray-700);
          color: var(--color-orange);
        }

        /* Main */
        .admin-main {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .admin-topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: white;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .admin-topbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .admin-burger {
          display: none;
          width: 40px;
          height: 40px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
        }

        .admin-burger span {
          width: 16px;
          height: 2px;
          background: var(--color-black);
          border-radius: 1px;
        }

        .admin-page-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-black);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .admin-page-sub {
          font-size: 13px;
          color: var(--color-gray-500);
          margin-top: 2px;
        }

        .admin-topbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .admin-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          width: 280px;
          border: 2px solid transparent;
          transition: all var(--transition);
        }

        .admin-search:focus-within {
          border-color: var(--color-orange);
          background: white;
        }

        .admin-search input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-size: 13px;
          color: var(--color-black);
        }

        .admin-search input::placeholder {
          color: var(--color-gray-400);
        }

        .admin-search kbd {
          padding: 2px 6px;
          background: white;
          color: var(--color-gray-500);
          font-size: 11px;
          font-family: var(--font-family);
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-gray-100);
        }

        .admin-notif {
          width: 42px;
          height: 42px;
          background: var(--color-gray-50);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
        }

        .admin-notif:hover {
          background: var(--color-gray-100);
        }

        .admin-notif-dot {
          position: absolute;
          top: 10px;
          right: 12px;
          width: 8px;
          height: 8px;
          background: var(--color-orange);
          border-radius: 50%;
          border: 2px solid white;
        }

        .admin-user-wrap {
          position: relative;
        }

        .admin-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px 6px 6px;
          background: var(--color-gray-50);
          border-radius: var(--radius-full);
          transition: all var(--transition);
        }

        .admin-user:hover {
          background: var(--color-gray-100);
        }

        .admin-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--color-black);
          color: var(--color-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13px;
          flex-shrink: 0;
        }

        .admin-avatar-lg {
          width: 48px;
          height: 48px;
          font-size: 18px;
        }

        .admin-user-info {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          text-align: left;
        }

        .admin-user-name {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-black);
        }

        .admin-user-role {
          font-size: 11px;
          color: var(--color-gray-500);
        }

        .admin-user-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
          padding: 8px;
          min-width: 260px;
          z-index: 30;
          animation: scaleIn 0.2s;
        }

        .admin-user-card {
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--color-gray-100);
          margin-bottom: 8px;
        }

        .admin-user-card strong {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-black);
        }

        .admin-user-card span {
          font-size: 12px;
          color: var(--color-gray-500);
        }

        .admin-user-menu a,
        .admin-user-menu button {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-gray-700);
          transition: all var(--transition);
          text-align: left;
        }

        .admin-user-menu a:hover,
        .admin-user-menu button:hover {
          background: var(--color-gray-50);
          color: var(--color-black);
        }

        .admin-user-logout {
          color: var(--color-orange) !important;
        }

        .admin-user-logout svg {
          transform: rotate(180deg);
        }

        /* Content */
        .admin-content {
          padding: 32px;
          flex: 1;
        }

        .admin-overlay {
          display: none;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .admin-shell { grid-template-columns: 1fr; }
          .admin-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 260px;
            z-index: 100;
            transform: translateX(-100%);
            transition: transform var(--transition);
          }
          .admin-sidebar--open { transform: translateX(0); }
          .admin-burger { display: flex; }
          .admin-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(10, 10, 10, 0.5);
            z-index: 99;
          }
          .admin-search { width: 200px; }
        }

        @media (max-width: 768px) {
          .admin-user-info { display: none; }
          .admin-search { display: none; }
          .admin-page-sub { display: none; }
          .admin-topbar { padding: 12px 16px; }
          .admin-content { padding: 20px 16px; }
        }
      `}</style>
    </div>
  )
}
