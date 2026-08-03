const BLOCKS = [
  {
    eyebrow: 'Step one',
    title: 'Assess before you load',
    body: 'Every member starts on the bench in the front office, not under a bar. We screen ankle, hip and shoulder range, take a resting heart rate, and ask what your week actually looks like — two kids and a commute is a different programme from four free evenings. Nothing gets loaded until we know what moves.',
    bullets: ['Nine-point range screen', 'Resting and recovery heart rate', 'A schedule we can honestly keep'],
    art: 'screen' as const,
  },
  {
    eyebrow: 'Step two',
    title: 'Train the pattern, not the mirror',
    body: 'There is not a single mirror on the lifting floor and that is deliberate. You learn to feel a braced spine and a vertical shin instead of watching yourself perform one. Coaches cue from the side, film one set a session on the studio tablet, and review it with you at the end while the plates are still warm.',
    bullets: ['Percentage blocks written six weeks out', 'One filmed set per session', 'Loading chart you keep in your notebook'],
    art: 'pattern' as const,
  },
  {
    eyebrow: 'Step three',
    title: 'Recover on purpose',
    body: 'The loft exists because the thing that limits most lifters is not effort, it is the twenty-two hours between sessions. Sauna, cold tub, a sleep conversation at week four, and a hard rule that nobody trains heavy more than three days in a row. Progress lives in the recovery, and we schedule it like a session.',
    bullets: ['Sauna and two cold tubs upstairs', 'Deload week every fifth week', 'Sleep and nutrition check-in at week four'],
    art: 'recover' as const,
  },
]

function BlockArt({ kind }: { kind: 'screen' | 'pattern' | 'recover' }) {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label={`Diagram illustrating the ${kind} stage of the Redpine coaching method`}
      className="h-auto w-full rounded-2xl"
    >
      <rect width="320" height="220" rx="20" fill="#EFE6D8" />
      {kind === 'screen' && (
        <g>
          <circle cx="86" cy="66" r="22" fill="#2F6B57" />
          <rect x="66" y="94" width="40" height="62" rx="14" fill="#123B31" />
          <path d="M66 156l-14 34M106 156l14 34" stroke="#123B31" strokeWidth="9" strokeLinecap="round" />
          <path d="M66 108l-24 22M106 108l24 22" stroke="#123B31" strokeWidth="9" strokeLinecap="round" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="180" y={48 + i * 34} width={110 - i * 18} height="16" rx="8" fill="#D2683F" opacity={0.9 - i * 0.16} />
          ))}
          <path d="M180 190h110" stroke="#123B31" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {kind === 'pattern' && (
        <g>
          <path d="M40 180h240" stroke="#123B31" strokeWidth="4" strokeLinecap="round" />
          <path
            d="M60 180 C 100 60, 220 60, 260 180"
            fill="none"
            stroke="#2F6B57"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {[80, 120, 160, 200, 240].map((x, i) => (
            <circle key={x} cx={x} cy={180 - [42, 78, 92, 78, 42][i]} r="9" fill="#E8A33D" />
          ))}
          <rect x="118" y="26" width="84" height="30" rx="15" fill="#123B31" />
          <text x="160" y="46" textAnchor="middle" fill="#E8A33D" fontSize="14" fontFamily="sans-serif">
            Week 6
          </text>
        </g>
      )}
      {kind === 'recover' && (
        <g>
          <rect x="36" y="52" width="112" height="120" rx="16" fill="#D2683F" opacity="0.85" />
          <rect x="172" y="52" width="112" height="120" rx="16" fill="#2F6B57" />
          <path d="M74 116c0-18 36-18 36 0" fill="none" stroke="#FBF7F1" strokeWidth="6" strokeLinecap="round" />
          <path d="M92 74v18M74 88h36" stroke="#FBF7F1" strokeWidth="6" strokeLinecap="round" />
          <path
            d="M198 132c14-10 28 10 42 0s28 10 28 10"
            fill="none"
            stroke="#FBF7F1"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="228" cy="88" r="16" fill="#FBF7F1" opacity="0.9" />
        </g>
      )}
    </svg>
  )
}

export function CoachingMethod() {
  return (
    <section id="method" className="bg-[#FBF7F1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A7F6C]">How we coach</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#123B31]">
          Three habits that make the difference between a gym membership and getting stronger
        </h2>

        <div className="mt-16 space-y-20">
          {BLOCKS.map((b, i) => (
            <div
              key={b.title}
              data-testid="method-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
              }`}
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#D2683F]">{b.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1B1A17]">
                  {b.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5C554A]">{b.body}</p>
                <ul className="mt-6 space-y-3">
                  {b.bullets.map((li) => (
                    <li key={li} className="flex items-start gap-3 text-sm text-[#3F3A31]">
                      <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" fill="#123B31" />
                        <path
                          d="M6 10.4l2.6 2.6L14.2 7.4"
                          fill="none"
                          stroke="#E8A33D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="rounded-3xl border border-[#E2D8C6] bg-white p-4 shadow-sm">
                <BlockArt kind={b.art} />
                <figcaption className="px-2 py-3 text-xs uppercase tracking-[0.2em] text-[#8A7F6C]">
                  {b.title}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
