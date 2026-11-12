import type { CSSProperties } from 'react'

export type IconName =
  | 'folder'
  | 'users'
  | 'refresh'
  | 'archive'
  | 'clipboard'
  | 'funnel'
  | 'monitor'
  | 'document'
  | 'stack'
  | 'x'
  | 'instagram'
  | 'telegram'
  | 'menu'
  | 'logo-northgate'
  | 'logo-meridian'
  | 'logo-summit'
  | 'logo-lakewood'
  | 'logo-crestline'
  | 'logo-harborview'

type IconProps = {
  name: IconName
  size?: number
  width?: number
  height?: number
  color?: string
  className?: string
}

/**
 * Renders an SVG as a CSS mask so it can be tinted with any colour —
 * the same technique the original site uses for every icon and logo.
 */
export function Icon({ name, size = 16, width, height, color = '#fff', className }: IconProps) {
  const url = `url("/icons/${name}.svg")`
  const style: CSSProperties = {
    display: 'block',
    flexShrink: 0,
    width: width ?? size,
    height: height ?? size,
    backgroundColor: color,
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }
  return <span aria-hidden="true" className={className} style={style} />
}
