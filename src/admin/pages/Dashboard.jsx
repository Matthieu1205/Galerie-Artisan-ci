import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'
import Badge from '../components/Badge.jsx'
import { STATS, CHART_VENTES, REPARTITION_SERVICES, ACTIVITES, COMMANDES, DEVIS, formatFcfa, formatDate } from '../mockData.js'

export default function Dashboard() {
  const recentCommandes = COMMANDES.slice(0, 5)
  const recentDevis = DEVIS.slice(0, 4)
  const maxChart = Math.max(...CHART_VENTES.map(d => d.value))
  const totalRepartition = REPARTITION_SERVICES.reduce((s, v) => s + v.value, 0)

  return (
    <div className="admin-page">
      {/* KPIs */}
      <div className="kpi-grid">
        <KpiCard
          label="Ventes totales (mois)"
          value={formatFcfa(STATS.ventesTotal)}
          evolution={STATS.ventesEvolution}
          icon="cart"
        />
        <KpiCard
          label="Nouvelles commandes"
          value={STATS.commandesNouvelles}
          evolution={STATS.commandesEvolution}
          icon="document"
        />
        <KpiCard
          label="Biens actifs"
          value={STATS.biensActifs}
          evolution={STATS.biensEvolution}
          icon="building"
        />
        <KpiCard
          label="Clients enregistrés"
          value={STATS.clientsTotal}
          evolution={STATS.clientsEvolution}
          icon="users"
        />
      </div>

      {/* Charts row */}
      <div className="dash-row">
        <div className="admin-card dash-chart">
          <div className="admin-card-head">
            <div>
              <h3>Évolution des ventes</h3>
              <p style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4 }}>
                12 derniers mois — millions FCFA
              </p>
            </div>
            <select className="dash-period">
              <option>12 mois</option>
              <option>6 mois</option>
              <option>3 mois</option>
            </select>
          </div>

          <div className="bar-chart">
            {CHART_VENTES.map((d, i) => (
              <div key={i} className="bar-col">
                <div
                  className="bar"
                  style={{ height: `${(d.value / maxChart) * 100}%` }}
                  title={`${d.value} M FCFA`}
                >
                  <span className="bar-tip">{d.value}M</span>
                </div>
                <span className="bar-label">{d.mois}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card dash-repart">
          <div className="admin-card-head">
            <h3>Répartition par service</h3>
          </div>

          <div className="repart-list">
            {REPARTITION_SERVICES.map((r, i) => {
              const pct = ((r.value / totalRepartition) * 100).toFixed(0)
              return (
                <div key={i} className="repart-item">
                  <div className="repart-info">
                    <span className="repart-name">{r.service}</span>
                    <strong>{pct}%</strong>
                  </div>
                  <div className="repart-bar">
                    <div
                      className="repart-bar-fill"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Activity + recent commandes */}
      <div className="dash-row">
        <div className="admin-card">
          <div className="admin-card-head">
            <h3>Commandes récentes</h3>
            <Link to="/admin/commandes">Voir tout</Link>
          </div>
          <div className="recent-list">
            {recentCommandes.map(c => (
              <div key={c.id} className="recent-item">
                <div className="recent-avatar">{c.client.charAt(0)}</div>
                <div className="recent-info">
                  <div className="recent-title">
                    <strong>#{c.id}</strong> · {c.client}
                  </div>
                  <span className="recent-sub">
                    {c.articles} article{c.articles > 1 ? 's' : ''} · {c.paiement}
                  </span>
                </div>
                <div className="recent-right">
                  <strong>{formatFcfa(c.montant)}</strong>
                  <Badge variant={
                    c.statut === 'Livrée' ? 'success' :
                    c.statut === 'Annulée' ? 'neutral' : 'warn'
                  }>
                    {c.statut}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-head">
            <h3>Activité récente</h3>
            <a href="#">Tout voir</a>
          </div>
          <div className="activite-list">
            {ACTIVITES.slice(0, 6).map(a => (
              <div key={a.id} className="activite-item">
                <div className={`activite-icon activite-icon--${a.type}`}>
                  <Icon
                    name={
                      a.type === 'commande' ? 'cart' :
                      a.type === 'devis' ? 'document' :
                      a.type === 'visite' ? 'building' :
                      a.type === 'reservation' ? 'clock' : 'users'
                    }
                    size={14}
                  />
                </div>
                <div className="activite-info">
                  <p>{a.label}</p>
                  <span>{a.user} · {a.time}</span>
                </div>
                {a.amount && (
                  <span className="activite-amount">{formatFcfa(a.amount)}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Devis en attente */}
      <div className="admin-card">
        <div className="admin-card-head">
          <h3>Devis à traiter</h3>
          <Link to="/admin/devis">Voir tout</Link>
        </div>
        <div className="devis-grid">
          {recentDevis.map(d => (
            <div key={d.id} className="devis-mini">
              <div className="devis-mini-head">
                <strong>#{d.id}</strong>
                <Badge variant={
                  d.priority === 'Haute' ? 'success' :
                  d.priority === 'Basse' ? 'neutral' : 'warn'
                }>
                  {d.priority}
                </Badge>
              </div>
              <p className="devis-mini-client">{d.client}</p>
              <p className="devis-mini-service">{d.service}</p>
              <div className="devis-mini-foot">
                <span>{formatFcfa(d.montant)}</span>
                <small>{formatDate(d.date)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dash-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .dash-row:nth-of-type(2) {
          grid-template-columns: 1fr 1fr;
        }

        .dash-period {
          padding: 8px 12px;
          background: var(--color-gray-50);
          border: 1px solid var(--color-gray-100);
          border-radius: var(--radius-sm);
          font-size: 12px;
          color: var(--color-gray-700);
          font-weight: 500;
          font-family: var(--font-family);
        }

        /* Bar chart */
        .bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          height: 240px;
          padding-top: 16px;
        }

        .bar-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          gap: 8px;
        }

        .bar {
          width: 100%;
          max-width: 36px;
          background: linear-gradient(180deg, var(--color-orange) 0%, var(--color-orange-dark) 100%);
          border-radius: 6px 6px 0 0;
          position: relative;
          transition: all var(--transition);
          cursor: pointer;
        }

        .bar:hover {
          filter: brightness(1.1);
          transform: scaleX(1.05);
        }

        .bar-tip {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-black);
          color: white;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 11px;
          font-weight: 600;
          opacity: 0;
          transition: opacity var(--transition);
          pointer-events: none;
          white-space: nowrap;
        }

        .bar:hover .bar-tip {
          opacity: 1;
        }

        .bar-label {
          font-size: 11px;
          color: var(--color-gray-500);
          font-weight: 600;
        }

        /* Répartition */
        .repart-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .repart-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .repart-name {
          font-size: 13px;
          color: var(--color-gray-700);
          font-weight: 500;
        }

        .repart-info strong {
          font-size: 13px;
          color: var(--color-black);
          font-weight: 700;
        }

        .repart-bar {
          width: 100%;
          height: 6px;
          background: var(--color-gray-100);
          border-radius: 3px;
          overflow: hidden;
        }

        .repart-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--color-orange) 0%, var(--color-orange-dark) 100%);
          border-radius: 3px;
          transition: width 0.6s ease-out;
        }

        /* Recent commandes */
        .recent-list, .activite-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .recent-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-md);
          transition: background var(--transition);
        }

        .recent-item:hover {
          background: var(--color-gray-50);
        }

        .recent-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--color-black);
          color: var(--color-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          flex-shrink: 0;
        }

        .recent-info {
          flex: 1;
          min-width: 0;
        }

        .recent-title {
          font-size: 13px;
          color: var(--color-black);
          margin-bottom: 2px;
        }

        .recent-title strong {
          color: var(--color-orange);
          font-weight: 700;
        }

        .recent-sub {
          font-size: 11px;
          color: var(--color-gray-500);
        }

        .recent-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .recent-right strong {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-black);
        }

        /* Activité */
        .activite-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-md);
          transition: background var(--transition);
        }

        .activite-item:hover {
          background: var(--color-gray-50);
        }

        .activite-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .activite-icon--commande { background: var(--color-orange); color: white; }
        .activite-icon--devis { background: var(--color-black); color: var(--color-orange); }
        .activite-icon--visite { background: var(--color-gray-700); color: white; }
        .activite-icon--reservation { background: var(--color-orange-dark); color: white; }
        .activite-icon--client { background: var(--color-gray-50); color: var(--color-black); border: 1px solid var(--color-gray-100); }

        .activite-info {
          flex: 1;
          min-width: 0;
        }

        .activite-info p {
          font-size: 13px;
          color: var(--color-black);
          font-weight: 500;
          margin-bottom: 2px;
        }

        .activite-info span {
          font-size: 11px;
          color: var(--color-gray-500);
        }

        .activite-amount {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-orange);
        }

        /* Devis grid */
        .devis-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .devis-mini {
          padding: 20px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
          transition: all var(--transition);
        }

        .devis-mini:hover {
          background: white;
          box-shadow: var(--shadow-sm);
          transform: translateY(-2px);
        }

        .devis-mini-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .devis-mini-head strong {
          font-size: 14px;
          color: var(--color-orange);
          font-weight: 800;
        }

        .devis-mini-client {
          font-size: 14px;
          color: var(--color-black);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .devis-mini-service {
          font-size: 12px;
          color: var(--color-gray-500);
          margin-bottom: 16px;
          min-height: 32px;
        }

        .devis-mini-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--color-gray-100);
        }

        .devis-mini-foot span {
          font-size: 13px;
          font-weight: 800;
          color: var(--color-black);
        }

        .devis-mini-foot small {
          font-size: 11px;
          color: var(--color-gray-400);
        }

        @media (max-width: 1280px) {
          .devis-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 1024px) {
          .dash-row, .dash-row:nth-of-type(2) { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .devis-grid { grid-template-columns: 1fr; }
          .bar-chart { gap: 4px; }
          .bar-label { font-size: 9px; }
        }
      `}</style>
    </div>
  )
}

function KpiCard({ label, value, evolution, icon }) {
  const isUp = evolution >= 0
  return (
    <div className="kpi-card">
      <div className="kpi-head">
        <span className="kpi-label">{label}</span>
        <div className="kpi-icon">
          <Icon name={icon} size={18} color="var(--color-orange)" />
        </div>
      </div>
      <div className="kpi-value">{value}</div>
      <div className={`kpi-evolution ${isUp ? 'kpi-evolution--up' : 'kpi-evolution--down'}`}>
        {isUp ? '▴' : '▾'} {Math.abs(evolution)}%
        <span className="kpi-evolution-period">vs mois dernier</span>
      </div>
    </div>
  )
}
