import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/cn'

/**
 * Fades its children up the first time they scroll into view.
 * The animation is disabled by `prefers-reduced-motion` in index.css.
 */
export default function Reveal({ as: Element = 'div', className, children }) {
  const { ref, isVisible } = useReveal()

  return (
    <Element ref={ref} className={cn('reveal', isVisible && 'in', className)}>
      {children}
    </Element>
  )
}
