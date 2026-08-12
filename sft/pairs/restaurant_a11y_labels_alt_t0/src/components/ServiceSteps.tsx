const STEPS = [
  {
    time: '3:00 pm',
    title: 'The boats come in',
    detail:
      'Marisol meets the Rachel Vane and the Sandpiper at the pier, buys what is on the deck, and carries it two hundred yards up to the shed. Anything we will not use in twenty-four hours we do not buy.',
    icon: (
      <path d="M6 30h36l-6 12H12ZM24 6v24M24 12l12 6-12 4" strokeLinejoin="round" strokeLinecap="round" />
    ),
  },
  {
    time: '4:00 pm',
    title: 'The board is set',
    detail:
      'Seven or eight dishes go up on the wall in chalk and to the printer at the same time. Prices move with the landing, so what you paid for the lobster in June is not what you will pay in November.',
    icon: <path d="M8 8h32v26H8zM14 16h20M14 22h14M20 34v6m8-6v6M14 40h20" strokeLinecap="round" />,
  },
  {
    time: '5:00 pm',
    title: 'First seating, doors open',
    detail:
      'The counter and the terrace start taking walk-ins, the reserved tables in the cutting shed begin, and the fire is at its hottest. If you want the loudest, best version of this room, this is the hour.',
    icon: <path d="M10 40V16l14-8 14 8v24M20 40V28h8v12" strokeLinejoin="round" strokeLinecap="round" />,
  },
  {
    time: '9:15 pm',
    title: 'Last seating, then the sweep',
    detail:
      'The final tables go down at a quarter past nine. Whatever is left of the fish becomes the brine broth every table gets the next night, and the fire is banked and left to die on its own.',
    icon: <path d="M24 6c6 8 11 12 11 19a11 11 0 0 1-22 0c0-7 5-11 11-19ZM12 42h24" strokeLinejoin="round" strokeLinecap="round" />,
  },
]

export default function ServiceSteps() {
  return (
    <section className="border-y border-[#0b2027]/10 bg-[#f3ece0]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2601a]">A night here</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            From the pier at three to the last plate at ten
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#0b2027]/75">
            People ask why the menu they saw on Thursday is not the menu on Saturday. This is why — the whole day runs
            forwards from whatever the boats hand us, and nothing about it is decided in advance.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="service-step"
              className="relative rounded-3xl border border-[#0b2027]/10 bg-[#fbf7ef] p-7"
            >
              <span className="absolute right-6 top-6 font-serif text-4xl font-semibold text-[#0b2027]/10">
                {index + 1}
              </span>
              <svg
                viewBox="0 0 48 48"
                className="h-11 w-11 text-[#d2601a]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                {step.icon}
              </svg>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b2027]/45">{step.time}</p>
              <h3 className="mt-2 font-serif text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#0b2027]/70">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
