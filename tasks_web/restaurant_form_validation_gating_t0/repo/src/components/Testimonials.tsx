const QUOTES = [
  {
    quote:
      'We put thirty-four people at the Long Table for my parents’ fortieth and I did not have to make a single decision after the first email. Odalys sent three menus, we picked one, and the turbot came out whole and got carved in front of my father, who cried about a fish.',
    name: 'Georgia Nwachukwu',
    role: 'Booked the Long Table, October 2025',
    initials: 'GN',
  },
  {
    quote:
      'I have eaten at the counter maybe fifty times. It is the only restaurant in the Triangle where I can watch someone cook the thing I ordered and then ask them about the wood. The cider list alone is worth the drive from Raleigh.',
    name: 'Bennett Traoré',
    role: 'Regular since the second month',
    initials: 'BT',
  },
  {
    quote:
      'We took the whole room for a staff dinner of forty-one and they fed a vegan, two shellfish allergies and a nine-year-old without once making it a production. The bill came itemised with gratuity already in it. Nobody argued about anything.',
    name: 'Camille Ostrander',
    role: 'Managing editor, Brightleaf Quarterly',
    initials: 'CO',
  },
]

function QuoteGlyph() {
  return (
    <svg viewBox="0 0 32 24" className="h-7 w-9 text-[#e0912f]" aria-hidden="true">
      <path
        d="M13 24V12.4C13 5.7 9 1.2 2.2 0L1 3.3c3.6 1 5.5 3.4 5.8 6.5H2.4V24H13zm18 0V12.4C31 5.7 27 1.2 20.2 0L19 3.3c3.6 1 5.5 3.4 5.8 6.5h-4.4V24H31z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section id="guests" aria-labelledby="guests-heading" className="bg-[#1b1512] text-[#faf5ec]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e0912f]">In their words</p>
          <h2 id="guests-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Three people who have sat at that table
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {QUOTES.map((entry) => (
            <li
              key={entry.name}
              className="flex flex-col rounded-3xl border border-[#faf5ec]/12 bg-[#241a14] p-8 shadow-xl shadow-black/25"
            >
              <QuoteGlyph />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#e0d3bf]">
                {entry.quote}
              </blockquote>
              <div className="mt-7 flex items-center gap-4 border-t border-[#faf5ec]/12 pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b8451f] text-sm font-black text-[#faf5ec]">
                  {entry.initials}
                </span>
                <span>
                  <h3 className="text-sm font-black">{entry.name}</h3>
                  <p className="text-xs text-[#a9977f]">{entry.role}</p>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
