import { useState } from 'react'

type Faq = {
  id: string
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    id: 'booking',
    question: 'How far ahead do we need to book?',
    answer:
      'The book opens on the first of every month at nine in the morning for the whole of the month after next, and Friday and Saturday usually go inside a day. Midweek is far easier, and a table for two at half past five on a Wednesday can often be had the same afternoon.',
  },
  {
    id: 'walk-ins',
    question: 'Is there anything left for walk-ins?',
    answer:
      'Yes, and deliberately so. Six seats at the bar and two stools at the counter are never bookable — they are given out at the door from half past five until they are gone. Put your name down, have a cider, and Priya will find you when something opens up.',
  },
  {
    id: 'diets',
    question: 'Can you feed a coeliac or a vegetarian properly?',
    answer:
      'We cook the entire menu without gluten and most of it without dairy, and the ash and ember courses are vegetarian to begin with rather than an afterthought. Tell us when you book so Marta can plan the fire; a plate invented at the pass on a busy Saturday is never as good.',
  },
  {
    id: 'parking',
    question: 'Where do we park on Harker Quay?',
    answer:
      'The quay itself is loading only after five, but the Slipway Road car park is ninety seconds away on foot and free from six in the evening. The number 9 bus stops at Fenwick Bridge every twenty minutes, and there is a rack for eight bicycles beside our back door.',
  },
  {
    id: 'children',
    question: 'Are children welcome at dinner?',
    answer:
      'Very. There are two high chairs, we will happily cook a smaller plate of flatbread and fish off the same fire, and the six o\'clock sitting is the easy one. The counter is the exception — the coals are close, so we keep it to over-twelves.',
  },
  {
    id: 'deposits',
    question: 'Do you take a deposit, and what if our plans change?',
    answer:
      'Tables of six or more and every counter booking hold a card, charged at forty dollars a head only if you do not arrive and have not told us. Cancel or shrink the party before noon the day before and nothing is taken; ring the number rather than emailing if it is late.',
  },
  {
    id: 'access',
    question: 'Is the old building accessible?',
    answer:
      'The dining room and the accessible toilet are level from the quay through the main door, and there is a lift up to the Net Loft that fits a wheelchair and one other person. The chef\'s counter needs a step up, so tell us and we will seat you at the hearth-side table instead.',
  },
]

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="questions" aria-labelledby="faq-heading" className="bg-[#FAF6EF]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">Before you come</p>
          <h2 id="faq-heading" className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]">
            The seven things people ring us about
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
            These are the questions the phone actually asks, in the order we hear them. If yours is
            not here, call (555) 0148 between two and five in the afternoon and you will get one of us
            rather than a booking system.
          </p>
          <svg
            viewBox="0 0 240 130"
            role="img"
            aria-label="Illustration of the reservation book and telephone on the host stand"
            className="mt-10 h-auto w-full max-w-xs"
          >
            <rect width="240" height="130" rx="18" fill="#F3EADC" />
            <rect x="26" y="46" width="104" height="66" rx="6" fill="#FAF6EF" stroke="#C9B79B" strokeWidth="2" />
            <path d="M78 46v66" stroke="#C9B79B" strokeWidth="2" />
            <g stroke="#8B8073" strokeWidth="2" strokeLinecap="round">
              <path d="M36 62h32M36 74h32M36 86h24M88 62h32M88 74h32M88 86h20" />
            </g>
            <g transform="translate(150 40)">
              <rect x="0" y="18" width="62" height="40" rx="10" fill="#123C43" />
              <rect x="10" y="0" width="42" height="26" rx="8" fill="#C4472A" />
              <path d="M18 58v14h26V58" stroke="#123C43" strokeWidth="4" fill="none" />
            </g>
            <path d="M20 120h200" stroke="#E4DACB" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <div className="divide-y divide-[#E4DACB] border-y border-[#E4DACB]">
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
                  <span className="text-lg font-semibold tracking-tight text-[#171310]">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`h-7 w-7 flex-none rounded-full bg-[#F3EADC] p-1 text-[#123C43] transition-transform ${
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
                    <p className="text-base leading-relaxed text-[#6B6155]">{faq.answer}</p>
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
