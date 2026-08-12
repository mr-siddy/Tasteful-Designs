const STEPS = [
  {
    when: 'Before you arrive',
    title: 'Two forms, five minutes',
    body: 'Medical history and insurance details go in online the night before so you are not filling in a clipboard with a pen that does not work. If you would rather do it at reception, that is fine too.',
  },
  {
    when: 'Minute 0',
    title: 'Coffee, not a waiting room',
    body: 'There is a proper machine by the window and the average wait is four minutes. If we are running more than fifteen minutes behind, reception phones you before you leave home.',
  },
  {
    when: 'Minutes 5 to 25',
    title: 'The look around',
    body: 'Two small x-rays, photographs of anything worth discussing, and a gum chart. Everything goes on the screen angled towards you, because it is very hard to worry about a shadow you cannot see.',
  },
  {
    when: 'Minutes 25 to 40',
    title: 'The conversation and the numbers',
    body: 'What is urgent, what can wait a year, and what is purely cosmetic and therefore entirely your call. Each item gets a price. You get it printed and emailed before you decide anything.',
  },
  {
    when: 'On the way out',
    title: 'You book, or you do not',
    body: 'Nobody at this desk works on commission and nobody will chase you. Most people book the hygienist there and then and leave the rest until they have thought about it.',
  },
]

export function VisitTimeline() {
  return (
    <section id="visit" className="border-y border-[#14312c]/10 bg-[#14312c] text-[#f3e9dd]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e2864f]">
            Your first visit, minute by minute
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Forty-five minutes, and nothing sharp
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#cbdcd4]">
            The first appointment is deliberately dull. We are building a picture and you are
            deciding whether you trust us. Here is exactly how it runs, so there are no surprises
            in it.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[#f3e9dd]/15 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.title} data-testid="visit-step" className="bg-[#14312c] p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9682f] font-serif text-lg font-semibold text-white">
                {i + 1}
              </span>
              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#a9c0b7]">
                {step.when}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#cbdcd4]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
