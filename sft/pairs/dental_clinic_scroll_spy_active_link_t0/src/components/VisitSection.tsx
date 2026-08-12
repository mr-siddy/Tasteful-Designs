const STEPS = [
  {
    minutes: '0–5 min',
    title: 'Coffee, paperwork, and the actual question',
    body: 'Reception hands you one page, not seven. The only question that matters is what brought you in — a twinge, a chipped edge, three years of avoidance, or nothing at all beyond a nagging sense that it has been a while.',
  },
  {
    minutes: '5–20 min',
    title: 'Scan, photographs and X-rays',
    body: 'A quick intraoral scan and a set of digital bitewings go up on the monitor in front of you. You will see your own molars at roughly forty times life size, which is the moment most people finally understand what we have been telling them.',
  },
  {
    minutes: '20–35 min',
    title: 'The walk-through, in plain words',
    body: 'We go through the images together and sort everything into three lists: needs doing now, worth watching, and cosmetic if you ever want it. Nothing gets called urgent unless it genuinely is, and you can ask us to justify any of it.',
  },
  {
    minutes: '35–40 min',
    title: 'A written plan and a printed price',
    body: 'You leave with a plan on paper, a total, and what your insurer is likely to cover. There is no decision to make in the room and nobody will phone you on Thursday to chase it.',
  },
]

const BRING = [
  'Your insurance card, if you have one',
  'A list of any medications, including supplements',
  'Old X-rays from a previous practice, if you can get them',
  'Anything you want us to look at, even if it seems silly',
]

export function VisitSection() {
  return (
    <section id="visit" className="scroll-mt-28 bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Your first visit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-teal-950 sm:text-4xl">
            Forty minutes, and you know exactly where you stand
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            A first appointment at Copper Birch is booked for forty minutes because that is how long it takes to do
            properly. Here is the whole thing, minute by minute, so there are no surprises before you arrive.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="visit-step"
              className="relative rounded-3xl border border-stone-200 bg-white p-7 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-800 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-amber-600">{step.minutes}</p>
              <h3 className="mt-2 text-base font-semibold tracking-tight text-teal-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 rounded-3xl border border-stone-200 bg-white p-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-teal-950">What to bring</h3>
            <ul className="mt-4 space-y-2.5">
              {BRING.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                    <path d="m5 8.2 2 2 4-4.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
            <h3 className="text-lg font-semibold tracking-tight text-amber-900">Running late or need to move it?</h3>
            <p className="mt-3 text-sm leading-relaxed text-amber-900/80">
              Call the practice on (503) 555-0164 any time before your slot and we will shuffle things without a fee.
              We only charge for a missed appointment after the third one in a year, and even then we usually do not.
              The chair is easier to fill than a nervous patient is to get back.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
