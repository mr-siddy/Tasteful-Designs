const QUOTES = [
  {
    quote:
      'We drove up from Providence on a Wednesday in February expecting a quiet dinner and ended up at the counter for three hours. The cod came out in sheets. I have thought about that drawn brine at least once a week since.',
    name: 'Priya Raghunathan',
    role: 'Regular since 2021, Providence',
  },
  {
    quote:
      'I booked the cellar for my father’s seventieth with twelve of us and no idea what to order. They cooked one menu for the table, brought the monkfish down whole and cracked the salt crust in front of him. He talked to the kitchen for twenty minutes afterwards.',
    name: 'Dana Alcott',
    role: 'Private dining guest, Beverly',
  },
  {
    quote:
      'I sell them fish four days a week and I still book a table twice a month. They pay on the day, they take the whole box instead of picking through it, and they cook it better than I ever have.',
    name: 'Emmett Kohl',
    role: 'Captain, F/V Sandpiper, Pigeon Cove',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#fbf7ef]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2601a]">In their words</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Guests, a neighbour, and one of our fishermen
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <li
              key={entry.name}
              data-testid="testimonial"
              className="flex flex-col rounded-3xl border border-[#0b2027]/10 bg-white p-8 shadow-sm"
            >
              <svg viewBox="0 0 32 24" className="h-6 w-8 text-[#d2601a]" fill="currentColor" aria-hidden="true">
                <path d="M0 24V12C0 5.4 4.6 0 11 0v5.2C7.7 5.2 5.2 8 5.2 11.4H12V24Zm20 0V12C20 5.4 24.6 0 31 0v5.2c-3.3 0-5.8 2.8-5.8 6.2H32V24Z" />
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#0b2027]/80">{entry.quote}</blockquote>
              <div className="mt-6 border-t border-[#0b2027]/10 pt-5">
                <p className="font-serif text-lg font-semibold">{entry.name}</p>
                <p className="mt-0.5 text-sm text-[#0b2027]/55">{entry.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
