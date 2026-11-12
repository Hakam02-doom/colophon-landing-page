import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** vertical offset in px the element rises from */
  y?: number
  delay?: number
  duration?: number
  /** starting opacity before the element is revealed */
  fromOpacity?: number
  className?: string
  style?: CSSProperties
}

/** Fades + lifts its children in the first time they scroll into view. */
export function Reveal({
  children,
  y = 16,
  delay = 0,
  duration = 0.8,
  fromOpacity = 0,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : fromOpacity,
        transform: shown ? 'none' : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.44,0,0.56,1) ${delay}s, transform ${duration}s cubic-bezier(0.44,0,0.56,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
