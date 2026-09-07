import {
  AtomIcon,
  ChartIcon,
  CoffeeIcon,
  DatabaseIcon,
  FlaskIcon,
  GearIcon,
  LandmarkIcon,
  LeafIcon,
} from './icons'

/**
 * Icon per group of SKILL_GROUPS, keyed by its id. An unmapped id renders
 * without an icon, so adding a group never crashes the UI.
 *
 * Lives in its own module (instead of inside `icons.jsx`) because that file
 * exports components: mixing a non-component export in there would trip
 * `react-refresh/only-export-components`.
 */
export const STACK_ICONS = {
  coffee: CoffeeIcon,
  leaf: LeafIcon,
  landmark: LandmarkIcon,
  database: DatabaseIcon,
  flask: FlaskIcon,
  chart: ChartIcon,
  gear: GearIcon,
  atom: AtomIcon,
}