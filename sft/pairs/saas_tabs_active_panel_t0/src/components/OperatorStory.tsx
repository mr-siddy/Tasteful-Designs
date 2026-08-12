export function OperatorStory() {
  return (
    <section id="story" className="bg-white" aria-labelledby="story-heading">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <svg
            viewBox="0 0 420 320"
            className="w-full rounded-2xl"
            role="img"
            aria-label="Map of the midcoast Maine water systems Weirline started with"
          >
            <defs>
              <linearGradient id="story-water" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0B4340" />
                <stop offset="100%" stopColor="#08312F" />
              </linearGradient>
            </defs>
            <rect width="420" height="320" rx="20" fill="url(#story-water)" />
            <path
              d="M0 208c46-6 62-34 104-30s52 34 92 26 56-44 100-40 74 30 124 22v112H0Z"
              fill="#F1E9DC"
              opacity="0.1"
            />
            <path
              d="M0 196c46-6 62-34 104-30s52 34 92 26 56-44 100-40 74 30 124 22"
              fill="none"
              stroke="#7FE3D6"
              strokeWidth="3"
            />
            {[
              [82, 150, 'Belfast'],
              [176, 206, 'Wallace Brook'],
              [268, 128, 'Sablefield'],
              [340, 188, 'Cape Anselm'],
            ].map(([x, y, label]) => (
              <g key={String(label)}>
                <circle cx={Number(x)} cy={Number(y)} r="7" fill="#D97742" />
                <circle cx={Number(x)} cy={Number(y)} r="15" fill="none" stroke="#D97742" strokeWidth="1.5" opacity="0.45" />
                <text x={Number(x) + 22} y={Number(y) + 5} fill="#F1E9DC" fontSize="13" fontFamily="ui-sans-serif">
                  {label}
                </text>
              </g>
            ))}
            <text x="28" y="46" fill="#7FE3D6" fontSize="12" letterSpacing="2" fontFamily="ui-sans-serif">
              MIDCOAST MAINE · 2021
            </text>
          </svg>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D97742]">
            Why it exists
          </p>
          <h2 id="story-heading" className="mt-4 text-4xl font-semibold tracking-tight lg:text-[42px]">
            It started as one operator’s Thursday
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#08312F]/75">
            Nell Fairbanks ran a Grade II system on the midcoast for eleven years and lost the first
            Thursday of every month to the same stack of paper: SCADA printouts on the left, lab
            faxes on the right, a spreadsheet in the middle that had been passed down from an
            operator who retired in 2009 and that nobody dared touch.
          </p>
          <p className="mt-5 text-[17px] leading-relaxed text-[#08312F]/75">
            In 2021 she and Tomas Ferreiro, who had spent a decade moving industrial data for a
            living, rebuilt that Thursday as software and ran it for four small districts within
            driving distance. All four filed early that winter. Weirline is what those four systems
            asked for next, and it is still built in the same office above the chandlery in Belfast —
            six people, three of whom hold a current operator licence.
          </p>
          <dl className="mt-9 grid gap-6 sm:grid-cols-3">
            {[
              { k: '2021', v: 'First four districts on the midcoast' },
              { k: '6', v: 'People, half of them licensed operators' },
              { k: '9', v: 'States with a system filing from Weirline' },
            ].map((s) => (
              <div key={s.k} data-testid="story-stat" className="rounded-2xl bg-[#FBF8F3] px-5 py-4">
                <dt className="text-2xl font-semibold tracking-tight">{s.k}</dt>
                <dd className="mt-1.5 text-[14px] leading-snug text-[#08312F]/65">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
