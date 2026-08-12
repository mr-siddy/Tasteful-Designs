const PACKAGES = [
  {
    name: 'The back room',
    seats: '10 – 16 guests',
    price: '$95 per guest',
    includes: [
      'The whole cold table, four hot courses and bread all evening',
      'Three qvevri wines chosen for what you are eating',
      'Three and a half hours, one seating, nobody waiting on the room',
    ],
  },
  {
    name: 'The long table',
    seats: '17 – 30 guests',
    price: '$110 per guest',
    includes: [
      'Everything in the back room, plus mtsvadi grilled over vine cuttings',
      'A tamada from the house if your family will not volunteer one',
      'Churchkhela strung the week before and sent home with everybody',
    ],
  },
  {
    name: 'The whole house',
    seats: '31 – 44 guests',
    price: 'From $4,600',
    includes: [
      'All forty-four seats, the counter and the cellar stairs',
      'Nino writes the menu with you six weeks out',
      'Panduri and voice trio on Fridays and Saturdays, if you want the room loud',
    ],
  },
]

export function PrivateSupra() {
  return (
    <section id="private" data-testid="private-supra" className="bg-[#fdf8f1] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">
            Private supras
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Take the long table, or take the whole house
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Birthdays, wakes, engagements, a company that has decided its holiday party should
            involve nineteen pleats per dumpling. We have hosted all four. Every private supra is
            one seating for the whole evening, priced per guest with the wine spelled out in
            advance, so no one is doing arithmetic at the end of the night.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((option) => (
            <li
              key={option.name}
              data-testid="private-package"
              className="flex flex-col rounded-3xl border border-stone-200 bg-white p-8 shadow-sm shadow-stone-200/70"
            >
              <h3 className="font-serif text-2xl font-semibold text-stone-900">{option.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-amber-700">
                {option.seats}
              </p>
              <p className="mt-5 font-serif text-3xl font-semibold text-rose-900">{option.price}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {option.includes.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-stone-600">
                    <svg viewBox="0 0 18 18" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0">
                      <path
                        d="M4 9.5l3 3 7-7.5"
                        stroke="#9f1239"
                        strokeWidth="2.2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#reserve"
                data-testid="private-cta"
                className="mt-8 rounded-full border border-rose-900 px-6 py-3 text-center text-sm font-semibold text-rose-900 transition hover:bg-rose-900 hover:text-amber-50"
              >
                Ask about {option.name.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
