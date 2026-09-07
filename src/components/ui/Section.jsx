import { cn } from '../../lib/cn'
import Container from './Container'
import SectionHead from './SectionHead'

/**
 * A page section: anchor target, heading block and vertical rhythm.
 *
 * `id` must match the entry in `src/data/sections.js` — it is what the header
 * nav links to and what the scroll spy tracks.
 */
export default function Section({ id, eyebrow, title, subtitle, className, children }) {
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('py-16 md:py-20', className)}
    >
      <Container>
        <SectionHead
          headingId={headingId}
          eyebrow={eyebrow ?? title}
          title={title}
          subtitle={subtitle}
        />
        {children}
      </Container>
    </section>
  )
}
