const PRESS = [
  { name: 'The Oregonian', quote: '“The best bread in the city is baked against a wall.”' },
  { name: 'Portland Monthly', quote: '“Nino Abashidze runs the warmest room on Alberta.”' },
  { name: 'Willamette Week', quote: '“Come for the khinkali. Stay for the ninth toast.”' },
]

const NUMBERS = [
  { value: '4.9', label: 'average of 1,284 guest reviews' },
  { value: '2023', label: 'James Beard semifinalist, Best Chef Northwest' },
  { value: '31', label: 'Georgian wines poured by the glass' },
  { value: '7', label: 'years on the same corner' },
]

export function Accolades() {
  return (
    <section
      id="accolades"
      data-testid="accolades"
      className="border-b border-stone-200 bg-[#fdf8f1] py-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          What people keep saying about the room
        </h2>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {PRESS.map((item) => (
            <li
              key={item.name}
              data-testid="press-mention"
              className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm shadow-stone-200/60"
            >
              <svg viewBox="0 0 120 28" role="img" aria-label={item.name} className="h-6 w-auto">
                <text
                  x="0"
                  y="21"
                  fontSize="19"
                  fontFamily="Georgia, serif"
                  fill="#881337"
                  letterSpacing="0.5"
                >
                  {item.name}
                </text>
              </svg>
              <p className="mt-4 font-serif text-lg leading-snug text-stone-800">{item.quote}</p>
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid gap-8 rounded-3xl bg-rose-950 px-8 py-10 text-amber-50 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBERS.map((stat) => (
            <div key={stat.label} data-testid="accolade-stat">
              <dt className="font-serif text-4xl font-semibold text-amber-400">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-rose-100/85">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
