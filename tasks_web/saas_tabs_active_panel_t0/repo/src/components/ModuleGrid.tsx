type Module = {
  name: string
  spec: string
  blurb: string
  icon: 'calendar' | 'flask' | 'report' | 'binder' | 'gauge' | 'bell'
}

const MODULES: Module[] = [
  {
    name: 'Sampling calendar',
    spec: 'Coliform · Lead & copper · DBP · Nitrate',
    blurb:
      'Every site, every window, every rotation, generated from your monitoring schedule and your population served. Print the month for the truck or work it from a phone at the hydrant.',
    icon: 'calendar',
  },
  {
    name: 'Lab intake',
    spec: 'EDD, PDF or hand entry',
    blurb:
      'Results land against the sample they belong to instead of a shared inbox. Weirline reads the deliverable, matches the site code and flags anything above an action level before you see it.',
    icon: 'flask',
  },
  {
    name: 'Report engine',
    spec: 'MOR, CCR, quarterly DBP',
    blurb:
      'The monthly operating report is drafted from readings you already took, in the layout your primacy agency publishes, with the arithmetic checked twice and the outliers called out.',
    icon: 'report',
  },
  {
    name: 'Audit binder',
    spec: 'Ten years, searchable',
    blurb:
      'Every submittal, correspondence and signature stored against the date it happened, so a sanitary survey is a search box instead of a week in the storage room behind the pump house.',
    icon: 'binder',
  },
  {
    name: 'SCADA import',
    spec: 'Day-files from twelve vendors',
    blurb:
      'Nightly pulls of flow, turbidity, pressure and residual, reconciled against your manual grab readings so the number in the report and the number on the chart are the same number.',
    icon: 'gauge',
  },
  {
    name: 'Deadline watch',
    spec: 'Email, SMS, or the truck radio list',
    blurb:
      'Nudges at fourteen days, five days and the morning of, sent to whoever is actually covering — because the operator on call in February is rarely the one who set the schedule.',
    icon: 'bell',
  },
]

function ModuleIcon({ kind }: { kind: Module['icon'] }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#17A398]" aria-hidden="true">
      {kind === 'calendar' && (
        <g {...common}>
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M3 10h18M8 3v4M16 3v4M8 14h3M8 17.5h6" />
        </g>
      )}
      {kind === 'flask' && (
        <g {...common}>
          <path d="M9 3h6M10 3v6.5L5.4 17.8A2 2 0 0 0 7.2 21h9.6a2 2 0 0 0 1.8-3.2L14 9.5V3" />
          <path d="M7.5 15h9" />
        </g>
      )}
      {kind === 'report' && (
        <g {...common}>
          <path d="M6 3h8l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v5h5M9 13h6M9 17h4" />
        </g>
      )}
      {kind === 'binder' && (
        <g {...common}>
          <path d="M5 4h13a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          <path d="M3 9h4M3 13h4M3 17h4M12 4v17" />
        </g>
      )}
      {kind === 'gauge' && (
        <g {...common}>
          <path d="M4 17a8 8 0 1 1 16 0" />
          <path d="M12 17l4.5-5" />
          <circle cx="12" cy="17" r="1.6" />
          <path d="M4 21h16" />
        </g>
      )}
      {kind === 'bell' && (
        <g {...common}>
          <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </g>
      )}
    </svg>
  )
}

export function ModuleGrid() {
  return (
    <section id="modules" className="bg-[#FBF8F3]" aria-labelledby="modules-heading">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D97742]">
            The platform
          </p>
          <h2 id="modules-heading" className="mt-4 text-4xl font-semibold tracking-tight lg:text-[42px]">
            Six things that used to live in a spreadsheet
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-[#08312F]/70">
            Weirline is not a document library and it is not a dashboard. It is the six pieces of a
            small system's compliance year, wired together so a number entered once is never typed
            again — and so the operator can leave for a week without the month falling over.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <li
              key={m.name}
              data-testid="module-card"
              className="rounded-2xl bg-white p-7 ring-1 ring-[#08312F]/10 transition hover:ring-[#17A398]/50"
            >
              <ModuleIcon kind={m.icon} />
              <h3 className="mt-5 text-[19px] font-semibold tracking-tight">{m.name}</h3>
              <p className="mt-1.5 text-[13px] font-medium uppercase tracking-wide text-[#D97742]">
                {m.spec}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#08312F]/70">{m.blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
