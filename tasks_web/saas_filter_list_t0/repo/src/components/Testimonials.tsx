const QUOTES = [
  {
    quote:
      'We had a close checklist in a spreadsheet with forty-one rows and a column called “who is chasing this”. That column does not exist anymore. Close went from nine days to six, and I stopped spending Sunday nights reading chat history.',
    name: 'Priya Venkataraman',
    role: 'Controller, Fernbrook Health',
    initials: 'PV',
  },
  {
    quote:
      'The escalation ladder template paid for the whole contract in a quarter. Tickets that used to sit for six hours because nobody knew whose turn it was now find a human in thirty minutes, and the ladder keeps walking if that human is asleep.',
    name: 'Marcus Deel',
    role: 'Head of Support, Kestrel Robotics',
    initials: 'MD',
  },
  {
    quote:
      'Our auditor asked for evidence on eleven months of vendor approvals. I filtered the run log, exported it, and sent it before the meeting finished. The previous year that request took two people most of a fortnight.',
    name: 'Dana Ruiz-Okafor',
    role: 'Director of Revenue Operations, Harborlight Freight',
    initials: 'DR',
  },
]

export default function Testimonials() {
  return (
    <section id="stories" className="border-y border-[#E2DCCE] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            In their words
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            The teams who stopped being the automation
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-[#E2DCCE] bg-[#FBFAF6] p-7 shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#CBD9D4]" aria-hidden="true" focusable="false">
                <path d="M9.5 5.5C6 7 4 10 4 13.7c0 2.9 1.8 4.8 4.3 4.8 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.9 1.7-3.4 3.6-4.4zm10 0C16 7 14 10 14 13.7c0 2.9 1.8 4.8 4.3 4.8 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.9 1.7-3.4 3.6-4.4z" fill="currentColor" />
              </svg>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-[#3E524D]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#E9E3D6] pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B1F1B] text-sm font-semibold text-[#E8A33D]">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#0B1F1B]">{item.name}</span>
                  <span className="block text-xs text-[#6B7C77]">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
