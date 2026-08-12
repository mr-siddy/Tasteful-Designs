const STEPS = [
  {
    round: 'First pass',
    owner: 'Copyeditor',
    days: '10 working days',
    note: 'Queries land as comments on the title, not as a separate document nobody can find in August.',
  },
  {
    round: 'Second pass',
    owner: 'Author',
    days: '7 working days',
    note: 'The author gets a link, not a login. Their marks come back onto the same file with a timestamp.',
  },
  {
    round: 'Text proof',
    owner: 'Production editor',
    days: '4 working days',
    note: 'Colophon diffs the typeset pages against the approved second pass and flags reflowed lines.',
  },
  {
    round: 'Cover proof',
    owner: 'Designer and publisher',
    days: '3 working days',
    note: 'Spine width recalculates from the printer bulk, so the cover stops being approved at the wrong size.',
  },
  {
    round: 'Press-ready',
    owner: 'Printer',
    days: '2 working days',
    note: 'Preflight receipt from the printer closes the round and releases the on-sale date to marketing.',
  },
]

export function ProofRounds() {
  return (
    <section id="proofs" className="bg-[#F3EDE1]">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C0462A]">
            Proof rounds
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#141B2E] sm:text-5xl">
            Five rounds, each with an owner and a clock
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C6377]">
            Most schedules slip in the gap between rounds — the file sat in someone's downloads for a
            fortnight and nobody could say whose turn it was. Colophon names the owner of every round and
            counts working days against them, so the question "where is <em>Saltmarsh</em>?" has a one-line
            answer at any hour of any day.
          </p>

          <ol className="mt-10 space-y-4">
            {STEPS.map((step, index) => (
              <li
                key={step.round}
                data-testid="proof-step"
                className="flex gap-5 rounded-2xl border border-[#E3DCCE] bg-[#FBF8F2] p-5"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#141B2E] text-sm font-semibold text-[#FBF8F2]">
                  {index + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-base font-semibold tracking-tight text-[#141B2E]">
                      {step.round}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#C0462A]">
                      {step.owner} · {step.days}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C6377]">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-[#E3DCCE] bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold tracking-tight text-[#141B2E]">
            What the production editor sees on Monday
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5C6377]">
            One queue, sorted by how close each round is to eating into the printer slot.
          </p>

          <svg
            viewBox="0 0 400 260"
            role="img"
            aria-label="Illustration of a proof queue with five titles and their remaining days"
            className="mt-6 h-auto w-full"
          >
            <rect width="400" height="260" rx="18" fill="#F3EDE1" />
            <rect x="20" y="22" width="360" height="34" rx="10" fill="#FBF8F2" />
            <rect x="34" y="34" width="120" height="10" rx="5" fill="#141B2E" />
            <circle cx="360" cy="39" r="9" fill="#C0462A" />

            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(20 ${72 + i * 36})`}>
                <rect width="360" height="28" rx="8" fill="#FBF8F2" />
                <circle cx="18" cy="14" r="5" fill={['#1F5E57', '#C0462A', '#8A6B3A', '#1F5E57', '#5C6377'][i]} />
                <rect x="34" y="9" width={[150, 118, 176, 132, 96][i]} height="9" rx="4.5" fill="#C6CBDC" />
                <rect
                  x={250}
                  y="9"
                  width={[96, 64, 40, 84, 24][i]}
                  height="9"
                  rx="4.5"
                  fill={['#1F5E57', '#C0462A', '#8A6B3A', '#1F5E57', '#5C6377'][i]}
                  opacity="0.65"
                />
              </g>
            ))}

            <rect x="20" y="256" width="360" height="0" fill="none" />
          </svg>

          <dl className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <dt className="font-serif text-3xl font-semibold text-[#141B2E]">4.1</dt>
              <dd className="mt-1 text-sm text-[#5C6377]">median days per round after one season</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl font-semibold text-[#141B2E]">2 in 3</dt>
              <dd className="mt-1 text-sm text-[#5C6377]">presses stop keeping a parallel spreadsheet</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
