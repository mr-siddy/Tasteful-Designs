const NAV = [
  { href: '#menu', label: 'The menu' },
  { href: '#hearth', label: 'The hearth' },
  { href: '#growers', label: 'Our growers' },
  { href: '#loft', label: 'Private dining' },
  { href: '#visit', label: 'Visit' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#241C17]/10 bg-[#FBF6EE]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <svg
            viewBox="0 0 44 44"
            className="h-10 w-10 shrink-0"
            role="img"
            aria-label="Persimmon and Rye hearth mark"
          >
            <circle cx="22" cy="22" r="21" fill="#241C17" />
            <path
              d="M22 9c4 5 6.5 8.2 6.5 12.4 0 3.9-2.9 6.9-6.5 6.9s-6.5-3-6.5-6.9C15.5 17.2 18 14 22 9z"
              fill="#C4552B"
            />
            <path d="M22 28.3c2.6 0 4.6-1.9 4.9-4.4-1.4 2-3 2.9-4.9 2.9s-3.5-.9-4.9-2.9c.3 2.5 2.3 4.4 4.9 4.4z" fill="#F2A65A" />
            <path
              d="M11 33h22"
              stroke="#FBF6EE"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M22 9c1.6 2.6.6 4.3-1.2 6" stroke="#4A5D3A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </svg>
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight">Persimmon &amp; Rye</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C4552B]">
              Germantown · cooked over oak
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[#3F352E] hover:text-[#C4552B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:16155550192" className="hidden text-sm font-bold text-[#3F352E] sm:block">
            (615) 555 0192
          </a>
          <a
            href="#book"
            className="rounded-full bg-[#C4552B] px-5 py-2.5 text-sm font-bold text-[#FBF6EE] shadow-sm hover:bg-[#A8451F]"
          >
            Book a table
          </a>
        </div>
      </div>
    </header>
  )
}
