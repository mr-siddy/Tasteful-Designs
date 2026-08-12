import { useState } from 'react'

type Job = {
  id: string
  label: string
  title: string
  summary: string
  features: string[]
  stat: { value: string; label: string }
  art: 'calendar' | 'lab' | 'report' | 'binder'
}

const JOBS: Job[] = [
  {
    id: 'sampling',
    label: 'Sampling',
    title: 'The calendar the truck runs on',
    summary:
      'Weirline builds the monitoring calendar from your schedule, your population served and your site list, then keeps it honest all year. Nothing is scheduled twice, nothing quietly slips past its window, and the route sheet for tomorrow morning prints in one click.',
    features: [
      'Route sheet per collector, ordered by driving time between sites',
      'Repeat and triggered samples opened automatically after a positive',
      'Chain-of-custody forms pre-filled with site code, time and preservative',
      'Bottle counts and cooler prep listed the afternoon before',
    ],
    stat: { value: '97%', label: 'of scheduled samples collected inside their window' },
    art: 'calendar',
  },
  {
    id: 'lab',
    label: 'Lab results',
    title: 'Results that file themselves',
    summary:
      'Your lab sends the same electronic data deliverable it always did. Weirline reads it, matches every result to the sample it came from, converts the units your primacy agency expects and puts anything near an action level in front of you before it becomes a violation.',
    features: [
      'Electronic deliverables from Ashfield Analytical and eleven other labs',
      'Site-code matching, with a two-click resolver for anything ambiguous',
      'Action-level and MCL flags raised on intake, not at report time',
      'Running locational averages for disinfection by-products, updated per result',
    ],
    stat: { value: '4 days', label: 'saved per quarter chasing paper result sheets' },
    art: 'lab',
  },
  {
    id: 'reporting',
    label: 'Reporting',
    title: 'The report drafts itself by the 2nd',
    summary:
      'The monthly operating report is assembled from readings you already took, in the layout your state publishes, with the arithmetic checked twice. You review it, you sign it, and Weirline keeps the signed copy and the submission receipt together forever.',
    features: [
      'Monthly operating report in your state’s current published layout',
      'Consumer confidence report drafted each spring from the same data',
      'Every total, average and maximum traced back to the reading behind it',
      'Signed submittals archived with a timestamp and the submitting operator',
    ],
    stat: { value: '19 min', label: 'median time from draft to signed submittal' },
    art: 'report',
  },
  {
    id: 'audits',
    label: 'Audits',
    title: 'A sanitary survey you can search',
    summary:
      'When the inspector arrives, the binder is already made. Ten years of submittals, correspondence, operator certifications and equipment records sit in one searchable record, filed against the date each thing happened rather than the day someone got around to scanning it.',
    features: [
      'Ten-year retention with an export the inspector can take away on a drive',
      'Operator licence renewals and training hours tracked per person',
      'Findings and corrective actions tracked to a close-out date',
      'Read-only reviewer access, so nobody hands over a shared password',
    ],
    stat: { value: '2 hrs', label: 'typical survey prep, down from most of a week' },
    art: 'binder',
  },
]

