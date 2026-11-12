import { useState } from 'react'
import { Button } from './ui/Button'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What is Colophon?',
    a: "A content management system: the place where you write, review and publish a website's articles.",
  },
  {
    q: 'Why is it called Colophon?',
    a: 'In a book, the colophon is the note at the back that says how, when and by whom it was printed. Colophon keeps that record for a website.',
  },
  {
    q: 'What is it built with?',
    a: 'Rust and Svelte on PostgreSQL, built with Claude Code. Every step is written up in the open, mistakes included.',
  },
  {
    q: 'Can AI agents and scripts use it?',
    a: 'Yes, with safe, limited access. A token can never approve token-submitted work, and per-token quotas throttle a noisy agent.',
  },
  {
    q: 'What happens if it crashes mid-publish?',
    a: 'You lose nothing you saved. Every change runs through thousands of simulated crashes, and any failure comes with a seed that replays it.',
  },
  {
    q: 'Can I use it for my site today?',
    a: "Not yet. The builder's own site will be its first real user, and five demo sites already run on it.",
  },
]

/**
 * Each card flips from its question to its answer when clicked
 * (the source swaps the card content rather than expanding below).
 */
export function FAQ() {
  const [open, setOpen] = useState<Set<number>>(new Set())

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className="t-h2 fade-right">Questions, answered.</h2>
          <p className="t-body">Short answers about what Colophon is and where it stands.</p>
        </div>
        <div className={styles.help}>
          <p className={`t-label ${styles.helpText}`}>Didn't find what you're looking for?</p>
          <Button href="#" size="sm">
            Get in touch
          </Button>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open.has(i)
            return (
              <button
                key={f.q}
                type="button"
                className={`hairline ${isOpen ? '' : 'hairline-soft'} ${styles.item}`}
                data-open={isOpen}
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                {isOpen && (
                  <span className={`cover ${styles.answerBg}`} aria-hidden="true">
                    <img src="/images/faq-answer.png" alt="" />
                  </span>
                )}
                <span className={styles.text}>
                  {isOpen ? (
                    <span className="t-body" style={{ color: '#fff' }}>
                      <span className="visually-hidden">{f.q} </span>
                      {f.a}
                    </span>
                  ) : (
                    <span className="t-label">{f.q}</span>
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
