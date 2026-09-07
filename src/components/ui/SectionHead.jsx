import Reveal from './Reveal'

/**
 * Section heading: accent eyebrow with a rule, title and optional subtitle.
 * The `<h2>` carries the id the section points at via `aria-labelledby`.
 */
export default function SectionHead({ headingId, eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-8">
      {eyebrow && (
        <p className="mb-2 flex items-center gap-2.5 text-xs font-bold tracking-[0.14em] text-accent uppercase">
          <span aria-hidden="true" className="h-px w-7 bg-current opacity-75" />
          {eyebrow}
        </p>
      )}

      <h2
        id={headingId}
        className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-[2.1rem]"
      >
        {title}
      </h2>

      {subtitle && <p className="mt-1.5 max-w-[60ch] text-muted">{subtitle}</p>}
    </Reveal>
  )
}
