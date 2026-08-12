const HOURS = [
  { day: 'Wednesday', bakehouse: '7:00 – 11:00 am', dinner: '5:30 – 10:00 pm' },
  { day: 'Thursday', bakehouse: '7:00 – 11:00 am', dinner: '5:30 – 10:00 pm' },
  { day: 'Friday', bakehouse: '7:00 – 11:00 am', dinner: '5:30 – 11:00 pm' },
  { day: 'Saturday', bakehouse: '7:00 – 11:30 am', dinner: '5:00 – 11:00 pm' },
  { day: 'Sunday', bakehouse: '7:00 – 11:30 am', dinner: '5:00 – 9:00 pm' },
  { day: 'Monday & Tuesday', bakehouse: 'Closed', dinner: 'Closed' },
]

function NeighbourhoodMap() {
  return (
    <svg viewBox="0 0 360 260" className="h-full w-full" role="img" aria-label="Simplified map of Ferris Street in Brightleaf showing the restaurant, the parking deck and the bus stop">
      <rect width="360" height="260" rx="18" fill="#e7edea" />
      <g stroke="#c9d3ce" strokeWidth="16" strokeLinecap="square">
        <line x1="0" y1="88" x2="360" y2="88" />
        <line x1="0" y1="188" x2="360" y2="188" />
        <line x1="112" y1="0" x2="112" y2="260" />
        <line x1="256" y1="0" x2="256" y2="260" />
      </g>
      <g fill="#d7e0da">
        <rect x="132" y="106" width="104" height="62" rx="6" />
        <rect x="24" y="106" width="70" height="62" rx="6" />
        <rect x="276" y="106" width="64" height="62" rx="6" />
        <rect x="132" y="206" width="104" height="42" rx="6" />
      </g>
      <rect x="150" y="118" width="68" height="38" rx="6" fill="#1b1512" />
      <circle cx="184" cy="137" r="8" fill="#e0912f" />
      <g fill="#3d3128" fontSize="11" fontWeight="700">
        <text x="126" y="82">FERRIS ST</text>
        <text x="126" y="182">MAIN ST</text>
        <text x="150" y="176">Cinder &amp; Rye</text>
        <text x="28" y="176">Parking deck</text>
        <text x="278" y="176">Bus 5 &amp; 11</text>
      </g>
      <circle cx="300" cy="96" r="7" fill="#b8451f" />
      <circle cx="58" cy="96" r="7" fill="#b8451f" />
    </svg>
  )
}

export default function VisitUs() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="bg-[#f1e7d6]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b8451f]">Visit</p>
          <h2 id="visit-heading" className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            214 Ferris Street, Brightleaf, Durham
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5d4c3d]">
            Two blocks off Main, in the low brick shed with the black door and no sign except the one Emmett
            chalked. Enter through the bakehouse counter before five, through the courtyard after.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-3xl border border-[#1b1512]/10 bg-[#faf5ec] p-6 shadow-sm">
            <h3 className="text-lg font-black tracking-tight">Hours</h3>
            <table className="mt-5 w-full text-left text-[15px]">
              <thead>
                <tr className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a6a4a]">
                  <th scope="col" className="pb-3">Day</th>
                  <th scope="col" className="pb-3">Bakehouse</th>
                  <th scope="col" className="pb-3">Dinner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1b1512]/10">
                {HOURS.map((row) => (
                  <tr key={row.day}>
                    <th scope="row" className="py-3 pr-4 font-bold">{row.day}</th>
                    <td className="py-3 pr-4 text-[#5d4c3d]">{row.bakehouse}</td>
                    <td className="py-3 text-[#5d4c3d]">{row.dinner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-sm leading-relaxed text-[#5d4c3d]">
              Last seating is forty-five minutes before close. We shut for the first full week of July so the
              whole staff can take the same holiday at the same time.
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#1b1512]/10 shadow-sm">
              <NeighbourhoodMap />
            </div>
            <div className="rounded-3xl border border-[#1b1512]/10 bg-[#faf5ec] p-6 shadow-sm">
              <h3 className="text-lg font-black tracking-tight">Getting here</h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#5d4c3d]">
                <li>Free after six in the Corcoran deck, a four minute walk through the courtyard.</li>
                <li>Bus 5 and 11 stop at Main and Gregson, one block east.</li>
                <li>Bike racks under the loading bay, lit and covered.</li>
                <li>
                  Call <a href="tel:+19195550164" className="font-bold text-[#b8451f] underline">(919) 555-0164</a> if the black door is locked before five.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
