const STEPS = [
  {
    minutes: '0–5 min',
    title: 'Arrive and sit down',
    copy: 'Wes checks you in at the desk, takes your insurance card if you have one, and shows you where the bathroom and the water are. Nobody hands you a clipboard: we ask the questions out loud.',
  },
  {
    minutes: '5–20 min',
    title: 'Talk before anything happens',
    copy: 'Your dentist asks what has been bothering you, what you have had done before, what went badly, and what you want your teeth to be able to do. This is the part most practices skip.',
  },
  {
    minutes: '20–35 min',
    title: 'Look, scan, and two small X-rays',
    copy: 'A full examination including the gums, the joints and a soft-tissue screen, then a scan of both jaws that goes up on the screen beside you so you can see what we are describing.',
  },
  {
    minutes: '35–50 min',
    title: 'The clean',
    copy: 'A scale and polish with Renée, who will tell you honestly which two spots you keep missing rather than lecturing you about all of them at once.',
  },
  {
    minutes: '50–60 min',
    title: 'A written plan with prices on it',
    copy: 'Printed, itemised, split into what is urgent, what can wait and what is optional. You leave with it. Nothing is booked in that room unless you ask us to book it.',
  },
]

export function FirstVisitTimeline() {
  return (
    <section data-testid="first-visit" className="bg-[#eaf4f5]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#128a72]">
            Your first hour
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Exactly what happens in a first appointment, minute by minute
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0b2d45]/75">
            New patient appointments are booked at sixty minutes because that is how long this
            actually takes. Here is the whole hour, so there are no surprises in it.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="visit-step"
              className="relative rounded-3xl border border-[#0b2d45]/10 bg-white p-7 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b2d45] font-serif text-lg font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#2fb99b]">
                {step.minutes}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#0b2d45]/70">{step.copy}</p>
            </li>
          ))}
          <li className="rounded-3xl border border-dashed border-[#0b2d45]/25 bg-transparent p-7">
            <h3 className="font-serif text-xl font-semibold">And if it hurts today</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#0b2d45]/70">
              Emergency visits skip the tour. Thirty minutes, straight to the tooth that is keeping
              you awake, with pain sorted first and the plan for fixing it properly written up
              afterwards.
            </p>
            <a
              href="#book"
              className="mt-5 inline-block text-sm font-semibold text-[#128a72] underline underline-offset-4"
            >
              Ask for an urgent chair
            </a>
          </li>
        </ol>
      </div>
    </section>
  )
}
