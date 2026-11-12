import { Button } from './ui/Button'
import { PixelLogo } from './ui/PixelLogo'

export function FinalCTA() {
  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px var(--gutter) 60px',
        overflow: 'clip',
      }}
    >
      <PixelLogo />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <h2 className="t-h2 fade-right">Follow the build.</h2>
          <p className="t-body" style={{ maxWidth: 330 }}>
            Every step of the build is written up in the open, including the mistakes.
          </p>
        </div>
        <Button href="#">Read the build log</Button>
      </div>
    </section>
  )
}
