/**
 * Identity data reused across the whole site (header, hero, footer, meta).
 *
 * Optional fields may be left empty — the UI omits whatever is missing instead
 * of rendering a blank slot.
 */
export const PROFILE = {
  name: 'Leo Di Primo',
  /** Full legal name, for the page title and structured data. */
  fullName: 'Roberto Leonardo Di Primo',
  /** Shown right above the name. */
  role: 'Backend Software Engineer',
  location: 'Buenos Aires, Argentina',
  /** Drives the "Contacto" button. Leave empty to hide it. */
  email: 'leodiprimo@gmail.com',
  /** Short pitch shown in the hero, under the name. One entry per paragraph. */
  summary: [
    'Software Engineer con más de 7 años de experiencia resolviendo problemas complejos a través del software.',
    'Me enfoco en construir sistemas robustos, escalables y observables, buscando que la tecnología no solo funcione, sino que pueda evolucionar y sostenerse en el tiempo.',
  ],
}

/**
 * External profiles. `url: ''` hides the entry, so an unknown link degrades
 * gracefully instead of rendering a dead button.
 */
export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/roberto-leonardo-di-primo',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/LeoDiPrimo',
  },
]
