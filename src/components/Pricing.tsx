import { useLayoutEffect, useRef, useState } from 'react'
import { Badge } from './ui/Badge'
import { Icon, type IconName } from './ui/Icon'
import styles from './Pricing.module.css'

type View = 'phase' | 'proof'

type Stage = {
  name: string
  value: Record<View, string>
  unit: Record<View, string>
  description: string
  image: string
  imageOpacity: number
  featured?: boolean
  features: { icon: IconName; label: string }[]
}

const stages: Stage[] = [
  {
    name: 'Core',
    value: { phase: 'P0–P3', proof: '1 seed' },
    unit: { phase: '/ done', proof: '/ bug' },
    description: 'Editing, publishing, and proof a publish landed.',
    image: '/images/pricing-free.jpg',
    imageOpacity: 0.26,
    features: [
      { icon: 'monitor', label: 'Numbered releases' },
      { icon: 'folder', label: 'Locales and accounts' },
      { icon: 'archive', label: 'Import and export' },
      { icon: 'document', label: 'Type builder' },
    ],
  },
  {
    name: 'Automation',
    value: { phase: 'P5', proof: '0' },
    unit: { phase: '/ closed', proof: '/ unauthorized actions' },
    description: 'Scripts and AI agents get safe, limited access to every capability.',
    image: '/images/pricing-pro.png',
    imageOpacity: 0.6,
    featured: true,
    features: [
      { icon: 'monitor', label: 'No token self-approval' },
      { icon: 'folder', label: 'Budgets in Postgres' },
      { icon: 'archive', label: 'Crash-safe bulk jobs' },
      { icon: 'document', label: 'Per-token quotas' },
      { icon: 'monitor', label: 'CLI and MCP parity' },
      { icon: 'monitor', label: 'Adversarial eval gate' },
    ],
  },
  {
    name: 'Operations',
    value: { phase: 'P6–P7', proof: '400s' },
    unit: { phase: '/ proven', proof: '/ restore drill' },
    description: 'Recovery drilled and load measured.',
    image: '/images/pricing-team.jpg',
    imageOpacity: 0.26,
    features: [
      { icon: 'monitor', label: 'Encrypted backups' },
      { icon: 'folder', label: 'WAL archiving' },
      { icon: 'archive', label: '540,063-request run' },
      { icon: 'document', label: 'Argon2id accounts' },
      { icon: 'monitor', label: 'Row-level visibility' },
      { icon: 'monitor', label: '24-hour soak pending' },
    ],
  },
]

const views: { id: View; label: string }[] = [
  { id: 'phase', label: 'Phase' },
  { id: 'proof', label: 'Proof' },
]

export function Pricing() {
  const [view, setView] = useState<View>('phase')
  const pills = useRef<Record<View, HTMLButtonElement | null>>({ phase: null, proof: null })
  const [fill, setFill] = useState({ left: 4, width: 0 })

  // Slide the white pill under whichever label is active, whatever its width.
  useLayoutEffect(() => {
    const el = pills.current[view]
    if (el) setFill({ left: el.offsetLeft, width: el.offsetWidth })
  }, [view])

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className="t-h2 fade-right">Where it stands.</h2>
          <p className="t-body">Each phase closes on stored evidence. This is what's done.</p>
        </div>

        <div className={styles.body}>
          <div className={styles.plansWrap}>
            <div className={`hairline ${styles.toggle}`} role="radiogroup" aria-label="Show phase or proof">
              <span
                className={styles.fill}
                style={{ left: fill.left, width: fill.width }}
                aria-hidden="true"
              />
              {views.map((v) => (
                <button
                  key={v.id}
                  ref={(el) => {
                    pills.current[v.id] = el
                  }}
                  type="button"
                  role="radio"
                  aria-checked={view === v.id}
                  className={`t-label ${styles.pill}`}
                  data-active={view === v.id}
                  onClick={() => setView(v.id)}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className={styles.cards}>
              {stages.map((p) => (
                <article
                  key={p.name}
                  className={`hairline ${p.featured ? 'hairline-soft' : ''} ${styles.card}`}
                >
                  <div className={styles.cardHead}>
                    <Badge>{p.name}</Badge>
                    <div className={styles.details}>
                      <div className={styles.price}>
                        <span className="t-price">{p.value[view]}</span>
                        <span className="t-body">{p.unit[view]}</span>
                      </div>
                      <p className="t-body">{p.description}</p>
                    </div>
                  </div>

                  <div className={`hairline ${styles.featureBox}`}>
                    <div className={`cover ${styles.featureBg}`} style={{ opacity: p.imageOpacity }}>
                      <img src={p.image} alt="" loading="lazy" />
                    </div>
                    <ul className={styles.features}>
                      {p.features.map((f) => (
                        <li key={f.label} className={styles.feature}>
                          <Icon name={f.icon} size={14} />
                          <span className="t-item">{f.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className={`t-small ${styles.note}`}>No speed claims until a benchmark with raw data backs them up.</p>
        </div>
      </div>
    </section>
  )
}
