const FORMATS = [
  {
    title: 'The cellar, one seating',
    price: '$145 per guest',
    detail:
      'Twelve chairs at the oak table, five courses off the same fire as the dining room, wine pairing optional at $70. Wednesday to Sunday, one booking a night, no room hire on top.',
    includes: ['Five courses, set for the table', 'Whole fish cracked at the table', 'Three and a half hours'],
  },
  {
    title: 'The counter, bought out',
    price: '$95 per guest',
    detail:
      'Take all fourteen counter seats for the afternoon, before dinner service opens. Oysters, crab toast and whatever else is on the ice, shucked in front of you for two hours.',
    includes: ['Two hours, noon to two', 'Fourteen seats maximum', 'Cider and muscadet included'],
  },
  {
    title: 'The whole shed',
    price: 'From $9,400',
    detail:
      'The full building on a Monday or Tuesday, when we are otherwise dark. Up to eighty standing or fifty-six seated, with the fire lit and the terrace open in season.',
    includes: ['Eighty standing, fifty-six seated', 'Monday and Tuesday only', 'Terrace from May to October'],
  },
]

export default function PrivateEvents() {
  return (
    <section id="cellar" className="bg-[#0b2027] text-[#f3ece0]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0a35e]">Private dining</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Three ways to take a room
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#f3ece0]/75">
            We do about sixty private dinners a year and we keep it deliberately simple: three formats, published
            prices, no minimum spend and no separate events menu. Whatever the room is eating, you are eating.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {FORMATS.map((format) => (
            <li
              key={format.title}
              data-testid="event-format"
              className="flex flex-col rounded-3xl border border-[#f3ece0]/15 bg-[#0f2b33] p-8"
            >
              <h3 className="font-serif text-2xl font-semibold">{format.title}</h3>
              <p className="mt-2 font-serif text-xl font-semibold text-[#f0a35e]">{format.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#f3ece0]/75">{format.detail}</p>
              <ul className="mt-6 space-y-2.5 border-t border-[#f3ece0]/15 pt-5 text-sm">
                {format.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#8fb8ae]" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                      <path d="m4 10.5 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#f3ece0]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm leading-relaxed text-[#f3ece0]/60">
          Dietary requirements are not a problem and are never a separate, worse dinner — tell us in the request form
          below and Marisol will build around them. The cellar is down eleven stone steps and has no lift; if that is an
          issue we will set the same menu in the cutting shed instead.
        </p>
      </div>
    </section>
  )
}
