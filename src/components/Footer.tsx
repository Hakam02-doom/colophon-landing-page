import { Icon, type IconName } from './ui/Icon'
import { LogoMark } from './ui/PixelLogo'
import styles from './Footer.module.css'

const columns: { title: string; icon: IconName; links: { label: string; href: string }[] }[] = [
  {
    title: 'Product',
    icon: 'monitor',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Status', href: '#pricing' },
    ],
  },
  {
    title: 'Resources',
    icon: 'stack',
    links: [
      { label: 'Build log', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    icon: 'document',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

const socials: { icon: IconName; href: string; label: string }[] = [
  { icon: 'x', href: 'https://www.x.com/', label: 'X' },
  { icon: 'instagram', href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: 'telegram', href: 'https://www.telegram.com/', label: 'Telegram' },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>
              <LogoMark />
              <span className="t-button">Colophon</span>
            </a>
            <p className={`t-body ${styles.tagline}`}>
              A CMS where every publish becomes a numbered release.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className={styles.social}>
                  <Icon name={s.icon} size={14} color="rgba(255,255,255,0.4)" />
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {columns.map((c) => (
              <div key={c.title} className={styles.column}>
                <div className={styles.colTitle}>
                  <Icon name={c.icon} size={14} />
                  <h3 className="t-item">{c.title}</h3>
                </div>
                {c.links.map((l) => (
                  <a key={l.label} href={l.href} className={`t-body ${styles.link}`}>
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className="t-body" style={{ color: '#fff' }}>
            Built in Rust and Svelte, in the open.
          </p>
          <p className="t-small" style={{ color: 'var(--c-muted)' }}>
            © 2026 Colophon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
