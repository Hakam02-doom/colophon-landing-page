import { Icon } from './ui/Icon'
import { PixelLogo } from './ui/PixelLogo'
import styles from './Workflow.module.css'

const items = [
  { title: 'Everything has a limit', body: 'Time, retries, queue sizes, memory and disk each have a ceiling.' },
  { title: 'Numbers or nothing', body: 'No speed claims until a benchmark with raw data backs them up.' },
  { title: 'Bugs you can replay', body: 'A failing run comes with a seed that reproduces it exactly.' },
]

export function Workflow() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden="true">
        <img src="/images/hero.jpg" alt="" loading="lazy" />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.heading}>
        <h2 className={`t-h2 ${styles.title}`}>
          No AI hype.
          {' '}
          <br className="br-desktop" />
          The headline is reliability.
        </h2>
        <p className={`t-body ${styles.sub}`}>
          Scripts and AI agents get safe, limited access. Every feature ships with its failures tested.
        </p>
      </div>

      <div className={styles.logo}>
        <PixelLogo />
      </div>

      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it.title} className={styles.item}>
            <div className={styles.iconName}>
              <Icon name="folder" size={16} />
              <h3 className="t-button">{it.title}</h3>
            </div>
            <p className="t-body">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
