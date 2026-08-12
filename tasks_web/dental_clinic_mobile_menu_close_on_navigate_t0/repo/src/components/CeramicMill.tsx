const OLD_WAY = [
  'Visit one: putty impression, temporary crown glued on, sent to a lab two states away.',
  'Two to three weeks of chewing carefully on one side and hoping the temporary holds.',
  'Visit two: temporary off, permanent crown tried in, adjusted, cemented. Another half day gone.',
]

const OUR_WAY = [
  'A camera scans the prepared tooth in about ninety seconds. No tray, no putty, no gagging.',
  'Dr. Raman designs the crown on screen with you watching, and adjusts the bite before it is cut.',
  'The mill cuts it from a single ceramic block, we glaze it, fit it, and you go back to work.',
]

function MillDiagram() {
  return (
    <svg
      viewBox="0 0 440 300"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of the in-house workflow: intraoral scan, on-screen design, ceramic milling, fitted crown"
    >
      <defs>
        <linearGradient id="millbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14312c" />
          <stop offset="100%" stopColor="#20524a" />
        </linearGradient>
      </defs>
      <rect width="440" height="300" rx="22" fill="url(#millbg)" />
      <g stroke="#d9682f" strokeWidth="2" strokeDasharray="6 7" fill="none">
        <path d="M96 92h248" />
        <path d="M344 92v116" />
        <path d="M344 208H96" />
      </g>

      <g>
        <circle cx="96" cy="92" r="34" fill="#fbf6f0" />
        <path
          d="M82 100c0-9 6-14 14-14s14 5 14 14"
          fill="none"
          stroke="#14312c"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect x="86" y="76" width="20" height="10" rx="3" fill="#d9682f" />
        <text x="96" y="146" textAnchor="middle" fontSize="13" fill="#f3e9dd">
          Scan
        </text>
      </g>

      <g>
        <circle cx="344" cy="92" r="34" fill="#fbf6f0" />
        <rect x="326" y="80" width="36" height="26" rx="3" fill="none" stroke="#14312c" strokeWidth="2.4" />
        <path d="M336 106h16M344 96v10" stroke="#d9682f" strokeWidth="2.4" strokeLinecap="round" />
        <text x="344" y="146" textAnchor="middle" fontSize="13" fill="#f3e9dd">
          Design
        </text>
      </g>

      <g>
        <circle cx="344" cy="208" r="34" fill="#fbf6f0" />
        <path d="M330 218l14-22 14 22z" fill="none" stroke="#14312c" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M336 224h16" stroke="#d9682f" strokeWidth="2.6" strokeLinecap="round" />
        <text x="344" y="262" textAnchor="middle" fontSize="13" fill="#f3e9dd">
          Mill
        </text>
      </g>

      <g>
        <circle cx="96" cy="208" r="34" fill="#fbf6f0" />
        <path
          d="M96 194c2.6 0 3.6 1.1 5 1.1 1.9 0 3.2 1.4 3.2 3.7 0 3-1.4 5.2-2 7.4-.6 1.8-1.1 3-2.1 3-1.1 0-1.5-1.8-1.9-3.3-.3-1.3-.7-2-1.2-2s-.8.7-1.2 2c-.4 1.5-.8 3.3-1.9 3.3-1 0-1.5-1.2-2.1-3-.6-2.2-2-4.4-2-7.4 0-2.3 1.2-3.7 3.1-3.7 1.4 0 2.5-1.1 5.1-1.1z"
          fill="#14312c"
        />
        <text x="96" y="262" textAnchor="middle" fontSize="13" fill="#f3e9dd">
          Fitted
        </text>
      </g>

      <text x="220" y="150" textAnchor="middle" fontSize="30" fill="#d9682f" fontFamily="serif">
        2 hours
      </text>
      <text x="220" y="176" textAnchor="middle" fontSize="12" fill="#a9c0b7">
        start to finish, one appointment
      </text>
    </svg>
  )
}

export function CeramicMill() {
  return (
    <section id="mill" className="border-y border-[#14312c]/10 bg-[#f3e9dd]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9682f]">
              The room behind reception
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#14312c] sm:text-4xl">
              We cut your crown while you sit there
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#3f524b]">
              A crown used to be a three-week project with a temporary in the middle of it. In
              2017 we put a scanner and a five-axis ceramic mill into the old pattern shop, and
              since then four thousand one hundred and eighty of them have been cut, glazed and
              fitted without anyone leaving the building.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#3f524b]">
              It is not a gimmick and it is not more expensive. It is the same ceramic the labs
              use, cut from the same blocks, and because we are not paying courier fees or
              rebooking your afternoon twice, it costs $1,190 flat instead of the $1,400 the
              lab-made version used to.
            </p>
            <a
              href="#book"
              data-testid="mill-cta"
              className="mt-8 inline-block rounded-full bg-[#14312c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1e463f]"
            >
              Book a crown consultation
            </a>
          </div>
          <div className="rounded-[26px] border border-[#14312c]/10 bg-white/70 p-4 shadow-lg shadow-[#14312c]/10">
            <MillDiagram />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#14312c]/10 bg-white/60 p-7">
            <h3 className="font-serif text-xl font-semibold text-[#14312c]">
              How a crown used to go
            </h3>
            <ol className="mt-4 space-y-3">
              {OLD_WAY.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#6b7d75]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#6b7d75]/40 text-xs font-semibold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-[#d9682f]/30 bg-white p-7 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-[#14312c]">
              How it goes on Kilnwood Street
            </h3>
            <ol className="mt-4 space-y-3">
              {OUR_WAY.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#3f524b]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d9682f] text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
