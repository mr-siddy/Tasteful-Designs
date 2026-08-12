import { BrandMark } from './SiteHeader'

const COLUMNS = [
  {
    heading: 'The restaurant',
    links: [
      { label: 'The hearth', href: '#hearth' },
      { label: 'Standing menu', href: '#menu' },
      { label: 'The room', href: '#room' },
      { label: 'Who you will meet', href: '#room' },
    ],
  },
  {
    heading: 'Private dining',
    links: [
      { label: 'Hearthside', href: '#packages' },
      { label: 'Chef’s Table', href: '#packages' },
      { label: 'Full House buyout', href: '#packages' },
      { label: 'How booking works', href: '#packages' },
    ],
  },
  {
    heading: 'Practical',
    links: [
      { label: 'Hours and parking', href: '#visit' },
      { label: 'Accessibility', href: '#visit' },
      { label: 'Allergies and diets', href: '#visit' },
      { label: 'Gift cards', href: '#visit' },
    ],
  },
]

function SocialIcon({ kind }: { kind: 'instagram' | 'note' | 'mail' }) {
  if (kind === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" />
      </svg>
    )
  }
  if (kind === 'mail') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5.5" width="18" height="13" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="m4.5 8 7.5 5 7.5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path d="M5 4h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 4v6H19M8 14h8M8 17.5h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#f7f2ea]/10 bg-[#120e0b] text-[#c8bcae]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <span className="font-serif text-xl font-semibold text-[#f7f2ea]">Ember &amp; Rye</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A wood-fire supper house on the ground floor of the old Dunmore worsted mill. Cooking
              over oak and apple since 2017. No gas, no distributors, no music after the first
              seating.
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed">
              214 Halstead Row
              <br />
              Dunmore Mill District
              <br />
              Providence, Rhode Island 02909
            </address>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#top"
                data-testid="social-link"
                aria-label="Ember and Rye on Instagram"
                className="text-[#9a8d80] transition hover:text-[#e2622a]"
              >
                <SocialIcon kind="instagram" />
              </a>
              <a
                href="mailto:events@emberandrye.com"
                data-testid="social-link"
                aria-label="Email the events line"
                className="text-[#9a8d80] transition hover:text-[#e2622a]"
              >
                <SocialIcon kind="mail" />
              </a>
              <a
                href="#menu"
                data-testid="social-link"
                aria-label="Read the kitchen notes"
                className="text-[#9a8d80] transition hover:text-[#e2622a]"
              >
                <SocialIcon kind="note" />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8b04b]">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        data-testid="footer-link"
                        className="text-sm transition hover:text-[#f7f2ea]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#f7f2ea]/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ember &amp; Rye Hospitality LLC. Cooked over wood on Halstead Row.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#visit" data-testid="footer-link" className="transition hover:text-[#f7f2ea]">
              Reservation policy
            </a>
            <a href="#visit" data-testid="footer-link" className="transition hover:text-[#f7f2ea]">
              Privacy
            </a>
            <a href="#visit" data-testid="footer-link" className="transition hover:text-[#f7f2ea]">
              Careers at the hearth
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
