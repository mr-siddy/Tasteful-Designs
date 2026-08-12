const STEPS = [
  {
    marker: '01',
    time: 'Before you come',
    title: 'A form that takes four minutes',
    body: 'Medical history, medication, and one box for the thing you are most worried about. That last box is the one we read first, and it is the reason the appointment does not start with twenty questions you have already answered.',
  },
  {
    marker: '02',
    time: 'First ten minutes',
    title: 'Talking, sitting upright',
    body: 'The chair stays where it is. We go through what has been happening, what you want out of it, and what you can afford to think about this year. If the honest answer is "just get me out of pain for now", that is a perfectly good plan.',
  },
  {
    marker: '03',
    time: 'Next twenty minutes',
    title: 'The actual examination',
    body: 'Teeth, gums, bite, jaw joint, and a soft-tissue check of the tongue, cheeks and throat that takes ninety seconds and is the single most useful thing we do. Small x-rays only where something needs looking under.',
  },
  {
    marker: '04',
    time: 'Last fifteen minutes',
    title: 'The plan, priced, on paper',
    body: 'Everything we found, in the order we think it should be dealt with, with a price beside each line and a note about what happens if you leave it. Two copies: one for you, one scanned to your record.',
  },
  {
    marker: '05',
    time: 'That afternoon',
    title: 'A text, then it is your move',
    body: 'One message with the plan attached and reception’s direct number. We do not chase, we do not ring you at teatime, and we do not pass your details to anyone. Book when you are ready, or do not.',
  },
]

export function FirstVisitTimeline() {
  return (
    <section id="first-visit" className="bg-[#EDF3F2] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">Your first visit</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            Forty-five minutes, and you know exactly what happens in each of them
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            People hate the not-knowing more than they hate the dentistry. So here is the whole first appointment,
            minute by minute, from the form you fill in at the kitchen table to the text that lands afterwards.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step) => (
            <li
              key={step.marker}
              data-testid="visit-step"
              className="relative rounded-2xl border border-[#0F2E4A]/10 bg-[#FAF6F1] p-6 shadow-sm shadow-[#0F2E4A]/5"
            >
              <span className="text-3xl font-bold tracking-tight text-[#F2683C]">{step.marker}</span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#2A7C70]">{step.time}</p>
              <h3 className="mt-3 text-base font-semibold leading-snug text-[#0F2E4A]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5A64]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
