import { useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import { SECTIONS } from '../../data/sections'
import { cn } from '../../lib/cn'
import Container from '../ui/Container'
import ThemeToggle from './ThemeToggle'

/** Stable identity so the scroll-spy effect does not re-subscribe on render. */
const SECTION_IDS = SECTIONS.map((section) => section.id)

function BrandMark() {
  return (
    <span className="accent-gradient-text font-mono text-xl leading-none select-none">
      {'</>'}
    </span>
  )
}

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

/**
 * Sticky header. Both navs are built from SECTIONS, so registering a new
 * section updates desktop and mobile at once.
 *
 * Only one nav is ever perceivable: the inline list is `hidden` below `md`,
 * the collapsible panel is `md:hidden`.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <header className="sticky top-0 z-60 border-b border-border bg-[var(--header-bg)] backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between gap-3">
        <a
          href="#top"
          aria-label="Inicio"
          className="group flex shrink-0 items-center"
        >
          <span className="transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
            <BrandMark />
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={activeId === section.id}
                  className={cn(
                    'nav-link relative flex h-11 items-center rounded-lg px-2.5 text-sm font-medium transition-colors',
                    activeId === section.id
                      ? 'text-accent'
                      : 'text-muted hover:bg-surface-hover hover:text-text',
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Navegación principal"
          className="border-t border-border bg-surface md:hidden"
        >
          <Container as="ul" className="flex flex-col py-2">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={activeId === section.id}
                  className={cn(
                    'flex min-h-11 items-center rounded-lg text-base font-medium transition-colors',
                    activeId === section.id ? 'text-accent' : 'text-muted hover:text-text',
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
