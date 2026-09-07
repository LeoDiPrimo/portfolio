import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Returns a ref to attach and whether it is already visible. Unobserves after
 * the first hit — the entrance only plays once.
 */
/** Without IntersectionObserver everything starts visible, never at opacity 0. */
const isSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(!isSupported)

  useEffect(() => {
    const element = ref.current
    if (!element || !isSupported) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
