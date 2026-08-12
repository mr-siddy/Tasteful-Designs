const POINTS = [
  {
    title: 'Retries with a memory',
    body:
      'A step that fails is retried on an exponential backoff, and Stonecrop remembers what it already wrote so the second attempt does not double-charge anyone.',
  },
  {
    title: 'A dead letter queue you can read',
    body:
      'Runs that exhaust their retries land in a queue with the payload, the error and a replay button, not in a log file somebody has to grep at midnight.',
  },
  {
    title: 'Backpressure instead of a stampede',
    body:
      'When a downstream system starts rate limiting, Stonecrop slows the whole workflow down rather than hammering it until someone opens an incident.',
  },
]

export default function ReliabilityPanel() {
  return (
    <section id="reliability" className="bg-[#0B1F1B] py-24 text-[#EDF1EE]">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7FCFC2]">
            Reliability
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Retries, backoff and dead letters — without anyone writing a scheduler
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#B7CCC5]">
            The reason ops automation usually dies is not the happy path. It is the Tuesday the
            billing API returns a 503 for nine minutes, and the script that was supposed to be
            temporary silently skips forty-one customers. Stonecrop treats that Tuesday as the
            normal case.
          </p>

          <dl className="mt-10 space-y-7">
            {POINTS.map((point) => (
              <div key={point.title} className="border-l-2 border-[#12766A] pl-5">
                <dt className="text-base font-semibold text-[#EDF1EE]">{point.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-[#93ADA6]">{point.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border border-[#294842] bg-[#0F2A24] p-7">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7FCFC2]">
            What a flaky step looks like
          </h3>
          <svg viewBox="0 0 360 250" className="mt-6 w-full" role="img" aria-label="Chart of three retry attempts, the first two failing and the third succeeding after backoff">
            <defs>
              <linearGradient id="reliabilityFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#12766A" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#12766A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M20 190h320" stroke="#22403A" strokeWidth="1.5" />
            <path d="M20 130h320" stroke="#22403A" strokeWidth="1.5" strokeDasharray="4 6" />
            <path d="M20 70h320" stroke="#22403A" strokeWidth="1.5" strokeDasharray="4 6" />

            <path d="M20 190L90 190L90 150L170 150L170 100L280 100L280 60L340 60" fill="none" stroke="#4FB3A2" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M20 190L90 190L90 150L170 150L170 100L280 100L280 60L340 60L340 190L20 190z" fill="url(#reliabilityFill)" />

            <circle cx="90" cy="150" r="7" fill="#0F2A24" stroke="#E8A33D" strokeWidth="2.5" />
            <text x="100" y="142" fill="#F3D9A8" fontSize="12">attempt 1 &mdash; 503 from billing</text>

            <circle cx="170" cy="100" r="7" fill="#0F2A24" stroke="#E8A33D" strokeWidth="2.5" />
            <text x="180" y="92" fill="#F3D9A8" fontSize="12">attempt 2 &mdash; waited 40s</text>

            <circle cx="280" cy="60" r="7" fill="#4FB3A2" />
            <text x="150" y="40" fill="#CFE3DD" fontSize="12">attempt 3 &mdash; posted, no duplicate</text>

            <text x="20" y="212" fill="#7B958E" fontSize="11">09:41</text>
            <text x="160" y="212" fill="#7B958E" fontSize="11">09:44</text>
            <text x="300" y="212" fill="#7B958E" fontSize="11">09:52</text>
            <text x="20" y="238" fill="#7B958E" fontSize="11">No page was sent. The on-call engineer read about it on Wednesday.</text>
          </svg>
        </div>
      </div>
    </section>
  )
}
