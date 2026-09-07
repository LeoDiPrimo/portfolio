import { cn } from '../../lib/cn'

const VARIANTS = {
  default: 'border-border bg-surface-2 text-muted',
  accent: 'border-transparent bg-accent-subtle text-accent',
}

/**
 * Small pill for skills, tech stacks and highlights.
 * Renders as a plain element so the caller picks the semantics
 * (`as="li"` inside a list, `as="span"` inline).
 */
export default function Badge({
  as: Element = 'span',
  variant = 'default',
  className,
  children,
}) {
  return (
    <Element
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
        'text-xs font-semibold',
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </Element>
  )
}
