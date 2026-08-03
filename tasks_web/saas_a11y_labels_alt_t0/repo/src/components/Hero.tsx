const PROOF_POINTS = [
  'Policy evaluated before the deploy starts',
  'Approvals routed with the blast radius attached',
  'Signed evidence emitted for every change',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0B1524]">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 55% at 18% 10%, rgba(74,222,192,0.16) 0%, rgba(11,21,36,0) 70%), radial-gradient(50% 50% at 88% 30%, rgba(242,169,59,0.18) 0%, rgba(11,21,36,0) 72%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#4ADEC0]/30 bg-[#4ADEC0]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#4ADEC0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADEC0]" aria-hidden="true" />
            Release control plane
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Ship on Friday.
            <br />
            <span className="text-[#F2A93B]">Prove it on Monday.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Halyard sits between your CI system and your production estate, turning every deploy into an approved,
            evidenced, reversible change — so your engineers keep shipping at the pace they already ship at, and your
            auditors stop asking anyone for screenshots.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#trial"
              className="rounded-xl bg-[#F2A93B] px-6 py-3.5 text-sm font-semibold text-[#0B1524] shadow-lg shadow-[#F2A93B]/20 transition hover:bg-[#ffc063]"
            >
              Start a 21-day trial
            </a>
            <a
              href="#gallery"
              className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              Walk through the screens
            </a>
          </div>
          <ul className="mt-10 space-y-2.5">
            {PROOF_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400">
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" focusable="false">
                  <circle cx="10" cy="10" r="9" fill="#4ADEC0" opacity="0.16" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    stroke="#4ADEC0"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-[#132238]/80 p-6 shadow-2xl shadow-black/40">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ledger-api · change 4,912
            </p>
            <svg viewBox="0 0 460 300" className="mt-4 w-full" role="img" aria-label="A change moving through Halyard: commit, policy evaluation, approval, deploy and evidence, with the rollback path branching back to the previous release">
              <defs>
                <linearGradient id="hero-lane" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4ADEC0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F2A93B" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="460" height="300" rx="16" fill="#0F1B2D" />
              <path d="M40 96h380" stroke="url(#hero-lane)" strokeWidth="3" strokeLinecap="round" />
              {[
                { x: 40, label: 'commit', fill: '#4ADEC0' },
                { x: 135, label: 'policy', fill: '#4ADEC0' },
                { x: 230, label: 'approve', fill: '#F2A93B' },
                { x: 325, label: 'deploy', fill: '#F2A93B' },
                { x: 420, label: 'evidence', fill: '#F2A93B' },
              ].map((node) => (
                <g key={node.label}>
                  <circle cx={node.x} cy="96" r="11" fill="#0F1B2D" stroke={node.fill} strokeWidth="3" />
                  <circle cx={node.x} cy="96" r="4" fill={node.fill} />
                  <text
                    x={node.x}
                    y="128"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#94A7BD"
                    fontFamily="ui-sans-serif, system-ui"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
              <path
                d="M325 150c0 42-95 42-95 0"
                stroke="#4ADEC0"
                strokeWidth="2"
                strokeDasharray="5 5"
                fill="none"
              />
              <text x="277" y="188" textAnchor="middle" fontSize="11" fill="#4ADEC0" fontFamily="ui-sans-serif, system-ui">
                rollback kept warm 72h
              </text>
              <rect x="40" y="208" width="380" height="56" rx="12" fill="#16263D" />
              <circle cx="68" cy="236" r="9" fill="#4ADEC0" opacity="0.25" />
              <path d="M63.5 236.5l3.5 3.5 6-7" stroke="#4ADEC0" strokeWidth="2" fill="none" strokeLinecap="round" />
              <text x="88" y="232" fontSize="12.5" fill="#DCE5EF" fontFamily="ui-sans-serif, system-ui">
                Approved by H. Okonjo · 38s
              </text>
              <text x="88" y="250" fontSize="11.5" fill="#7F93AB" fontFamily="ui-sans-serif, system-ui">
                blast radius: 4 services · 2 datasets · no freeze
              </text>
            </svg>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { value: '38s', label: 'median approval' },
              { value: '72h', label: 'warm rollback' },
              { value: '100%', label: 'changes evidenced' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
