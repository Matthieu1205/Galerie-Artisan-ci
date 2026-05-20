const VARIANTS = {
  success: { bg: 'rgba(255, 106, 0, 0.1)', color: 'var(--color-orange)', dot: 'var(--color-orange)' },
  warn: { bg: 'var(--color-gray-100)', color: 'var(--color-black)', dot: 'var(--color-black)' },
  neutral: { bg: 'var(--color-gray-50)', color: 'var(--color-gray-600)', dot: 'var(--color-gray-400)' },
  dark: { bg: 'var(--color-black)', color: 'var(--color-orange)', dot: 'var(--color-orange)' },
  vip: { bg: 'var(--color-orange)', color: 'white', dot: 'white' }
}

export default function Badge({ variant = 'neutral', children, dot = true }) {
  const v = VARIANTS[variant] || VARIANTS.neutral
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: dot ? 6 : 0,
        padding: '4px 10px',
        background: v.bg,
        color: v.color,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.05em',
        borderRadius: 999,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            background: v.dot,
            borderRadius: '50%'
          }}
        />
      )}
      {children}
    </span>
  )
}
