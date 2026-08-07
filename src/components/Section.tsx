import type { ReactNode } from 'react'

/**
 * One page section. The heading is visible only below `lg`, where the sidebar nav
 * scrolls away — on desktop the pinned nav already says where you are.
 */
export function Section({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-16 py-12 lg:py-20">
      <h2
        id={`${id}-heading`}
        className="sticky top-0 z-10 -mx-6 mb-6 bg-bg/80 px-6 py-4 font-mono text-xs tracking-[0.2em] text-muted uppercase backdrop-blur lg:static lg:mx-0 lg:mb-8 lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
      >
        {label}
      </h2>
      {children}
    </section>
  )
}
