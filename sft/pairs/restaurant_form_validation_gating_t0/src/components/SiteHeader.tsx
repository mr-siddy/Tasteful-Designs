const NAV = [
  { label: 'Off the fire', href: '#menu' },
  { label: 'Bakehouse', href: '#bakehouse' },
  { label: 'The Long Table', href: '#long-table' },
  { label: 'The room', href: '#room' },
  { label: 'Visit', href: '#visit' },
]

function EmberMark() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" aria-hidden="true">
      <defs>
        <linearGradient id="mark-ember" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#b8451f" />
          <stop offset="100%" stopColor="#e0912f" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="21" fill="#1b1512" />
      <path
        d="M22 8c1.5 5.4-2.8 7.1-3.4 10.9-.5 3 1.3 4.6 1.3 4.6s-3.6-.6-3.6-4.6c-2.6 2.2-4.1 5.1-4.1 8.3 0 5.8 4.4 9.8 9.8 9.8s9.8-4 9.8-9.8c0-7.3-6.6-10.1-9.8-19.2z"
        fill="url(#mark-ember)"
      />
      <path d="M22 26.5c1.9 1.5 2.6 3 2.1 4.6-.4 1.4-1.6 2.2-3 2.2-1.9 0-3.2-1.3-3.2-3.1 0-1.6 1.4-2.7 4.1-3.7z" fill="#faf5ec" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1b1512]/10 bg-[#faf5ec]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <EmberMark />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight">Cinder &amp; Rye</span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6a4a]">
              Asador &amp; bakehouse
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#3d3128] transition hover:text-[#b8451f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a href="tel:+19195550164" className="hidden text-sm font-semibold text-[#3d3128] sm:block">
            (919) 555-0164
          </a>
          <a
            href="#long-table"
            className="rounded-full bg-[#b8451f] px-5 py-2.5 text-sm font-bold text-[#faf5ec] shadow-sm transition hover:bg-[#9a3717]"
          >
            Reserve
          </a>
        </div>
      </div>
    </header>
  )
}
