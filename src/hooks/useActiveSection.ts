import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, for the sidebar nav highlight.
 * The top-heavy root margin means a section counts as "active" once its heading
 * reaches the upper third of the viewport, which is where the eye already is.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    // A callback only reports sections whose state *changed*, so intersection has
    // to be accumulated across calls rather than read off `entries` alone.
    const intersecting = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id)
          else intersecting.delete(entry.target.id)
        }

        // Two sections can share the band at a boundary; `ids` is in document
        // order, so the first match is the one nearer the top.
        const current = ids.find((id) => intersecting.has(id))
        if (current) setActive(current)
      },
      { rootMargin: '-10% 0px -70% 0px' },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [ids])

  return active
}
