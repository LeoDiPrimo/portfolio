import Card from '../../components/ui/Card'

/**
 * Shared shell for a contact entry: icon, title, detail and a footer pinned to
 * the bottom (`mt-auto`) so every card in the row lines up.
 *
 * Rendered as an anchor when the whole card is one link, or as a plain `div`
 * when it holds several controls — a `<button>` inside an `<a>` is invalid
 * markup and swallows the click.
 */
export default function ContactCard({ title, detail, Icon, children, ...props }) {
  return (
    <Card
      spotlight
      className="flex h-full flex-col items-center gap-2 p-7 text-center transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
      {...props}
    >
      {Icon && (
        <span className="mb-1 flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-accent-subtle text-accent [&_svg]:h-5 [&_svg]:w-5">
          <Icon />
        </span>
      )}

      <h3 className="text-base font-bold">{title}</h3>

      {detail && <p className="text-sm break-words text-muted">{detail}</p>}

      <div className="mt-auto w-full pt-4">{children}</div>
    </Card>
  )
}
