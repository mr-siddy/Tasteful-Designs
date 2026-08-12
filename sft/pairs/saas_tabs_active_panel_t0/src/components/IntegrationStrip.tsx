const CONNECTORS = [
  { name: 'Wonderware day-files', kind: 'SCADA historian', glyph: 'wave' },
  { name: 'Ignition tag export', kind: 'SCADA historian', glyph: 'grid' },
  { name: 'ClearSCADA CSV', kind: 'SCADA historian', glyph: 'wave' },
  { name: 'Hach WIMS', kind: 'Operations data', glyph: 'drop' },
  { name: 'LabWorks EDD', kind: 'Laboratory', glyph: 'flask' },
  { name: 'Element LIMS', kind: 'Laboratory', glyph: 'flask' },
  { name: 'Ashfield Analytical portal', kind: 'Laboratory', glyph: 'drop' },
  { name: 'State e-submittal', kind: 'Primacy agency', glyph: 'grid' },
]

function Glyph({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9 text-[#17A398]" aria-hidden="true">
      <rect width="32" height="32" rx="10" fill="currentColor" opacity="0.12" />
      {kind === 'wave' && (
        <path
          d="M7 19c3-4 6-4 9 0s6 4 9 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      )}
      {kind === 'grid' && (
        <g fill="currentColor">
          <rect x="8" y="8" width="6.5" height="6.5" rx="2" />
          <rect x="17.5" y="8" width="6.5" height="6.5" rx="2" opacity="0.55" />
          <rect x="8" y="17.5" width="6.5" height="6.5" rx="2" opacity="0.55" />
          <rect x="17.5" y="17.5" width="6.5" height="6.5" rx="2" />
        </g>
      )}
      {kind === 'drop' && (
        <path
          d="M16 7c4 5 6.5 8 6.5 11a6.5 6.5 0 1 1-13 0c0-3 2.5-6 6.5-11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      )}
      {kind === 'flask' && (
        <path
          d="M13 7h6M14 7v7l-4.6 8.2A2 2 0 0 0 11.2 25h9.6a2 2 0 0 0 1.8-2.8L18 14V7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export function IntegrationStrip() {
  return (
    <section id="integrations" className="bg-white" aria-labelledby="integrations-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D97742]">
              Connections
            </p>
            <h2 id="integrations-heading" className="mt-4 text-4xl font-semibold tracking-tight">
              It reads what you already have
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-[#08312F]/70">
              No rip-and-replace. Weirline sits downstream of the historian you bought in 2009 and
              the lab you have used for twenty years, and it will take a scanned bench sheet if that
              is genuinely all there is.
            </p>
          </div>
          <a
            href="#book"
            data-testid="integrations-cta"
            className="rounded-full border border-[#08312F]/20 px-6 py-3 text-[15px] font-medium transition hover:border-[#17A398] hover:text-[#17A398]"
          >
            Ask about your setup
          </a>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONNECTORS.map((c) => (
            <li
              key={c.name}
              data-testid="connector"
              className="flex items-center gap-4 rounded-2xl bg-[#FBF8F3] px-5 py-4 ring-1 ring-[#08312F]/5"
            >
              <Glyph kind={c.glyph} />
              <span>
                <span className="block text-[15px] font-medium leading-tight">{c.name}</span>
                <span className="mt-1 block text-[13px] text-[#08312F]/55">{c.kind}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
