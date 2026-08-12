const COLUMNS = [
  {
    title: 'Treatments',
    links: [
      { label: 'New patient exam', href: '#treatments' },
      { label: 'Cleaning & gum care', href: '#treatments' },
      { label: 'Same-day crowns', href: '#same-day' },
      { label: 'Children’s dentistry', href: '#treatments' },
    ],
  },
  {
    title: 'The practice',
    links: [
      { label: 'Our team', href: '#team' },
      { label: 'Membership plan', href: '#membership' },
      { label: 'Your first visit', href: '#visit' },
      { label: 'Comfort & sedation', href: '#book' },
    ],
  },
  {
    title: 'Patients',
    links: [
      { label: 'Book an appointment', href: '#book' },
      { label: 'Insurance & billing', href: '#membership' },
      { label: 'Emergency care', href: '#book' },
      { label: 'Parking on Water Street', href: '#visit' },
    ],
  },
]

/** Multi-column footer: navigation, contact, hours summary, legal. */
export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="bg-[#0d2b2e] text-[#f2e9da]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 44 44" className="h-10 w-10" role="img" aria-label="Quarry Hill Dental">
                <rect width="44" height="44" rx="13" fill="#1c6f6b" />
                <path d="M9 30l7-11 5 7 4-6 10 10z" fill="#f2e9da" opacity="0.85" />
                <circle cx="22" cy="15" r="5" fill="#c68a3e" />
              </svg>
              <span className="font-serif text-lg font-semibold">Quarry Hill Dental</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#f2e9da]/70">
              A general and restorative practice in the old marble block on Water Street,
              looking after families across Burlington, Winooski and the islands since
              2017.
            </p>
            <p className="mt-5 text-sm text-[#f2e9da]/70">
              <a href="tel:+18025550142" className="font-semibold text-[#c68a3e]">
                (802) 555 0142
              </a>
              <br />
              <a href="mailto:desk@quarryhilldental.vt" className="underline">
                desk@quarryhilldental.vt
              </a>
            </p>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title} data-testid="footer-column">
              <h3 className="font-serif text-base font-semibold text-[#faf5ec]">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid="footer-link"
                      className="text-sm text-[#f2e9da]/70 transition-colors hover:text-[#c68a3e]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#f2e9da]/15 pt-8 text-sm text-[#f2e9da]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Quarry Hill Dental PLLC. Vermont dental licence 04-2288.</p>
          <p>
            218 Water Street, Burlington VT 05401 · Mon–Thu from 8:00, late chairs Tuesday
            and Thursday
          </p>
        </div>
      </div>
    </footer>
  )
}
