const STEPS = [
  {
    n: '01',
    title: 'A phone call, not a form reply',
    body: 'Someone from the floor rings you within a working day to ask what you want out of this and what has gone wrong before. It takes eleven minutes and saves everyone a wasted month.',
  },
  {
    n: '02',
    title: 'Your assessment and first session',
    body: 'You book the sixty-minute screen, then a quiet Foundations slot. You will be shown how to hinge before you are shown how to deadlift.',
  },
  {
    n: '03',
    title: 'Your trial week, on the real timetable',
    body: 'Seven days of whichever sessions fit your life, at no cost. You lift alongside members rather than in a sales class built for visitors.',
  },
  {
    n: '04',
    title: 'Week four: the first review',
    body: 'Your coach sits down with your whiteboard numbers, adjusts the block, and tells you honestly whether two sessions a week is enough for what you asked for.',
  },
]

export function StudioStory() {
  return (
    <section id="story" className="bg-stone-100">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-600">
              The room
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              A brick warehouse, eight racks and no mirrors
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              Northline lives in the old Cavendish Lane paper store: nineteen metres of concrete,
              a sawtooth roof that leaks light all morning, and eight platforms built by a member
              who is a carpenter by trade. There is a kettle, a rack of chalk, a whiteboard with
              everybody&rsquo;s working weights on it, and a dog named Bruno who belongs to the
              tenant upstairs and considers the sled his property.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              What there is not: mirrors, a TV, a supplement shelf, or a single machine with a
              weight stack. Priya opened the place in 2019 with two racks and thirty members after
              eight years writing strength programmes for Rowing Victoria, and the rule from the
              first week has held — if it cannot be coached properly with nine people on the floor,
              we do not run it.
            </p>

            <svg
              viewBox="0 0 360 150"
              role="img"
              aria-label="Line drawing of the Cavendish Lane warehouse frontage with its sawtooth roof"
              className="mt-8 w-full"
            >
              <rect width="360" height="150" rx="16" fill="#e7e5e4" />
              <path d="M20 120V70l30-26 30 26v50z" fill="#d6d3d1" />
              <path d="M80 120V70l30-26 30 26v50z" fill="#d6d3d1" />
              <path d="M140 120V70l30-26 30 26v50z" fill="#d6d3d1" />
              <rect x="20" y="120" width="320" height="14" rx="4" fill="#a8a29e" />
              <rect x="212" y="58" width="128" height="62" rx="6" fill="#d6d3d1" />
              <rect x="228" y="76" width="30" height="44" rx="3" fill="#fbbf24" />
              <rect x="272" y="76" width="52" height="26" rx="3" fill="#f5f5f4" />
              <text x="276" y="118" fill="#57534e" fontSize="11">
                42 Cavendish Ln
              </text>
            </svg>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-tight text-stone-900">
              Your first month, step by step
            </h3>
            <ol className="mt-8 space-y-8">
              {STEPS.map((step) => (
                <li key={step.n} data-testid="process-step" className="flex gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-black text-amber-400">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-base font-bold tracking-tight text-stone-900">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-stone-300 bg-white p-6">
              <p className="text-sm leading-relaxed text-stone-600">
                <span className="font-bold text-stone-900">Nothing to cancel.</span> Memberships are
                fortnightly and you can pause for up to eight weeks a year — travel, a new baby, a
                bad shoulder. We would rather you came back in September than quit in June.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
