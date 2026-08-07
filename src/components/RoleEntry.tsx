import type { Role } from '../content/resume'
import { TagList } from './TagList'

export function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="group relative grid gap-2 sm:grid-cols-8 sm:gap-6">
      <header className="sm:col-span-2">
        <p className="font-mono text-xs leading-6 tracking-wide text-faint uppercase">
          <time dateTime={role.dates.start}>{role.period}</time>
        </p>
      </header>

      <div className="sm:col-span-6">
        <h3 className="font-medium text-text">
          {role.title}
          <span className="text-muted"> · {role.company}</span>
        </h3>
        {role.location && <p className="mt-0.5 text-sm text-faint">{role.location}</p>}

        {role.summary && <p className="mt-3 text-sm leading-relaxed text-muted">{role.summary}</p>}

        <ul className="mt-3 space-y-3">
          {role.highlights.map((highlight) => (
            <li key={highlight.label ?? highlight.text} className="text-sm leading-relaxed text-muted">
              {highlight.label && (
                <span className="font-medium text-text">{highlight.label}: </span>
              )}
              {highlight.text}
            </li>
          ))}
        </ul>

        <TagList tags={role.tags} />
      </div>
    </li>
  )
}
