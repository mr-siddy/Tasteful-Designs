const TRAINING_LINKS = [
  { href: '#classes', label: 'Class formats' },
  { href: '#method', label: 'The twelve-week method' },
  { href: '#facility', label: 'The floor' },
  { href: '#membership', label: 'Membership prices' },
]

const CLUB_LINKS = [
  { href: '#results', label: 'Member results' },
  { href: '#faq', label: 'Common questions' },
  { href: '#join', label: 'Book an intro' },
  { href: '#top', label: 'Back to the top' },
]

const HOURS: ReadonlyArray<readonly [string, string]> = [
  ['Monday – Thursday', '05:30 – 20:30'],
  ['Friday', '05:30 – 19:00'],
  ['Saturday', '07:00 – 14:00'],
  ['Sunday', '08:00 – 13:00 (open platform)'],
]

function FooterMark() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" role="img" aria-label="Northline Strength Club">
      <rect x="0" y="0" width="44" height="44" rx="14" fill="#1c1917" stroke="#3f3f46" strokeWidth="1.5" />
      <circle cx="22" cy="22" r="12" fill="none" stroke="#bef264" strokeWidth="2.4" />
      <circle cx="22" cy="22" r="4.4" fill="none" stroke="#fbbf24" strokeWidth="2" />
      <path d="M7 22h4M33 22h4" stroke="#e7e5e4" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function SocialGlyphs() {
  return (
    <div className="mt-6 flex items-center gap-3">
      <a
        href="#top"
        aria-label="Northline on Instagram"
        className="rounded-full border border-white/15 p-2 text-stone-400 transition-colors hover:border-lime-300 hover:text-lime-300"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
          <rect x="3" y="3" width="14" height="14" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="14.4" cy="5.6" r="1" fill="currentColor" />
        </svg>
      </a>
      <a
        href="#top"
        aria-label="Northline on YouTube"
        className="rounded-full border border-white/15 p-2 text-stone-400 transition-colors hover:border-lime-300 hover:text-lime-300"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
          <rect x="2.5" y="5" width="15" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8.6 7.8l4.2 2.2-4.2 2.2z" fill="currentColor" />
        </svg>
      </a>
      <a
        href="mailto:desk@northlinestrength.club"
        aria-label="Email the front desk"
        className="rounded-full border border-white/15 p-2 text-stone-400 transition-colors hover:border-lime-300 hover:text-lime-300"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
          <rect x="2.5" y="4.5" width="15" height="11" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3.5 6.5l6.5 4.5 6.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </a>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-stone-900">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <FooterMark />
            <p className="mt-4 text-sm font-black uppercase tracking-tight text-stone-100">
              Northline Strength Club
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              A coached barbell gym in Bellwater. Eight platforms, four full-time coaches, and a
              written plan for everyone who trains here.
            </p>
            <SocialGlyphs />
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">Training</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {TRAINING_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-stone-400 transition-colors hover:text-stone-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">The club</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {CLUB_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-stone-400 transition-colors hover:text-stone-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-lime-300">Find us</h2>
            <address className="mt-5 space-y-2 text-sm not-italic text-stone-400">
              <p>12 Alder Way</p>
              <p>Bellwater, WA 98221</p>
              <p>
                <a href="tel:+12065550137" className="transition-colors hover:text-stone-100">
                  (206) 555-0137
                </a>
              </p>
              <p>
                <a href="mailto:desk@northlinestrength.club" className="transition-colors hover:text-stone-100">
                  desk@northlinestrength.club
                </a>
              </p>
            </address>
            <dl className="mt-6 space-y-2 text-xs text-stone-500">
              {HOURS.map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4">
                  <dt>{day}</dt>
                  <dd className="text-stone-400">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Northline Strength Club. Built on Alder Way since 2014.</p>
          <p className="flex flex-wrap gap-5">
            <a href="#membership" className="transition-colors hover:text-stone-300">
              Membership terms
            </a>
            <a href="#faq" className="transition-colors hover:text-stone-300">
              Injury and refund policy
            </a>
            <a href="#join" className="transition-colors hover:text-stone-300">
              Accessibility on the floor
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
