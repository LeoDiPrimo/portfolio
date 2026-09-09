import { useCallback, useEffect, useRef, useState } from 'react'

/** How long the button keeps showing the result before going back to idle. */
const RESET_DELAY = 2000

/**
 * Legacy copy path: a throwaway textarea plus `document.execCommand('copy')`.
 *
 * Needed because `navigator.clipboard` is unavailable on older browsers and on
 * any page not served over HTTPS (an insecure context), where the modern API
 * is simply not exposed. Must run inside a user gesture to be allowed.
 */
function copyWithExecCommand(text) {
  // Selecting the textarea steals focus; without this the keyboard user who
  // pressed Enter on the button would be dropped back to the top of the page.
  const previouslyFocused = document.activeElement

  const textarea = document.createElement('textarea')
  textarea.value = text
  // Off-screen but still focusable: `display: none` would make it unselectable.
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.top = '0'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)

  // Copying steals the selection, so restore whatever the user had highlighted.
  const selection = document.getSelection()
  const previousRange = selection?.rangeCount > 0 ? selection.getRangeAt(0) : null

  textarea.select()
  // iOS ignores `select()` on its own; the explicit range is what works there.
  textarea.setSelectionRange(0, text.length)

  let copied = false
  try {
    copied = document.execCommand('copy')
  } catch {
    // Locked-down browsers throw instead of returning false.
  }

  textarea.remove()
  if (previousRange) {
    selection.removeAllRanges()
    selection.addRange(previousRange)
  }
  previouslyFocused?.focus?.()

  return copied
}

/** Tries the async Clipboard API first and falls back to the legacy path. */
async function writeToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Denied permission or a hostile context: the legacy path may still work.
    }
  }

  return copyWithExecCommand(text)
}

/**
 * Copies text to the clipboard and reports the outcome as a transient status
 * (`idle` | `copied` | `error`) that resets on its own, so the caller only has
 * to render it.
 */
export function useCopyToClipboard(resetDelay = RESET_DELAY) {
  const [status, setStatus] = useState('idle')
  const timeoutRef = useRef(undefined)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const copy = useCallback(
    async (text) => {
      const copied = await writeToClipboard(text)

      setStatus(copied ? 'copied' : 'error')
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setStatus('idle'), resetDelay)

      return copied
    },
    [resetDelay],
  )

  return { copy, status }
}
