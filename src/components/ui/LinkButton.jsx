import { cn } from '../../lib/cn'

const VARIANTS = {
  primary:
    'sheen accent-gradient relative overflow-hidden border-transparent text-accent-contrast hover:brightness-110 hover:shadow-accent',
  secondary:
    'border-border-strong bg-surface text-text hover:bg-surface-hover hover:border-accent',
}

/**
 * Anchor styled as a button. `min-h-11` (44px) keeps it a comfortable touch
 * target on phones.
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
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] border px-4.5',
        'text-sm font-semibold transition-all active:translate-y-px',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </a>
  )
}
