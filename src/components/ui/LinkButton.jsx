import { cn } from '../../lib/cn'
import { BUTTON_BASE, BUTTON_VARIANTS } from './buttonStyles'

/**
 * Anchor styled as a button. Shares its looks with `CopyButton` through
 * `buttonStyles`.
 *
 * External links get `target`/`rel` automatically; `mailto:` and in-page
 * anchors stay in the same tab.
 */
export default function LinkButton({
  href,
  variant = 'secondary',
  className,
  children,
}) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], className)}
    >
      {children}
    </a>
  )
}
