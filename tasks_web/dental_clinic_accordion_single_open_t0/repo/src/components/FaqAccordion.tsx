import { useState } from 'react'

type Faq = {
  id: string
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    id: 'cost',
    question: 'How do I know what it will cost before I agree to anything?',
    answer:
      'Every fee is on the board by reception and published on this page, and after your examination you get a printed plan with a price on each line. Nothing is booked until you have signed that plan, and we hold the price for ninety days while you think about it.',
  },
  {
    id: 'years-away',
    question: 'I have not seen a dentist in years. Will I get a lecture?',
    answer:
      'No, and about a third of the people who register with us are in exactly that position. Dr. Okonkwo starts with the chair upright and nothing on the tray, and the first question is what you would like to be able to eat again — not why you left it so long.',
  },
  {
    id: 'emergency',
    question: 'A tooth just broke. Can you see me today?',
    answer:
      'Almost certainly, if you are registered with us. One chair is held empty until three o’clock every weekday for emergencies, and ringing before eleven usually means you are seen before lunch. An emergency appointment is £75, or free on Steady Plus.',
  },
  {
    id: 'insurance',
    question: 'Do you take my insurance, or do I claim it back myself?',
    answer:
      'We bill Wyeford Mutual, Northbank Health, Denplan Essentials and Cormorant Care directly, so you pay only whatever your policy does not cover. Rufus does the paperwork at the desk while you put your coat on, and he will tell you the exact shortfall before you leave.',
  },
  {
    id: 'nerves',
    question: 'I am genuinely frightened of the chair. What can you do?',
    answer:
      'Four of our rooms were soundproofed in 2021 so you hear no drill from the corridor, and there are headphones on the arm of every chair. Book the free fifteen-minute talk-only visit first: no instruments, no charge, and you can walk out without booking a thing.',
  },
  {
    id: 'children',
    question: 'Can I bring both of my children to one appointment?',
    answer:
      'Yes, and Saturday mornings between eight and one are kept for exactly that. We put siblings in back-to-back slots in the same room so you only sit down once, and check-ups are free for anyone under eighteen who is registered here.',
  },
  {
    id: 'parking',
    question: 'Where do I park on Bramble Court?',
    answer:
      'Halyard Yard car park sits directly behind the building with twenty-two spaces, free for the first two hours with the code from reception. The 12 and 44 buses stop on Wyeford High Street three minutes away, and there is a bike rack inside the side gate.',
  },
]

export function FaqAccordion() {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggle = (id: string) => {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((openId) => openId !== id) : [...current, id],
    )
  }

  return (
    <section id="questions" className="bg-[#F1ECE3]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
            Front desk
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
            Questions the front desk hears every week
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5A5347]">
            These seven come up more than everything else put together. If yours is not here, ring
            Rufus on (555) 0164 between half seven and seven, or ask on your way past the desk — he
            would much rather answer it than have you not book.
          </p>

          <svg
            viewBox="0 0 260 140"
            role="img"
            aria-label="Illustration of a patient asking a question at the reception desk"
            className="mt-10 h-auto w-full max-w-xs"
          >
            <rect width="260" height="140" rx="20" fill="#EDE9F8" />
            <rect x="26" y="92" width="208" height="30" rx="9" fill="#332A56" />
            <circle cx="84" cy="52" r="20" fill="#F3B7A5" />
            <path d="M64 53a20 20 0 0 1 40 0" fill="#332A56" />
            <circle cx="176" cy="52" r="20" fill="#8B5E3C" />
            <path d="M156 53a20 20 0 0 1 40 0" fill="#231A12" />
            <path d="M62 92c0-18 40-18 40 0M158 92c0-18 40-18 40 0" fill="#5B4BA8" />
            <rect x="112" y="34" width="36" height="24" rx="9" fill="#E4735B" />
            <path d="M124 44h12M124 50h8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="divide-y divide-[#E3DCD0] border-y border-[#E3DCD0]">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id)
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
                  <span className="text-lg font-semibold tracking-tight text-[#1C1A17]">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`h-8 w-8 flex-none rounded-full bg-[#FBF9F5] p-1.5 text-[#332A56] transition-transform ${
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
                    <p className="text-base leading-relaxed text-[#6A6255]">{faq.answer}</p>
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
