import { Reveal } from './ui/Reveal'
import styles from './ProblemLine.module.css'

export function ProblemLine() {
  return (
    <section className={styles.section}>
      <Reveal y={16} duration={0.8} className={styles.text}>
        <h2 className="t-display">
          <span className={styles.line}>“Published” should mean</span>
          <span className={styles.line}>published.</span>
        </h2>
      </Reveal>
    </section>
  )
}
