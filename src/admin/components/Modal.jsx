import { useEffect } from 'react'
import Icon from '../../components/Icon.jsx'

export default function Modal({ open, onClose, title, children, size = 'md', footer }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [open])

  useEffect(() => {
    const handler = e => e.key === 'Escape' && onClose && onClose()
    if (open) window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const widths = { sm: 440, md: 600, lg: 820 }

  return (
    <div className="adm-modal-overlay" onClick={onClose}>
      <div
        className="adm-modal"
        style={{ maxWidth: widths[size] }}
        onClick={e => e.stopPropagation()}
      >
        <header className="adm-modal-head">
          <h3>{title}</h3>
          <button onClick={onClose} className="adm-modal-close" aria-label="Fermer">
            <Icon name="plus" size={18} color="var(--color-black)" />
          </button>
        </header>
        <div className="adm-modal-body">{children}</div>
        {footer && <footer className="adm-modal-foot">{footer}</footer>}
      </div>

      <style>{`
        .adm-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(8px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s;
        }

        .adm-modal {
          background: white;
          border-radius: var(--radius-xl);
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          animation: scaleIn 0.25s;
          overflow: hidden;
        }

        .adm-modal-head {
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-gray-100);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .adm-modal-head h3 {
          font-size: 18px;
          font-weight: 800;
          color: var(--color-black);
        }

        .adm-modal-close {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
          transition: all var(--transition);
        }

        .adm-modal-close:hover {
          background: var(--color-orange);
        }

        .adm-modal-close:hover svg { fill: white; }

        .adm-modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }

        .adm-modal-foot {
          padding: 16px 24px;
          border-top: 1px solid var(--color-gray-100);
          background: var(--color-gray-50);
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
      `}</style>
    </div>
  )
}
