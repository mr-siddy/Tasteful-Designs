const FAQS = [
  {
    q: 'What does the first appointment actually cost?',
    a: 'Ninety-five dollars, including two x-rays and the written plan. That is the whole bill unless you ask us to treat something on the day, and we will always tell you the price before we pick anything up.',
  },
  {
    q: 'Do you take my insurance?',
    a: 'We are in network with Delta Dental Premier, Cigna DPPO and Regence, and we submit claims for everyone else as an out-of-network provider so you get reimbursed directly. Bring the card and reception will check it in about a minute.',
  },
  {
    q: 'I am in pain right now. How soon can I be seen?',
    a: 'Registered patients in genuine pain are seen the same day — we hold two slots every morning and two every afternoon for exactly this. If you are not registered, call before nine and we will fit you in that week.',
  },
  {
    q: 'Do you see children?',
    a: 'From the age of one, and the first two visits for under-fives are free because they mostly involve sitting on a parent and being shown a mirror. Three of the nine chairs are set up for children.',
  },
  {
    q: 'I am genuinely frightened of dentists. Is that going to be a problem?',
    a: 'No, and roughly a third of the people who walk through the door say the same thing. Tell reception when you book, ask for a talk-only first appointment, and read the comfort menu above — all of it is real and none of it costs extra except the sedation.',
  },
  {
    q: 'Can I park?',
    a: 'Yes — eleven free spaces in the courtyard behind the building, two of them accessible bays next to the ramp. Come through the archway beside the tool library rather than trying the street on a Wednesday.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#fbf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
              Asked at the front desk most weeks
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
              Questions people actually ask
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3f524b]">
              If yours is not here, phone reception between 7am and 6pm and ask Rosalind. She has
              worked at this desk for nine years and has heard it before.
            </p>
            <svg viewBox="0 0 200 120" className="mt-8 h-auto w-full max-w-[220px]" aria-hidden="true">
              <rect x="6" y="10" width="130" height="70" rx="14" fill="#f3e9dd" />
              <path d="M40 80l-8 24 30-24z" fill="#f3e9dd" />
              <path d="M34 34h74M34 48h58M34 62h44" stroke="#14312c" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
              <circle cx="164" cy="70" r="26" fill="#d9682f" />
              <path d="M156 62c0-5 4-8 8-8s8 3 8 7-4 5-6 7-2 3-2 5" fill="none" stroke="#fbf6f0" strokeWidth="3" strokeLinecap="round" />
              <circle cx="164" cy="84" r="2.4" fill="#fbf6f0" />
            </svg>
          </div>

          <dl className="divide-y divide-[#14312c]/10 border-y border-[#14312c]/10">
            {FAQS.map((item) => (
              <div key={item.q} data-testid="faq-item" className="py-6">
                <dt>
                  <h3 className="font-serif text-xl font-semibold text-[#14312c]">{item.q}</h3>
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-[#3f524b]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
