/**
 * Joins class names, dropping falsy values so conditional classes can be
 * inlined: cn('base', isOpen && 'block', className)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
