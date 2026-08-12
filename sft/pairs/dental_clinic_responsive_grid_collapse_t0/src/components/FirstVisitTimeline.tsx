const TIMELINE = [
  {
    when: 'Before you arrive',
    title: 'Two forms, five minutes',
    body: 'Medical history and insurance go in online the night before. Bring nothing but yourself; we pull last x-rays from your old office with a signature.',
  },
  {
    when: 'First ten minutes',
    title: 'We talk before anything sharp appears',
    body: 'Sitting up, coat on, in the room with the lake window. What hurts, what you have been ignoring, what you can afford this year and what can wait.',
  },
  {
    when: 'The next half hour',
    title: 'Scans, photographs, a proper look',
    body: 'Digital x-rays at a fifth of the old radiation dose, a 3D scan, and close-up photographs of anything we are worried about so you can see it too.',
  },
  {
    when: 'Before you leave',
    title: 'A written plan with prices on it',
    body: 'Printed, itemised, split into what needs doing now and what can wait a year. You take it home. Nobody is asked to decide anything in the chair.',
  },
]

/** The process band: what an actual first appointment looks like end to end. */
export default function FirstVisitTimeline() {
  return (
    <section id="visit" data-testid="first-visit" className="bg-[#f2e9da]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            Your first appointment
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            An hour, start to finish, and you will know where you stand
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0d2b2e]/70">
            We run one appointment at a time, which is why we are not cheap and why we
            are never running forty minutes behind. Here is exactly how the hour goes.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((entry, index) => (
            <li key={entry.title} data-testid="timeline-step" className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0f4c4f] font-serif text-sm font-semibold text-[#0f4c4f]">
                  {index + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0d2b2e]/50">
                  {entry.when}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[#0d2b2e]">
                {entry.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[#0d2b2e]/70">
                {entry.body}
              </p>
            </li>
          ))}
        </ol>

        <svg
          viewBox="0 0 1200 40"
          className="mt-16 w-full"
          role="img"
          aria-label="Topographic divider drawn from the contours of Quarry Hill"
        >
          <path
            d="M0 30c120-22 240 22 360 0s240-26 360-4 240 20 360-4 120-14 120-14"
            fill="none"
            stroke="#0f4c4f"
            strokeWidth="2"
            opacity="0.28"
          />
          <path
            d="M0 38c120-18 240 18 360 0s240-20 360-2 240 16 360-2 120-10 120-10"
            fill="none"
            stroke="#c68a3e"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
      </div>
    </section>
  )
}
