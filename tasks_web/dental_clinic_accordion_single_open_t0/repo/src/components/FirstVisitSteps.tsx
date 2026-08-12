const STEPS = [
  {
    number: '01',
    title: 'You ring, or fill in the form',
    detail:
      'Rufus answers the phone between half seven and seven, and nobody is put through a menu. Tell him roughly what is going on and he will find a slot — new patient examinations are usually available inside nine days.',
    aside: 'Average wait: 9 days',
  },
  {
    number: '02',
    title: 'Fifteen minutes of talking first',
    detail:
      'Your first appointment starts in the chair upright, fully clothed, with nothing on the tray. We ask what has hurt, what you have been avoiding and what you would like to be able to eat again.',
    aside: 'Nothing goes in your mouth yet',
  },
  {
    number: '03',
    title: 'The examination itself',
    detail:
      'A careful look at every tooth, your gums, your jaw joint and the soft tissue, plus two small X-rays if you are due them. The camera goes on the screen beside you so you are looking at the same picture we are.',
    aside: '45 minutes, £68',
  },
  {
    number: '04',
    title: 'A written plan with prices on it',
    detail:
      'Before you stand up you get a printed plan: what needs doing now, what can wait a year, what is optional, and the price of each line. You sign it or you take it home. Nothing gets booked that you have not agreed to.',
    aside: 'Quote held for 90 days',
  },
  {
    number: '05',
    title: 'Then we get out of your way',
    detail:
      'We book only what you signed for, send a text the day before each appointment, and remind you about your next check-up when it is due — once, by text, not four times by post.',
    aside: 'One reminder, not four',
  },
]

export function FirstVisitSteps() {
  return (
    <section id="first-visit" className="border-y border-[#E3DCD0] bg-[#F1ECE3]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
              Your first visit
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
              Exactly what happens, in order
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5347]">
              Most people who have put off the dentist for years say the same thing: it was not the
              treatment they were dreading, it was not knowing what was about to happen. So here is
              the whole thing, start to finish, before you book.
            </p>
            <svg
              viewBox="0 0 260 160"
              role="img"
              aria-label="Illustration of a written treatment plan with five checked lines"
              className="mt-10 h-auto w-full max-w-sm"
            >
              <rect width="260" height="160" rx="18" fill="#FFFFFF" stroke="#E3DCD0" />
              <rect x="24" y="24" width="96" height="10" rx="5" fill="#332A56" />
              {[0, 1, 2, 3, 4].map((index) => (
                <g key={index}>
                  <circle cx="32" cy={62 + index * 20} r="7" fill="#E4735B" />
                  <path
                    d={`M29 ${62 + index * 20}l2.5 2.5 4.5-5`}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <rect
                    x="48"
                    y={57 + index * 20}
                    width={150 - index * 18}
                    height="8"
                    rx="4"
                    fill="#EFE9E0"
                  />
                  <rect x="212" y={57 + index * 20} width="26" height="8" rx="4" fill="#C7BEEE" />
                </g>
              ))}
            </svg>
          </div>

          <ol className="space-y-4">
            {STEPS.map((step) => (
              <li
                key={step.number}
                data-testid="visit-step"
                className="rounded-3xl border border-[#E3DCD0] bg-white p-7 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-[#332A56] text-sm font-semibold text-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#1C1A17]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#6A6255]">{step.detail}</p>
                    <p className="mt-4 inline-block rounded-full bg-[#FDF3EE] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#C2543C]">
                      {step.aside}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
