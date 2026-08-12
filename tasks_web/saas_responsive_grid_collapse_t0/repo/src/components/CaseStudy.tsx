const OUTCOMES = [
  { figure: '600', label: 'chore coats cut across two shade lots' },
  { figure: '0', label: 'shade mismatches in the finished run' },
  { figure: '9 days', label: 'earlier than the same run took last spring' },
]

function LotSplit() {
  return (
    <svg
      viewBox="0 0 340 190"
      role="img"
      aria-label="Two duck canvas shade lots split into bundles, each kept to its own sew line"
      className="h-auto w-full"
    >
      <rect width="340" height="190" rx="14" fill="#FBF8F2" />
      <text x="18" y="30" fontSize="11" fontFamily="monospace" fill="#7A7286">
        LOT 4471 · SHADE A
      </text>
      <text x="182" y="30" fontSize="11" fontFamily="monospace" fill="#7A7286">
        LOT 4488 · SHADE B
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={`a-${i}`}
          x={18 + (i % 3) * 48}
          y={44 + Math.floor(i / 3) * 46}
          width={40}
          height={38}
          rx={7}
          fill="#B9A98C"
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect
          key={`b-${i}`}
          x={182 + (i % 3) * 48}
          y={44 + Math.floor(i / 3) * 46}
          width={40}
          height={38}
          rx={7}
          fill="#9C8B6E"
        />
      ))}
      <path d="M170 40v104" stroke="#C1552F" strokeWidth="2" strokeDasharray="6 5" />
      <text x="18" y="168" fontSize="11" fill="#5A5364">
        Line 1 runs shade A only · Line 2 runs shade B only
      </text>
    </svg>
  )
}

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      aria-labelledby="case-heading"
      className="border-b border-[#E0D6C6] bg-[#FBF8F2]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C1552F]">
            Cormorant Workwear · Fall River, MA
          </p>
          <h2
            id="case-heading"
            className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
          >
            600 chore coats, two shade lots, one deadline that had already moved
            twice
          </h2>
          <p className="mt-6 leading-relaxed text-[#4A4455]">
            Cormorant took a 600-unit order for a 12oz duck canvas chore coat and
            the mill could only supply it in two shade lots eleven days apart. On
            paper that is a coin flip: if lots get mixed inside a bundle, you find
            out at final pressing, when the sleeves are visibly lighter than the
            body and the whole run is a second.
          </p>
          <p className="mt-4 leading-relaxed text-[#4A4455]">
            Grainline reserved each lot against its own tickets, kept shade A on
            line one and shade B on line two, and refused any bundle that tried to
            cross. The floor lead never had to hold the rule in her head; the board
            held it. The run shipped complete, nine days ahead of where the same
            style landed the previous spring.
          </p>

          <dl className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {OUTCOMES.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl border border-[#DCCFB8] bg-[#F6F2EC] px-5 py-5"
              >
                <dt className="text-3xl font-black tracking-tight text-[#2C5C4F]">
                  {o.figure}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-[#5A5364]">
                  {o.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border border-[#DCCFB8] bg-[#F6F2EC] p-6">
          <LotSplit />
          <figure className="mt-6 border-l-2 border-[#C1552F] pl-5">
            <blockquote className="text-[0.95rem] leading-relaxed text-[#4A4455]">
              “The board caught two bundles I would have let through. That is the
              whole pitch, honestly.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold">
              Rosalind Achebe
              <span className="block font-normal text-[#7A7286]">
                Production manager, Cormorant Workwear
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
