const COLUMNS = [
  {
    heading: 'The restaurant',
    links: [
      { label: 'Off the fire', href: '#menu' },
      { label: 'The bakehouse', href: '#bakehouse' },
      { label: 'How the grill works', href: '#fire' },
      { label: 'The room and the people', href: '#room' },
    ],
  },
  {
    heading: 'The Long Table',
    links: [
      { label: 'Ask about a date', href: '#long-table' },
      { label: 'How an evening runs', href: '#evening' },
      { label: 'What guests say', href: '#guests' },
      { label: 'Deposits and cancellations', href: '#faq' },
    ],
  },
  {
    heading: 'Visit',
    links: [
      { label: 'Hours and directions', href: '#visit' },
      { label: 'Accessibility', href: '#faq' },
      { label: 'Parking and transit', href: '#visit' },
      { label: 'Gift cards at the counter', href: '#visit' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#1b1512] text-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <p className="text-xl font-black tracking-tight">Cinder &amp; Rye</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#a9977f]">
              An oak-fired asador and bakehouse in a 1926 tobacco drying shed. Wednesday to Sunday, bread from
              seven and fire from five-thirty.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-[#c9baa5]">
              214 Ferris Street
              <br />
              Brightleaf, Durham, NC 27701
              <br />
              <a href="tel:+19195550164" className="font-bold text-[#e0912f]">(919) 555-0164</a>
              <br />
              <a href="mailto:table@cinderandrye.kitchen" className="font-bold text-[#e0912f]">
                table@cinderandrye.kitchen
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e0912f]">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-[#c9baa5] transition hover:text-[#faf5ec]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-[#faf5ec]/12 pt-8">
          <form
            className="flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="footer-menu-drop" className="sr-only">
              Send me the Sunday menu drop
            </label>
            <input
              id="footer-menu-drop"
              name="menu-drop"
              type="text"
              placeholder="you@wherever.com"
              className="flex-1 rounded-full border border-[#faf5ec]/20 bg-[#241a14] px-5 py-3 text-sm text-[#faf5ec] outline-none focus:border-[#e0912f]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#e0912f] px-6 py-3 text-sm font-bold text-[#1b1512] transition hover:bg-[#f0a744]"
            >
              Get the Sunday menu
            </button>
          </form>
          <p className="mt-3 text-xs text-[#8a7a67]">
            One email a week, on Sunday morning, with the week&rsquo;s fire menu and whatever Emmett is baking.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#faf5ec]/12 pt-8 text-xs text-[#8a7a67]">
          <p>&copy; 2026 Cinder &amp; Rye LLC. Durham, North Carolina.</p>
          <a href="#faq" className="hover:text-[#c9baa5]">Privacy</a>
          <a href="#faq" className="hover:text-[#c9baa5]">Accessibility statement</a>
          <a href="#visit" className="hover:text-[#c9baa5]">Careers &mdash; we are hiring a pastry cook</a>
        </div>
      </div>
    </footer>
  )
}
