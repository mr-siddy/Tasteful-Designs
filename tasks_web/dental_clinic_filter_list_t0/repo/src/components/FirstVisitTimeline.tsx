const STEPS = [
  {
    minutes: '0–5 min',
    title: 'Coffee, not a clipboard',
    body: 'Marta has your forms already filled in from the booking link, so you sit down with a coffee instead of a pen. Tell her at the desk if you would rather not be spoken to while you are in the chair.',
  },
  {
    minutes: '5–20 min',
    title: 'The look and the scan',
    body: 'A full check of every tooth, the gums, the joint and the soft tissue, plus two small x-rays and a handheld scan. You watch the scan build on the screen beside you as it happens.',
  },
  {
    minutes: '20–35 min',
    title: 'The conversation, sitting up',
    body: 'Chair up, screen turned towards you, and a walk through what we found in plain words. Anything we would do, we price there and then from the same index that is published on this page.',
  },
  {
    minutes: '35–45 min',
    title: 'A plan you leave with',
    body: 'A printed plan in three tiers — what needs doing now, what can wait a year, and what is purely cosmetic — with a total at the bottom of each. Nothing is booked until you have read it at home.',
  },
]

export function FirstVisitTimeline() {
  return (
    <section id="first-visit" className="bg-[#F1F5F7]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            Your first visit
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            Forty-five minutes, and you know exactly where you stand
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5B7089]">
            The first appointment is $130 and nothing else gets added to it. Here is the whole thing,
            minute by minute, so there are no surprises in it for you.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-[#12263F]/8 bg-white p-6 shadow-sm shadow-[#12263F]/5"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12263F] text-base font-semibold text-white"
              >
                {index + 1}
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2AA79B]">
                {step.minutes}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#12263F]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5B7089]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
