import { cn } from '../../lib/cn'

/**
 * Surface panel. When `spotlight` is on, an accent glow follows the cursor —
 * the handler writes the pointer position into CSS custom properties that the
 * `.spotlight` rule reads, so no re-render happens on mouse move.
 */
export default function Card({
  as: Element = 'div',
  spotlight = false,
  className,
  children,
  ...props
}) {
  const handleMouseMove = spotlight
    ? (event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty('--mx', `${event.clientX - bounds.left}px`)
        event.currentTarget.style.setProperty('--my', `${event.clientY - bounds.top}px`)
      }
    : undefined

  return (
    <Element
      onMouseMove={handleMouseMove}
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-card',
        spotlight && 'spotlight relative overflow-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  )
}
