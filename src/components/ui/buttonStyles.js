/**
 * Shared button/anchor styling. Lives in its own `.js` module so both
 * `LinkButton` (an anchor) and `CopyButton` (a real button) render identically
 * when they sit side by side, without exporting non-components from a `.jsx`
 * file — that would break `react-refresh/only-export-components`.
 *
 * `min-h-11` (44px) keeps every control a comfortable touch target on phones.
 */
export const BUTTON_BASE = [
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-[10px] border px-4.5',
  'text-sm font-semibold transition-all active:translate-y-px',
].join(' ')

export const BUTTON_VARIANTS = {
  primary:
    'sheen accent-gradient relative overflow-hidden border-transparent text-accent-contrast hover:brightness-110 hover:shadow-accent',
  secondary:
    'border-border-strong bg-surface text-text hover:bg-surface-hover hover:border-accent',
}
