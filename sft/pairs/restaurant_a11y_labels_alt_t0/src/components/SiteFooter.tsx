const COLUMNS = [
  {
    heading: 'The restaurant',
    links: ['Tonight’s board', 'The five rooms', 'The fire and the boats', 'Private dining', 'Gift cards'],
  },
  {
    heading: 'Visiting',
    links: ['Reserve a table', 'Walk-in seats', 'Access and parking', 'Allergies and diets', 'Frequently asked'],
  },
  {
    heading: 'The trade',
    links: ['Work in the kitchen', 'Sell us fish', 'Press enquiries', 'Wholesale cultured butter'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#071319] text-[#d7e3e0]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,0.9fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
                <rect x="1" y="1" width="38" height="38" rx="9" fill="#f3ece0" />
                <path d="M20 8c3.2 4.4 7 6.6 7 11.4A7 7 0 0 1 13 19.4C13 14.6 16.8 12.4 20 8Z" fill="#d2601a" />
                <path d="M11 30h18" stroke="#0b2027" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-serif text-xl font-semibold text-[#f3ece0]">Salt Quarry</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#d7e3e0]/65">
              A wood-fired coastal kitchen in the old granite cutting shed at the harbour end of Rockport, Massachusetts.
              Opened 2019 by Marisol Bevan and Tobias Renn.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-[#d7e3e0]/80">
              <p>18 Quarry Landing</p>
              <p>Rockport, Massachusetts 01966</p>
              <p>(978) 555 0142</p>
              <p>hello@saltquarry.kitchen</p>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a35e]">{column.heading}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-[#d7e3e0]/70 transition hover:text-[#f3ece0]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 grid gap-8 border-t border-[#d7e3e0]/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a35e]">Dinner</h3>
            <p className="mt-3 text-sm text-[#d7e3e0]/70">Wednesday to Sunday, 5:00 – 10:00 pm</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a35e]">Oyster counter</h3>
            <p className="mt-3 text-sm text-[#d7e3e0]/70">Saturday and Sunday, from noon</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a35e]">Closed</h3>
            <p className="mt-3 text-sm text-[#d7e3e0]/70">Monday and Tuesday, and the first week of January</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0a35e]">Host stand</h3>
            <p className="mt-3 text-sm text-[#d7e3e0]/70">Answers from 3:00 pm, seven days</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#d7e3e0]/15 pt-8 text-xs text-[#d7e3e0]/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Salt Quarry LLC. Massachusetts common victualler licence 41-2019-118.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#top" className="transition hover:text-[#d7e3e0]">
              Privacy
            </a>
            <a href="#top" className="transition hover:text-[#d7e3e0]">
              Accessibility statement
            </a>
            <a href="#top" className="transition hover:text-[#d7e3e0]">
              Allergen information
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
