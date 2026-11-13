import { useEffect, useRef, useState } from 'react'
import { Badge } from './ui/Badge'
import styles from './Product.module.css'

type Step = { badge: string; title: string; body: string; screen: string }

const steps: Step[] = [
  {
    badge: '01  Write',
    title: 'Saved edits stay saved.',
    body: 'Kill it at any moment and lose nothing. Locales, mirrored references, import and export, and the type builder all sit on that editing core.',
    screen: '/images/screen-1.webp',
  },
  {
    badge: '02  Review',
    title: 'Review gates every release.',
    body: 'Named review stages gate publishing, in order, per environment. Comments pin to the exact revision they were written on, so a note always points at the text it was about.',
    screen: '/images/screen-2.webp',
  },
  {
    badge: '03  Publish',
    title: 'Each publish is a numbered release.',
    body: 'Every publish becomes a numbered release with a record of exactly what went live. No publish happens twice, and no reader sees half of one.',
    screen: '/images/screen-3.webp',
  },
  {
    badge: '04 Prove',
    title: 'Published means it was seen.',
    body: "The site update shows as pending until it's actually seen. Step back through any release with a slider; rolling back is just a new, reviewed release.",
    screen: '/images/screen-4.webp',
  },
]

/**
 * Sticky product showcase. The panel pins 40px from the top while three
 * 150px "trigger" strips scroll underneath; each trigger that enters the
 * viewport advances the active step.
 */
export function Product() {
  const triggers = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const update = () => {
      let next = 0
      triggers.current.forEach((t, i) => {
        if (t && t.getBoundingClientRect().top < window.innerHeight - 40) next = i + 1
      })
      setActive(next)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section id="product" className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.glow} aria-hidden="true">
          <img src="/images/hero.jpg" alt="" />
        </div>

        <div className={styles.header}>
          <h2 className={`t-h1 fade-right ${styles.title}`}>
            Every publish,
            <br />
            on the record.
          </h2>
          <p className={`t-body ${styles.intro}`}>
            In a book, the colophon says how, when and by whom it was printed. Colophon does that for a website.
          </p>
        </div>

        <div className={styles.row}>
          <div className={`hairline ${styles.copyBox}`}>
            <div className={styles.copyStack}>
              {steps.map((s, i) => (
                <div
                  key={s.badge}
                  className={styles.step}
                  data-active={i === active}
                  aria-hidden={i !== active}
                >
                  <Badge>{s.badge}</Badge>
                  <div className={styles.stepContent}>
                    <h3 className="t-h3">{s.title}</h3>
                    <p className="t-body">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.screenFrame}>
            <div className={styles.screen}>
              {steps.map((s, i) => (
                <img
                  key={s.screen}
                  src={s.screen}
                  alt={i === active ? `Colophon Studio: ${s.title}` : ''}
                  data-active={i === active}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={styles.trigger}
          ref={(el) => {
            triggers.current[i] = el
          }}
        />
      ))}
    </section>
  )
}
