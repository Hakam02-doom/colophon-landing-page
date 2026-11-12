import styles from './Stats.module.css'

const stats = [
  { value: '0', label: 'Failed load requests' },
  { value: '300/s', label: 'Sustained for 30 minutes' },
  { value: '10k', label: 'Records in one import' },
  { value: '400s', label: 'Backup to serving' },
]

const highlights = [
  { value: '540k', label: 'requests in the load run' },
  { value: '600/s', label: 'agent requests refused' },
  { value: '1 GiB', label: 'ceiling on queued payloads' },
]

export function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.glow} aria-hidden="true">
          <img src="/images/hero.jpg" alt="" />
        </div>

        <dl className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className={`t-body ${styles.statLabel}`}>{s.label}</dt>
              <dd className={styles.number}>{s.value}</dd>
            </div>
          ))}
        </dl>

        <figure className={`hairline ${styles.card}`}>
          <div className={styles.quoteCol}>
            <blockquote className={styles.quote}>
              <h3 className="t-h3">"My own site will be its first real user."</h3>
              <p className="t-body">
                I'm building Colophon in Rust and Svelte with Claude Code, in the open, and writing up every step,
                including the mistakes.
              </p>
            </blockquote>
            <figcaption className={styles.author}>
              <span className="t-button">The builder</span>
              <span className="t-body">Colophon · Rust and Svelte</span>
            </figcaption>
          </div>

          <div className={styles.highlights}>
            <div className={`cover ${styles.highlightsBg}`}>
              <img src="/images/testimonial.png" alt="" loading="lazy" />
            </div>
            {highlights.map((h) => (
              <div key={h.label} className={styles.highlight}>
                <span className="t-h2">{h.value}</span>
                <span className="t-body">{h.label}</span>
              </div>
            ))}
            <div className={styles.highlight} />
          </div>
        </figure>
      </div>
    </section>
  )
}
