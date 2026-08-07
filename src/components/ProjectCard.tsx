import type { Project } from '../content/resume'
import { ArrowIcon } from './icons'
import { TagList } from './TagList'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group relative">
      {/* Sits behind the content so the hover wash extends past the text block. */}
      <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-lg bg-surface/0 transition-colors group-hover:bg-surface/60 lg:block" />

      <div className="relative">
        <h3 className="font-medium text-text">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-baseline gap-1.5 group-hover:text-accent"
            >
              {/* Stretches the click target over the whole card. */}
              <span className="absolute -inset-x-4 -inset-y-4 hidden lg:block" />
              {project.name}
              <ArrowIcon className="h-3 w-3 shrink-0 translate-y-px fill-current transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            project.name
          )}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>

        <TagList tags={project.tags} />
      </div>
    </li>
  )
}
