function ScreenIllustration() {
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" aria-hidden="true" focusable="false">
      <rect width="400" height="280" rx="22" fill="#0B2A33" />
      <g opacity="0.85">
        <rect x="34" y="34" width="150" height="212" rx="14" fill="#F7F2EA" fillOpacity="0.08" />
        <path
          d="M60 96h98M60 122h98M60 148h72M60 174h84"
          stroke="#F7F2EA"
          strokeOpacity="0.4"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect x="60" y="58" width="60" height="12" rx="6" fill="#E4682A" />
      </g>
      <g transform="translate(228 62)">
        <circle cx="60" cy="26" r="18" fill="#F7F2EA" />
        <path
          d="M60 46v52M60 62l-30 18M60 62l30 18M44 98l-10 44M76 98l10 44"
          stroke="#F7F2EA"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M6 150c14-16 34-24 54-24s40 8 54 24"
          fill="none"
          stroke="#1D7A6B"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="4 9"
        />
      </g>
    </svg>
  )
}

function PlanIllustration() {
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" aria-hidden="true" focusable="false">
      <rect width="400" height="280" rx="22" fill="#1D7A6B" fillOpacity="0.14" />
      <rect x="42" y="30" width="230" height="220" rx="14" fill="#FFFFFF" />
      <rect x="128" y="52" width="230" height="200" rx="14" fill="#F7F2EA" stroke="#0B2A33" strokeOpacity="0.15" />
      <g stroke="#0B2A33" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round">
        <path d="M152 88h120M152 112h150M152 136h96M152 160h134M152 184h110M152 208h74" />
      </g>
      <rect x="152" y="62" width="86" height="12" rx="6" fill="#E4682A" />
      <circle cx="330" cy="212" r="26" fill="#E4682A" fillOpacity="0.18" />
      <path
        d="M318 212l8 9 18-20"
        fill="none"
        stroke="#E4682A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WallIllustration() {
  return (
    <svg viewBox="0 0 400 280" className="h-auto w-full" aria-hidden="true" focusable="false">
      <rect width="400" height="280" rx="22" fill="#0B2A33" fillOpacity="0.06" />
      <rect x="36" y="34" width="328" height="212" rx="16" fill="#FFFFFF" stroke="#0B2A33" strokeOpacity="0.12" />
      <g>
        {[
          { x: 74, h: 58 },
          { x: 126, h: 92 },
          { x: 178, h: 78 },
          { x: 230, h: 124 },
          { x: 282, h: 148 },
        ].map((bar) => (
          <rect
            key={bar.x}
            x={bar.x}
            y={210 - bar.h}
            width="34"
            height={bar.h}
            rx="7"
            fill={bar.h > 120 ? '#E4682A' : '#1D7A6B'}
            fillOpacity={bar.h > 120 ? 0.9 : 0.55}
          />
        ))}
        <path d="M60 210h280" stroke="#0B2A33" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g fill="#0B2A33" fillOpacity="0.45" fontSize="13" fontWeight="700">
        <text x="72" y="232">Wk 1</text>
        <text x="124" y="232">Wk 4</text>
        <text x="176" y="232">Wk 8</text>
        <text x="226" y="232">Wk 12</text>
        <text x="278" y="232">Wk 16</text>
      </g>
      <text x="64" y="66" fill="#0B2A33" fillOpacity="0.7" fontSize="16" fontWeight="800">
        Back squat · Alina P.
      </text>
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Week zero',
    title: 'The first session is a movement screen, not a workout',
    body: [
      'Before you lift anything heavier than a broomstick, a coach spends forty minutes watching you squat, hinge, press, pull and walk. We write down what your ankles do, which shoulder is stiffer, how a knee behaves under load, and what you told us hurts on a bad day.',
      'That page becomes the constraints on your plan. It is why two people in the same class are often doing two different versions of the same lift, and why nobody at Tidewater is handed a workout that ignores the body they walked in with.',
    ],
    illustration: <ScreenIllustration />,
    caption: 'Every member has a screen on file, updated every twelve weeks.',
  },
  {
    eyebrow: 'The plan',
    title: 'One barbell, four coaches, and a plan that lives on paper',
    body: [
      'You leave your first week with a printed twelve-week block: the lifts, the sets, the weights to start at and the rule for when to add. It is deliberately on paper, because a plan you can fold into a gym bag gets followed and one behind a login does not.',
      'Coaches review it with you every third week and change it in pen. If a shift pattern eats a month, we rewrite the block around the sessions you can actually make instead of pretending you missed nothing.',
    ],
    illustration: <PlanIllustration />,
    caption: 'Twelve-week blocks, reviewed in week three, six, nine and twelve.',
  },
  {
    eyebrow: 'The numbers',
    title: 'Your numbers go on the wall where you can argue with them',
    body: [
      'The back wall of the platform room is a whiteboard of tested lifts, rowing splits and carry distances, written in each member’s own handwriting. Test weeks are the first and last week of every block, and nothing goes up there that a coach did not watch.',
      'It is not a leaderboard. Beginners and people benching double their bodyweight are on the same wall, because the only comparison that means anything here is the one against your own line from sixteen weeks ago.',
    ],
    illustration: <WallIllustration />,
    caption: 'Alina put 38kg on her back squat across four blocks.',
  },
]

export function DeepDive() {
  return (
    <section id="method" className="border-b border-[#0B2A33]/10 bg-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D7A6B]">
            How the coaching actually works
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Three things we do that most rooms skip
          </h2>
        </div>

        <div className="mt-14 space-y-20">
          {BLOCKS.map((block, index) => (
            <div
              key={block.title}
              className={
                index % 2 === 1
                  ? 'grid items-center gap-10 lg:grid-cols-2 lg:[&>*:first-child]:order-2'
                  : 'grid items-center gap-10 lg:grid-cols-2'
              }
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4682A]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight sm:text-3xl">
                  {block.title}
                </h3>
                {block.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="mt-5 leading-relaxed text-[#3C4E54]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <figure className="rounded-3xl border border-[#0B2A33]/10 bg-white p-5 shadow-sm">
                {block.illustration}
                <figcaption className="mt-4 text-sm text-[#5B6B70]">{block.caption}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
