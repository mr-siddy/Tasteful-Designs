const QUESTIONS: ReadonlyArray<{ question: string; answer: string }> = [
  {
    question: 'I have never touched a barbell. Am I going to be the worst person in the room?',
    answer:
      'About a third of our members had never lifted before they walked in. Barbell Foundations exists precisely so that your first eight weeks are spent with a coach and an empty bar rather than guessing at the back of a busy class.',
  },
  {
    question: 'Do I need to be fit before I join?',
    answer:
      'No, and the idea that you should be is why so many people never start. Your first block is written from what you can do in week zero, not from what you think you should be able to do.',
  },
  {
    question: 'What happens in the free intro session?',
    answer:
      'An hour with a coach: a movement screen, a few light sets so we can see how you move under load, and a conversation about your history and your schedule. You leave with a written recommendation whether or not you sign up.',
  },
  {
    question: 'Is there a contract or a joining fee?',
    answer:
      'Neither. Membership runs month to month and you cancel by giving a month of notice to any coach. We would rather you leave and come back in the spring than feel trapped through a winter you did not want.',
  },
  {
    question: 'I am coming back from an injury. Can you work with my physiotherapist?',
    answer:
      'Yes, and we would prefer to. We share two treatment rooms with Harbour Physio next door and we take referrals from them every month. Bring your notes or your restrictions and your block gets written around them.',
  },
  {
    question: 'Can I just turn up and train on my own?',
    answer:
      'Open Platform hours are exactly that — bring your own card, use a platform, and ask the duty coach for eyes on a set whenever you want them. Full members get those hours included with no booking.',
  },
]

function MarkGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="10.2" stroke="#bef264" strokeWidth="1.6" />
      <path
        d="M9.2 9.4a2.9 2.9 0 0 1 5.6 1c0 1.9-2.8 2.2-2.8 4"
        stroke="#bef264"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1.1" fill="#bef264" />
    </svg>
  )
}

export function FaqSection() {
  return (
    <section id="faq" data-testid="faq-section" className="border-b border-white/10 bg-stone-900">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">Questions</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-stone-50">
              The six we get asked most
            </h2>
            <p className="mt-5 leading-relaxed text-stone-300">
              If yours is not here, call the desk on (206) 555-0137 or ask on the way past. Somebody
              is on the floor from half five in the morning.
            </p>
            <a
              href="#join"
              data-testid="faq-cta"
              className="mt-8 inline-block rounded-full bg-lime-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-stone-950 transition-colors hover:bg-lime-200"
            >
              Book your intro
            </a>
          </div>

          <dl className="space-y-6">
            {QUESTIONS.map((entry) => (
              <div
                key={entry.question}
                data-testid="faq-item"
                className="rounded-2xl bg-stone-950/60 p-6 ring-1 ring-white/10"
              >
                <dt className="flex items-start gap-3">
                  <MarkGlyph />
                  <h3 className="text-base font-bold text-stone-50">{entry.question}</h3>
                </dt>
                <dd className="mt-3 pl-8 text-sm leading-relaxed text-stone-300">{entry.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
