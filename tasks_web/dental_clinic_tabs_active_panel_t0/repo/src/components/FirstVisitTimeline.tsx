const STEPS = [
  {
    number: '01',
    title: 'A phone call that takes four minutes',
    body:
      'Dilan asks what brought you to us, whether anything hurts right now, and how long it has been. If it has been eleven years, say eleven years — it changes how long we book, not how we treat you.',
    aside: 'Or fill in the form at the bottom of this page and we ring you back before six.',
  },
  {
    number: '02',
    title: 'Forty minutes, and no drill',
    body:
      'The first appointment is a conversation and an examination. We chart every tooth, measure the gums, photograph what we can see and take the two scans we actually need rather than a full set out of habit.',
    aside: 'Nothing is treated on day one unless you are in pain and want it dealt with.',
  },
  {
    number: '03',
    title: 'A written plan with prices on it',
    body:
      'You leave with a printed plan split into three columns: what needs doing now, what can wait a year, and what is purely your choice. Every line has a price beside it and nothing is bundled.',
    aside: 'Emailed too, so you can think it over at the kitchen table.',
  },
  {
    number: '04',
    title: 'You decide the order and the pace',
    body:
      'Some people want everything finished in a fortnight; others do one filling a month until it is done. Both are fine. We hold your plan open for eighteen months and re-quote free if the prices move.',
    aside: 'Payment plans over three, six or ten months are interest free above £400.',
  },
  {
    number: '05',
    title: 'A recall you will actually keep',
    body:
      'After treatment we agree an interval that fits your risk — six months for most, three for gum patients, a year for people with quiet mouths and good habits. Then we remind you twice.',
    aside: 'Change or cancel by text, without a phone queue.',
  },
]

export function FirstVisitTimeline() {
  return (
    <section id="first-visit" className="bg-[#123B36] py-20 text-[#FBF7F0] lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5C458]">Your first visit</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Five steps, and you can stop at any one of them
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#C8D8CD]">
            Nobody is signed up to anything by walking through the door. Here is the whole route from the first
            phone call to a recall you do not dread, written out so there are no surprises in it.
          </p>
        </div>

        <ol className="mt-14 space-y-10 border-l border-white/15 pl-8 lg:space-y-12">
          {STEPS.map((step) => (
            <li key={step.number} data-testid="visit-step" className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#E8A020] text-xs font-bold text-[#123B36]">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-[#C8D8CD]">{step.body}</p>
              <p className="mt-2 text-sm italic text-[#93B39F]">{step.aside}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
