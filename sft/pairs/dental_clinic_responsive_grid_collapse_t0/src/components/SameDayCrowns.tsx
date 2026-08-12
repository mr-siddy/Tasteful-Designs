const STEPS = [
  {
    heading: 'We scan instead of taking an impression',
    body: 'A wand the size of an electric toothbrush maps the tooth in about ninety seconds. Nobody gags on a tray of putty and nothing gets couriered to a lab in Massachusetts.',
  },
  {
    heading: 'The crown is designed while you have a coffee',
    body: 'Dr. Okonkwo shapes the bite on screen against the scan of your opposite side. You can watch it on the second monitor, or read your book — most people read.',
  },
  {
    heading: 'The mill cuts it from a single ceramic block',
    body: 'Twelve to eighteen minutes of grinding in the room behind reception, then a stain-and-glaze cycle in the furnace so the colour matches the teeth beside it.',
  },
]

/** Deep dive one: the chairside mill, copy left, diagram right. */
export default function SameDayCrowns() {
  return (
    <section id="same-day" data-testid="same-day" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c68a3e]">
            The mill downstairs
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#0d2b2e] sm:text-4xl">
            A crown in an afternoon, not a fortnight
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#0d2b2e]/70">
            The reason a crown normally takes two visits is that it is made somewhere
            else. We bought the milling unit in 2019 so it would not have to be. You
            come in at one, you leave at four with the real crown bonded in place.
          </p>

          <ol className="mt-10 space-y-8">
            {STEPS.map((step, index) => (
              <li key={step.heading} className="flex gap-5" data-testid="crown-step">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f4c4f] font-serif text-lg font-semibold text-[#faf5ec]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#0d2b2e]">
                    {step.heading}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#0d2b2e]/70">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 -rotate-2 rounded-[2rem] bg-gradient-to-br from-[#f2e9da] to-[#e5d7c0]"
          />
          <svg
            viewBox="0 0 400 340"
            className="relative w-full"
            role="img"
            aria-label="Diagram of the chairside milling unit cutting a ceramic crown"
          >
            <defs>
              <linearGradient id="mill-body" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1c6f6b" />
                <stop offset="100%" stopColor="#0f4c4f" />
              </linearGradient>
            </defs>
            <rect x="46" y="52" width="308" height="236" rx="24" fill="url(#mill-body)" />
            <rect x="76" y="82" width="248" height="132" rx="14" fill="#faf5ec" opacity="0.94" />
            <path
              d="M200 104c12 0 18 7 18 16 0 12-5 15-5 27 0 7-4 12-8 12s-3-7-5-7-1 7-5 7-8-5-8-12c0-12-5-15-5-27 0-9 6-16 18-16z"
              fill="#c68a3e"
              opacity="0.85"
            />
            <g stroke="#0f4c4f" strokeWidth="2" opacity="0.5">
              <path d="M110 176h180" />
              <path d="M110 190h140" />
            </g>
            <rect x="150" y="234" width="100" height="14" rx="7" fill="#f2e9da" opacity="0.45" />
            <circle cx="120" cy="241" r="7" fill="#c68a3e" />
            <circle cx="280" cy="241" r="7" fill="#f2e9da" opacity="0.6" />
            <path
              d="M182 122v-34M218 122v-34"
              stroke="#0f4c4f"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>
          <div className="relative mt-6 rounded-2xl border border-[#0f4c4f]/10 bg-[#faf5ec] p-6">
            <p className="font-serif text-2xl font-semibold text-[#0f4c4f]">
              1,840 crowns milled
            </p>
            <p className="mt-1 text-sm text-[#0d2b2e]/70">
              since the unit arrived, with 31 remakes — a little over one and a half
              percent, which we publish because most practices do not.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
