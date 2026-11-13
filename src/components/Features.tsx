import { useEffect, useRef, useState } from 'react'
import { Icon, type IconName } from './ui/Icon'
import styles from './Features.module.css'

type Card = {
  icon: IconName
  title: string
  body: string
  image: string
  tone: 'olive' | 'teal'
  hue: number
  height: number
}

const cards: Card[] = [
  {
    icon: 'folder',
    title: 'Sites',
    body: 'Pages, a menu and a theme are ordinary content. A fixed section library and design tokens turn them into websites.',
    image: '/images/screen-1.webp',
    tone: 'olive',
    hue: 0,
    height: 355,
  },
  {
    icon: 'users',
    title: 'Collaboration',
    body: 'Comments pin to the exact revision they were written on, and named review stages gate publishing.',
    image: '/images/screen-2.webp',
    tone: 'teal',
    hue: 51,
    height: 363,
  },
  {
    icon: 'refresh',
    title: 'Time travel',
    body: 'Every public read can pin a release. Rolling back builds an ordinary changeset that goes through review.',
    image: '/images/screen-3.webp',
    tone: 'olive',
    hue: 41,
    height: 363,
  },
  {
    icon: 'archive',
    title: 'Media',
    body: 'Uploads are quarantined and proved by decode before use. A release refuses to publish an unusable asset.',
    image: '/images/screen-4.webp',
    tone: 'olive',
    hue: 66,
    height: 355,
  },
  {
    icon: 'clipboard',
    title: 'Schema migrations',
    body: "A refused type change becomes a dry-run plan of every entry in the way, approved by the plan's hash.",
    image: '/images/screen-1.webp',
    tone: 'olive',
    hue: 100,
    height: 355,
  },
  {
    icon: 'funnel',
    title: 'Developer program',
    body: 'OpenAPI emitted from the route table, a drift-checked TypeScript SDK, and GraphQL that compiles to bounded queries.',
    image: '/images/screen-2.webp',
    tone: 'teal',
    hue: 0,
    height: 363,
  },
]

/** card width (282) + gap (16) */
const STEP = 298

export function Features() {
  const scroller = useRef<HTMLUListElement>(null)
  const [page, setPage] = useState(0)
  const [perPage, setPerPage] = useState(3)
  const pages = Math.ceil(cards.length / perPage)

  // Like the source slideshow: a "page" is as many whole cards as fit in view.
  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const measure = () => setPerPage(Math.max(1, Math.floor(el.clientWidth / STEP)))
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      const p = el.scrollLeft >= max - 2 ? pages - 1 : Math.round(el.scrollLeft / (STEP * perPage))
      setPage(Math.min(pages - 1, p))
    }
    measure()
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [pages, perPage])

  const goTo = (p: number) => {
    scroller.current?.scrollTo({ left: p * perPage * STEP, behavior: 'smooth' })
  }

  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={`t-h2 fade-right ${styles.heading}`}>
          Proof over features.
          {' '}
          <br className="br-desktop" />
          What's proven so far.
        </h2>

        <div className={styles.carousel}>
          <ul ref={scroller} className={styles.track} aria-label="Features">
            {cards.map((c) => (
              <li key={c.title}>
                <article className={`hairline ${styles.card}`} style={{ height: c.height }}>
                  <div
                    className={`${styles.hue} ${c.tone === 'teal' ? styles.teal : styles.olive}`}
                    style={{ filter: `hue-rotate(${c.hue}deg)` }}
                  />
                  <div className={styles.imageWrap}>
                    <div className={styles.image}>
                      <img src={c.image} alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.iconName}>
                      <Icon name={c.icon} size={16} />
                      <h3 className="t-button">{c.title}</h3>
                    </div>
                    <p className="t-body">{c.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className={styles.dots} role="tablist" aria-label="Carousel pages">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={page === i}
                aria-label={`Page ${i + 1}`}
                className={styles.dotBtn}
                onClick={() => goTo(i)}
              >
                <span className={styles.dot} data-active={page === i} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
