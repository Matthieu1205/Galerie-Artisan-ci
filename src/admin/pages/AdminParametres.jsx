import { useState } from 'react'
import Icon from '../../components/Icon.jsx'

const SECTIONS = [
  { id: 'general', label: 'Général', icon: 'home' },
  { id: 'identite', label: 'Identité visuelle', icon: 'paint' },
  { id: 'paiement', label: 'Paiements', icon: 'cart' },
  { id: 'reseaux', label: 'Réseaux sociaux', icon: 'globe' },
  { id: 'seo', label: 'SEO', icon: 'search' },
  { id: 'notifications', label: 'Notifications', icon: 'mail' }
]

export default function AdminParametres() {
  const [section, setSection] = useState('general')
  const [saved, setSaved] = useState(false)

  const save = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="param-grid">
      <aside className="param-sidebar">
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => setSection(s.id)}
            className={`param-tab ${section === s.id ? 'param-tab--active' : ''}`}
          >
            <Icon name={s.icon} size={16} />
            <span>{s.label}</span>
          </button>
        ))}
      </aside>

      <form className="param-content admin-card" onSubmit={save}>
        {section === 'general' && (
          <>
            <h3 className="param-h3">Informations de l'entreprise</h3>
            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Nom de l'entreprise</label>
                <input className="form-control" defaultValue="GALERIE-ARTISAN.CI" />
              </div>
              <div className="form-group">
                <label className="form-label">Slogan</label>
                <input className="form-control" defaultValue="L'art de vivre chez soi" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Adresse complète</label>
              <input className="form-control" defaultValue="Modeste, Nouveau goudron, cité 3CB, Grand Bassam" />
            </div>
            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Téléphone principal</label>
                <input className="form-control" defaultValue="+225 0758986069" />
              </div>
              <div className="form-group">
                <label className="form-label">Téléphone secondaire</label>
                <input className="form-control" defaultValue="+225 0544050707" />
              </div>
            </div>
            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Email professionnel</label>
                <input className="form-control" defaultValue="contact@galerie-artisan.ci" />
              </div>
              <div className="form-group">
                <label className="form-label">Site web</label>
                <input className="form-control" defaultValue="www.galerie-artisan.ci" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Description courte</label>
              <textarea className="form-control" rows={3} defaultValue="Plateforme multiservices spécialisée dans l'immobilier, la rénovation, le déménagement, le garde-meuble et l'ameublement en Côte d'Ivoire."></textarea>
            </div>
          </>
        )}

        {section === 'identite' && (
          <>
            <h3 className="param-h3">Identité visuelle</h3>
            <div className="form-group">
              <label className="form-label">Logo principal</label>
              <div className="param-upload">
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 12, background: 'var(--color-orange)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon name="home" size={28} color="white" />
                  </div>
                  <div>
                    <strong>logo-galerie-artisan.svg</strong>
                    <p>SVG · Format vectoriel</p>
                  </div>
                </div>
                <button type="button" className="btn-admin btn-admin-ghost">Remplacer</button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Couleurs de marque</label>
              <div className="color-grid">
                <ColorPick label="Couleur principale" value="#ff6a00" />
                <ColorPick label="Couleur secondaire" value="#0a0a0a" />
                <ColorPick label="Couleur neutre" value="#525252" />
                <ColorPick label="Arrière-plan" value="#ffffff" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Police de caractères</label>
              <select className="form-control" defaultValue="Inter">
                <option>Inter</option>
                <option>Poppins</option>
                <option>Manrope</option>
              </select>
            </div>
          </>
        )}

        {section === 'paiement' && (
          <>
            <h3 className="param-h3">Modes de paiement acceptés</h3>
            <div className="payment-grid">
              {[
                { nom: 'Orange Money', actif: true },
                { nom: 'MTN Money', actif: true },
                { nom: 'Wave', actif: true },
                { nom: 'Paiement à la livraison', actif: true },
                { nom: 'Virement bancaire', actif: true },
                { nom: 'Carte bancaire (Visa/Mastercard)', actif: false }
              ].map(p => (
                <div key={p.nom} className="payment-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'var(--color-black)',
                      color: 'var(--color-orange)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 800, fontSize: 13
                    }}>
                      {p.nom.charAt(0)}
                    </div>
                    <strong style={{ fontSize: 14 }}>{p.nom}</strong>
                  </div>
                  <label className="param-toggle">
                    <input type="checkbox" defaultChecked={p.actif} />
                    <span className="param-toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        {section === 'reseaux' && (
          <>
            <h3 className="param-h3">Réseaux sociaux</h3>
            <div className="form-group">
              <label className="form-label">Facebook</label>
              <input className="form-control" placeholder="https://facebook.com/galerieartisan.ci" />
            </div>
            <div className="form-group">
              <label className="form-label">Instagram</label>
              <input className="form-control" placeholder="https://instagram.com/galerieartisan.ci" />
            </div>
            <div className="form-group">
              <label className="form-label">TikTok</label>
              <input className="form-control" placeholder="https://tiktok.com/@galerieartisan.ci" />
            </div>
            <div className="form-group">
              <label className="form-label">WhatsApp Business</label>
              <input className="form-control" defaultValue="+225 0758986069" />
            </div>
            <div className="form-group">
              <label className="form-label">Google Maps (lien partage)</label>
              <input className="form-control" placeholder="https://maps.google.com/..." />
            </div>
          </>
        )}

        {section === 'seo' && (
          <>
            <h3 className="param-h3">Référencement SEO</h3>
            <div className="form-group">
              <label className="form-label">Titre principal (balise title)</label>
              <input className="form-control" defaultValue="GALERIE-ARTISAN.CI — L'art de vivre chez soi" />
              <p className="form-hint">Recommandé : 50-60 caractères</p>
            </div>
            <div className="form-group">
              <label className="form-label">Meta description</label>
              <textarea className="form-control" rows={3} defaultValue="GALERIE-ARTISAN.CI - Immobilier, Rénovation, Déménagement, Garde-Meuble, Ameublement à Abidjan et en Côte d'Ivoire."></textarea>
              <p className="form-hint">Recommandé : 150-160 caractères</p>
            </div>
            <div className="form-group">
              <label className="form-label">Mots-clés (séparés par virgules)</label>
              <textarea className="form-control" rows={2} defaultValue="immobilier Abidjan, vente terrain Côte d'Ivoire, déménagement Abidjan, garde meuble Abidjan, ameublement sur mesure"></textarea>
            </div>
            <div className="adm-form-row adm-form-row-2">
              <div className="form-group">
                <label className="form-label">Google Analytics ID</label>
                <input className="form-control" placeholder="G-XXXXXXXXXX" />
              </div>
              <div className="form-group">
                <label className="form-label">Facebook Pixel ID</label>
                <input className="form-control" placeholder="1234567890" />
              </div>
            </div>
          </>
        )}

        {section === 'notifications' && (
          <>
            <h3 className="param-h3">Notifications automatiques</h3>
            <div className="payment-grid">
              {[
                { titre: 'Email à la création de commande', desc: 'Envoyer un email de confirmation au client', actif: true },
                { titre: 'SMS à la confirmation de livraison', desc: 'SMS au client lors de la mise à jour du statut', actif: true },
                { titre: 'WhatsApp pour les devis', desc: 'Notification WhatsApp à la création d\'un devis', actif: true },
                { titre: 'Email aux admins pour nouvelle commande', desc: 'Alerter les administrateurs en temps réel', actif: true },
                { titre: 'Newsletter mensuelle', desc: 'Envoyer une newsletter à la base clients', actif: false }
              ].map((n, i) => (
                <div key={i} className="payment-row">
                  <div style={{ flex: 1 }}>
                    <strong style={{ fontSize: 14, display: 'block', marginBottom: 2 }}>{n.titre}</strong>
                    <span style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{n.desc}</span>
                  </div>
                  <label className="param-toggle">
                    <input type="checkbox" defaultChecked={n.actif} />
                    <span className="param-toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="param-actions">
          {saved && (
            <span className="param-saved">
              <Icon name="check" size={14} color="var(--color-orange)" strokeWidth={3} />
              Modifications enregistrées
            </span>
          )}
          <button type="button" className="btn-admin btn-admin-ghost">Annuler</button>
          <button type="submit" className="btn-admin btn-admin-orange">
            Enregistrer
          </button>
        </div>
      </form>

      <style>{`
        .param-grid {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 24px;
        }

        .param-sidebar {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-gray-100);
          padding: 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          height: fit-content;
        }

        .param-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: var(--radius-md);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-gray-600);
          text-align: left;
          transition: all var(--transition);
        }

        .param-tab:hover {
          background: var(--color-gray-50);
          color: var(--color-black);
        }

        .param-tab--active {
          background: var(--color-orange);
          color: white;
          font-weight: 600;
        }

        .param-content {
          padding: 32px !important;
        }

        .param-h3 {
          font-size: 18px;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--color-gray-100);
        }

        .form-hint {
          font-size: 11px;
          color: var(--color-gray-400);
          margin-top: 4px;
        }

        .param-upload {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
        }

        .param-upload strong {
          display: block;
          font-size: 14px;
          color: var(--color-black);
        }

        .param-upload p {
          font-size: 12px;
          color: var(--color-gray-500);
          margin-top: 2px;
        }

        .color-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .payment-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .payment-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 18px;
          background: var(--color-gray-50);
          border-radius: var(--radius-md);
        }

        /* Toggle switch */
        .param-toggle {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
          flex-shrink: 0;
        }

        .param-toggle input { display: none; }

        .param-toggle-slider {
          position: absolute;
          inset: 0;
          background: var(--color-gray-200);
          border-radius: 24px;
          cursor: pointer;
          transition: var(--transition);
        }

        .param-toggle-slider::before {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          background: white;
          top: 3px;
          left: 3px;
          border-radius: 50%;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }

        .param-toggle input:checked + .param-toggle-slider {
          background: var(--color-orange);
        }

        .param-toggle input:checked + .param-toggle-slider::before {
          transform: translateX(20px);
        }

        .param-actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--color-gray-100);
        }

        .param-saved {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--color-orange);
          margin-right: auto;
        }

        @media (max-width: 1024px) {
          .param-grid { grid-template-columns: 1fr; }
          .param-sidebar {
            flex-direction: row;
            overflow-x: auto;
          }
          .param-tab { white-space: nowrap; }
          .color-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  )
}

function ColorPick({ label, value }) {
  return (
    <div>
      <div style={{
        height: 64,
        background: value,
        borderRadius: 12,
        marginBottom: 8,
        border: '1px solid var(--color-gray-100)'
      }}></div>
      <div style={{ fontSize: 11, color: 'var(--color-gray-500)', fontWeight: 600 }}>{label}</div>
      <code style={{
        fontSize: 11,
        fontFamily: 'monospace',
        color: 'var(--color-gray-700)',
        background: 'var(--color-gray-50)',
        padding: '2px 6px',
        borderRadius: 4,
        marginTop: 4,
        display: 'inline-block'
      }}>{value}</code>
    </div>
  )
}
