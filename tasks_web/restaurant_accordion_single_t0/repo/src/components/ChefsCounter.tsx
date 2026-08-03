const SPECS = [
  { label: 'Seats', value: 'Eight, in a single row facing the coals' },
  { label: 'Length', value: 'Two and a quarter hours, seven courses' },
  { label: 'Price', value: '$115 a head, drinks aside' },
  { label: 'Nights', value: 'Thursday, Friday and Saturday, 6:00 and 8:45' },
]

const TEAM = [
  {
    id: 'noor',
    name: 'Noor Adeyemi',
    role: 'Chef-owner',
    bio: 'Six years in Basque asadors, then home to do the same thing with cold-water fish. Cooks the counter herself on Fridays.',
  },
  {
    id: 'marta',
    name: 'Marta Vieira',
    role: 'Head of the fire',
    bio: 'Runs the hearth and the grill winch, decides what gets buried in the ash and when the last root goes in.',
  },
  {
    id: 'ezra',
    name: 'Ezra Kwan',
    role: 'Pastry and ferments',
    bio: 'Keeps the cider vinegar barrels and the koji fridge, and makes the brown butter ice cream everyone writes to us about.',
  },
  {
    id: 'priya',
    name: 'Priya Raval',
    role: 'The room and the cellar',
    bio: 'Buys the wine, sets the tables, and is the reason your glass is filled before you notice it is empty.',
  },
]

export function ChefsCounter() {
  return (
    <section id="counter" aria-labelledby="counter-heading" className="bg-[#F3EADC]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">Eight seats</p>
            <h2
              id="counter-heading"
              className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]"
            >
              The chef's counter, close enough to feel the heat
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
              Eight stools along the pass, an arm's length from the embers. You get whatever the boats
              brought and the ash gave up, handed over one plate at a time by whoever cooked it, and
              you are told what it is and where it came from without having to ask twice. It is the
              best seat in the building and the hardest to get.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6B6155]">
              Bookings for the counter open on the first of each month at nine in the morning, and the
              month is usually gone by lunchtime. Two of the eight stools are held for walk-ins and
              given out at the door at half past five — turn up, put your name down, have a glass of
              cider at the bar while you wait.
            </p>

            <dl className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {SPECS.map((spec) => (
                <div key={spec.label} data-testid="counter-spec" className="border-t border-[#E4DACB] pt-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C4472A]">
                    {spec.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-[#4A423A]">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href="#book"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#123C43] px-6 py-3 text-sm font-semibold text-[#FAF6EF] transition-colors hover:bg-[#0F3239]"
            >
              Join the counter list
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                <path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div>
            <svg
              viewBox="0 0 400 240"
              role="img"
              aria-label="Plan of the eight-seat chef's counter facing the open hearth"
              className="h-auto w-full rounded-3xl border border-[#E4DACB] bg-white p-5"
            >
              <rect x="24" y="28" width="352" height="52" rx="12" fill="#2B1C16" />
              <g>
                <circle cx="90" cy="54" r="9" fill="#C4472A" />
                <circle cx="140" cy="58" r="7" fill="#E08A3C" />
                <circle cx="190" cy="54" r="10" fill="#F2B25C" />
                <circle cx="240" cy="58" r="7" fill="#C4472A" />
                <circle cx="290" cy="54" r="9" fill="#E08A3C" />
              </g>
              <rect x="24" y="108" width="352" height="26" rx="13" fill="#C9B79B" />
              <g fill="#123C43">
                {[64, 108, 152, 196, 240, 284, 328, 356].map((x) => (
                  <circle key={x} cx={x} cy="176" r="15" />
                ))}
              </g>
              <text x="24" y="216" fill="#8B8073" fontSize="12" fontFamily="sans-serif">
                eight stools · the pass · the hearth
              </text>
            </svg>

            <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#123C43]">
              Who is behind it
            </h3>
            <ul className="mt-5 space-y-5">
              {TEAM.map((person) => (
                <li
                  key={person.id}
                  data-testid="team-member"
                  className="flex gap-4 rounded-2xl border border-[#E4DACB] bg-[#FAF6EF] p-5"
                >
                  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 flex-none">
                    <circle cx="24" cy="24" r="24" fill="#123C43" />
                    <circle cx="24" cy="19" r="8" fill="#E9C79A" />
                    <path d="M8 44c2-10 9-14 16-14s14 4 16 14Z" fill="#E08A3C" />
                  </svg>
                  <div>
                    <h4 className="text-base font-semibold tracking-tight text-[#171310]">
                      {person.name}
                      <span className="ml-2 text-xs font-medium uppercase tracking-wider text-[#C4472A]">
                        {person.role}
                      </span>
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#6B6155]">{person.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
