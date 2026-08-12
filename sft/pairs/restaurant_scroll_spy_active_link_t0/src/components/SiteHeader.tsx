import { SectionNav } from './SectionNav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#2A211B]/10 bg-[#FBF6EC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <a href="#top" className="flex shrink-0 items-center gap-3" data-testid="brand-mark">
          <svg
            viewBox="0 0 40 44"
            role="img"
            aria-label="Lantern and Rye lantern mark"
            className="h-10 w-9"
          >
            <defs>
              <linearGradient id="lanternGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F0C46B" />
                <stop offset="60%" stopColor="#D8A244" />
                <stop offset="100%" stopColor="#B7411F" />
              </linearGradient>
            </defs>
            <path d="M20 1 L20 6" stroke="#2A211B" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 7 h16 l-2 4 H14 Z" fill="#2A211B" />
            <path d="M14 11 h12 l3 20 a9 9 0 0 1 -18 0 Z" fill="url(#lanternGlow)" />
            <path
              d="M14 11 h12 l3 20 a9 9 0 0 1 -18 0 Z"
              fill="none"
              stroke="#2A211B"
              strokeWidth="1.6"
            />
            <path d="M20 17 c3 4 3 7 0 10 c-3 -3 -3 -6 0 -10 Z" fill="#B7411F" />
            <path d="M11 34 h18" stroke="#2A211B" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M16 38 q4 5 8 0" stroke="#2A211B" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          </svg>
          <span className="font-serif text-xl font-semibold leading-none tracking-tight text-[#1B1410]">
            Lantern <span className="text-[#B7411F]">&amp;</span> Rye
          </span>
        </a>

        <div className="ml-auto flex items-center gap-6">
          <SectionNav />
          <a
            href="tel:01175550184"
            className="hidden text-sm font-medium text-[#2A211B]/70 hover:text-[#B7411F] xl:inline"
          >
            0117 555 0184
          </a>
          <a
            href="#reserve"
            className="rounded-full bg-[#B7411F] px-5 py-2.5 text-sm font-semibold text-[#FBF6EC] shadow-sm transition-colors hover:bg-[#96351a]"
          >
            Reserve a table
          </a>
        </div>
      </div>
    </header>
  )
}
