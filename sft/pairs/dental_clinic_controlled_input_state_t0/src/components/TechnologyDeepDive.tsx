import { CheckIcon } from './Icons'

function ScannerArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Diagram of the intraoral scanner wand building a 3D model of a lower arch">
      <defs>
        <linearGradient id="scan-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eef2ff" />
          <stop offset="100%" stopColor="#dfe6fb" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" rx="22" fill="url(#scan-bg)" />
      <path d="M120 78c30-16 130-16 160 0-8 52-24 92-44 118-16 21-56 21-72 0-20-26-36-66-44-118z" fill="#fff" stroke="#2b3a7a" strokeWidth="2.4" />
      <g fill="#f0f4ff" stroke="#2b3a7a" strokeWidth="1.8">
        <circle cx="140" cy="92" r="13" />
        <circle cx="168" cy="82" r="12" />
        <circle cx="200" cy="78" r="12" />
        <circle cx="232" cy="82" r="12" />
        <circle cx="260" cy="92" r="13" />
        <circle cx="150" cy="130" r="12" />
        <circle cx="250" cy="130" r="12" />
      </g>
      <rect x="42" y="150" width="112" height="26" rx="13" fill="#152046" transform="rotate(-22 42 150)" />
      <rect x="118" y="118" width="34" height="18" rx="8" fill="#f2704a" transform="rotate(-22 118 118)" />
      <path d="M152 116l52 -16M152 126l52 6" stroke="#f2704a" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  )
}

function MillArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Diagram of the in-house milling unit cutting a crown from a ceramic block">
      <rect width="400" height="260" rx="22" fill="#152046" />
      <rect x="52" y="52" width="296" height="156" rx="18" fill="#1d2a58" stroke="#3d5192" strokeWidth="2" />
      <rect x="80" y="150" width="240" height="34" rx="12" fill="#0f1839" />
      <rect x="176" y="96" width="48" height="60" rx="8" fill="#f4ede2" stroke="#e0cfb6" strokeWidth="2" />
      <path d="M186 104h28l-3 30c-.6 9-4.4 14-11 14s-10.4-5-11-14z" fill="#fff" />
      <path d="M200 46v40" stroke="#f2704a" strokeWidth="6" strokeLinecap="round" />
      <circle cx="200" cy="90" r="10" fill="#f2704a" />
      <g stroke="#8fa4dd" strokeWidth="2" opacity="0.55">
        <path d="M80 72h60M80 84h38M260 72h60M282 84h38" />
      </g>
      <circle cx="316" cy="176" r="9" fill="#7ee0a8" />
      <text x="80" y="204" fill="#8fa4dd" fontSize="13" fontFamily="monospace">crown 26 · 11 min left</text>
    </svg>
  )
}

function ImagingArt() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" role="img" aria-label="Diagram of a low-dose 3D scan showing a jaw section and a planned implant position">
      <rect width="400" height="260" rx="22" fill="#f6eee4" />
      <circle cx="200" cy="130" r="96" fill="none" stroke="#2b3a7a" strokeWidth="2" strokeDasharray="7 7" opacity="0.5" />
      <path d="M104 148c22-56 170-56 192 0-14 44-40 68-96 68s-82-24-96-68z" fill="#fff" stroke="#2b3a7a" strokeWidth="2.4" />
      <g stroke="#2b3a7a" strokeWidth="1.6" fill="none" opacity="0.55">
        <path d="M136 150v46M168 142v54M200 138v58M232 142v54M264 150v46" />
      </g>
      <rect x="192" y="112" width="16" height="66" rx="7" fill="#f2704a" opacity="0.85" />
      <path d="M188 106h24l-4 12h-16z" fill="#f2704a" />
      <path d="M200 42v30M200 188v30" stroke="#2b3a7a" strokeWidth="2" opacity="0.4" />
      <text x="232" y="104" fill="#2b3a7a" fontSize="12" fontFamily="monospace">4.3 × 11.5 mm</text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'No impression trays',
    title: 'A wand, not a mouthful of putty',
    Art: ScannerArt,
    body:
      'The old way of taking an impression was a tray of setting putty held in place for four minutes while you tried not to gag. We replaced ours in 2019 with an optical scanner: a wand the size of an electric toothbrush passes over each arch and stitches a millimetre-accurate 3D model together on the screen beside you.',
    points: [
      'Roughly ninety seconds per arch, and it can be paused whenever you need to swallow',
      'You watch your own teeth appear on screen, which makes the conversation easier',
      'Models are stored, so next year we can overlay the two and show real wear',
    ],
  },
  {
    eyebrow: 'One appointment',
    title: 'Crowns milled in the room next door',
    Art: MillArt,
    body:
      'A crown normally means two visits, three weeks apart, with a temporary cap in between that half of patients manage to dislodge on a bread roll. Our milling unit cuts the real crown from a solid ceramic block while you wait, and it is bonded in the same appointment.',
    points: [
      'About eleven minutes of milling and twenty of finishing and glazing',
      'No temporary crown, no second round of anaesthetic, no time off work twice',
      'The ceramic is shade-matched under daylight, not under the surgery lamp',
    ],
  },
  {
    eyebrow: 'Low-dose imaging',
    title: 'Planning an implant before we place it',
    Art: ImagingArt,
    body:
      'Anything involving a root, a wisdom tooth or an implant is planned from a low-dose 3D scan rather than guessed from a flat film. We measure the bone, mark where the nerve runs, and choose the exact implant before the day arrives — which is why our surgical appointments run short.',
    points: [
      'Around a fifth of the dose of the equipment it replaced',
      'You see the same cross-section we do, with the numbers on it',
      'The plan and the quote are printed together before you agree to anything',
    ],
  },
]

export default function TechnologyDeepDive() {
  return (
    <section id="technology" className="bg-[#f6eee4]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
            In the building
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
            Three pieces of equipment that change the appointment
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#1f2a4d]/75">
            We are not interested in technology for its own sake. Each of these earned its
            place by removing something patients told us they hated — the putty, the second
            visit, and being asked to consent to surgery on the strength of a blurry film.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map(({ eyebrow, title, body, points, Art }, index) => (
            <article
              key={title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
              }`}
            >
              <figure className="overflow-hidden rounded-3xl border border-[#152046]/10 bg-white p-4 shadow-sm">
                <Art />
              </figure>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b3a7a]/70">
                  {eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#152046]">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#1f2a4d]/80">{body}</p>
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#1f2a4d]/80">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#f2704a]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
