const DESTINATIONS = [
  { label: 'Platform', href: '#platform' },
  { label: 'How it runs', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
  { label: 'FAQ', href: '#faq' },
]

function GrainlineMark() {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Grainline"
      className="h-9 w-9 shrink-0"
    >
      <rect x="1" y="1" width="38" height="38" rx="11" fill="#2C5C4F" />
      <path
        d="M20 8v24"
        stroke="#F6F2EC"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 13l5-5 5 5M15 27l5 5 5-5"
        fill="none"
        stroke="#C1552F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="20" r="1.6" fill="#E6DCCD" />
      <circle cx="29" cy="20" r="1.6" fill="#E6DCCD" />
    </svg>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E0D6C6] bg-[#F6F2EC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#hero" className="flex items-center gap-2.5">
          <GrainlineMark />
          <span className="text-lg font-black tracking-tight">Grainline</span>
        </a>

        <nav aria-label="Primary" className="hidden flex-1 md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-[#4A4455]">
            {DESTINATIONS.map((d) => (
              <li key={d.href}>
                <a href={d.href} className="hover:text-[#2C5C4F]">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden text-sm font-medium text-[#4A4455] hover:text-[#2C5C4F] sm:inline"
          >
            Sign in
          </a>
          <a
            href="#book"
            className="rounded-full bg-[#2C5C4F] px-4 py-2 text-sm font-semibold text-[#F6F2EC] hover:bg-[#234a3f]"
          >
            Book a floor walk
          </a>
        </div>
      </div>
    </header>
  )
}
