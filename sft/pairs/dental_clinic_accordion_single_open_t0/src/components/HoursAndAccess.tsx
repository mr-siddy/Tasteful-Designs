const HOURS = [
  { day: 'Monday', open: '7.30am – 7pm', note: 'Emergency chair held until 3pm' },
  { day: 'Tuesday', open: '7.30am – 7pm', note: 'Gum treatment clinic with Ijeoma' },
  { day: 'Wednesday', open: '7.30am – 7pm', note: 'Same-day crown day' },
  { day: 'Thursday', open: '7.30am – 7pm', note: 'Late aligner reviews until 7pm' },
  { day: 'Friday', open: '8am – 4pm', note: 'Emergency chair held until 1pm' },
  { day: 'Saturday', open: '8am – 1pm', note: 'Family morning, siblings booked together' },
  { day: 'Sunday', open: 'Closed', note: 'Out-of-hours line: (555) 0177' },
]

const ACCESS = [
  {
    title: 'Parking',
    body: 'Halyard Yard car park is directly behind the building — twenty-two spaces, free for the first two hours with a code from reception.',
  },
  {
    title: 'Buses and rail',
    body: 'The 12 and the 44 stop on Wyeford High Street, a three-minute walk. Wyeford Quarter station is eight minutes on foot via Halyard Passage.',
  },
  {
    title: 'Step-free access',
    body: 'The Bramble Court entrance is level, the door is 92cm wide and opens on a button, and two of the quiet rooms are on the ground floor.',
  },
  {
    title: 'What to bring',
    body: 'Your insurance details if you have them, a list of any medicines you take, and the name of your last practice if you can remember it.',
  },
]

export function HoursAndAccess() {
  return (
    <section id="visit" className="border-y border-[#E3DCD0] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8B8375]">
              When we are open
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#332A56]">
              Early, late, and Saturday mornings
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5347]">
              We open at half seven four days a week so a check-up does not have to cost you a
              morning off work. The first appointment of the day is the one people ask for most, so
              it is worth booking a few weeks out.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-[#E3DCD0]">
              <table className="w-full text-left">
                <caption className="sr-only">Opening hours at Bramble Court Dental</caption>
                <tbody className="divide-y divide-[#EFE9E0]">
                  {HOURS.map((row) => (
                    <tr key={row.day} data-testid="hours-row" className="bg-[#FBF9F5]">
                      <th
                        scope="row"
                        className="px-6 py-4 text-left text-[15px] font-medium text-[#1C1A17]"
                      >
                        {row.day}
                      </th>
                      <td className="px-6 py-4 text-[15px] font-semibold text-[#332A56]">
                        {row.open}
                      </td>
                      <td className="hidden px-6 py-4 text-sm text-[#6A6255] sm:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <svg
              viewBox="0 0 420 240"
              role="img"
              aria-label="Simplified map showing Bramble Court, Halyard Yard car park and Wyeford High Street"
              className="h-auto w-full rounded-3xl border border-[#E3DCD0]"
            >
              <rect width="420" height="240" fill="#F1ECE3" />
              <path d="M0 150h420" stroke="#E3DCD0" strokeWidth="26" />
              <path d="M250 0v240" stroke="#E3DCD0" strokeWidth="20" />
              <path
                d="M0 150h420"
                stroke="#FBF9F5"
                strokeWidth="2"
                strokeDasharray="14 12"
              />
              <rect x="60" y="60" width="120" height="66" rx="10" fill="#332A56" />
              <text x="76" y="90" fill="#FFFFFF" fontSize="13" fontWeight="600">
                22 Bramble Ct
              </text>
              <text x="76" y="108" fill="#C7BEEE" fontSize="11">
                Level entrance
              </text>
              <rect x="290" y="46" width="94" height="80" rx="10" fill="#7E71C4" opacity="0.55" />
              <text x="300" y="80" fill="#332A56" fontSize="12" fontWeight="600">
                Halyard Yard
              </text>
              <text x="300" y="97" fill="#332A56" fontSize="11">
                22 spaces
              </text>
              <circle cx="200" cy="150" r="11" fill="#E4735B" />
              <text x="18" y="186" fill="#6A6255" fontSize="12">
                Wyeford High Street — buses 12 and 44
              </text>
              <text x="18" y="210" fill="#8B8375" fontSize="11">
                Station 8 minutes on foot via Halyard Passage
              </text>
            </svg>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {ACCESS.map((item) => (
                <div
                  key={item.title}
                  data-testid="access-note"
                  className="rounded-2xl border border-[#EFE9E0] bg-[#FBF9F5] p-6"
                >
                  <dt className="text-base font-semibold text-[#1C1A17]">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#6A6255]">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
