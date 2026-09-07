import { useScrollProgress } from '../../hooks/useScrollProgress'

/** Reading progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      style={{ width: `${progress}%` }}
      className="accent-gradient pointer-events-none fixed top-0 left-0 z-[100] h-[3px] shadow-[0_0_14px_rgba(var(--accent-rgb),0.55)] transition-[width] duration-100 ease-out"
    />
  )
}
