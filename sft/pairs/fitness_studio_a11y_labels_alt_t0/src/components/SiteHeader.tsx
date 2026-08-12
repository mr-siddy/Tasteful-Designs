import { useState } from 'react'
import { IconButton, type Control } from './PageKit'
import { BarbellMark, CalendarIcon, MemberIcon, PhoneIcon, PinIcon } from './Icons'

const NAV = [
  { label: 'Programmes', href: '#programmes' },
  { label: 'The rooms', href: '#rooms' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'How we train', href: '#method' },
  { label: 'Membership', href: '#membership' },
  { label: 'Questions', href: '#questions' },
]

type Utility = {
  id: string
  control: Control
  heading: string
  lines: string[]
}

const UTILITIES: Utility[] = [
  {
    id: 'timetable',
    control: { name: "This week's timetable", icon: <CalendarIcon /> },
    heading: "This week at Coalhouse",
    lines: [
      'Mon / Wed / Fri — Barbell Foundations at 6:00am, 12:15pm and 5:30pm.',
      'Tue / Thu — Coalhouse Conditioning at 6:30am and 6:00pm.',
      'Sat — Barbell Club at 9:00am, Masters Strength at 10:30am.',
      'Open Gym runs 5:30am to 9:30pm every day the desk is staffed.',
    ],
  },
  {
    id: 'desk',
    control: { name: 'Call the front desk', icon: <PhoneIcon /> },
    heading: 'The front desk',
    lines: [
      'Call (215) 555 0142 — a coach picks up, not a call centre.',
      'Staffed 5:30am to 9:30pm, seven days.',
      'Email frontdesk@coalhouse.club and you will hear back the same day.',
    ],
  },
  {
    id: 'directions',
    control: { name: 'Directions and parking', icon: <PinIcon /> },
    heading: 'Finding us',
    lines: [
      '1140 Frankford Avenue, Fishtown, Philadelphia, PA 19125.',
      'The old coal depot behind the loading yard — the ember door on Marlborough.',
      'Free lot for members after 4pm; the York–Dauphin stop is a six minute walk.',
    ],
  },
  {
    id: 'membership',
    control: { name: 'Your membership', icon: <MemberIcon /> },
    heading: 'Members',
    lines: [
      'Freeze a month, change programmes or update a card from the member portal.',
      'Bring a guest free on the first Saturday of any month.',
      'Cancel any time before the 25th — there is no notice period and no fee.',
    ],
  },
]

export default function SiteHeader() {
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  const panel = UTILITIES.find((utility) => utility.id === openPanel) ?? null

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#12141A] text-[#F7F3EC]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <BarbellMark />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight">Coalhouse</span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#E1552B]">
              Athletic Club
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden flex-1 lg:block">
          <ul className="flex items-center justify-center gap-6 text-sm font-medium text-[#F7F3EC]/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-[#E1552B]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {UTILITIES.map((utility) => (
            <IconButton
              key={utility.id}
              control={utility.control}
              testId="header-utility"
              expanded={openPanel === utility.id}
              onClick={() => setOpenPanel(openPanel === utility.id ? null : utility.id)}
            />
          ))}
          <a
            href="#book"
            className="ml-2 rounded-full bg-[#E1552B] px-5 py-2.5 text-sm font-bold text-[#12141A] transition-colors hover:bg-[#F2703F]"
          >
            Book a free intro
          </a>
        </div>
      </div>

      {panel ? (
        <div className="border-t border-white/10 bg-[#171B22]" data-testid="header-panel">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#E1552B]">{panel.heading}</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-[#F7F3EC]/80 md:grid-cols-2">
              {panel.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  )
}
