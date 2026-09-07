import { PROFILE, SOCIAL_LINKS } from '../../data/profile'
import Container from '../ui/Container'

const TECH_LINE = 'Hecho con React y desplegado en Vercel.'

export default function Footer() {
  const links = SOCIAL_LINKS.filter((link) => link.url)

  return (
    <footer className="mt-8 border-t border-border pb-10 pt-10 text-subtle">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <small className="text-[0.82rem]">
          © {new Date().getFullYear()} {PROFILE.fullName}. Todos los derechos reservados.
        </small>

        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center text-[0.86rem] text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#top"
              className="flex min-h-11 items-center text-[0.86rem] text-muted transition-colors hover:text-accent"
            >
              Volver arriba ↑
            </a>
          </li>
        </ul>

        <p className="text-[0.78rem]">{TECH_LINE}</p>
      </Container>
    </footer>
  )
}
