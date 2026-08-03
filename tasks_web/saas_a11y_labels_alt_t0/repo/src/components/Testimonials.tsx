const QUOTES = [
  {
    quote:
      'We had a change advisory board that met on Thursdays and a release cadence that pretended it did not exist. Halyard collapsed the two: the policy is the board now, and the median approval is under a minute. Our December freeze was the first one nobody tried to route around.',
    name: 'Dario Winslet',
    role: 'VP Engineering, Fernpost Bank',
    initials: 'DW',
  },
  {
    quote:
      'Our last HIPAA audit took four engineers three weeks of evidence gathering. This year the auditor asked for the quarter, I exported the bundle in front of them, and we spent the rest of the session talking about something that actually mattered.',
    name: 'Halima Okonjo',
    role: 'Head of Platform, Ombra Health',
    initials: 'HO',
  },
  {
    quote:
      'The part I did not expect was shadow mode. Three weeks of watching what Halyard would have blocked told us more about our own change process than two years of retrospectives, and it meant enforcement day was completely uneventful.',
    name: 'Ruth Castellane',
    role: 'Director of Compliance, Tidemark Logistics',
    initials: 'RC',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B1524] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4ADEC0]">In their words</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-[2.75rem]">
            The people who stopped booking war rooms
          </h2>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <figure
              key={entry.name}
              data-testid="testimonial"
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#132238] p-8"
            >
              <svg viewBox="0 0 32 24" className="h-6 w-8 flex-none" aria-hidden="true" focusable="false">
                <path
                  d="M13 2C7 4.5 3 9.5 3 15.5 3 19.6 5.6 22 8.9 22c3 0 5.3-2.1 5.3-5 0-2.8-2-4.8-4.7-4.8-.5 0-1 .1-1.3.2.7-2.6 3-5.2 6-6.7L13 2zm16 0c-6 2.5-10 7.5-10 13.5 0 4.1 2.6 6.5 5.9 6.5 3 0 5.3-2.1 5.3-5 0-2.8-2-4.8-4.7-4.8-.5 0-1 .1-1.3.2.7-2.6 3-5.2 6-6.7L29 2z"
                  fill="#F2A93B"
                  opacity="0.5"
                />
              </svg>
              <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-slate-300">
                “{entry.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                <svg viewBox="0 0 44 44" className="h-11 w-11 flex-none" aria-hidden="true" focusable="false">
                  <circle cx="22" cy="22" r="21" fill="#16263D" stroke="#2C3E58" />
                  <text
                    x="22"
                    y="27"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#4ADEC0"
                    fontFamily="ui-sans-serif, system-ui"
                  >
                    {entry.initials}
                  </text>
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">{entry.name}</p>
                  <p className="text-xs text-slate-500">{entry.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
