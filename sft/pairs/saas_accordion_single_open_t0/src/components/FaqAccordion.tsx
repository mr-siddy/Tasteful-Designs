import { useState } from 'react'

type Faq = {
  id: string
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    id: 'spreadsheet',
    question: 'Can Colophon read the season spreadsheet we already keep?',
    answer:
      'Yes, and the import is our job rather than yours. Send the workbook however it is shaped — merged cells, three tabs, a colour code only your production editor understands — and we map the columns by hand, load up to four hundred titles and show you the board before you commit to anything.',
  },
  {
    id: 'ownership',
    question: 'Who owns the metadata once it is in there?',
    answer:
      'You do, without qualification. Every title record exports as valid ONIX 3.0 and as a plain spreadsheet from a button on the board, and we will drop a nightly archive into storage you control if you would rather not have to ask. Leaving takes an afternoon and we will help you do it.',
  },
  {
    id: 'onboarding',
    question: 'How long does it take to get a press onto Colophon?',
    answer:
      'Three weeks is normal for a press publishing under fifty titles a year. Week one is the catalogue import, week two is your printers and templates, and week three runs a live season alongside your spreadsheet so nobody has to trust the board before they have watched it work.',
  },
  {
    id: 'printers',
    question: 'Our printer only takes email and a PDF. Does that break it?',
    answer:
      'Not at all, and about half of the printers our presses use work exactly that way. Colophon renders the purchase order into the email format that printer expects, sends it from your address with the specification attached, and threads their reply back onto the title record automatically.',
  },
  {
    id: 'dates',
    question: 'What happens when a pub date moves?',
    answer:
      'The board reschedules everything hanging off that date — remaining proof rounds, the printer slot, the advance-copy mailing, the sales conference deck — and queues corrected metadata for every feed that already carried the old date. You get a single screen listing what changed and who needs telling.',
  },
  {
    id: 'freelancers',
    question: 'Can freelancers and agents see only their part of a title?',
    answer:
      'They can, and it costs nothing extra. Guest access is scoped to the rounds you invite someone into, expires when the round closes, and never exposes advances, royalty terms or anything on a title they are not working on. Guests are free on every plan because rationing logins is how work ends up back in email.',
  },
  {
    id: 'support',
    question: 'What does support actually look like on a Tuesday?',
    answer:
      'A named production person who knows your list, reachable by phone and email from eight until six Eastern on working days. Median first reply last quarter was fourteen minutes. There is no chat robot in front of them, and nobody will ask you to open a ticket about your own catalogue.',
  },
]

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="questions" className="bg-[#F3EDE1]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C0462A]">
            Before you book a call
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#141B2E] sm:text-5xl">
            Questions publishers ask us first
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C6377]">
            These seven come up on nearly every walkthrough, so they are written down here rather than
            saved for the call. If yours is not among them, write to hello@colophon.press or ring the
            production desk on (401) 555-0184 between eight and six Eastern.
          </p>

          <svg
            viewBox="0 0 260 150"
            role="img"
            aria-label="Illustration of a production editor talking a publisher through a season board"
            className="mt-10 h-auto w-full max-w-sm"
          >
            <rect width="260" height="150" rx="20" fill="#E7DFCF" />
            <rect x="26" y="26" width="120" height="98" rx="10" fill="#FBF8F2" />
            <rect x="38" y="42" width="72" height="8" rx="4" fill="#141B2E" />
            <rect x="38" y="60" width="96" height="6" rx="3" fill="#C6CBDC" />
            <rect x="38" y="74" width="80" height="6" rx="3" fill="#C6CBDC" />
            <rect x="38" y="88" width="88" height="6" rx="3" fill="#C6CBDC" />
            <rect x="38" y="102" width="56" height="6" rx="3" fill="#C0462A" />
            <circle cx="196" cy="60" r="22" fill="#141B2E" />
            <circle cx="196" cy="54" r="9" fill="#E0C4B8" />
            <path d="M178 78c3-9 9-13 18-13s15 4 18 13z" fill="#C0462A" />
            <path d="M154 62h20" stroke="#8A8676" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 6" />
            <rect x="166" y="98" width="62" height="26" rx="13" fill="#1F5E57" />
          </svg>
        </div>

        <div className="divide-y divide-[#DCD2BF] border-y border-[#DCD2BF]">
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
                  <span className="text-lg font-semibold tracking-tight text-[#141B2E]">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`h-7 w-7 flex-none rounded-full bg-[#FBF8F2] p-1 text-[#C0462A] transition-transform ${
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
                    className="pb-7 pr-10"
                  >
                    <p className="text-base leading-relaxed text-[#5C6377]">{faq.answer}</p>
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
