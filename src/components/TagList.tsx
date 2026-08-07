export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs leading-5 text-accent"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
