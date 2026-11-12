import type { ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  href: string
  variant?: 'glass' | 'dark'
  size?: 'sm' | 'md'
  children: ReactNode
}

export function Button({ href, variant = 'glass', size = 'md', children }: ButtonProps) {
  return (
    <a href={href} className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      <span className="t-button">{children}</span>
    </a>
  )
}
