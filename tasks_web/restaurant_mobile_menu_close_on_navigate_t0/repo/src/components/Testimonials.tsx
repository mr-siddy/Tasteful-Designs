import { QuoteGlyph, StarIcon } from './Icons'

const QUOTES = [
  {
    quote:
      'We booked the counter for our anniversary and ended up talking to Tomás for two hours about apple wood. The lamb had been in the ash since the night before and it tasted like it.',
    name: 'Delphine Aubert',
    role: 'Guest since 2020, Phinney Ridge',
  },
  {
    quote:
      'I run a twelve-person team offsite here every January. The Loft is the only private room in Seattle where nobody spends the evening shouting over a sound system.',
    name: 'Marcus Oyelaran',
    role: 'Operations lead, Harborline Logistics',
  },
  {
    quote:
      'They rebuilt the whole tasting menu around vegetables for me with one day of notice, and it was better than the version everyone else was eating. That never happens.',
    name: 'Ingrid Solheim',
    role: 'Guest, Fremont',
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#F1E7D8]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#C4653A]">Guests</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#12261F] sm:text-5xl">
            What people say on the way out
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#12261F]/75">
            Twelve hundred reviews later, the three things guests mention most are the fire, the
            bread and the fact that we remember what they ate last time.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl border border-[#12261F]/10 bg-[#F7F1E8] p-8"
            >
              <QuoteGlyph className="h-8 w-8 text-[#E08B4F]" />
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-[#12261F]">
                “{item.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3 border-t border-[#12261F]/10 pt-6">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#4C6B54]/15 font-serif text-lg text-[#4C6B54]">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#12261F]">{item.name}</span>
                  <span className="block text-xs text-[#12261F]/60">{item.role}</span>
                </span>
              </div>
              <div className="mt-4 flex gap-1 text-[#C4653A]">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
