import { ProjectCard } from './components/ProjectCard'
import { RoleEntry } from './components/RoleEntry'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import { ThemeToggle } from './components/ThemeToggle'
import { about, education, experience, profile, projects, skills } from './content/resume'

export default function App() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-text"
      >
        Skip to content
      </a>

      <ThemeToggle />

      <div className="mx-auto min-h-screen max-w-5xl px-6 py-12 lg:flex lg:gap-12 lg:px-10 lg:py-0 xl:gap-16">
        <Sidebar />

        <main id="content" className="lg:w-[60%] lg:py-24">
          <Section id="about" label="About">
            <div className="max-w-2xl space-y-4">
              {about.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Section>

          <Section id="experience" label="Experience">
            <ol className="space-y-12">
              {experience.map((role) => (
                <RoleEntry key={`${role.company}-${role.title}`} role={role} />
              ))}
            </ol>

            <div className="mt-12 grid gap-2 border-t border-surface pt-8 sm:grid-cols-8 sm:gap-6">
              <p className="font-mono text-xs leading-6 tracking-wide text-faint uppercase sm:col-span-2">
                {education.period}
              </p>
              <div className="sm:col-span-6">
                <h3 className="font-medium text-text">
                  {education.degree}
                  <span className="text-muted"> · {education.school}</span>
                </h3>
                <p className="mt-0.5 text-sm text-faint">{education.location}</p>
              </div>
            </div>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 font-medium text-text hover:text-accent"
            >
              View full résumé
              <span aria-hidden="true">↓</span>
            </a>
          </Section>

          <Section id="projects" label="Projects">
            <ul className="space-y-10">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </ul>
          </Section>

          <Section id="skills" label="Skills">
            <dl className="space-y-6">
              {skills.map((group) => (
                <div key={group.label} className="grid gap-2 sm:grid-cols-8 sm:gap-6">
                  <dt className="font-mono text-xs leading-6 tracking-wide text-faint uppercase sm:col-span-2">
                    {group.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-muted sm:col-span-6">
                    {group.items.join(' · ')}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <footer className="border-t border-surface py-10 text-sm text-faint">
            <p>
              Built with React, TypeScript, and Tailwind. Set in Inter and JetBrains Mono.{' '}
              <a
                href="https://github.com/SevenNateNine/SevenNateNine.github.io"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Source
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
