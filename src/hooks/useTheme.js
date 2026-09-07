import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

/** Reads what the inline script in index.html already applied. */
function readTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark'
}

/**
 * Manual light/dark switch, persisted in localStorage.
 *
 * The initial value is read from the DOM rather than from storage: the inline
 * script in index.html has already resolved it before paint, so this stays in
 * sync with what the user actually sees.
 */
export function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Private mode or storage disabled: the theme still applies for this visit.
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
