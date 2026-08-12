const QUESTIONS = [
  {
    question: 'Do you keep tables back for walk-ins?',
    answer:
      'Yes. The fourteen counter seats and the thirty terrace seats are walk-in only and are never reservable, and we hold two tables in the cutting shed for whoever turns up. Come before six or after nine and you will almost always get in.',
  },
  {
    question: 'How far ahead do reservations open?',
    answer:
      'Thirty days, at nine in the morning, for the same date the following month. Parties of seven or more are handled by email instead so we can talk through the board with you first.',
  },
  {
    question: 'I do not eat fish. Is there anything for me?',
    answer:
      'There is, and it is not an afterthought. There are usually three vegetable dishes on the board built around the same fire — the charred cabbage with cured yolk is the one people come back for — plus a hearth-roasted grain dish. Tell us when you book and Marisol will cook a full menu for you.',
  },
  {
    question: 'Is the building step-free?',
    answer:
      'The cutting shed, the counter and the terrace are all at street level with a step-free entrance on the Landing side and an accessible toilet by the host stand. The cellar is down eleven original stone steps and cannot be made accessible; we will set the same private menu upstairs instead.',
  },
  {
    question: 'Can you cook for allergies?',
    answer:
      'Every dish is cooked to order over the same fire, so we can work around almost anything except a shellfish allergy severe enough to be airborne — the room is full of oyster smoke and we would rather tell you that than risk it.',
  },
  {
    question: 'Is it very loud?',
    answer:
      'On a Friday at eight, yes. Granite walls, an open fire and no soft furnishing anywhere. Wednesday and Sunday are noticeably calmer, and the two tables at the harbour end of the shed are the quietest in the building if you ask for them.',
  },
]

export default function FaqSection() {
  return (
    <section id="questions" className="border-y border-[#0b2027]/10 bg-[#f3ece0]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2601a]">Before you come</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            The six things people email us about
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#0b2027]/75">
            If the answer you need is not here, the host stand picks up from three in the afternoon and would rather
            talk it through than have you guess.
          </p>
        </div>

        <dl className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {QUESTIONS.map((entry) => (
            <div key={entry.question} data-testid="faq-item" className="border-t border-[#0b2027]/15 pt-6">
              <dt>
                <h3 className="font-serif text-xl font-semibold">{entry.question}</h3>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#0b2027]/70">{entry.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
