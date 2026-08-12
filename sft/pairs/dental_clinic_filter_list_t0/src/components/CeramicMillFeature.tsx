import { CheckIcon } from './Icons'

const MILL_STEPS = [
  'A handheld scanner replaces the tray of putty — about four minutes, no gagging.',
  'The crown is designed on screen while you watch, and you get a say in the shape.',
  'The mill cuts it from a single ceramic block in roughly eleven minutes.',
  'It is glazed, fired, tried in and cemented before you leave the building.',
]

export function CeramicMillFeature() {
  return (
    <section id="mill" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2AA79B]">
            In-house ceramic mill
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12263F] sm:text-4xl">
            A crown that starts and finishes on the same morning
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5B7089]">
            Most practices send an impression to an outside lab, fit you with a temporary crown and
            book you back in a fortnight. We bought the mill instead. It sits behind reception, it is
            loud for about eleven minutes, and it means the tooth you walk out with is the finished
            one.
          </p>
          <ul className="mt-8 space-y-4">
            {MILL_STEPS.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#2AA79B]" />
                <span className="leading-relaxed text-[#12263F]/80">{step}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-[#F1F5F7] p-6 text-sm leading-relaxed text-[#5B7089]">
            <strong className="font-semibold text-[#12263F]">Why it costs less, not more:</strong>{' '}
            one appointment instead of three means one lot of anaesthetic, no temporary crown to make
            and re-cement, and no courier to the lab. That saving is why the crown on our index is
            $980 rather than the $1,340 quoted around the corner.
          </p>
        </div>

        <div className="relative">
          <svg viewBox="0 0 420 400" className="w-full" role="img" aria-label="Diagram of the in-house ceramic milling workflow">
            <defs>
              <linearGradient id="mill-body" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F1F5F7" />
                <stop offset="100%" stopColor="#CBDAE3" />
              </linearGradient>
              <linearGradient id="mill-block" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2AA79B" />
                <stop offset="100%" stopColor="#12263F" />
              </linearGradient>
            </defs>

            <rect x="10" y="10" width="400" height="380" rx="26" fill="#F1F5F7" />
            <rect x="46" y="60" width="328" height="212" rx="20" fill="url(#mill-body)" />
            <rect x="70" y="86" width="280" height="160" rx="14" fill="#12263F" opacity="0.9" />

            <g stroke="#2AA79B" strokeWidth="2.4" fill="none" opacity="0.75">
              <path d="M100 210c14-52 34-78 60-78s46 26 60 78" />
              <path d="M124 210c8-34 20-51 36-51s28 17 36 51" />
            </g>

            <g transform="translate(258 118)">
              <rect x="0" y="0" width="66" height="66" rx="10" fill="url(#mill-block)" />
              <path
                d="M12 46c4-16 10-24 21-24s17 8 21 24"
                stroke="#F1F5F7"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </g>

            <path d="M210 246v34" stroke="#5B7089" strokeWidth="3" strokeLinecap="round" />
            <rect x="120" y="286" width="180" height="14" rx="7" fill="#5B7089" opacity="0.35" />

            <g transform="translate(56 312)">
              <circle cx="14" cy="14" r="14" fill="#F26D5B" />
              <text x="14" y="19" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
                11
              </text>
              <text x="42" y="12" fontSize="14" fontWeight="700" fill="#12263F">
                minutes in the mill
              </text>
              <text x="42" y="30" fontSize="12" fill="#5B7089">
                from block to fitted crown in one sitting
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
