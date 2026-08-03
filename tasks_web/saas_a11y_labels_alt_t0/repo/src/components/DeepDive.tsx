import type { ReactNode } from 'react'

function ApprovalArt() {
  return (
    <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="An approval card showing a diff summary, the four previous deploys of the same service and a countdown to the approval deadline">
      <rect width="400" height="260" rx="18" fill="#0F1B2D" />
      <rect x="24" y="24" width="352" height="76" rx="12" fill="#16263D" />
      <text x="44" y="52" fontSize="14" fontWeight="600" fill="#E7EEF6" fontFamily="ui-sans-serif, system-ui">
        ledger-api · raise batch ceiling
      </text>
      <text x="44" y="76" fontSize="12" fill="#7F93AB" fontFamily="ui-sans-serif, system-ui">
        +41 −12 · 4 services · 2 datasets · policy 12b
      </text>
      <text x="44" y="130" fontSize="11.5" fill="#7F93AB" fontFamily="ui-sans-serif, system-ui" letterSpacing="1.4">
        LAST FOUR DEPLOYS
      </text>
      {[0, 1, 2, 3].map((index) => (
        <g key={index} transform={`translate(${44 + index * 84} 146)`}>
          <rect width="70" height="46" rx="9" fill="#16263D" />
          <circle cx="16" cy="23" r="6" fill={index === 3 ? '#F2A93B' : '#4ADEC0'} />
          <text x="32" y="27" fontSize="11" fill="#9CB0C6" fontFamily="ui-sans-serif, system-ui">
            {index === 3 ? 'rollback' : 'clean'}
          </text>
        </g>
      ))}
      <rect x="24" y="212" width="352" height="28" rx="9" fill="#4ADEC0" opacity="0.14" />
      <text x="44" y="231" fontSize="12.5" fill="#4ADEC0" fontFamily="ui-sans-serif, system-ui">
        Approve · deadline in 4h 12m
      </text>
    </svg>
  )
}

function EvidenceArt() {
  return (
    <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="A stack of signed change records folding into a single quarterly evidence bundle with an export arrow">
      <rect width="400" height="260" rx="18" fill="#0F1B2D" />
      {[0, 1, 2, 3].map((index) => (
        <g key={index} transform={`translate(${34 + index * 10} ${34 + index * 16})`}>
          <rect width="200" height="120" rx="12" fill="#16263D" opacity={0.55 + index * 0.15} />
          <rect x="18" y="22" width="120" height="7" rx="3.5" fill="#31465F" />
          <rect x="18" y="40" width="90" height="7" rx="3.5" fill="#31465F" />
          <rect x="18" y="58" width="140" height="7" rx="3.5" fill="#31465F" />
          <circle cx="170" cy="92" r="14" fill="#4ADEC0" opacity="0.2" />
          <path d="M164 92.5l4.5 4.5 8-9" stroke="#4ADEC0" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        </g>
      ))}
      <path d="M282 130h48" stroke="#F2A93B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M322 122l10 8-10 8" stroke="#F2A93B" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="252" y="176" width="120" height="48" rx="12" fill="#16263D" />
      <text x="272" y="199" fontSize="12" fill="#E7EEF6" fontFamily="ui-sans-serif, system-ui">
        Q1 bundle
      </text>
      <text x="272" y="215" fontSize="11" fill="#7F93AB" fontFamily="ui-sans-serif, system-ui">
        1,904 changes signed
      </text>
    </svg>
  )
}

