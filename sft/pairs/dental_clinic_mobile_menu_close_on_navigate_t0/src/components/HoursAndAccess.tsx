const HOURS = [
  { day: 'Monday', open: '6:45am — 7:00pm' },
  { day: 'Tuesday', open: '6:45am — 7:00pm' },
  { day: 'Wednesday', open: '6:45am — 8:00pm' },
  { day: 'Thursday', open: '6:45am — 7:00pm' },
  { day: 'Friday', open: '6:45am — 4:00pm' },
  { day: 'Saturday', open: '8:00am — 2:00pm, hygienist only' },
  { day: 'Sunday', open: 'Closed — emergency line diverts to Dr. Ovalle' },
]

const ACCESS = [
  {
    title: 'Getting here',
    body: 'Twelve Kilnwood Street, through the brick archway beside the tool library. The tram stops at Foundry Quarter, a three minute walk, and the 41 bus stops at Bell Yard.',
  },
  {
    title: 'Parking',
    body: 'Eleven free spaces in the courtyard behind the building, including two accessible bays by the ramp. On Wednesdays the market takes the street spaces, so come round the back.',
  },
  {
    title: 'Step-free access',
    body: 'The courtyard entrance is level, the door is 900mm wide, and there is a lift to the two upstairs rooms. Two ground-floor surgeries take wheelchair transfers, and one has a hoist.',
  },
  {
    title: 'Languages and support',
    body: 'We have Spanish and Marathi speakers on the team most days, a hearing loop at the front desk, and we are happy for a support worker or family member to stay in the room.',
  },
]

function CourtyardMap() {
  return (
    <svg
      viewBox="0 0 380 260"
      className="h-auto w-full"
      role="img"
      aria-label="Simple map of Kilnwood Street showing the practice, the courtyard car park and the tram stop"
    >
      <rect width="380" height="260" rx="20" fill="#f3e9dd" />
      <path d="M0 150h380" stroke="#e0d2c0" strokeWidth="34" />
      <path d="M0 150h380" stroke="#fbf6f0" strokeWidth="3" strokeDasharray="14 12" />
      <path d="M250 0v260" stroke="#e0d2c0" strokeWidth="26" />
      <rect x="46" y="60" width="130" height="72" rx="8" fill="#14312c" />
      <text x="111" y="94" textAnchor="middle" fontSize="13" fill="#fbf6f0" fontFamily="serif">
        Foundry Row
      </text>
      <text x="111" y="112" textAnchor="middle" fontSize="11" fill="#a9c0b7">
        12 Kilnwood St
      </text>
      <rect x="46" y="180" width="130" height="52" rx="8" fill="none" stroke="#14312c" strokeWidth="2" strokeDasharray="5 5" />
      <text x="111" y="211" textAnchor="middle" fontSize="11" fill="#14312c">
        Courtyard parking
      </text>
      <circle cx="300" cy="150" r="15" fill="#d9682f" />
      <path d="M294 146h12v9h-12z" fill="#fbf6f0" />
      <text x="300" y="186" textAnchor="middle" fontSize="11" fill="#14312c">
        Tram
      </text>
      <text x="196" y="142" fontSize="11" fill="#6b7d75">
        Kilnwood Street
      </text>
      <path d="M176 96h60" stroke="#d9682f" strokeWidth="2.5" strokeDasharray="6 5" />
      <path d="M176 206h60" stroke="#d9682f" strokeWidth="2.5" strokeDasharray="6 5" />
    </svg>
  )
}

export function HoursAndAccess() {
  return (
    <section id="hours" className="border-y border-[#14312c]/10 bg-[#f3e9dd]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
            Finding us and getting in
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
            Open before work, and easy to reach
          </h2>
        </div>

        <div className="mt-12 grid gap-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-[#14312c]/10 bg-white p-7 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-[#14312c]">Opening hours</h3>
            <dl className="mt-5 divide-y divide-[#14312c]/10">
              {HOURS.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 py-3">
                  <dt className="text-sm font-medium text-[#14312c]">{h.day}</dt>
                  <dd className="text-right text-sm text-[#3f524b]">{h.open}</dd>
                </div>
              ))}
            </dl>
            <a
              href="tel:+15035550197"
              data-testid="hours-phone"
              className="mt-6 block rounded-full bg-[#14312c] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1e463f]"
            >
              Call (503) 555 0197
            </a>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-[#14312c]/10 bg-white p-4 shadow-sm">
              <CourtyardMap />
            </div>
            <ul className="mt-7 grid gap-6 sm:grid-cols-2">
              {ACCESS.map((a) => (
                <li key={a.title} data-testid="access-card">
                  <h3 className="font-serif text-lg font-semibold text-[#14312c]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3f524b]">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
