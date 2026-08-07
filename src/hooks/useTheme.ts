import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

/** localStorage throws in private-mode Safari and when cookies are blocked. */
function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function writeStored(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* Preference just won't survive a reload. */
  }
}

function systemTheme(): Theme {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

/** The single place the DOM learns about the theme. */
function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

/**
 * The active theme, defaulting to the OS setting and following it until the
 * visitor picks one explicitly — after which their choice sticks across visits.
 *
 * `setTheme` writes to the DOM synchronously so it can be called inside a view
 * transition callback, where the swap has to happen before the frame is snapped.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => readStored() ?? systemTheme())

  const setTheme = useCallback((next: Theme) => {
    apply(next)
    writeStored(next)
    setThemeState(next)
  }, [])

  // The inline script in index.html already set this on first paint; re-applying
  // covers the case where localStorage was unreadable there but not here.
  useEffect(() => {
    apply(theme)
  }, [theme])

  // Track the OS while the visitor has no explicit preference of their own.
  useEffect(() => {
    const query = window.matchMedia(DARK_QUERY)
    const onChange = (event: MediaQueryListEvent) => {
      if (readStored()) return
      const next = event.matches ? 'dark' : 'light'
      apply(next)
      setThemeState(next)
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return { theme, setTheme }
}
