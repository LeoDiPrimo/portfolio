import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { cn } from '../../lib/cn'
import { BUTTON_BASE, BUTTON_VARIANTS } from './buttonStyles'
import { CheckIcon, CopyIcon } from './icons'

const STATUS_LABELS = {
  idle: 'Copiar',
  copied: '¡Copiado!',
  error: 'No se pudo copiar',
}

/**
 * Copies `value` to the clipboard and confirms it in place.
 *
 * The visible label is mirrored into a live region because the button carries
 * an `aria-label` (screen readers would otherwise never hear the change), and
 * on failure the value stays visible next to the button so it can still be
 * selected by hand.
 */
export default function CopyButton({
  value,
  label = 'Copiar',
  variant = 'secondary',
  className,
}) {
  const { copy, status } = useCopyToClipboard()
  const Icon = status === 'copied' ? CheckIcon : CopyIcon

  return (
    <button
      type="button"
      onClick={() => copy(value)}
      aria-label={`${label} ${value} al portapapeles`}
      className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], className)}
    >
      <Icon />
      <span aria-hidden="true">
        {status === 'idle' ? label : STATUS_LABELS[status]}
      </span>
      <span role="status" className="sr-only">
        {status === 'idle' ? '' : STATUS_LABELS[status]}
      </span>
    </button>
  )
}
