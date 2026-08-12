const COLUMNS = [
  {
    heading: 'Platform',
    links: ['Season board', 'Proof rounds', 'Printer purchase orders', 'Metadata feeds', 'Review copies', 'Reprints and stock'],
  },
  {
    heading: 'For your team',
    links: ['Production editors', 'Publishers', 'Rights and contracts', 'Freelance copyeditors', 'Designers'],
  },
  {
    heading: 'Resources',
    links: ['ONIX 3.0 field guide', 'Printer specification templates', 'Season planning calendar', 'Migration checklist', 'Status and uptime'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0F1524] text-[#C6CBDC]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,0.8fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" role="img" aria-label="Colophon printer's mark" className="h-9 w-9">
                <rect width="40" height="40" rx="10" fill="#FBF8F2" />
                <path d="M11 27V13h7.5a4.5 4.5 0 0 1 0 9H15" stroke="#141B2E" strokeWidth="2.4" fill="none" strokeLinecap="round" />
                <circle cx="27.5" cy="15" r="3.2" fill="#C0462A" />
                <path d="M24 27h8" stroke="#C0462A" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-semibold tracking-tight text-[#FBF8F2]">Colophon</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Production control for independent book publishers. Built in Providence, Rhode Island by
              people who used to run production departments and still miss the smell of a press check.
            </p>

            <address className="mt-6 not-italic text-sm leading-relaxed">
              <span className="block font-semibold text-[#FBF8F2]">Colophon Software Co.</span>
              <span className="block">114 Ashburton Street, Suite 3</span>
              <span className="block">Providence, Rhode Island 02907</span>
              <a href="tel:+14015550184" className="mt-2 block text-[#E0C4B8] hover:text-[#FBF8F2]">
                (401) 555-0184
              </a>
              <a href="mailto:hello@colophon.press" className="block text-[#E0C4B8] hover:text-[#FBF8F2]">
                hello@colophon.press
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FBF8F2]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      data-testid="footer-link"
                      className="text-sm transition-colors hover:text-[#FBF8F2]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-[#222B45] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#8892B4]">
            © 2026 Colophon Software Co. Support desk open 8am–6pm Eastern, Monday to Friday.
          </p>
          <ul className="flex flex-wrap gap-6 text-xs">
            <li>
              <a href="#privacy" className="hover:text-[#FBF8F2]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[#FBF8F2]">
                Terms
              </a>
            </li>
            <li>
              <a href="#accessibility" className="hover:text-[#FBF8F2]">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-[#FBF8F2]">
                Security and backups
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
