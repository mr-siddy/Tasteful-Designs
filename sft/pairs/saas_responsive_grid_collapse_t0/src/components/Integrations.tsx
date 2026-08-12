const CONNECTIONS = [
  {
    name: 'Gerber AccuMark',
    kind: 'Pattern and marker',
    note: 'Markers import with their efficiency and lay length attached.',
  },
  {
    name: 'Optitex',
    kind: 'Pattern and marker',
    note: 'Same import path, including nested multi-size markers.',
  },
  {
    name: 'Shopify',
    kind: 'Sales channel',
    note: 'Finished units post back to inventory as bundles are boxed.',
  },
  {
    name: 'Faire',
    kind: 'Wholesale',
    note: 'Wholesale orders arrive as draft runs with size ratios filled in.',
  },
  {
    name: 'QuickBooks Online',
    kind: 'Accounting',
    note: 'Cut tickets carry fabric and labour cost through to the invoice.',
  },
  {
    name: 'ShipStation',
    kind: 'Fulfilment',
    note: 'Boxed cartons hand off with the run and style already on the label.',
  },
]

export default function Integrations() {
  return (
    <section
      id="integrations"
      aria-labelledby="integrations-heading"
      className="border-b border-[#E0D6C6] bg-[#F6F2EC]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C1552F]">
            Connected
          </p>
          <h2
            id="integrations-heading"
            className="mt-4 text-3xl font-black tracking-tight sm:text-4xl"
          >
            It talks to the six systems your floor already pays for
          </h2>
          <p className="mt-5 leading-relaxed text-[#4A4455]">
            Nobody is ripping out their pattern software to try a production
            board. Grainline reads what those tools already produce and writes
            back the one thing they never had: what actually got cut and sewn.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONNECTIONS.map((c) => (
            <li
              key={c.name}
              className="rounded-2xl border border-[#DCCFB8] bg-[#FFFDF8] p-6"
            >
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="#E6DCCD" />
                  <path
                    d="M8 12h8M12 8v8"
                    stroke="#2C5C4F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <h3 className="text-base font-bold tracking-tight">{c.name}</h3>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#7A7286]">
                {c.kind}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A4455]">
                {c.note}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-[#7A7286]">
          Everything else moves by CSV or the API, and both directions are
          included on every plan.
        </p>
      </div>
    </section>
  )
}
