const QUOTES = [
  {
    quote:
      'We booked the long table for my grandmother’s eightieth and Nino asked what she used to cook. Halfway through the evening a dish came out that nobody had ordered — her mother’s bean lobio, from a description over the phone. My grandmother cried into her wine and then made a toast about it.',
    name: 'Teodora Vaszary',
    role: 'Sabin, Portland · nine visits and counting',
  },
  {
    quote:
      'I have eaten khinkali in Tbilisi and I have eaten khinkali in most American cities that claim to have them. These are the only ones outside Georgia where the broth is still hot enough to be a hazard, which is the entire point of the dish.',
    name: 'Dr. Levan Kordzaia',
    role: 'Linguistics, Portland State University',
  },
  {
    quote:
      'Our whole team came for a Thursday supra with no idea what we were walking into. Three hours later the quietest engineer on staff was standing up making a toast to the people who are not at the table. I still think about it.',
    name: 'Priya Raghunathan',
    role: 'Head of engineering, Cascade Mapping Co.',
  },
]

export function Testimonials() {
  return (
    <section id="voices" data-testid="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-800">
            From the table
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            What guests tell us afterwards
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <li
              key={entry.name}
              data-testid="testimonial"
              className="flex flex-col rounded-3xl border border-stone-200 bg-[#fdf8f1] p-8 shadow-sm shadow-stone-200/70"
            >
              <svg viewBox="0 0 40 32" aria-hidden="true" className="h-8 w-10 text-amber-500">
                <path
                  d="M15 2C7 6 3 13 3 22c0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-4 2-8 6-11zM37 2c-8 4-12 11-12 20 0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-4 2-8 6-11z"
                  fill="#f59e0b"
                  opacity="0.6"
                />
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-stone-700">
                <p>{entry.quote}</p>
              </blockquote>
              <div className="mt-7 flex items-center gap-4 border-t border-stone-200 pt-6">
                <svg viewBox="0 0 48 48" role="img" aria-label={`Portrait of ${entry.name}`} className="h-12 w-12 shrink-0">
                  <circle cx="24" cy="24" r="24" fill="#9f1239" opacity="0.15" />
                  <circle cx="24" cy="19" r="8" fill="#9f1239" opacity="0.55" />
                  <path d="M8 46c2-10 8-15 16-15s14 5 16 15z" fill="#9f1239" opacity="0.45" />
                </svg>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900">{entry.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-stone-500">{entry.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
