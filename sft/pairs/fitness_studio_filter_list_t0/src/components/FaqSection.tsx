const QUESTIONS = [
  {
    question: 'I have never touched a barbell. Am I going to be the worst person there?',
    answer:
      'Nineteen of our current members had never lifted anything before 2024, and every one of them started in a Foundations group of four with an empty bar. The first six weeks are deliberately unimpressive on purpose: you learn five shapes properly and load them later.',
  },
  {
    question: 'My shifts move every week. Can I still commit to a class time?',
    answer:
      'Yes, and about a third of the room is in the same position. Tell us your roster at the intro and we will write your block around the sessions you can reliably make, then adjust it in week three if the roster changes again.',
  },
  {
    question: 'What does it actually cost, and is there a joining fee?',
    answer:
      'Tracks run from $95 to $320 a month, Foundations Six is a one-off $220, and there is no joining fee, no annual contract and no cancellation charge. Shift workers and full-time students pay $30 less each month.',
  },
  {
    question: 'I am coming back from an injury. Will you work with my physio?',
    answer:
      'Regularly. Theo is a licensed physical therapist at Harbor East Physical Therapy and speaks directly to your clinician with your say-so. Return to Lifting on Friday mornings exists for exactly this, capped at four people to one coach.',
  },
  {
    question: 'Do I have to book, or can I just turn up?',
    answer:
      'Classes are capped at twelve so places are booked in advance. Places open eight days ahead and are held until fifteen minutes before the session. Open Floor members can come in during staffed hours without booking anything.',
  },
  {
    question: 'What should I bring to the first session?',
    answer:
      'Trainers with a flat sole if you own them, something you can move in, and a water bottle. We supply everything else, including chalk, belts and lifting shoes in most sizes to borrow while you decide whether you want your own.',
  },
]

export function FaqSection() {
  return (
    <section id="questions" className="border-b border-[#0B2A33]/10 bg-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
              Before you call
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              The six things people ask at the door
            </h2>
            <p className="mt-5 leading-relaxed text-[#3C4E54]">
              If yours is not here, call the desk on (410) 555 0176 or write to
              hello@tidewaterstrength.com. A coach answers, not a chatbot.
            </p>
          </div>

          <dl className="divide-y divide-[#0B2A33]/10 border-t border-[#0B2A33]/10">
            {QUESTIONS.map((entry) => (
              <div key={entry.question} data-testid="faq-entry" className="py-7">
                <dt>
                  <h3 className="text-lg font-black leading-snug tracking-tight">
                    {entry.question}
                  </h3>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-[#3C4E54]">{entry.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
