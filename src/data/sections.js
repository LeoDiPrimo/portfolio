/**
 * Single source of truth for the page sections.
 *
 * The header nav and the scroll spy are generated from this list, so adding a
 * section means:
 * 1. create its folder under `src/sections/`
 * 2. render it in `App.jsx`
 * 3. add an entry here
 *
 * `id` is code (English, ends up in the URL as `/#about`); `label` is content
 * shown to the visitor (Spanish).
 */
export const SECTIONS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'education', label: 'Formación' },
  { id: 'contact', label: 'Contacto' },
]
