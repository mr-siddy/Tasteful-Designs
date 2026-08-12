const FEES = [
  { item: 'New patient examination', price: '£68', includes: '45 minutes, X-rays, written plan' },
  { item: 'Routine check-up', price: '£46', includes: '25 minutes, screening included' },
  { item: 'Hygienist, 30 minutes', price: '£62', includes: 'Scale, polish and airflow' },
  { item: 'Hygienist, 45 minutes', price: '£88', includes: 'For gum treatment reviews' },
  { item: 'Small X-ray', price: '£14', includes: 'Free inside a new patient exam' },
  { item: 'White filling, one surface', price: '£145', includes: 'Rubber dam, shade matched' },
  { item: 'White filling, three surfaces', price: '£215', includes: 'Quoted per surface, never rounded up' },
  { item: 'Root canal, front tooth', price: '£420', includes: 'Two visits, crown quoted separately' },
  { item: 'Same-day crown', price: '£680', includes: 'Scanned and milled on site' },
  { item: 'Simple extraction', price: '£130', includes: 'Includes the review a week later' },
  { item: 'Night guard', price: '£195', includes: 'Fitted and adjusted twice' },
  { item: 'Clear aligners, both arches', price: '£1,940', includes: 'Retainers and a year of reviews' },
]

export function FeeSchedule() {
  return (
    <section id="fees" className="border-y border-[#E3DCD0] bg-[#F1ECE3]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.85fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
              The board in the waiting room
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
              Our whole price list, in public
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5A5347]">
              This is the same board that hangs beside reception, reprinted here so you can read it
              before you ring rather than after. Prices were last reviewed in January 2026 and we
              hold a quote for ninety days once you have signed it.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-[#E3DCD0] bg-white shadow-sm">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Bramble Court Dental published fees, January 2026
                </caption>
                <thead>
                  <tr className="border-b border-[#E3DCD0] bg-[#FBF9F5]">
                    <th
                      scope="col"
                      className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B8375]"
                    >
                      Treatment
                    </th>
                    <th
                      scope="col"
                      className="hidden px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B8375] sm:table-cell"
                    >
                      What it includes
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8B8375]"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE9E0]">
                  {FEES.map((fee) => (
                    <tr key={fee.item} data-testid="fee-row" className="hover:bg-[#FBF9F5]">
                      <th
                        scope="row"
                        className="px-6 py-4 text-left text-[15px] font-medium text-[#1C1A17]"
                      >
                        {fee.item}
                      </th>
                      <td className="hidden px-6 py-4 text-sm text-[#6A6255] sm:table-cell">
                        {fee.includes}
                      </td>
                      <td className="px-6 py-4 text-right text-[15px] font-semibold text-[#332A56]">
                        {fee.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="rounded-3xl bg-[#332A56] p-9 text-[#E6E1F5] shadow-xl">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              Paying for it over time
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed">
              Any plan over £400 can be spread across ten monthly payments with no interest and no
              credit check, arranged at the desk in about four minutes.
            </p>

            <svg
              viewBox="0 0 300 120"
              role="img"
              aria-label="Diagram showing a treatment plan split into ten equal monthly payments"
              className="mt-8 h-auto w-full"
            >
              <rect width="300" height="120" rx="16" fill="#3F3568" />
              {Array.from({ length: 10 }).map((_, index) => (
                <rect
                  key={index}
                  x={16 + index * 27}
                  y={78 - index * 4}
                  width="18"
                  height={20 + index * 4}
                  rx="5"
                  fill={index < 3 ? '#E4735B' : '#7E71C4'}
                />
              ))}
              <path d="M16 104h268" stroke="#9C90DA" strokeWidth="1.5" strokeLinecap="round" />
              <text x="16" y="34" fill="#FFFFFF" fontSize="14" fontWeight="600">
                £680 crown = £68 a month
              </text>
              <text x="16" y="54" fill="#C7BEEE" fontSize="11">
                No interest · no arrangement fee · cancel any time
              </text>
            </svg>

            <ul className="mt-8 space-y-4 text-[15px]">
              {[
                'A written quote before any drill is picked up',
                'Ninety days to think about it, price held',
                'Card, bank transfer or cash at the desk',
                'Insurance claimed by us, not by you',
              ].map((line) => (
                <li key={line} data-testid="payment-point" className="flex gap-3">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none">
                    <circle cx="12" cy="12" r="10" fill="#E4735B" />
                    <path
                      d="m8 12 3 3 5-6"
                      fill="none"
                      stroke="#332A56"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book"
              data-testid="fees-cta"
              className="mt-9 inline-block rounded-full bg-[#E4735B] px-6 py-3 text-sm font-semibold text-white"
            >
              Ask for a written quote
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
