import { Button } from './ui/Button'
import { Icon, type IconName } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import styles from './Hero.module.css'

// Logo widths keep the source's 20px rendering height (viewBox width × 20/24).
const logos: { name: IconName; width: number }[] = [
  { name: 'logo-northgate', width: 158 },
  { name: 'logo-meridian', width: 100 },
  { name: 'logo-summit', width: 86 },
  { name: 'logo-lakewood', width: 117 },
  { name: 'logo-crestline', width: 90 },
  { name: 'logo-harborview', width: 133 },
]

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={styles.tickerRow} aria-hidden={hidden || undefined}>
      {logos.map((l) => (
        <li key={l.name}>
          <Icon name={l.name} width={l.width} height={20} color="rgba(255,255,255,0.4)" />
        </li>
      ))}
    </ul>
  )
}

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <img src="/images/hero.jpg" alt="" />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.headingBody}>
          <h1 className="t-h1">Publish with proof.</h1>
          <p className={`t-body ${styles.sub}`}>
            Colophon is a CMS where every publish becomes a numbered release, with a record of what went live.
          </p>
        </div>
        <div className={styles.buttons}>
          <Button href="#">See a demo site</Button>
          <Button href="#product" variant="dark">
            How a publish works
          </Button>
        </div>
      </div>

      <div className={styles.trusted}>
        <Reveal y={20} delay={0.8} duration={0.8} className={styles.trustedInner}>
          <p className="t-body">Built in the open.</p>
          <div className={styles.ticker}>
            <div className={styles.track}>
              <LogoRow />
              <LogoRow hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
