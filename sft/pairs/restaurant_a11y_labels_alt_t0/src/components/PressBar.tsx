const PRESS = [
  { name: 'Boston Globe', quote: 'Best new restaurant north of the city' },
  { name: 'Yankee Monthly', quote: 'The fire is the whole argument' },
  { name: 'Cape Ann Beacon', quote: 'Rockport finally has a great room' },
  { name: 'Saveur', quote: '20 tables worth the drive' },
  { name: 'James Beard Semifinalist', quote: 'Best Chef: Northeast, 2024' },
  { name: 'Wine & Fire', quote: 'A cellar with actual opinions' },
]

const MARK = [
  <path key="a" d="M6 20h28M20 6v28" strokeLinecap="round" />,
  <path key="b" d="M8 26c6-14 18-14 24 0" strokeLinecap="round" />,
  <path key="c" d="M20 7l12 8v14l-12 8-12-8V15z" strokeLinejoin="round" />,
  <path key="d" d="M9 20a11 11 0 0 0 22 0 11 11 0 0 0-22 0Zm11-11v22" strokeLinejoin="round" />,
  <path key="e" d="M20 6l4 10 10 1-7.5 7 2 10-8.5-5.5L11.5 34l2-10L6 17l10-1z" strokeLinejoin="round" />,
  <path key="f" d="M13 8h14v9a7 7 0 0 1-14 0zM20 24v8m-6 0h12" strokeLinecap="round" />,
]

export default function PressBar() {
  return (
    <section className="border-y border-[#0b2027]/10 bg-[#f3ece0]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0b2027]/50">
          Five years on the harbour, and people keep writing it down
        </h2>
        <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
          {PRESS.map((item, index) => (
            <li key={item.name} data-testid="press-logo" className="text-center">
              <svg
                viewBox="0 0 40 40"
                className="mx-auto h-9 w-9 text-[#0b2027]/45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                {MARK[index % MARK.length]}
              </svg>
              <p className="mt-3 font-serif text-sm font-semibold text-[#0b2027]">{item.name}</p>
              <p className="mt-1 text-xs leading-snug text-[#0b2027]/60">{item.quote}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#0b2027]/70">
          We are a twenty-two table room with a counter, and we cook over wood every night of service. The awards are
          lovely; the reason to come is that the cod went into the coals ninety minutes after it came off the boat.
        </p>
      </div>
    </section>
  )
}
