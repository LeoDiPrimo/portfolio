import { cn } from '../../lib/cn'

/**
 * The only place where horizontal rhythm is defined: max width and side
 * padding. Every section wraps its content in a Container so the whole site
 * lines up, and no other component sets its own side margins.
 */
export default function Container({ as: Element = 'div', className, children }) {
  return (
    <Element className={cn('mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </Element>
  )
}
