export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2250758986069?text=Bonjour%20GALERIE-ARTISAN.CI%2C%20je%20souhaite%20des%20informations."
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Contacter par WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.971.999-3.6-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
      </svg>
      <span className="wa-tooltip">Discutons sur WhatsApp</span>

      <style>{`
        .wa-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          z-index: 50;
          transition: all var(--transition);
          animation: wa-pulse 2s infinite;
        }

        .wa-float:hover {
          transform: scale(1.1);
        }

        .wa-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: var(--color-black);
          color: white;
          padding: 8px 14px;
          font-size: 13px;
          font-weight: 500;
          border-radius: var(--radius-full);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--transition);
        }

        .wa-float:hover .wa-tooltip {
          opacity: 1;
        }

        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 8px 24px rgba(37, 211, 102, 0.7), 0 0 0 12px rgba(37, 211, 102, 0.1); }
        }

        @media (max-width: 480px) {
          .wa-float {
            width: 54px;
            height: 54px;
            bottom: 16px;
            right: 16px;
          }
          .wa-tooltip { display: none; }
        }
      `}</style>
    </a>
  )
}
