export default function PageHero({ tag, title, subtitle, breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="container">
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            {breadcrumb.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="bc-sep">/</span>}
                <span className={i === breadcrumb.length - 1 ? 'bc-current' : 'bc-item'}>
                  {item}
                </span>
              </span>
            ))}
          </nav>
        )}
        {tag && <span className="section-tag">{tag}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>

      <style>{`
        .page-hero {
          padding: 160px 0 80px;
          background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 100%);
          position: relative;
          overflow: hidden;
        }

        .page-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .page-hero > .container {
          position: relative;
          max-width: 880px;
          text-align: center;
        }

        .breadcrumb {
          display: flex;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 24px;
          color: var(--color-gray-400);
        }

        .bc-item {
          color: var(--color-gray-500);
        }

        .bc-current {
          color: var(--color-orange);
          font-weight: 600;
        }

        .bc-sep {
          margin: 0 8px;
          color: var(--color-gray-300);
        }

        .page-hero-title {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--color-black);
          margin: 16px 0;
        }

        .page-hero-subtitle {
          font-size: 18px;
          color: var(--color-gray-500);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .page-hero {
            padding: 120px 0 60px;
          }
        }
      `}</style>
    </section>
  )
}
