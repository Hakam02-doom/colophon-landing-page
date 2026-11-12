import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'

const wrap: CSSProperties = {
  position: 'relative',
  width: 227,
  height: 143,
  overflow: 'hidden',
  flexShrink: 0,
  WebkitMaskImage: 'linear-gradient(#000 49%, rgba(0,0,0,0) 100%)',
  maskImage: 'linear-gradient(#000 49%, rgba(0,0,0,0) 100%)',
}
const art: CSSProperties = {
  width: 227,
  height: 155,
  backgroundImage: 'url(/images/logo.png)',
  backgroundRepeat: 'repeat',
  backgroundPosition: '50% 50%',
  backgroundSize: '334px auto',
}

/** Large pixel "P" mark that rises in and fades out toward the bottom. */
export function PixelLogo() {
  return (
    <div style={wrap} aria-hidden="true">
      <Reveal y={141} fromOpacity={0.5} duration={1.2}>
        <div style={art} />
      </Reveal>
    </div>
  )
}

/** Small 24px brand mark used in the nav and footer. */
export function LogoMark() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'block',
        width: 24,
        height: 24,
        flexShrink: 0,
        backgroundImage: 'url(/images/logo.png)',
        backgroundRepeat: 'repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: '44.5px auto',
      }}
    />
  )
}
