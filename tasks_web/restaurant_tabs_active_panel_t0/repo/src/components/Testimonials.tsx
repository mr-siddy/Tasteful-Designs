const QUOTES = [
  {
    quote:
      'The turbot arrives whole, blistered, smelling of rosemary and woodsmoke, and it is filleted at the table by someone who has clearly done it four thousand times. I have eaten it eleven times and I intend to keep going.',
    name: 'Adaeze Okonkwo',
    role: 'Food editor, The Providence Journal',
  },
  {
    quote:
      'I came in the second week they were open because the fire smelled good from the sidewalk. Now I sit at the same bar stool every Thursday, eat sardines on toast, and let Amaia pick the wine. It is the closest thing this city has to a local.',
    name: 'Tomás Ferrand',
    role: 'Regular since 2019',
  },
  {
    quote:
      'We booked the loft for my mother’s seventieth. Twenty-two of us, five courses, and the kitchen quietly cooked a whole separate menu for my brother who cannot eat shellfish without ever making it into a thing.',
    name: 'Priya Raghunathan',
    role: 'Booked the Sail Loft, March 2026',
  },
]

export function Testimonials() {
  return (
    <section id="guests" data-testid="testimonials" className="bg-stone-100 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
            From the dining room
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            What guests say when we are not listening
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <li key={entry.name} data-testid="testimonial">
              <figure className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-8">
                <svg viewBox="0 0 40 32" aria-hidden="true" className="h-8 w-10 fill-amber-400">
                  <path d="M16 32V16C16 7 10 2 0 0v6c5 2 8 5 8 10H0v16zM40 32V16c0-9-6-14-16-16v6c5 2 8 5 8 10h-8v16z" />
                </svg>
                <blockquote className="mt-6 grow text-[15px] leading-relaxed text-stone-700">
                  {entry.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-stone-200 pt-6">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-900 font-serif text-sm font-semibold text-amber-400"
                  >
                    {entry.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-stone-900">{entry.name}</span>
                    <span className="block text-sm text-stone-500">{entry.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
