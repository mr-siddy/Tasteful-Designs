const STEPS = [
  {
    step: '01',
    title: 'You tell us what is going on',
    body:
      'A form, a phone call or a walk-in — whichever is easiest. We ask what brought you, when you last saw a dentist, and whether anything about the chair frightens you. Nobody is judged for the answer to the middle question.',
    aside: '2 minutes',
  },
  {
    step: '02',
    title: 'We look, measure and photograph',
    body:
      'A full examination with gum measurements, an intraoral scan and photographs of anything worth watching. If an X-ray is needed we say why first. This is the appointment where we do not treat anything.',
    aside: '40 minutes',
  },
  {
    step: '03',
    title: 'You get a written plan and a price',
    body:
      'Everything we found, sorted into what needs doing now, what can wait a year, and what is only cosmetic. Each line carries a price and a rough appointment length, and you take it home before you decide.',
    aside: 'same day, by email',
  },
  {
    step: '04',
    title: 'We work through it at your pace',
    body:
      'Most plans are two or three appointments. You can stop after any one of them, spread the cost over the Lantern Care plan, or take the plan to another practice for a second opinion — we will send the scans over ourselves.',
    aside: 'as long as it takes',
  },
]

export default function FirstVisit() {
  return (
    <section id="first-visit" className="bg-[#152046] text-white">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f9a88c]">
              Your first visit
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Four steps, and none of them are a surprise
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              About a third of the people who register here have avoided a dentist for five
              years or more. That is a normal thing to have done, and it is why we wrote this
              out: so you know exactly what the first hour holds before you commit to it.
            </p>
            <p className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm leading-relaxed text-white/80">
              Nervous patients can book a ten-minute visit first that involves sitting in the
              room, meeting the clinician and going home again. It costs nothing and about
              forty people a year take us up on it.
            </p>
          </div>

          <ol className="space-y-5">
            {STEPS.map(({ step, title, body, aside }) => (
              <li
                key={step}
                className="flex gap-5 rounded-3xl border border-white/12 bg-white/5 p-6 transition hover:border-white/25"
              >
                <span className="text-2xl font-semibold tabular-nums text-[#f9a88c]">{step}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{body}</p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                    {aside}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
