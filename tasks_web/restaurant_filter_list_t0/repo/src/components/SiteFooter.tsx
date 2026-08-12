const COLUMNS = [
  {
    heading: 'The restaurant',
    links: [
      { href: '#menu', label: 'Tonight’s menu' },
      { href: '#formats', label: 'Ways to eat here' },
      { href: '#hearth', label: 'The hearth' },
      { href: '#evening', label: 'What an evening looks like' },
    ],
  },
  {
    heading: 'Booking',
    links: [
      { href: '#book', label: 'Request a table' },
      { href: '#loft', label: 'The Loft, for 24' },
      { href: '#faq', label: 'Questions before you come' },
      { href: 'tel:16155550192', label: '(615) 555 0192' },
    ],
  },
  {
    heading: 'Where it comes from',
    links: [
      { href: '#growers', label: 'Our growers and mills' },
      { href: '#growers', label: 'Hollow Bend Farm' },
      { href: '#growers', label: 'Cane Ridge Mill' },
      { href: '#growers', label: 'Windrow Creek Creamery' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#241C17] text-[#D9CDBE]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-9 w-9" role="img" aria-label="Persimmon and Rye mark">
                <circle cx="20" cy="20" r="19" fill="#C4552B" />
                <path
                  d="M20 9c3.6 4.6 6 7.5 6 11.4 0 3.6-2.7 6.4-6 6.4s-6-2.8-6-6.4C14 16.5 16.4 13.6 20 9z"
                  fill="#241C17"
                />
                <path d="M20 31h0M12 31h16" stroke="#241C17" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-black tracking-tight text-[#FBF6EE]">
                Persimmon &amp; Rye
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A fifty-four seat restaurant cooked entirely over white oak and hickory, at 214 Monroe
              Street in Germantown, Nashville. Open since the autumn of 2019.
            </p>
            <p className="mt-5 text-sm">
              <a href="mailto:hello@persimmonandrye.restaurant" className="font-bold text-[#F2A65A] underline">
                hello@persimmonandrye.restaurant
              </a>
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#top"
                aria-label="Persimmon and Rye on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FBF6EE]/20 hover:border-[#F2A65A]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" focusable="false">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#F2A65A" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="#F2A65A" strokeWidth="2" />
                  <circle cx="17.4" cy="6.6" r="1.3" fill="#F2A65A" />
                </svg>
              </a>
              <a
                href="#top"
                aria-label="Persimmon and Rye newsletter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FBF6EE]/20 hover:border-[#F2A65A]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" focusable="false">
                  <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="#F2A65A" strokeWidth="2" />
                  <path d="M4 7l8 6 8-6" fill="none" stroke="#F2A65A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#F2A65A]">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-[#FBF6EE]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#FBF6EE]/15 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Persimmon &amp; Rye LLC · 214 Monroe Street, Nashville TN 37208</p>
          <p className="flex flex-wrap gap-5">
            <a href="#faq" className="hover:text-[#FBF6EE]">
              Allergen policy
            </a>
            <a href="#faq" className="hover:text-[#FBF6EE]">
              Cancellations
            </a>
            <a href="#visit" className="hover:text-[#FBF6EE]">
              Accessibility
            </a>
            <a href="#top" className="hover:text-[#FBF6EE]">
              Gift vouchers
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
