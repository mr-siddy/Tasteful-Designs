const FAQS = [
  {
    question: 'How far ahead do I need to book the Long Table?',
    answer:
      'Three weeks is comfortable and six is safer for a Friday or Saturday between October and December. We hold two Wednesdays a month back for short-notice parties, so it is always worth asking even if the date is nine days out.',
  },
  {
    question: 'Is there a minimum spend?',
    answer:
      'No minimum and no room fee. You pay per head for the menu — $78, or $124 with Priya’s pairing — plus whatever else you drink. A party of six pays for six.',
  },
  {
    question: 'Can you feed vegetarians, vegans and allergies at a family-style table?',
    answer:
      'Yes, and we would rather know a fortnight out than on the night. Roughly a third of the fire menu is already vegetable-led. Shellfish and sesame we can take out of the building entirely if you tell us in advance; wheat we cannot, because the bakehouse is on the other side of a brick wall.',
  },
  {
    question: 'Do you take walk-ins for the regular dining room?',
    answer:
      'The nine counter seats facing the fire are walk-in only, every night, first come. The rest of the fifty-two book out about ten days ahead. If you turn up at nine on a Wednesday you will usually eat.',
  },
  {
    question: 'What happens to my deposit if we cancel?',
    answer:
      'Deposits are taken by card two weeks out and are fully refundable up to seventy-two hours before the date. Inside seventy-two hours we keep half, because the fish has been bought and the bread is proofing.',
  },
  {
    question: 'Is the building accessible?',
    answer:
      'Step-free from the Ferris Street door through to the Long Table and the restrooms, with a portable ramp at the loading bay for the courtyard. The counter stools are fixed height; tell Odalys and she will seat you at the table end instead.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-[#faf5ec]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">Before you write</p>
          <h2 id="faq-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            The six questions we answer every week
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#1b1512]/10 border-y border-[#1b1512]/10">
          {FAQS.map((faq) => (
            <div key={faq.question} className="grid gap-3 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
              <dt>
                <h3 className="text-lg font-black leading-snug tracking-tight">{faq.question}</h3>
              </dt>
              <dd className="text-base leading-relaxed text-[#5d4c3d]">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-base leading-relaxed text-[#5d4c3d]">
          Anything else, call (919) 555-0164 after two in the afternoon and you will get Odalys or Priya,
          not a machine.
        </p>
      </div>
    </section>
  )
}
