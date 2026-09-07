import { useEffect, useState } from 'react'

/**
 * Tracks which section currently owns the viewport, to highlight the nav.
 *
 * Measures positions on scroll instead of relying on IntersectionObserver
 * callbacks: on mobile, momentum scrolling can carry a whole section past an
 * observer band between samples, leaving the nav highlighting the wrong entry.
 * Reading real positions always settles on the correct one.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (sectionIds.length === 0) return

    let frame = 0

    const measure = () => {
      const viewportHeight = window.innerHeight
      const line = viewportHeight * 0.475
      let fallbackId = null
      let largestVisible = 0

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const { top, bottom } = element.getBoundingClientRect()
        if (top <= line && bottom > line) {
          setActiveId(id)
          return
        }

        const visible = Math.min(bottom, viewportHeight) - Math.max(top, 0)
        if (visible > largestVisible) {
          largestVisible = visible
          fallbackId = id
        }
      }

      setActiveId(fallbackId)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  return activeId
}
