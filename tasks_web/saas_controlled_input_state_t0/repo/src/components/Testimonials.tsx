import { IconQuote } from './icons'

const QUOTES = [
  {
    quote:
      'We had a culture of writing post-mortems and no culture of finishing them. Twenty-three open action items, average age four months. Postlude put every one of them back in front of the person who owned it, with the outage attached, and we closed nineteen in a quarter.',
    name: 'Priya Raghunathan',
    role: 'Staff SRE, Northwind Freight',
    initials: 'PR',
  },
  {
    quote:
      'The timeline is the whole thing. Our reviews used to spend the first twenty minutes reconstructing what happened from three browser tabs and someone’s memory. Now the sequence is already there and we argue about the interesting part instead.',
    name: 'Lena Sørensen',
    role: 'Director of Platform, Cadence Health',
    initials: 'LS',
  },
  {
    quote:
      'Our regulator asks for incident documentation with a straight face and a short deadline. The signed export was the reason we bought it; the quarterly factor report is the reason engineering keeps it. Median time to review went from eleven days to two.',
    name: 'Marcus Oyelaran',
    role: 'VP Engineering, Alder Bank',
    initials: 'MO',
  },
]

export function Testimonials() {
  return (
    <section id="customers" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Customers</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl">
            From teams who were already good at incidents
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <span className="text-orange-500">
                <IconQuote />
              </span>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">{q.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1220] text-xs font-semibold tracking-wide text-orange-300"
                >
                  {q.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#0B1220]">{q.name}</span>
                  <span className="block text-xs text-slate-500">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
