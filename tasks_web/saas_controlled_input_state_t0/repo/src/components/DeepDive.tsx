import { IconCheck } from './icons'

function AssemblyArt() {
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label="Alerts, deploys and chat messages merging into one timeline" className="h-auto w-full">
      <rect width="360" height="240" rx="18" fill="#F1F5F9" />
      {[
        { y: 42, label: 'PagerDuty', tint: '#F97316' },
        { y: 104, label: 'Deploys', tint: '#0EA5E9' },
        { y: 166, label: 'Slack #incidents', tint: '#14B8A6' },
      ].map((row) => (
        <g key={row.label}>
          <rect x="20" y={row.y - 18} width="128" height="36" rx="10" fill="#FFFFFF" stroke="#CBD5E1" />
          <circle cx="40" cy={row.y} r="6" fill={row.tint} />
          <text x="54" y={row.y + 4} fontSize="11.5" fill="#334155">
            {row.label}
          </text>
          <path
            d={`M152 ${row.y} C 200 ${row.y}, 200 120, 236 120`}
            fill="none"
            stroke={row.tint}
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </g>
      ))}
      <rect x="236" y="42" width="104" height="156" rx="14" fill="#0B1220" />
      <text x="288" y="70" fontSize="11" fill="#94A3B8" textAnchor="middle">
        INC-2291
      </text>
      {[92, 118, 144, 170].map((y, i) => (
        <g key={y}>
          <circle cx="256" cy={y} r="4" fill={i === 1 ? '#F97316' : '#475569'} />
          <rect x="266" y={y - 5} width={62 - i * 8} height="10" rx="5" fill="#FFFFFF" fillOpacity={0.18} />
        </g>
      ))}
    </svg>
  )
}

function FollowThroughArt() {
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label="Three action items, two shipped and one still open with a reminder" className="h-auto w-full">
      <rect width="360" height="240" rx="18" fill="#0B1220" />
      {[
        { y: 40, text: 'Canary gate on checkout', done: true },
        { y: 104, text: 'Alert on p95, not p50', done: true },
        { y: 168, text: 'Rehearse the DB failover', done: false },
      ].map((row) => (
        <g key={row.text}>
          <rect x="22" y={row.y} width="316" height="48" rx="12" fill="#FFFFFF" fillOpacity="0.05" />
          <circle cx="48" cy={row.y + 24} r="11" fill={row.done ? '#2DD4BF' : '#F97316'} fillOpacity="0.2" />
          {row.done ? (
            <path
              d={`m42 ${row.y + 24} 5 5 9-10`}
              stroke="#2DD4BF"
              strokeWidth="2.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path d={`M48 ${row.y + 18}v7l4 3`} stroke="#F97316" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          )}
          <text x="72" y={row.y + 21} fontSize="12.5" fill="#E2E8F0">
            {row.text}
          </text>
          <text x="72" y={row.y + 37} fontSize="10.5" fill="#64748B">
            {row.done ? 'shipped · linked PR' : 'open 9 days · reminder sent to #platform'}
          </text>
        </g>
      ))}
    </svg>
  )
}

function PatternArt() {
  const bars = [
    { label: 'Missing alert', v: 62 },
    { label: 'Unsafe migration', v: 44 },
    { label: 'Capacity', v: 31 },
    { label: 'Third party', v: 22 },
    { label: 'Config drift', v: 14 },
  ]
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label="Contributing factors across a quarter: missing alerts lead, then unsafe migrations" className="h-auto w-full">
      <rect width="360" height="240" rx="18" fill="#F1F5F9" />
      <text x="24" y="34" fontSize="12" fill="#475569">
        Contributing factors · Q1
      </text>
      {bars.map((b, i) => (
        <g key={b.label}>
          <text x="24" y={72 + i * 34} fontSize="11" fill="#334155">
            {b.label}
          </text>
          <rect x="150" y={61 + i * 34} width="186" height="14" rx="7" fill="#E2E8F0" />
          <rect x="150" y={61 + i * 34} width={(b.v / 62) * 186} height="14" rx="7" fill={i === 0 ? '#F97316' : '#94A3B8'} />
          <text x={150 + (b.v / 62) * 186 + 8} y={72 + i * 34} fontSize="10.5" fill="#64748B">
            {b.v}
          </text>
        </g>
      ))}
    </svg>
  )
}

const BLOCKS = [
  {
    kicker: 'Assembly',
    title: 'The timeline writes itself while you are still mitigating',
    body:
      'Postlude listens to the systems that were already talking. An alert transition, a deploy, a flag flip, a pinned Slack message — each becomes an entry with its real timestamp, so the reconstruction argument that usually eats the first fifteen minutes of a review never happens. Entries you added by hand sit alongside the automatic ones and are marked as such.',
    points: [
      'Pin with an emoji reaction; no bot commands to memorise',
      'Clock skew normalised to one timezone across every source',
      'Late edits keep an attributed revision history',
    ],
    art: <AssemblyArt />,
  },
  {
    kicker: 'Follow-through',
    title: 'Action items that survive contact with the next sprint',
    body:
      'An action item without an owner is a wish. Postlude refuses to close a review until every remediation has a person and a date, mirrors them into Linear or Jira, and then keeps watching. Anything still open after two weeks comes back into the team channel carrying the incident it was born in, which is the context that makes people care.',
    points: [
      'Two-way sync with Linear, Jira and GitHub Issues',
      'Stalled items escalate to the service owner, not to everyone',
      'Completion rate reported per team, per quarter',
    ],
    art: <FollowThroughArt />,
    flip: true,
  },
  {
    kicker: 'Patterns',
    title: 'The fourth time it is not bad luck, it is a backlog item',
    body:
      'Individual post-mortems are honest and useless in isolation. Tagged contributing factors turn ninety separate incidents into a ranked list of what your architecture keeps punishing you for, with the hours lost attached to each one. That list is the most persuasive artefact an infrastructure team can bring to planning.',
    points: [
      'Factor taxonomy you can edit, not a fixed vendor list',
      'Hours-lost weighting, so rare and expensive beats common and cheap',
      'One-click quarterly read-out for engineering leadership',
    ],
    art: <PatternArt />,
  },
]

export function DeepDive() {
  return (
    <section id="deep-dive" className="bg-white">
      <div className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">In detail</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl">
            Three places a review usually falls apart
          </h2>
        </div>
        {BLOCKS.map((block) => (
          <div
            key={block.title}
            data-testid="deep-dive-block"
            className={`grid items-center gap-12 lg:grid-cols-2 ${block.flip ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">{block.kicker}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0B1220]">{block.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{block.body}</p>
              <ul className="mt-6 space-y-2.5">
                {block.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 text-orange-600">
                      <IconCheck />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">{block.art}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
