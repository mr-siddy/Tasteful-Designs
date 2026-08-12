type Format = {
  name: string
  price: string
  seats: string
  blurb: string
  points: string[]
}

const FORMATS: Format[] = [
  {
    name: 'Bar seats',
    price: '$48 and up',
    seats: '9 stools, walk-in only',
    blurb:
      'The nine stools along the zinc are held back every night for people who did not plan ahead. Order two small plates and a glass, or the whole menu — it is the same kitchen either way.',
    points: ['No reservation taken', 'Full menu until 9:45pm', 'Tomás pours by the glass'],
  },
  {
    name: 'The hearth counter',
    price: '$95 per person',
    seats: '6 seats, one seating',
    blurb:
      'Six stools an arm’s length from the fire, where the cooks hand you each course themselves and tell you what is on it. Seven courses, paced over about two hours.',
    points: ['Seven courses from the fire', 'Booked 30 days ahead', 'Wine pairing $65'],
  },
  {
    name: 'The dining room',
    price: 'À la carte',
    seats: '32 seats across 11 tables',
    blurb:
      'Paper menus, oak tables, no dress code and a room loud enough that you can say something honest at your own table. Order as much or as little as you like.',
    points: ['Tables of two to six', 'Last order 9:30pm', 'Vegetarian menu on request'],
  },
  {
    name: 'Sunday supper',
    price: '$65 per person',
    seats: 'Family-style, noon to 3pm',
    blurb:
      'One long table, four platters and whatever Ibrahim baked that morning, served family-style while the fire is still coming up to heat for the week.',
    points: ['Children eat for $22', 'Bottomless cornbread', 'Ends when it ends'],
  },
]

export function DiningFormats() {
  return (
    <section id="formats" aria-labelledby="formats-heading" className="border-b border-[#241C17]/10">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A5D3A]">
            Four ways to eat here
          </p>
          <h2 id="formats-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Pick the seat first — the fire is the same wherever you sit
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#544940]">
            Everything comes off one hearth, so the difference between a stool at the bar and the
            counter in front of the fire is how close you want to stand to the work. None of them is
            the &ldquo;proper&rdquo; way to eat at Persimmon &amp; Rye.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FORMATS.map((format) => (
            <article
              key={format.name}
              className="flex flex-col rounded-3xl border border-[#241C17]/12 bg-white p-7 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-black tracking-tight">{format.name}</h3>
                <span className="whitespace-nowrap text-sm font-black text-[#C4552B]">
                  {format.price}
                </span>
              </div>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#7A6B5F]">
                {format.seats}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#544940]">{format.blurb}</p>
              <ul className="mt-5 space-y-2 border-t border-[#241C17]/10 pt-5">
                {format.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-[#3F352E]">
                    <svg viewBox="0 0 20 20" className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" focusable="false">
                      <path
                        d="M4 10.5l4 4 8-9"
                        fill="none"
                        stroke="#4A5D3A"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
