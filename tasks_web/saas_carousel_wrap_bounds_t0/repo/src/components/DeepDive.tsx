function ComplianceArt() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full rounded-2xl border border-[#DDE3F0] bg-white shadow-sm"
      role="img"
      aria-label="A twelve month compliance calendar with recertification deadlines marked in each month"
    >
      <rect width="420" height="300" rx="18" fill="#FFFFFF" />
      <text x="26" y="38" fill="#131A2A" fontSize="14" fontFamily="sans-serif" fontWeight="700">
        Compliance year
      </text>
      <text x="26" y="56" fill="#6B7690" fontSize="11" fontFamily="sans-serif">
        62 households · 4 funding sources
      </text>
      {Array.from({ length: 12 }).map((_, month) => {
        const column = month % 4
        const row = Math.floor(month / 4)
        const load = [3, 1, 6, 2, 4, 0, 5, 2, 7, 1, 3, 4][month]
        return (
          <g key={month} transform={`translate(${26 + column * 95} ${76 + row * 72})`}>
            <rect width="82" height="58" rx="10" fill="#F4F6FB" stroke="#DDE3F0" />
            <text x="11" y="20" fill="#6B7690" fontSize="9.5" fontFamily="sans-serif" letterSpacing="0.8">
              {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][month]}
            </text>
            <text x="11" y="44" fill={load > 4 ? '#E0553F' : '#131A2A'} fontSize="19" fontFamily="sans-serif" fontWeight="700">
              {load}
            </text>
            <rect x="46" y="30" width="26" height="16" rx="8" fill={load > 4 ? '#E0553F' : '#0E8F6F'} opacity="0.14" />
            <circle cx="59" cy="38" r="3.4" fill={load > 4 ? '#E0553F' : '#0E8F6F'} />
          </g>
        )
      })}
      <rect x="26" y="236" width="368" height="42" rx="11" fill="#131A2A" />
      <text x="44" y="262" fill="#F4F6FB" fontSize="12" fontFamily="sans-serif">
        September is heavy — start the Alder Court batch in July
      </text>
    </svg>
  )
}

function PipelineArt() {
  const stages = [
    { label: 'Applied', count: 128, width: 300 },
    { label: 'Documents in', count: 74, width: 220 },
    { label: 'Income verified', count: 41, width: 150 },
    { label: 'Offered a home', count: 12, width: 78 },
  ]
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full rounded-2xl border border-[#DDE3F0] bg-white shadow-sm"
      role="img"
      aria-label="An applicant pipeline funnel narrowing from 128 applications to 12 offers"
    >
      <rect width="420" height="300" rx="18" fill="#FFFFFF" />
      <text x="26" y="38" fill="#131A2A" fontSize="14" fontFamily="sans-serif" fontWeight="700">
        Waitlist · Bellingham Mews
      </text>
      {stages.map((stage, position) => (
        <g key={stage.label} transform={`translate(26 ${64 + position * 58})`}>
          <rect width="368" height="42" rx="11" fill="#F4F6FB" />
          <rect width={stage.width} height="42" rx="11" fill="#3D4EE0" opacity={0.85 - position * 0.16} />
          <text x="16" y="26" fill={position < 2 ? '#FFFFFF' : '#131A2A'} fontSize="12" fontFamily="sans-serif" fontWeight="600">
            {stage.label}
          </text>
          <text x="348" y="26" textAnchor="end" fill="#131A2A" fontSize="12.5" fontFamily="sans-serif" fontWeight="700">
            {stage.count}
          </text>
        </g>
      ))}
      <text x="26" y="290" fill="#6B7690" fontSize="11" fontFamily="sans-serif">
        Local preference applied · 3 duplicate households merged this month
      </text>
    </svg>
  )
}

