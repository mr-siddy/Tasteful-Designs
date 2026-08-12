type Capability = {
  title: string
  body: string
  bullets: string[]
  icon: 'register' | 'calendar' | 'pipeline' | 'report' | 'inspect' | 'ledger'
}

const CAPABILITIES: Capability[] = [
  {
    title: 'The unit register',
    icon: 'register',
    body:
      'One row per home, from the ground lease and resale formula down to which radiator was replaced in 2023. Scattered across buildings, owners and funding sources — still one register.',
    bullets: ['Ground lease and deed restriction terms', 'Affordability period end dates', 'Full occupancy history per home'],
  },
  {
    title: 'Recertification calendar',
    icon: 'calendar',
    body:
      'Rooftree knows when each household is due to recertify income and starts the paperwork forty-five days out. Your bookkeeper stops discovering an expired file during an audit.',
    bullets: ['Automatic 45 / 15 / 3 day reminders', 'Household document checklist', 'One-click extension with a reason code'],
  },
  {
    title: 'Applicant pipeline',
    icon: 'pipeline',
    body:
      'The waitlist stops being a spreadsheet three people edit at once. Applications come in through your own form, get scored against your preference policy and move through stages you defined.',
    bullets: ['Weighted local-preference scoring', 'Duplicate household detection', 'Plain-language status emails'],
  },
  {
    title: 'Funder reporting',
    icon: 'report',
    body:
      'HOME, CDBG, LIHTC and your state housing agency all want the same facts in different shapes. Rooftree keeps the facts and produces the shapes, including the ones that must be a fixed-width text file.',
    bullets: ['Pre-built HOME and CDBG exports', 'Board-ready quarterly PDF', 'Every export archived and re-runnable'],
  },
  {
    title: 'Inspections and work orders',
    icon: 'inspect',
    body:
      'Schedule the annual walk-through, capture findings on a phone in a basement with no signal, and turn a failed item straight into a work order with a contractor and a cost.',
    bullets: ['Offline-capable inspection forms', 'Photo evidence attached to the unit', 'Repair spend rolled up per building'],
  },
  {
    title: 'Stewardship ledger',
    icon: 'ledger',
    body:
      'Track resale formula calculations, homeowner equity share and the subsidy retained in each home over decades, so the next steward inherits arithmetic instead of folklore.',
    bullets: ['Resale formula versioning', 'Retained subsidy per home', 'Owner statement on request'],
  },
]

function CapabilityIcon({ kind }: { kind: Capability['icon'] }) {
  const shared = { fill: 'none', stroke: '#3D4EE0', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 32 32" className="h-9 w-9" aria-hidden="true">
      <rect x="0" y="0" width="32" height="32" rx="10" fill="#3D4EE0" opacity="0.09" />
      {kind === 'register' && (
        <g {...shared}>
          <rect x="8" y="8" width="16" height="16" rx="3" />
          <path d="M8 13h16M13 13v11" />
        </g>
      )}
      {kind === 'calendar' && (
        <g {...shared}>
          <rect x="7" y="9" width="18" height="15" rx="3" />
          <path d="M7 14h18M12 7v4M20 7v4M14 19l1.8 1.8L20 16.5" />
        </g>
      )}
      {kind === 'pipeline' && (
        <g {...shared}>
          <path d="M8 10h16M10 16h12M13 22h6" />
        </g>
      )}
      {kind === 'report' && (
        <g {...shared}>
          <path d="M11 7h7l5 5v13a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
          <path d="M18 7v5h5M13 18h6M13 22h4" />
        </g>
      )}
      {kind === 'inspect' && (
        <g {...shared}>
          <circle cx="15" cy="15" r="6" />
          <path d="m20 20 4 4" />
        </g>
      )}
      {kind === 'ledger' && (
        <g {...shared}>
          <path d="M8 24V13M14 24V9M20 24v-7M26 24V11" />
        </g>
      )}
    </svg>
  )
}

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-[#DDE3F0] bg-[#F4F6FB]">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0E8F6F]">What Rooftree does</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Six jobs your team already does by hand, done once and kept correct
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4B5670]">
            Nothing here is a module you have to buy separately, and nothing here assumes you employ a systems
            administrator. Every organisation on Rooftree gets all of it on day one, including the ones with a
            three-person staff and a very patient volunteer treasurer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.title}
              data-testid="capability-card"
              className="rounded-2xl border border-[#DDE3F0] bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <CapabilityIcon kind={capability.icon} />
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5670]">{capability.body}</p>
              <ul className="mt-5 space-y-2 border-t border-[#EDF0F8] pt-4">
                {capability.bullets.map((bullet) => (
                  <li key={bullet} data-testid="capability-bullet" className="flex items-start gap-2 text-sm text-[#4B5670]">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[#0E8F6F]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
