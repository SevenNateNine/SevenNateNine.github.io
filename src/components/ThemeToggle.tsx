import { useRef } from 'react'
import { flushSync } from 'react-dom'
import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './icons'

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> }
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    const doc = document as ViewTransitionDocument
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!doc.startViewTransition || reduced) {
      setTheme(next)
      return
    }

    // Anchor the wipe on the button and size it to reach the farthest corner,
    // so the circle always finishes by covering the whole viewport.
    const button = buttonRef.current?.getBoundingClientRect()
    const x = button ? button.left + button.width / 2 : window.innerWidth
    const y = button ? button.top + button.height / 2 : 0
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const style = document.documentElement.style
    style.setProperty('--theme-x', `${x}px`)
    style.setProperty('--theme-y', `${y}px`)
    style.setProperty('--theme-r', `${radius}px`)

    // The swap has to land before the browser snapshots the "new" frame, so it
    // cannot wait for React's normal async render.
    doc.startViewTransition(() => flushSync(() => setTheme(next)))
  }

  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="fixed top-5 right-5 z-50 rounded-full border border-faint/30 bg-bg/70 p-2.5 text-muted backdrop-blur transition-colors hover:border-accent hover:text-accent print:hidden"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