function ExportArt() {
  return (
    <svg
      viewBox="0 0 420 300"
      className="w-full rounded-2xl border border-[#DDE3F0] bg-white shadow-sm"
      role="img"
      aria-label="Four funder export formats generated from one dataset"
    >
      <rect width="420" height="300" rx="18" fill="#FFFFFF" />
      <rect x="150" y="26" width="120" height="52" rx="13" fill="#131A2A" />
      <text x="210" y="57" textAnchor="middle" fill="#F4F6FB" fontSize="12.5" fontFamily="sans-serif" fontWeight="600">
        One dataset
      </text>
      {[
        { label: 'HOME IDIS', x: 26, tone: '#3D4EE0' },
        { label: 'CDBG CAPER', x: 122, tone: '#0E8F6F' },
        { label: 'LIHTC 8609', x: 218, tone: '#3D4EE0' },
        { label: 'Board PDF', x: 314, tone: '#E0553F' },
      ].map((out) => (
        <g key={out.label}>
          <path
            d={`M210 78 C 210 120, ${out.x + 40} 120, ${out.x + 40} 168`}
            fill="none"
            stroke={out.tone}
            strokeWidth="2"
            opacity="0.5"
            strokeDasharray="5 5"
          />
          <rect x={out.x} y="168" width="80" height="74" rx="12" fill="#F4F6FB" stroke="#DDE3F0" />
          <rect x={out.x + 14} y="186" width="52" height="8" rx="4" fill={out.tone} opacity="0.7" />
          <rect x={out.x + 14} y="200" width="38" height="7" rx="3.5" fill="#DDE3F0" />
          <rect x={out.x + 14} y="212" width="46" height="7" rx="3.5" fill="#DDE3F0" />
          <text x={out.x + 40} y="236" textAnchor="middle" fill="#131A2A" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
            {out.label}
          </text>
        </g>
      ))}
      <text x="210" y="272" textAnchor="middle" fill="#6B7690" fontSize="11" fontFamily="sans-serif">
        Generated in 40 seconds · archived and re-runnable
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    id: 'compliance',
    eyebrow: 'Compliance without the dread',
    title: 'The deadline finds you before the auditor does',
    paragraphs: [
      'Most of the risk in affordable housing operations is not dramatic. It is a household whose income certification expired in March, discovered in November, in a monitoring visit, by somebody with a clipboard. The fix costs a weekend of file reconstruction and a paragraph in a report that follows your organisation for three years.',
      'Rooftree builds the compliance year for you from the terms already recorded on each home — the funding source, the affordability period, the anniversary date — and then works backwards. Forty-five days out the household gets a plain-language letter. Fifteen days out your housing manager gets a task. Three days out, so does the executive director.',
    ],
    art: <ComplianceArt />,
    flip: false,
  },
  {
    id: 'waitlist',
    eyebrow: 'A waitlist you can defend',
    title: 'Preference policies applied the same way every single time',
    paragraphs: [
      'Your preference policy took the board eleven months to agree: residents of the neighbourhood first, then households displaced within the county, then everyone else, with a weighting for household size against unit size. That policy is worth nothing if the person doing intake applies it from memory on a Friday afternoon.',
      'Rooftree encodes the policy once and scores every application against it, showing the score breakdown next to each household so the ranking can be explained to an applicant, a board member or a fair-housing reviewer. Change the policy and Rooftree keeps the old version attached to the decisions made under it.',
    ],
    art: <PipelineArt />,
    flip: true,
  },
  {
    id: 'reporting',
    eyebrow: 'Reporting, finally',
    title: 'One set of facts, every format your funders insist on',
    paragraphs: [
      'A twenty-eight home portfolio can easily carry four reporting obligations, each wanting household composition, income band and rent — in a different order, with different codes, on a different quarter boundary. Every organisation we talk to has somebody who rebuilds those tables by hand, and that somebody is usually the person you would rather have out in the neighbourhood.',
      'Because Rooftree holds the underlying facts rather than the finished report, new formats are a template, not a migration. Exports are archived with the data as it stood on the day they ran, so when a funder queries a number eighteen months later you can show them exactly what you sent and why.',
    ],
    art: <ExportArt />,
    flip: false,
  },
]

export default function DeepDive() {
  return (
    <section id="compliance" className="border-b border-[#DDE3F0] bg-white">
      <div className="mx-auto max-w-6xl space-y-20 px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D4EE0]">How it works</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Three places the work actually gets stuck
          </h2>
        </div>

        {BLOCKS.map((block) => (
          <div
            key={block.id}
            id={block.id}
            data-testid="deep-dive-block"
            className={`grid items-center gap-12 lg:grid-cols-2 ${block.flip ? 'lg:[&>div:first-child]:order-2' : ''}`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E8F6F]">{block.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-[1.75rem]">{block.title}</h3>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-5 text-base leading-relaxed text-[#4B5670]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div>{block.art}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
