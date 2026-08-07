import { intro, profile, sections } from '../content/resume'
import { useActiveSection } from '../hooks/useActiveSection'
import { GitHubIcon, LetterboxdIcon, LinkedInIcon, MailIcon } from './icons'

const sectionIds = sections.map((section) => section.id)

const socials = [
  { href: profile.links.github, label: 'GitHub', Icon: GitHubIcon },
  { href: profile.links.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: profile.links.letterboxd, label: 'Letterboxd', Icon: LetterboxdIcon },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
]

export function Sidebar() {
  const active = useActiveSection(sectionIds)

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:max-w-sm lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-accent">{profile.title}</p>
        <p className="mt-1 font-mono text-xs tracking-wide text-faint uppercase">
          {profile.location}
        </p>

        <div className="mt-6 max-w-xs space-y-3">
          {intro.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <nav className="mt-12 hidden lg:block" aria-label="Sections">
          <ul className="space-y-3">
            {sections.map((section) => {
              const isActive = active === section.id
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? 'w-16 bg-accent'
                          : 'w-8 bg-faint group-hover:w-16 group-hover:bg-text'
                      }`}
                    />
                    <span
                      className={`font-mono text-xs tracking-[0.15em] uppercase transition-colors ${
                        isActive ? 'text-accent' : 'text-faint group-hover:text-text'
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex items-center gap-5 lg:mt-0">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            className="text-faint transition-colors hover:text-accent"
          >
            <Icon />
          </a>
        ))}

        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="ml-auto rounded-full border border-faint/40 px-4 py-1.5 font-mono text-xs tracking-wide text-muted uppercase transition-colors hover:border-accent hover:text-accent"
        >
          Résumé
        </a>
      </div>
    </header>
  )
}
