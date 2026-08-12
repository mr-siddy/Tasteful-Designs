const POINTS = [
  {
    title: 'It reads your history first',
    body: 'Before Portway proposes anything it looks at what your brokers have filed for this shipper, this part number and this material. A code your team defended two years ago carries more weight than a fresh guess, and the entry writer can see which one is which.',
  },
  {
    title: 'Every proposal cites its source',
    body: 'A code with no reasoning behind it is a liability. Portway shows the chapter note, the explanatory note or the CROSS ruling that supports the classification, and links to the prior entry where the same part cleared.',
  },
  {
    title: 'Disagreement is a first-class outcome',
    body: 'Override a code and Portway records who overrode it and why, then applies that decision to the rest of the line items on the invoice and to the next shipment from the same shipper. Corrections compound instead of repeating.',
  },
]

const LINES = [
  { part: 'HF-2240-SS', desc: 'Hydraulic fitting, stainless', code: '7307.29.0090', duty: '4.3%' },
  { part: 'BC-8830-C8', desc: 'Brake caliper, Class 8 truck', code: '8708.30.5090', duty: '2.5%' },
  { part: 'SL-1190-NBR', desc: 'Nitrile seal kit', code: '4016.93.5020', duty: '2.5%' },
  { part: 'MT-4402-AL', desc: 'Aluminium mounting bracket', code: '7616.99.5190', duty: '2.5%' },
]

export function ClassificationEngine() {
  return (
    <section className="bg-[#EDF2F6]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-[#0B1F33]/10 bg-white shadow-lg shadow-[#0B1F33]/5">
            <div className="flex items-center justify-between border-b border-[#0B1F33]/10 px-6 py-4">
              <p className="text-sm font-semibold">Invoice 44-11902 · 4 lines</p>
              <span className="rounded-full bg-[#7FD4A2]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1F7A4D]">
                Cited
              </span>
            </div>
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Proposed classifications for the four line items on invoice 44-11902
              </caption>
              <thead className="bg-[#F5F7F9] text-[11px] uppercase tracking-[0.14em] text-[#7C8FA2]">
                <tr>
                  <th scope="col" className="px-6 py-3 font-semibold">
                    Part
                  </th>
                  <th scope="col" className="px-6 py-3 font-semibold">
                    HTS
                  </th>
                  <th scope="col" className="px-6 py-3 text-right font-semibold">
                    Duty
                  </th>
                </tr>
              </thead>
              <tbody>
                {LINES.map((line) => (
                  <tr key={line.part} data-testid="engine-line" className="border-t border-[#0B1F33]/8">
                    <td className="px-6 py-4">
                      <span className="block font-mono text-[12px] text-[#0B1F33]">{line.part}</span>
                      <span className="mt-1 block text-xs text-[#7C8FA2]">{line.desc}</span>
                    </td>
                    <td className="px-6 py-4 font-mono text-[12px] text-[#0D6E8C]">{line.code}</td>
                    <td className="px-6 py-4 text-right font-semibold text-[#0B1F33]">{line.duty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t border-[#0B1F33]/10 bg-[#F5F7F9] px-6 py-4 text-xs leading-relaxed text-[#42566B]">
              Estimated duty $2,914.60 plus MPF $187.20 and HMF $46.75. Reviewed by Kolstad & Reyes,
              filer code 8QN.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
            Classification
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            A code you can defend, not a code you have to trust
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
            Nobody at a forwarder is short of tools that will guess an HTS code. What they are short
            of is a guess that comes with the reasoning attached, so that when a request for
            information turns up eighteen months later the answer is already written down.
          </p>

          <dl className="mt-9 space-y-6">
            {POINTS.map((point) => (
              <div key={point.title} data-testid="engine-point">
                <dt className="text-lg font-semibold tracking-tight">{point.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#42566B]">{point.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
