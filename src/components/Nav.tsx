import { useState } from 'react'
import { Button } from './ui/Button'
import { Icon } from './ui/Icon'
import { LogoMark } from './ui/PixelLogo'
import styles from './Nav.module.css'

const links = [
  { label: 'Product', href: '#product' },
  { label: 'Status', href: '#pricing' },
  { label: 'Build log', href: '#' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.nav} data-open={open}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} aria-label="Colophon home" onClick={close}>
          <LogoMark />
          <span className="t-label">Colophon</span>
        </a>
        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={`t-body ${styles.link}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.buttons}>
          <Button href="#" size="sm">
            See a demo
          </Button>
          <Button href="#" variant="dark" size="sm">
            Contact
          </Button>
        </div>
        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      <div id="mobile-menu" className={styles.mobileMenu} hidden={!open}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className={`t-button ${styles.mobileLink}`} onClick={close}>
            {l.label}
          </a>
        ))}
        <div className={styles.mobileButtons}>
          <Button href="#">See a demo</Button>
          <Button href="#" variant="dark">
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}
