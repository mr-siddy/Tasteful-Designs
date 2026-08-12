const HOURS = [
  { day: 'Monday', service: 'Closed — the ferment gets our attention' },
  { day: 'Tuesday', service: '5:00pm – 11:00pm' },
  { day: 'Wednesday', service: '5:00pm – 11:00pm' },
  { day: 'Thursday', service: '5:00pm – 1:00am' },
  { day: 'Friday', service: '5:00pm – 1:00am' },
  { day: 'Saturday', service: '4:00pm – 1:00am' },
  { day: 'Sunday', service: '4:00pm – 10:00pm' },
]

function FloorPlan() {
  return (
    <svg
      viewBox="0 0 340 260"
      role="img"
      aria-label="Floor plan of the dining room showing the long table, the bar, the pass and the lane windows"
      className="h-full w-full"
    >
      <rect width="340" height="260" rx="18" fill="#16110F" />
      <rect x="18" y="18" width="304" height="224" rx="10" fill="none" stroke="#FBF5EC" strokeWidth="1.4" opacity="0.35" />

      <rect x="18" y="18" width="304" height="10" fill="#2F7A6B" opacity="0.55" />
      <text x="118" y="14" fill="#FBF5EC" opacity="0.5" fontSize="10" letterSpacing="3">
        DUNBAR LANE
      </text>

      <rect x="40" y="52" width="150" height="34" rx="6" fill="#E4572E" opacity="0.85" />
      <text x="58" y="74" fill="#16110F" fontSize="12" fontFamily="serif" letterSpacing="1">
        THE LONG TABLE · 14
      </text>

      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={44 + i * 36} y={110} width="26" height="26" rx="4" fill="#FBF5EC" opacity="0.75" />
          <text x={52 + i * 36} y={128} fill="#16110F" fontSize="11">
            4
          </text>
        </g>
      ))}

      <rect x="40" y="164" width="150" height="20" rx="6" fill="#F5A623" opacity="0.7" />
      <text x="56" y="179" fill="#16110F" fontSize="11" letterSpacing="1">
        BAR · 10 STOOLS
      </text>

      <rect x="212" y="52" width="86" height="132" rx="8" fill="#241B18" stroke="#E4572E" strokeWidth="1" />
      <text x="226" y="76" fill="#E4572E" fontSize="11" letterSpacing="2">
        THE PASS
      </text>
      {[96, 118, 140].map((y) => (
        <rect key={y} x="226" y={y} width="58" height="12" rx="3" fill="#FBF5EC" opacity="0.2" />
      ))}
      <text x="226" y="172" fill="#2F7A6B" fontSize="10" letterSpacing="1">
        SKEWER TROUGH
      </text>

      <rect x="40" y="204" width="258" height="22" rx="6" fill="#3A2A25" />
      <text x="56" y="219" fill="#FBF5EC" opacity="0.6" fontSize="11" letterSpacing="2">
        STANDING BENCH · WALK-INS WAIT HERE
      </text>
    </svg>
  )
}

export function RoomAndHours() {
  return (
    <section id="room" className="bg-[#16110F] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#F5A623]">
              22 Dunbar Lane, Ashgrove Works
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#FBF5EC] sm:text-5xl">
              The room, and when to come
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#FBF5EC]/75">
              Persimmon Alley took over a letterpress works that had been shut for eleven years. We
              kept the concrete, the roller doors and the proofing press by the door, which is now
              the board. Fifty-six seats, hard surfaces and no music policy to speak of — it is a
              loud room and we have stopped apologising for that.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#FBF5EC]/60">
              Bookings open thirty days ahead and cover the eighteen seats along the north wall plus
              the long table. Everything else — the bar, the four-tops, the standing bench — is walk-in
              only. Come before six thirty or after nine thirty and you will usually be seated inside
              twenty minutes.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#FBF5EC]/12 bg-[#1D1512] p-5">
                <h3 className="font-serif text-lg font-semibold text-[#FBF5EC]">Getting here</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FBF5EC]/65">
                  Six minutes from Ashgrove Works station, exit two. Street parking on Dunbar is free
                  after 6pm; the Kiln Street lot is a four-minute walk and open till 2am.
                </p>
              </div>
              <div className="rounded-2xl border border-[#FBF5EC]/12 bg-[#1D1512] p-5">
                <h3 className="font-serif text-lg font-semibold text-[#FBF5EC]">Large groups</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#FBF5EC]/65">
                  The long table seats fourteen and goes out as a Full Lantern feast. Email Dai at
                  least a week ahead and tell us about allergies then, not on the night.
                </p>
              </div>
            </div>
          </div>

          <div>
            <figure className="overflow-hidden rounded-3xl border border-[#FBF5EC]/12 shadow-2xl shadow-black/40">
              <FloorPlan />
            </figure>

            <h3 className="mt-10 font-serif text-2xl font-semibold text-[#FBF5EC]">Opening hours</h3>
            <table className="mt-4 w-full text-left" data-testid="hours-table">
              <caption className="sr-only">Opening hours for Persimmon Alley</caption>
              <tbody>
                {HOURS.map((row) => (
                  <tr key={row.day} data-testid="hours-row" className="border-b border-[#FBF5EC]/10">
                    <th scope="row" className="py-3 pr-4 text-sm font-medium text-[#FBF5EC]/80">
                      {row.day}
                    </th>
                    <td className="py-3 text-right text-sm text-[#FBF5EC]/60">{row.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-[#E4572E]">
              The kitchen takes its last order thirty minutes before close, every night.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