function PipelineArt() {
  return (
    <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="A pipeline diagram showing Halyard sitting beside the existing build and test stages rather than in front of them">
      <rect width="400" height="260" rx="18" fill="#0F1B2D" />
      <path d="M40 88h320" stroke="#2C3E58" strokeWidth="3" strokeLinecap="round" />
      {[
        { x: 40, label: 'build' },
        { x: 160, label: 'test' },
        { x: 280, label: 'package' },
        { x: 360, label: 'deploy' },
      ].map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy="88" r="10" fill="#0F1B2D" stroke="#4ADEC0" strokeWidth="2.5" />
          <text x={node.x} y="118" textAnchor="middle" fontSize="11.5" fill="#8FA6C0" fontFamily="ui-sans-serif, system-ui">
            {node.label}
          </text>
        </g>
      ))}
      <rect x="120" y="156" width="200" height="72" rx="14" fill="#16263D" stroke="#F2A93B" strokeWidth="1.5" />
      <text x="144" y="184" fontSize="13" fontWeight="600" fill="#F2A93B" fontFamily="ui-sans-serif, system-ui">
        Halyard control plane
      </text>
      <text x="144" y="205" fontSize="11" fill="#9CB0C6" fontFamily="ui-sans-serif, system-ui">
        policy · approval · evidence
      </text>
      <path d="M280 100v56" stroke="#F2A93B" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M360 100v56" stroke="#F2A93B" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  )
}

type Block = {
  eyebrow: string
  title: string
  body: string[]
  bullets: string[]
  art: ReactNode
}

const BLOCKS: Block[] = [
  {
    eyebrow: 'The approval model',
    title: 'Approvals a reviewer can actually answer',
    body: [
      'Change advisory boards fail for a boring reason: the person asked to approve a change has no way to judge it in the ninety seconds they have. So they either rubber-stamp everything or they defer the whole batch to a weekly meeting, and both outcomes are worse than no process at all.',
      'Halyard puts the answer next to the question. The reviewer gets the diff, the resolved blast radius, the last four deploys of the same service and whether any of them were rolled back — on one card, with a deadline attached.',
    ],
    bullets: [
      'Reviewers are chosen by policy, not by a rota spreadsheet',
      'Approval SLAs escalate automatically instead of silently expiring',
      'Docs-only and config-only changes can auto-approve under a named rule',
    ],
    art: <ApprovalArt />,
  },
  {
    eyebrow: 'The evidence model',
    title: 'Evidence you do not reassemble in April',
    body: [
      'The expensive part of an audit is rarely the control itself. It is the four engineer-weeks spent proving the control was in force for a quarter that ended two months ago — screenshotting tickets, correlating pipeline runs, explaining the deploy that happened at 03:12 on a Sunday.',
      'Because Halyard is in the path of the change, the record is a by-product of shipping rather than a research project. Each entry is signed, tied to a commit and a person, and immutable once written.',
    ],
    bullets: [
      'One PDF per quarter, or a nightly push into Vanta, Drata or your object store',
      'Break-glass events carry the incident that justified them',
      'Records stay in the region that produced them, for as long as your policy says',
    ],
    art: <EvidenceArt />,
  },
  {
    eyebrow: 'Where it sits',
    title: 'Beside your pipeline, not in front of it',
    body: [
      'Halyard is not a CI system and has no ambition to become one. Your build and test stages stay exactly where they are, owned by the people who already own them, running on the runners you already pay for.',
      'The control plane attaches at the package and deploy boundary through a signed webhook and a short-lived deploy credential. Teams at Tidemark Logistics had their first service under policy within an afternoon and the whole estate inside six weeks.',
    ],
    bullets: [
      'Adapters for GitHub Actions, GitLab CI, Buildkite, Jenkins and Argo CD',
      'Terraform provider for policies, freezes and workspace membership',
      'Shadow mode records what would have been blocked before anything is enforced',
    ],
    art: <PipelineArt />,
  },
]

export default function DeepDive() {
  return (
    <section id="evidence" className="bg-[#0E1B2C] py-24">
      <div className="mx-auto max-w-6xl space-y-24 px-6">
        {BLOCKS.map((block, index) => (
          <div
            key={block.title}
            data-testid="deep-dive-block"
            className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#F2A93B]">{block.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">{block.title}</h2>
              {block.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="mt-5 text-base leading-relaxed text-slate-400">
                  {paragraph}
                </p>
              ))}
              <ul className="mt-7 space-y-3">
                {block.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                      <rect x="1" y="1" width="18" height="18" rx="6" fill="#4ADEC0" opacity="0.15" />
                      <path
                        d="M5.5 10.2l3 3 6-6.4"
                        stroke="#4ADEC0"
                        strokeWidth="1.8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#132238] p-5 shadow-xl shadow-black/40">
              {block.art}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
