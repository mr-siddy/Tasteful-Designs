const STEPS = [
  {
    step: '01',
    title: 'Coffee and paperwork, in that order',
    body: 'Marisol has your forms open before you arrive, so the clipboard takes three minutes rather than twenty. There is a pot of Ballard Coffee Works on and the wifi password is on the card by the till.',
  },
  {
    step: '02',
    title: 'Photographs and low-dose films',
    body: 'Twelve intraoral photographs and a set of digital X-rays at roughly a tenth of the dose of the film cameras most of us grew up with. You see them on the screen at the same moment the doctor does.',
  },
  {
    step: '03',
    title: 'A proper cleaning, not a polish',
    body: 'Forty minutes with Priya, including a full six-point periodontal charting so we have a baseline to measure against next year rather than a vague note that the gums looked fine.',
  },
  {
    step: '04',
    title: 'The conversation, sitting upright',
    body: 'Nobody discusses a treatment plan with a patient lying flat and unable to answer. The chair comes up, the screen turns around, and Dr. Okonkwo walks through what she found, what is urgent, and what can wait two years.',
  },
  {
    step: '05',
    title: 'A written plan with prices on it',
    body: 'You leave with a printed sheet: every recommended item, the cash price, what your plan is likely to cover, and what happens if you do nothing. No pressure to book anything on the way out.',
  },
]

export function FirstVisitTimeline() {
  return (
    <section id="first-visit" aria-labelledby="first-visit-heading" className="bg-[#0B2540] text-[#EFE6DA]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E9A876]">The first ninety minutes</p>
          <h2 id="first-visit-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Exactly how a first visit goes
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#BFCBD6]">
            Most of the fear people bring through the door is fear of not knowing what is about to
            happen. So here is the whole thing, start to finish, in the order it occurs. Nothing on this
            list is done without telling you first.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((item) => (
            <li
              key={item.step}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-[#C2703D]/40"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-[#E9A876]">{item.step}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#BFCBD6]">{item.body}</p>
            </li>
          ))}
          <li className="rounded-3xl border border-[#C2703D]/40 bg-[#C2703D]/10 p-7">
            <h3 className="text-lg font-semibold leading-snug tracking-tight text-white">Running late?</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#F0D7C0]">
              Call the studio and we will hold the chair for fifteen minutes. The Ballard Bridge goes up
              for the fishing fleet at the worst possible times and everyone here knows it.
            </p>
          </li>
        </ol>
      </div>
    </section>
  )
}
