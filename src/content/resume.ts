/**
 * The single source of truth for every string on this site.
 * Components render this data and hold no copy of their own — edit here, not there.
 */

export type Role = {
  company: string
  title: string
  location?: string
  /** Displayed in the date gutter, e.g. "2021 — Present". */
  period: string
  /** Machine-readable range for the <time> elements. */
  dates: { start: string; end?: string }
  /** Optional lead-in above the highlights. */
  summary?: string
  highlights: { label?: string; text: string }[]
  tags: string[]
}

export type Project = {
  name: string
  blurb: string
  tags: string[]
  /** Omitted when the project has no public repo — the card renders unlinked. */
  href?: string
}

export type SkillGroup = {
  label: string
  items: string[]
}

export const profile = {
  name: 'Nathaniel Chan',
  title: 'Software Engineer',
  tagline: 'Developer, movie buff, and aspiring polyglot.',
  location: 'Bayside, New York',
  email: 'nate.chan29@gmail.com',
  resume: '/resume.pdf',
  links: {
    github: 'https://github.com/SevenNateNine',
    linkedin: 'https://www.linkedin.com/in/nathaniel-chan-a9723813a/',
    letterboxd: 'https://letterboxd.com/SevenNateNine/',
  },
} as const

export const intro = [
  'Full-stack engineer with five years in financial services, working primarily in .NET, TypeScript, and React.',
]

export const about = [
  'A culmination of maintaining existing monolithic systems, re-platforming legacy applications, and building new platforms from scratch.',
  'Work is owned end to end, from the first design conversation to the production rollout and every feature afterwards.',
  'Away from the keyboard I aspire to learn new languages, watch movies, and enjoy the great outdoors.',
]

export const experience: Role[] = [
  {
    company: 'Assured Guaranty',
    title: 'Software Engineer',
    location: 'New York, NY',
    period: '2021 — Present',
    dates: { start: '2021-08' },
    summary:
      'Full stack engineer developing and maintaining a suite of financial service platforms in React and .NET.',
    highlights: [
      {
        label: 'Platform migrations',
        text: 'Migrated legacy systems onto a React micro frontend architecture, re-platformed as web applications that handle data entry, calculations, and approvals automatically. Preserved existing business behavior throughout, iterated on each screen with the people who use it, and helped define the core components and design specifications the team builds against.',
      },
      {
        label: 'Data reconciliation',
        text: 'Lead developer from design through production on a platform that merges records from separate source systems into one trusted dataset. Applied deduplication and validation rules to protect data integrity, with snapshot and history features for reporting.',
      },
      {
        label: 'Legacy accounting service',
        text: 'Maintained and extended a long-lived accounting codebase. Pushed work down to the correct layer and improved LINQ performance, shaving hours off runs and preventing incorrect reports.',
      },
    ],
    tags: [
      'React',
      'TypeScript',
      'Module Federation',
      '.NET',
      'ASP.NET Core',
      'Entity Framework',
      'SQL Server',
    ],
  },
  {
    company: 'Assured Guaranty',
    title: 'Software Engineering Intern',
    location: 'New York, NY',
    period: '2021',
    dates: { start: '2021-06', end: '2021-08' },
    highlights: [
      {
        text: 'Built a serverless market data feed that ingests and parses high-volume fixed-income trade information using cloud serverless functions, managed SQL, and .NET.',
      },
    ],
    tags: ['.NET', 'Serverless', 'SQL'],
  },
  {
    company: 'NuHealth',
    title: 'M.I.S. Hospital Aide',
    location: 'East Meadow, NY',
    period: '2021',
    dates: { start: '2021-01', end: '2021-06' },
    highlights: [
      {
        text: 'Supported I.T. incident response and staffed the COVID-19 Vaccine Center front desk, assisting over 6,000 patients during the pandemic.',
      },
    ],
    tags: ['IT Support', 'Incident Response'],
  },
  {
    company: 'The NPD Group',
    title: 'Internal Systems Temp',
    location: 'Port Washington, NY',
    period: '2019',
    dates: { start: '2019-06', end: '2019-08' },
    highlights: [
      {
        text: 'Migrated JavaScript modules to Apex during the platform move from Salesforce Classic to Lightning, preserving existing behavior on a new framework.',
      },
    ],
    tags: ['JavaScript', 'Apex', 'Salesforce'],
  },
]

export const projects: Project[] = [
  {
    name: 'c4me',
    blurb:
      'A college search and application tracker for high-school students. Students build a profile from their scores, GPA, and coursework, search a database of US colleges, and see schools ranked against their own numbers.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Puppeteer'],
    href: 'https://github.com/SevenNateNine/c4me',
  },
  {
    name: 'Consealed-Cats',
    blurb:
      'An academic command and control center that hides its traffic in plain sight, passing commands and data between server and client through steganography over the Twitter API.',
    tags: ['Python', 'Scapy', 'Steganography', 'Academic'],
    href: 'https://github.com/SevenNateNine/Consealed-Cats',
  },
  {
    name: 'Taste The Typo',
    blurb:
      'A distributed typosquatting detector behind a web dashboard. Generates likely typo domains, then farms them out to worker nodes that visit each URL and return the HTML and a screenshot.',
    tags: ['Python', 'Django', 'Academic'],
    href: 'https://github.com/SevenNateNine/Taste-The-Typo',
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C#', 'Java', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'React',
      'Next.js',
      'React Hook Form',
      'Zod',
      'TanStack Query',
      'Zustand',
      'MUI',
      'Vite',
      'Module Federation',
      '.NET / ASP.NET Core',
      'Node.js',
    ],
  },
  {
    label: 'Databases',
    items: ['SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    label: 'Tools',
    items: ['Docker', 'Git', 'CI/CD'],
  },
]

export const education = {
  school: 'Stony Brook University',
  degree: 'B.S. Computer Science',
  location: 'Stony Brook, NY',
  period: '2016 — 2020',
}

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
] as const
