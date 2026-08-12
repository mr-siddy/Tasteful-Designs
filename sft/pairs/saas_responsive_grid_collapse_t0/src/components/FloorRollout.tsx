const STEPS = [
  {
    week: 'Week one',
    title: 'We walk your floor',
    body:
      'Two of us come out for a day and a half, follow one real run from the fabric room to the packing table, and write down every place a number gets copied by hand. That list becomes your setup, not a template.',
  },
  {
    week: 'Week two',
    title: 'Styles and operations go in',
    body:
      'We load your live styles with their operation sequences, size ratios and standard minutes. You keep the names your floor already uses — if your team says “set sleeve, flat fell”, the board says that too.',
  },
  {
    week: 'Week three',
    title: 'One line runs it in parallel',
    body:
      'A single sew line runs on Grainline while the rest of the floor stays on paper. Nobody is asked to trust it yet; the point is to catch the two or three things we got wrong about your operation sequence.',
  },
  {
    week: 'Week four',
    title: 'The floor switches over',
    body:
      'Cutting, both lines and finishing move across on a Monday, with one of us on site all week. Paper tickets keep printing in parallel for the first ten days, because a floor should never be one login away from stopping.',
  },
  {
    week: 'Ongoing',
    title: 'A season review, every season',
    body:
      'Twice a year we sit down with your yield, rework and on-time numbers and cut the parts of the board nobody uses. Most floors end the first year with fewer fields than they started with.',
  },
]

export default function FloorRollout() {
  return (
    <section
      id="rollout"
      aria-labelledby="rollout-heading"
      className="border-b border-[#E0D6C6] bg-[#1E1B26] text-[#F6F2EC]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E0A47F]">
            Getting on the board
          </p>
          <h2
            id="rollout-heading"
            className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
          >
            Four weeks from the first floor walk to the last paper ticket
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#B9AFC2]">
            We have never had a floor go live on a phone call. Somebody from
            Grainline is physically in your building twice during setup, because
            the difference between software that gets used and software that gets
            abandoned is whether it matches the way your cutter already works.
          </p>
        </div>

        <ol className="mt-14 space-y-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#4A4455] bg-[#2A2534] text-lg font-black text-[#E0A47F]">
                {i + 1}
              </span>
              <div className="border-b border-[#332E3E] pb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A7286]">
                  {step.week}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-[#B9AFC2]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
