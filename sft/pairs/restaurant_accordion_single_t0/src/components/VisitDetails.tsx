const HOURS = [
  { id: 'mon', day: 'Monday', service: 'Closed', note: 'The fire is out and the floors get scrubbed' },
  { id: 'tue', day: 'Tuesday', service: 'Closed', note: 'Deliveries, butchery and the vinegar barrels' },
  { id: 'wed', day: 'Wednesday', service: '5:30 – 10:30 pm', note: 'Quietest night, easiest table' },
  { id: 'thu', day: 'Thursday', service: '5:30 – 10:30 pm', note: "Chef's counter, two sittings" },
  { id: 'fri', day: 'Friday', service: '5:30 – 11:00 pm', note: "Counter cooked by Noor" },
  { id: 'sat', day: 'Saturday', service: '5:30 – 11:00 pm', note: 'Two sittings, book early' },
  { id: 'sun', day: 'Sunday', service: '12:00 – 3:30 pm', note: 'Harbour lunch, one long sitting' },
]

export function VisitDetails() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="border-y border-[#E4DACB] bg-[#F3EADC]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#8B8073]">Finding us</p>
          <h2 id="visit-heading" className="mt-3 text-4xl font-semibold tracking-tight text-[#123C43]">
            The end of the quay, past the ice house
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#6B6155]">
            The Ropeworks is the low stone building with the green door at the far end of Harker Quay.
            There is no sign, only the hearth mark cut into the lintel, and you will smell the oak
            before you see the number.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[#171310]">Opening hours</h3>
            <table className="mt-5 w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#D8CBB6] text-[10px] uppercase tracking-[0.2em] text-[#8B8073]">
                  <th scope="col" className="py-3 font-semibold">
                    Day
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Service
                  </th>
                  <th scope="col" className="hidden py-3 font-semibold sm:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {HOURS.map((row) => (
                  <tr key={row.id} data-testid="hours-row" className="border-b border-[#E4DACB]">
                    <th scope="row" className="py-3.5 pr-4 font-semibold text-[#171310]">
                      {row.day}
                    </th>
                    <td className="py-3.5 pr-4 text-[#4A423A]">{row.service}</td>
                    <td className="hidden py-3.5 text-[#8B8073] sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div data-testid="visit-card" className="rounded-2xl border border-[#E4DACB] bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight text-[#171310]">Address</h3>
              <address className="mt-2 text-sm not-italic leading-relaxed text-[#6B6155]">
                Cinder &amp; Salt, The Ropeworks
                <br />
                14 Harker Quay, Fenwick Harbour
                <br />
                Reservations (555) 0148
              </address>
            </div>
            <div data-testid="visit-card" className="rounded-2xl border border-[#E4DACB] bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight text-[#171310]">
                Getting here
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B6155]">
                Slipway Road car park is ninety seconds away and free after six. The number 9 bus stops
                at Fenwick Bridge every twenty minutes until half past eleven, and the harbour ferry
                runs until ten on summer evenings.
              </p>
            </div>
            <div data-testid="visit-card" className="rounded-2xl border border-[#E4DACB] bg-white p-6">
              <h3 className="text-base font-semibold tracking-tight text-[#171310]">Access</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B6155]">
                Level entry from the quay, an accessible toilet on the ground floor, and a lift to the
                Net Loft. Large-print menus live behind the host stand — ask and one will appear
                without any fuss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