function PanelArt({ kind }: { kind: Job['art'] }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full"
      role="img"
      aria-label={`Diagram of the ${kind} workflow`}
      data-testid="platform-art"
    >
      <rect x="0" y="0" width="320" height="220" rx="18" fill="#04211F" />
      {kind === 'calendar' && (
        <g>
          <rect x="26" y="28" width="268" height="164" rx="12" fill="#0B4340" />
          {[0, 1, 2, 3, 4].map((c) => (
            <text key={c} x={48 + c * 52} y="56" fill="#7FE3D6" fontSize="11" fontFamily="ui-sans-serif">
              {['M', 'T', 'W', 'T', 'F'][c]}
            </text>
          ))}
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect
                key={`${r}-${c}`}
                x={42 + c * 52}
                y={68 + r * 30}
                width="40"
                height="22"
                rx="6"
                fill={(r + c) % 4 === 1 ? '#17A398' : '#F1E9DC'}
                opacity={(r + c) % 4 === 1 ? 0.95 : 0.14}
              />
            )),
          )}
          <rect x="42" y="158" width="92" height="18" rx="9" fill="#D97742" />
        </g>
      )}
      {kind === 'lab' && (
        <g>
          <path
            d="M120 40h26v46l34 62a14 14 0 0 1-12 22h-70a14 14 0 0 1-12-22l34-62V40Z"
            fill="none"
            stroke="#7FE3D6"
            strokeWidth="3"
          />
          <path d="M104 130h58" stroke="#17A398" strokeWidth="3" />
          <path d="M100 148h66l14 22a14 14 0 0 1-12 22h-70a14 14 0 0 1-12-22l14-22Z" fill="#17A398" opacity="0.7" />
          <rect x="204" y="52" width="88" height="118" rx="10" fill="#0B4340" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="218" y={70 + i * 22} width={i === 2 ? 34 : 58} height="8" rx="4" fill={i === 2 ? '#D97742' : '#F1E9DC'} opacity={i === 2 ? 1 : 0.28} />
          ))}
        </g>
      )}
      {kind === 'report' && (
        <g>
          <rect x="40" y="26" width="150" height="168" rx="12" fill="#FBF8F3" />
          <rect x="60" y="50" width="80" height="10" rx="5" fill="#08312F" opacity="0.8" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i}>
              <rect x="60" y={76 + i * 18} width="46" height="7" rx="3.5" fill="#08312F" opacity="0.28" />
              <rect x="116" y={76 + i * 18} width="54" height="7" rx="3.5" fill="#17A398" opacity="0.45" />
            </g>
          ))}
          <rect x="60" y="176" width="60" height="8" rx="4" fill="#D97742" />
          <g transform="translate(206 74)">
            <circle cx="34" cy="34" r="34" fill="#17A398" opacity="0.16" />
            <path d="M18 35l11 11 21-23" fill="none" stroke="#7FE3D6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      )}
      {kind === 'binder' && (
        <g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={40 + i * 12} y={40 + i * 8} width="150" height="150" rx="10" fill="#0B4340" opacity={0.4 + i * 0.3} />
          ))}
          <rect x="64" y="56" width="150" height="150" rx="10" fill="#F1E9DC" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="84" y={80 + i * 22} width={i % 2 ? 76 : 110} height="8" rx="4" fill="#08312F" opacity="0.22" />
          ))}
          <circle cx="244" cy="150" r="30" fill="none" stroke="#7FE3D6" strokeWidth="5" />
          <path d="M266 172l22 22" stroke="#D97742" strokeWidth="7" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}

export function PlatformTabs() {
  const [active, setActive] = useState(0)
  const job = JOBS[active]

  return (
    <section id="workspace" className="bg-white" aria-labelledby="workspace-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D97742]">
            One workspace, four jobs
          </p>
          <h2 id="workspace-heading" className="mt-4 text-4xl font-semibold tracking-tight lg:text-[42px]">
            The compliance year, start to finish
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#08312F]/70">
            A small system's year runs on the same four jobs whether it serves eight hundred people
            or sixty thousand. Pick one to see how Weirline handles it.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Weirline workflows"
          data-testid="platform-tablist"
          className="mt-12 flex flex-wrap gap-2 border-b border-[#08312F]/10 pb-4"
        >
          {JOBS.map((j, i) => (
            <button
              key={j.id}
              type="button"
              role="tab"
              id={`platform-tab-${j.id}`}
              data-testid="platform-tab"
              aria-selected={i === active}
              aria-controls={`platform-panel-${j.id}`}
              onClick={() => setActive(i)}
              className={
                i === active
                  ? 'rounded-full bg-[#08312F] px-6 py-2.5 text-[15px] font-medium text-[#FBF8F3]'
                  : 'rounded-full px-6 py-2.5 text-[15px] font-medium text-[#08312F]/60 transition hover:bg-[#F1E9DC]'
              }
            >
              {j.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`platform-panel-${job.id}`}
          aria-labelledby={`platform-tab-${job.id}`}
          data-testid="platform-panel"
          tabIndex={0}
          className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center"
        >
          <div>
            <h3 className="text-[28px] font-semibold tracking-tight">{job.title}</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-[#08312F]/70">{job.summary}</p>
            <ul className="mt-7 space-y-3.5">
              {job.features.map((f) => (
                <li key={f} data-testid="platform-feature" className="flex gap-3 text-[15px] leading-relaxed">
                  <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-[#17A398]" aria-hidden="true">
                    <path
                      d="M3 10.5l4.5 4.5L17 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#08312F]/80">{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-baseline gap-3 rounded-2xl bg-[#F1E9DC] px-6 py-4">
              <span className="text-3xl font-semibold tracking-tight">{job.stat.value}</span>
              <span className="text-[14px] leading-snug text-[#08312F]/70">{job.stat.label}</span>
            </p>
          </div>
          <PanelArt kind={job.art} />
        </div>
      </div>
    </section>
  )
}
