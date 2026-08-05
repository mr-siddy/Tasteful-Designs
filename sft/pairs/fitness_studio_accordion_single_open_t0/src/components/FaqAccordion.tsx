import { useState } from 'react'

type Faq = {
  id: string
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    id: 'fitness-first',
    question: 'Do I need to be fit before I start here?',
    answer:
      'No, and roughly two thirds of our members were not. Barbell Foundations starts with an empty fifteen-kilo bar and a coach beside you for eight weeks. The only thing you need to bring is a pair of flat shoes.',
  },
  {
    id: 'contracts',
    question: 'Is there a contract or a joining fee?',
    answer:
      'Neither. Membership runs month to month and you can cancel with a fortnight of notice at the front desk or by email. If you need to pause for travel, illness or a new baby, we hold your plan for up to three months at no charge.',
  },
  {
    id: 'injuries',
    question: 'I have a bad back. Can I still lift?',
    answer:
      'Almost certainly, and carefully. Tell us at the movement screen, bring anything your physio has written, and Tomas will build the first block around what you can load today. We send your physio a progress note every fortnight if you want us to.',
  },
  {
    id: 'class-size',
    question: 'How big are the classes really?',
    answer:
      'Eight lifters to a coach on the barbell hours and twelve on the conditioning floor, and we hold that line even when the waitlist is long. If a session is full the timetable says Full rather than quietly squeezing in a ninth rack.',
  },
  {
    id: 'parking',
    question: 'Where do I park on Kestrel Street?',
    answer:
      'There are fourteen free spaces behind the building off Lowry Lane, and the Fairmount Hill car park two minutes away is free before nine in the morning. The 31 and 44 buses stop at the corner, and there is a bike rack inside the loading door.',
  },
  {
    id: 'childcare',
    question: 'Can I bring my kids?',
    answer:
      'On weekday mornings, yes. The old office beside reception is a supervised play room from half past eight until eleven, staffed by Nadia on Mondays, Wednesdays and Fridays. It is free for members and capped at six children.',
  },
  {
    id: 'drop-ins',
    question: 'Can I drop in without a membership?',
    answer:
      'Visiting lifters are welcome on the Sunday open platform for eighteen dollars, and travelling members of other coached studios train free for a week. Email the desk the day before so a coach knows to expect you.',
  },
]

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="questions" className="bg-[#FBF7F1]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">Front desk</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#123B31]">
            Questions we get asked every week
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C554A]">
            These are the seven that come up most often at the bench by the door. If yours is not
            here, call the desk on (555) 0172 between six and eight, or ask a coach on your way past
            the platforms.
          </p>
          <svg
            viewBox="0 0 240 120"
            role="img"
            aria-label="Illustration of a coach and a member talking at the front desk"
            className="mt-10 h-auto w-full max-w-xs"
          >
            <rect width="240" height="120" rx="18" fill="#EFE6D8" />
            <rect x="24" y="76" width="192" height="30" rx="8" fill="#123B31" />
            <circle cx="76" cy="46" r="18" fill="#2F6B57" />
            <circle cx="164" cy="46" r="18" fill="#D2683F" />
            <path d="M100 40h40" stroke="#8A7F6C" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
            <path d="M58 76c0-16 36-16 36 0M146 76c0-16 36-16 36 0" fill="#123B31" opacity="0.6" />
          </svg>
        </div>

        <div className="divide-y divide-[#E2D8C6] border-y border-[#E2D8C6]">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id} data-testid="faq-item">
                <button
                  type="button"
                  id={`faq-question-${faq.id}`}
                  data-testid="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-semibold tracking-tight text-[#1B1A17]">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`h-7 w-7 flex-none rounded-full bg-[#EFE6D8] p-1 text-[#123B31] transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <path
                      d="M12 6v12M6 12h12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    data-testid="faq-answer"
                    className="pb-7 pr-12"
                  >
                    <p className="text-base leading-relaxed text-[#5C554A]">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
