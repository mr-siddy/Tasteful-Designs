type Block = {
  eyebrow: string
  heading: string
  body: string
  points: string[]
  art: 'route' | 'engine' | 'trail'
}

const BLOCKS: Block[] = [
  {
    eyebrow: 'The calendar',
    heading: 'A monitoring schedule that survives a February',
    body:
      'Most missed samples are not carelessness — they are a schedule that lived in one person’s head and a week where the pump house flooded. Weirline holds the whole year at once: routine coliform sites and their repeats, the lead and copper round when it comes due, the quarterly disinfection by-product sites and the nitrate window, each with the collector assigned and the window drawn so a slipped day is visible the morning it slips rather than in the letter from the state six weeks later.',
    points: [
      'Windows drawn from your monitoring schedule, not retyped from it',
      'A positive routine opens its repeats and the upstream and downstream sites',
      'Coverage stays visible when the regular collector is out',
    ],
    art: 'route',
  },
  {
    eyebrow: 'The engine',
    heading: 'Arithmetic nobody should be doing by hand at 9pm',
    body:
      'A monthly operating report is a few hundred numbers, a dozen averages and one signature, and the failure mode is always the same: a transposed digit in a column nobody re-reads. Weirline computes every total, average, maximum and running locational average from the underlying readings and shows the chain — click a number in the draft and the readings that produced it open beside it, with the manual entries and the SCADA pulls marked differently so you know which is which.',
    points: [
      'Every figure traceable to the reading behind it, one click deep',
      'Outliers and unit mismatches flagged before you sign, not after',
      'The layout tracks your state’s published form, revision by revision',
    ],
    art: 'engine',
  },
  {
    eyebrow: 'The record',
    heading: 'The binder makes itself while you work',
    body:
      'Every draft, every signature, every submission receipt and every piece of correspondence with the primacy agency is filed against the date it happened. Ten years later a sanitary survey is a search, an export and a coffee, instead of an afternoon in the storage room matching envelopes to a legal pad. Reviewers get their own read-only access, so nobody ends up sharing the operator’s password across the table.',
    points: [
      'Ten-year retention with a one-click export for the inspector',
      'Reviewer access that is read-only and logged',
      'Findings tracked to a close-out date and a named owner',
    ],
    art: 'trail',
  },
]

function BlockArt({ kind }: { kind: Block['art'] }) {
  return (
    <svg viewBox="0 0 400 280" className="w-full rounded-2xl" role="img" aria-label={`Illustration: ${kind}`}>
      <rect width="400" height="280" rx="20" fill="#F1E9DC" />
      {kind === 'route' && (
        <g>
          <path
            d="M50 220C110 220 100 140 160 140s60 -80 120 -80 60 40 70 40"
            fill="none"
            stroke="#17A398"
            strokeWidth="4"
            strokeDasharray="10 9"
            strokeLinecap="round"
          />
          {[[50, 220], [160, 140], [280, 60], [350, 100]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="14" fill="#08312F" />
              <text x={x} y={y + 5} textAnchor="middle" fill="#7FE3D6" fontSize="13" fontFamily="ui-sans-serif">
                {i + 1}
              </text>
            </g>
          ))}
          <rect x="240" y="196" width="118" height="48" rx="12" fill="#08312F" />
          <text x="258" y="218" fill="#F1E9DC" fontSize="12" fontFamily="ui-sans-serif">
            Tuesday route
          </text>
          <text x="258" y="234" fill="#7FE3D6" fontSize="12" fontFamily="ui-sans-serif">
            4 sites · 41 min
          </text>
        </g>
      )}
      {kind === 'engine' && (
        <g>
          <rect x="40" y="40" width="150" height="200" rx="14" fill="#FBF8F3" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i}>
              <rect x="60" y={70 + i * 22} width="48" height="8" rx="4" fill="#08312F" opacity="0.25" />
              <rect x="118" y={70 + i * 22} width="52" height="8" rx="4" fill="#17A398" opacity={i === 3 ? 0.9 : 0.35} />
            </g>
          ))}
          <path d="M198 150h44" stroke="#D97742" strokeWidth="4" strokeLinecap="round" />
          <path d="M232 140l12 10-12 10" fill="none" stroke="#D97742" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="250" y="70" width="112" height="160" rx="14" fill="#08312F" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="270" y={100 + i * 26} width={i === 1 ? 44 : 72} height="9" rx="4.5" fill="#7FE3D6" opacity={i === 1 ? 1 : 0.4} />
          ))}
          <rect x="270" y="204" width="52" height="10" rx="5" fill="#D97742" />
        </g>
      )}
      {kind === 'trail' && (
        <g>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx="80" cy={60 + i * 56} r="11" fill="#17A398" />
              {i < 3 && <path d={`M80 ${71 + i * 56}v34`} stroke="#08312F" strokeOpacity="0.25" strokeWidth="3" />}
              <rect x="112" y={46 + i * 56} width="238" height="30" rx="9" fill="#FBF8F3" />
              <rect x="128" y={58 + i * 56} width={[150, 110, 182, 96][i]} height="7" rx="3.5" fill="#08312F" opacity="0.3" />
            </g>
          ))}
          <rect x="112" y="232" width="130" height="26" rx="9" fill="#08312F" />
          <text x="128" y="250" fill="#7FE3D6" fontSize="12" fontFamily="ui-sans-serif">
            Export for survey
          </text>
        </g>
      )}
    </svg>
  )
}

export function SamplingDeepDive() {
  return (
    <section id="deep-dive" className="bg-[#FBF8F3]" aria-labelledby="deep-dive-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 id="deep-dive-heading" className="max-w-3xl text-4xl font-semibold tracking-tight lg:text-[42px]">
          Three places the month usually goes wrong
        </h2>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((b, i) => (
            <article
              key={b.heading}
              data-testid="deep-dive-block"
              className={
                i % 2 === 1
                  ? 'grid items-center gap-12 lg:grid-cols-2 lg:[&>*:first-child]:order-2'
                  : 'grid items-center gap-12 lg:grid-cols-2'
              }
            >
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D97742]">
                  {b.eyebrow}
                </p>
                <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-tight">{b.heading}</h3>
                <p className="mt-5 text-[16px] leading-relaxed text-[#08312F]/70">{b.body}</p>
                <ul className="mt-6 space-y-2.5 text-[15px] text-[#08312F]/80">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#17A398]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <BlockArt kind={b.art} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
