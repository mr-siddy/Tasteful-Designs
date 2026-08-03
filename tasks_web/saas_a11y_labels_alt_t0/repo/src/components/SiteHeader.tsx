import { useState } from 'react'

const NAV = [
  { label: 'Product', href: '#capabilities' },
  { label: 'Screens', href: '#gallery' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#customers' },
]

type Utility = {
  id: string
  icon: JSX.Element
  heading: string
  body: string
}

const SearchIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true" focusable="false">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const ChangelogIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true" focusable="false">
    <path d="M5 5h14M5 10h9M5 15h11M5 20h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="18.5" cy="18.5" r="2.5" fill="currentColor" />
  </svg>
)

const StatusIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M2.5 12h4l2.5-6 4 12 2.5-6h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AccountIcon = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true" focusable="false">
    <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4.5 20c1.3-4 4.2-6 7.5-6s6.2 2 7.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const UTILITIES: Utility[] = [
  {
    id: 'search',
    icon: SearchIcon,
    heading: 'Search the docs',
    body:
      'Fourteen hundred pages of runbooks, API reference and change-policy recipes, indexed together. Press the forward slash key anywhere on this page to jump straight into the box.',
  },
  {
    id: 'changelog',
    icon: ChangelogIcon,
    heading: 'Halyard 4.2 — shipped 14 March',
    body:
      'Evidence bundles now export straight into Vanta and Drata, approval SLAs render on the deploy timeline, and freeze windows can be scoped to a single region instead of the whole estate.',
  },
  {
    id: 'status',
    icon: StatusIcon,
    heading: 'Control plane status',
    body:
      'All systems operational. The EU control plane finished its quarterly failover drill on 12 March with forty-one seconds of queued deploys and no dropped approvals.',
  },
  {
    id: 'account',
    icon: AccountIcon,
    heading: 'Account and workspaces',
    body:
      'Switch between the workspaces you belong to, rotate an API token, review who holds the break-glass role, or open the billing portal for this organisation.',
  },
]

export default function SiteHeader() {
  const [openUtility, setOpenUtility] = useState<string | null>(null)
  const panel = UTILITIES.find((u) => u.id === openUtility)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1524]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5 text-white" data-testid="brand-mark">
          <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true" focusable="false">
            <rect x="1" y="1" width="30" height="30" rx="9" fill="#132238" stroke="#F2A93B" strokeWidth="1.5" />
            <path d="M16 6v20" stroke="#4ADEC0" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 10l7 4-7 4z" fill="#F2A93B" />
            <path d="M16 16l-7 4 7 4z" fill="#4ADEC0" opacity="0.8" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">Halyard</span>
        </a>

        <nav aria-label="Main" className="hidden flex-1 items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
          {UTILITIES.map((utility) => (
            <button
              key={utility.id}
              type="button"
              data-testid="header-icon-button"
              aria-expanded={openUtility === utility.id}
              onClick={() => setOpenUtility((current) => (current === utility.id ? null : utility.id))}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition ${
                openUtility === utility.id
                  ? 'border-[#F2A93B] bg-[#F2A93B]/15 text-[#F2A93B]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white'
              }`}
            >
              {utility.icon}
            </button>
          ))}
          <a
            href="#trial"
            className="ml-2 rounded-lg bg-[#F2A93B] px-4 py-2 text-sm font-semibold text-[#0B1524] transition hover:bg-[#ffc063]"
          >
            Start a 21-day trial
          </a>
        </div>
      </div>

      {panel ? (
        <div className="border-t border-white/10 bg-[#132238]">
          <div className="mx-auto max-w-6xl px-6 py-5" data-testid="header-panel">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4ADEC0]">{panel.heading}</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{panel.body}</p>
          </div>
        </div>
      ) : null}
    </header>
  )
}
