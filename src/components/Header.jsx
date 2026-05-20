import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const NAV_ITEMS = [
  { to: '/', label: 'Accueil' },
  { to: '/immobilier', label: 'Immobilier' },
  { to: '/renovation', label: 'Rénovation' },
  { to: '/demenagement', label: 'Déménagement' },
  { to: '/garde-meuble', label: 'Garde-Meuble' },
  { to: '/ameublement', label: 'Ameublement' },
  { to: '/packs-promoteurs', label: 'Promoteurs' },
  { to: '/contact', label: 'Contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="nav-desktop" aria-label="Navigation principale">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary btn-sm header-cta">
            Demander un devis
          </Link>
          <button
            className={`burger ${menuOpen ? 'burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-nav">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>
            Demander un devis
          </Link>
        </nav>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: all var(--transition);
        }

        .header--scrolled {
          background: rgba(255, 255, 255, 0.95);
          border-bottom-color: var(--color-gray-100);
          box-shadow: var(--shadow-sm);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          gap: 24px;
        }

        .nav-desktop {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-gray-600);
          padding: 10px 16px;
          border-radius: var(--radius-full);
          transition: all var(--transition);
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-black);
          background: var(--color-gray-50);
        }

        .nav-link--active {
          color: var(--color-black);
          font-weight: 600;
        }

        .nav-link--active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 4px;
          height: 4px;
          background: var(--color-orange);
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .burger {
          display: none;
          width: 44px;
          height: 44px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border-radius: var(--radius-full);
          background: var(--color-gray-50);
        }

        .burger span {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--color-black);
          border-radius: 2px;
          transition: all var(--transition);
        }

        .burger--open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .burger--open span:nth-child(2) {
          opacity: 0;
        }

        .burger--open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--color-white);
          padding: 32px 24px;
          transform: translateX(100%);
          transition: transform var(--transition);
          overflow-y: auto;
        }

        .mobile-menu--open {
          transform: translateX(0);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-link {
          font-size: 18px;
          font-weight: 500;
          color: var(--color-black);
          padding: 16px 20px;
          border-radius: var(--radius-md);
          transition: all var(--transition);
          border-bottom: 1px solid var(--color-gray-100);
        }

        .mobile-link--active {
          background: var(--color-gray-50);
          color: var(--color-orange);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .nav-desktop { display: none; }
          .burger { display: flex; }
          .header-cta { display: none; }
        }

        @media (min-width: 1025px) {
          .mobile-menu { display: none; }
        }
      `}</style>
    </header>
  )
}
