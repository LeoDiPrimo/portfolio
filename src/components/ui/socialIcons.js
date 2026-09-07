import { GitHubIcon, LinkedInIcon } from './icons'

/**
 * Icon per entry of SOCIAL_LINKS, keyed by its id. An unmapped id renders
 * without an icon, so adding a link never crashes the UI.
 *
 * Lives in its own module (instead of inside `icons.jsx`) because that file
 * exports components: mixing a non-component export in there would trip
 * `react-refresh/only-export-components`.
 */
export const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
}
