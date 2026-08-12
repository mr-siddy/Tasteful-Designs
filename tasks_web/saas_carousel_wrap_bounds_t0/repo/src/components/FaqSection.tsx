const FAQS = [
  {
    question: 'We have twenty-two homes and two staff. Is this too much software for us?',
    answer:
      'Our smallest customer stewards twelve homes with one part-time coordinator. The register, the recertification calendar and the funder exports are the same for them as for a four-hundred-home portfolio; there is simply less in them. Pricing starts at $180 a month for portfolios under fifty homes, and implementation is included at that price too.',
  },
  {
    question: 'What happens to our historical data?',
    answer:
      'It comes with you. We import occupancy history, past certifications and prior exports as far back as your records go, and mark anything we could not reconcile rather than quietly dropping it. Organisations routinely load fifteen or twenty years. The oldest home we have imported was placed in trust in 1979.',
  },
  {
    question: 'Can our funder or auditor get their own access?',
    answer:
      'Yes. Reviewer accounts are read-only, scoped to the properties and the date range you choose, and every document they open is logged. Most organisations set one up for the week of a monitoring visit and switch it off afterwards. It costs nothing and does not count against your seats.',
  },
  {
    question: 'Do you support ground leases and shared-equity resale formulas?',
    answer:
      'That is the part we built first, because it is the part nobody else builds. Rooftree stores each formula as a versioned rule with the homes it governs, calculates the resale price and retained subsidy on demand, and keeps the working so a homeowner or a board member can follow the arithmetic line by line.',
  },
  {
    question: 'Who owns the data, and what if we leave?',
    answer:
      'You own it, always. A full export in open formats — CSV for every table, original files for every document — is available from the settings screen at any hour without asking us. If you cancel, that export stays available for ninety days. There is no exit fee and no retention call.',
  },
  {
    question: 'How does Rooftree handle households who speak other languages?',
    answer:
      'Automatic messages to households send in English, Spanish, Portuguese, Haitian Creole or Vietnamese, chosen per household, and you approve the wording of every template in every language before it goes anywhere. Staff-facing screens are English only today; Spanish is in beta with three customers.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="border-b border-[#DDE3F0] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4EE0]">Questions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">The six we get on every first call</h2>
            <p className="mt-5 text-base leading-relaxed text-[#4B5670]">
              If yours is not here, write to Elena on our team at hello@rooftree.coop and you will get a real answer
              from a person within a working day, not a sequence of emails from a funnel.
            </p>
            <svg viewBox="0 0 200 140" className="mt-10 w-full max-w-[240px]" role="img" aria-label="Two speech bubbles overlapping">
              <rect x="6" y="14" width="126" height="76" rx="16" fill="#3D4EE0" opacity="0.12" />
              <path d="M34 90 30 112l26-22z" fill="#3D4EE0" opacity="0.12" />
              <rect x="70" y="46" width="124" height="74" rx="16" fill="#0E8F6F" opacity="0.14" />
              <path d="M168 120l6 20-26-20z" fill="#0E8F6F" opacity="0.14" />
              <g stroke="#131A2A" strokeWidth="3" strokeLinecap="round" opacity="0.35">
                <path d="M28 40h74M28 56h56M28 72h64" />
              </g>
              <g stroke="#131A2A" strokeWidth="3" strokeLinecap="round" opacity="0.35">
                <path d="M92 72h74M92 88h58M92 104h68" />
              </g>
            </svg>
          </div>

          <dl className="divide-y divide-[#DDE3F0] border-y border-[#DDE3F0]">
            {FAQS.map((faq) => (
              <div key={faq.question} data-testid="faq-item" className="py-7">
                <dt>
                  <h3 className="text-lg font-semibold tracking-tight">{faq.question}</h3>
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-[#4B5670]">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
