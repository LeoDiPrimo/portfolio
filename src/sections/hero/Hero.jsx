import Container from '../../components/ui/Container'
import LinkButton from '../../components/ui/LinkButton'
import Reveal from '../../components/ui/Reveal'
import { MailIcon, GlobeIcon } from '../../components/ui/icons'
import { SOCIAL_ICONS } from '../../components/ui/socialIcons'
import { PROFILE, SOCIAL_LINKS } from '../../data/profile'

/**
 * Opening block: name, role, short pitch and the contact actions.
 * Owns the page's only `<h1>`; every section below uses `<h2>`.
 */
export default function Hero() {
  const socialLinks = SOCIAL_LINKS.filter((link) => link.url)

  return (
    <section id="top" className="pt-16 pb-12 md:pt-20 md:pb-16">
      <Container>
        <Reveal className="max-w-3xl">
          <h1 className="text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {PROFILE.fullName}
          </h1>

          {PROFILE.role && (
            <p className="accent-gradient-text mt-2 text-lg font-bold sm:text-xl md:text-2xl">
              {PROFILE.role}
            </p>
          )}

          {PROFILE.summary.length > 0 && (
            <div className="mt-5 max-w-[52ch] space-y-4 text-base text-pretty text-muted md:text-lg">
              {PROFILE.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          {PROFILE.location && (
            <p className="mt-4 flex items-center gap-1.5 text-sm text-subtle">
              <GlobeIcon />
              {PROFILE.location}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {PROFILE.email && (
              <LinkButton href="#contact" variant="primary">
                <MailIcon />
                Contacto
              </LinkButton>
            )}

            {socialLinks.map((link) => {
              const Icon = SOCIAL_ICONS[link.id]

              return (
                <LinkButton key={link.id} href={link.url}>
                  {Icon && <Icon />}
                  {link.label}
                </LinkButton>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
