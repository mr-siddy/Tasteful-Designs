import { useState } from 'react'

const DESTINATIONS = [
  { label: 'The board', href: '#board' },
  { label: 'The rooms', href: '#rooms' },
  { label: 'The fire', href: '#fire' },
  { label: 'Private dining', href: '#cellar' },
  { label: 'Questions', href: '#questions' },
]

type Utility = {
  id: string
  name: string
  panel: string
  icon: JSX.Element
}

const UTILITIES: Utility[] = [
  {
    id: 'hours',
    name: "Tonight's hours",
    panel:
      'Dinner tonight runs 5:00 to 10:00 pm, Wednesday through Sunday. The oyster counter opens at noon on Saturday and Sunday and takes walk-ins until the ice runs out. Last seating in the cutting shed is 9:15 pm.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'directions',
    name: 'Directions and parking',
    panel:
      'We are at 18 Quarry Landing, Rockport, Massachusetts, at the harbour end of the old granite works. Park free in the Bearskin lot after 4:00 pm; the commuter rail from Boston stops nine minutes uphill and we will hold your table for a late train.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 21s6.5-6.1 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 14.9 12 21 12 21Z" strokeLinejoin="round" />
        <circle cx="12" cy="10.3" r="2.4" />
      </svg>
    ),
  },
  {
    id: 'gift',
    name: 'Gift cards',
    panel:
      'Gift cards are sold at the host stand in any amount from $50 and never expire. Buy one for the counter and we will note a preference for the six seats closest to the fire.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3.5" y="9" width="17" height="11" rx="1.6" />
        <path d="M3.5 12.6h17M12 9v11M12 9c-2.6 0-4.6-.9-4.6-2.6S9 4.2 12 9Zm0 0c2.6 0 4.6-.9 4.6-2.6S15 4.2 12 9Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'call',
    name: 'Call the host stand',
    panel:
      'The host stand answers from 3:00 pm at (978) 555 0142. Ring us for parties over eight, for wheelchair seating in the cutting shed, or if the board has something you need to ask about before you come.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path
          d="M6.2 4h3l1.4 3.6-2 1.5a11.4 11.4 0 0 0 5.3 5.3l1.5-2L19 13.8v3a2.2 2.2 0 0 1-2.4 2.2A14.6 14.6 0 0 1 4 6.4 2.2 2.2 0 0 1 6.2 4Z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function SiteHeader() {
  const [openUtility, setOpenUtility] = useState<string | null>(null)
  const active = UTILITIES.find((utility) => utility.id === openUtility)

  return (
    <header className="sticky top-0 z-40 border-b border-[#0b2027]/10 bg-[#fbf7ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-mark">
          <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
            <rect x="1" y="1" width="38" height="38" rx="9" fill="#0b2027" />
            <path d="M20 8c3.2 4.4 7 6.6 7 11.4A7 7 0 0 1 13 19.4C13 14.6 16.8 12.4 20 8Z" fill="#d2601a" />
            <path d="M20 15.4c1.4 2 3 3 3 5.2a3 3 0 0 1-6 0c0-2.2 1.6-3.2 3-5.2Z" fill="#fbf7ef" />
            <path d="M11 30h18" stroke="#8fb8ae" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-semibold tracking-tight">Salt Quarry</span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#0b2027]/55">Rockport, Mass.</span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-4 hidden items-center gap-6 lg:flex">
          {DESTINATIONS.map((destination) => (
            <a
              key={destination.href}
              href={destination.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#0b2027]/75 transition hover:text-[#d2601a]"
            >
              {destination.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-1.5 sm:flex">
            {UTILITIES.map((utility) => (
              <button
                key={utility.id}
                type="button"
                data-testid="header-icon-button"
                aria-label={utility.name}
                aria-expanded={openUtility === utility.id}
                onClick={() => setOpenUtility((current) => (current === utility.id ? null : utility.id))}
                className={`grid h-9 w-9 place-items-center rounded-full border transition ${
                  openUtility === utility.id
                    ? 'border-[#d2601a] bg-[#d2601a] text-white'
                    : 'border-[#0b2027]/15 text-[#0b2027]/70 hover:border-[#0b2027]/40 hover:text-[#0b2027]'
                }`}
              >
                {utility.icon}
              </button>
            ))}
          </div>
          <a
            href="#reserve"
            className="rounded-full bg-[#0b2027] px-5 py-2.5 text-sm font-semibold text-[#fbf7ef] shadow-sm transition hover:bg-[#123340]"
          >
            Book a table
          </a>
        </div>
      </div>

      {active ? (
        <div className="border-t border-[#0b2027]/10 bg-[#0b2027] text-[#e8f1ee]">
          <p data-testid="header-panel" className="mx-auto max-w-6xl px-5 py-3 text-sm leading-relaxed">
            <span className="mr-2 font-semibold text-[#f0a35e]">{active.name}.</span>
            {active.panel}
          </p>
        </div>
      ) : null}
    </header>
  )
}
