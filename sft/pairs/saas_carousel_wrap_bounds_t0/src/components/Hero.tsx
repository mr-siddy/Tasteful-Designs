const HERO_STATS = [
  { value: '19,400', label: 'permanently affordable homes under management' },
  { value: '6 hrs', label: 'saved on the average quarterly funder report' },
  { value: '94%', label: 'of recertifications filed before the deadline' },
]

const CHECKLIST = [
  'Every unit, lease and land-trust ground lease in one register',
  'Income recertification dates that chase you, not the other way round',
  'HOME, CDBG and LIHTC exports your funder actually accepts',
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#DDE3F0] bg-gradient-to-b from-white via-[#F7F9FE] to-[#F4F6FB]"
    >
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#3D4EE0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#0E8F6F]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#DDE3F0] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#3D4EE0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E8F6F]" />
            Built for community land trusts
          </p>

          <h1 className="mt-6 text-[2.55rem] font-bold leading-[1.07] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Your homes, your waitlist and your funders — finally in one place.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B5670]">
            Rooftree is the operations system for housing nonprofits and community land trusts stewarding twelve to four
            hundred homes. Units, residents, applicants, ground leases, inspections and every grant report live in one
            register instead of nine spreadsheets, a shared drive and the memory of whoever has been there longest. Your
            quarterly report to the state stops being a two-week project and starts being a download.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              data-testid="hero-cta"
              className="rounded-xl bg-[#131A2A] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#131A2A]/20 transition hover:bg-[#26314c]"
            >
              Book a 30-minute walkthrough
            </a>
            <a
              href="#stories"
              data-testid="hero-secondary-cta"
              className="rounded-xl border border-[#131A2A]/15 bg-white px-7 py-4 text-sm font-semibold text-[#131A2A] transition hover:border-[#131A2A]/40"
            >
              Read customer stories
            </a>
          </div>

          <ul className="mt-8 space-y-3">
            {CHECKLIST.map((line) => (
              <li key={line} data-testid="hero-checklist-item" className="flex items-start gap-3 text-sm text-[#4B5670]">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true">
                  <circle cx="10" cy="10" r="10" fill="#0E8F6F" opacity="0.14" />
                  <path d="m6 10.4 2.6 2.6L14 7.6" fill="none" stroke="#0E8F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {line}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-6 border-t border-[#DDE3F0] pt-8 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} data-testid="hero-stat">
                <dt className="text-2xl font-bold tracking-tight text-[#3D4EE0]">{stat.value}</dt>
                <dd className="mt-1 text-sm leading-snug text-[#4B5670]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#3D4EE0]/20 via-[#0E8F6F]/10 to-transparent blur-2xl" />
          <svg
            viewBox="0 0 470 400"
            className="w-full rounded-3xl border border-[#DDE3F0] bg-white shadow-xl"
            role="img"
            aria-label="The Rooftree portfolio dashboard showing occupancy, four buildings and the recertification queue"
          >
            <rect x="0" y="0" width="470" height="400" rx="22" fill="#FFFFFF" />
            <rect x="0" y="0" width="470" height="54" rx="22" fill="#131A2A" />
            <rect x="0" y="34" width="470" height="20" fill="#131A2A" />
            <circle cx="26" cy="27" r="6" fill="#3D4EE0" />
            <text x="44" y="32" fill="#F4F6FB" fontSize="13.5" fontFamily="sans-serif" fontWeight="600">
              Portfolio · Ninth Street Land Trust
            </text>
            <text x="352" y="32" fill="#8E9AB8" fontSize="11.5" fontFamily="sans-serif">
              214 homes · 98% let
            </text>

            <g transform="translate(20 72)">
              <rect x="0" y="0" width="200" height="96" rx="14" fill="#F4F6FB" stroke="#DDE3F0" />
              <text x="16" y="26" fill="#6B7690" fontSize="10.5" fontFamily="sans-serif" letterSpacing="1.4">
                OCCUPANCY
              </text>
              <text x="16" y="58" fill="#131A2A" fontSize="30" fontFamily="sans-serif" fontWeight="700">
                98.1%
              </text>
              <rect x="16" y="70" width="168" height="8" rx="4" fill="#DDE3F0" />
              <rect x="16" y="70" width="165" height="8" rx="4" fill="#0E8F6F" />
            </g>

            <g transform="translate(240 72)">
              <rect x="0" y="0" width="210" height="96" rx="14" fill="#F4F6FB" stroke="#DDE3F0" />
              <text x="16" y="26" fill="#6B7690" fontSize="10.5" fontFamily="sans-serif" letterSpacing="1.4">
                RECERTS DUE · 30 DAYS
              </text>
              <text x="16" y="58" fill="#131A2A" fontSize="30" fontFamily="sans-serif" fontWeight="700">
                11
              </text>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((dot) => (
                <circle key={dot} cx={22 + dot * 17} cy="76" r="5" fill={dot < 8 ? '#3D4EE0' : '#E0553F'} opacity={dot < 8 ? 0.8 : 1} />
              ))}
            </g>

            {[
              { name: 'Ferry Street Row', units: '18 homes', state: 'All current', tone: '#0E8F6F' },
              { name: 'Alder Court', units: '46 homes', state: '3 recerts due', tone: '#3D4EE0' },
              { name: 'Bellingham Mews', units: '31 homes', state: 'Inspection Tue', tone: '#3D4EE0' },
              { name: 'Cranston Commons', units: '52 homes', state: '1 file missing', tone: '#E0553F' },
            ].map((row, position) => (
              <g key={row.name} transform={`translate(20 ${186 + position * 52})`}>
                <rect x="0" y="0" width="430" height="44" rx="11" fill={position === 3 ? '#FEF3F1' : '#FFFFFF'} stroke="#DDE3F0" />
                <rect x="14" y="13" width="18" height="18" rx="5" fill={row.tone} opacity="0.16" />
                <path d={`M18 26 l5 -6 l5 6`} fill="none" stroke={row.tone} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="translate(0 -1)" />
                <text x="44" y="21" fill="#131A2A" fontSize="12.5" fontFamily="sans-serif" fontWeight="600">
                  {row.name}
                </text>
                <text x="44" y="35" fill="#6B7690" fontSize="11" fontFamily="sans-serif">
                  {row.units}
                </text>
                <rect x="308" y="12" width="108" height="21" rx="10.5" fill={row.tone} opacity="0.12" />
                <text x="362" y="26.5" textAnchor="middle" fontSize="10.5" fontFamily="sans-serif" fontWeight="600" fill={row.tone}>
                  {row.state}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-[#6B7690]">
            The portfolio register · Ninth Street Land Trust, Monday 8:12am
          </p>
        </div>
      </div>
    </section>
  )
}
