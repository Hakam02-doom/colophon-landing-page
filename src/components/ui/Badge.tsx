import type { CSSProperties, ReactNode } from 'react'

const style: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px 8px',
  borderRadius: 114,
  backgroundColor: 'var(--c-accent-soft)',
  color: 'var(--c-accent)',
  whiteSpace: 'pre',
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="t-small" style={style}>
      {children}
    </span>
  )
}
