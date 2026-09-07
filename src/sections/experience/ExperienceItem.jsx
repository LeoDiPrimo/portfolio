import Badge from '../../components/ui/Badge'
import Reveal from '../../components/ui/Reveal'

/**
 * One job in the timeline. The dot is drawn with `before:` on the list item,
 * sitting on the vertical rule owned by the parent list.
 */
export default function ExperienceItem({ job }) {
  return (
    <Reveal
      as="li"
      className="relative pb-8 last:pb-0 before:absolute before:top-1.5 before:-left-[1.6rem] before:h-3 before:w-3 before:rounded-full before:bg-accent before:shadow-[0_0_0_4px_var(--accent-subtle-bg)]"
    >
      <p className="text-sm font-semibold text-subtle">{job.period}</p>

      <h3 className="mt-0.5 text-lg font-bold">{job.role}</h3>

      <p className="text-sm font-semibold text-accent">
        {job.company}
        {job.client && ` · ${job.client}`}
      </p>

      {job.summary && <p className="mt-1 text-sm text-muted">{job.summary}</p>}

      <ul className="mt-3 flex flex-col gap-1.5">
        {job.highlights.map((highlight) => (
          <li
            key={highlight}
            className="relative pl-5 text-sm text-pretty text-muted before:absolute before:left-0 before:text-accent before:content-['▸']"
          >
            {highlight}
          </li>
        ))}
      </ul>

      {job.stack.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {job.stack.map((tech) => (
            <Badge as="li" key={tech}>
              {tech}
            </Badge>
          ))}
        </ul>
      )}
    </Reveal>
  )
}
