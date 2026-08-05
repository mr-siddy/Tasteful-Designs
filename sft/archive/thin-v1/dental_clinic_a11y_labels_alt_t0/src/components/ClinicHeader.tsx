import { useState } from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
  className: 'h-5 w-5',
} as const

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1Z" />
  </svg>
)

const MapPinIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
)

const CloseIcon = () => (
  <svg {...iconProps} className="h-4 w-4">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

type Contact = {
  id: string
  label: string
  heading: string
  body: string
  icon: JSX.Element
}

const CONTACTS: Contact[] = [
  {
    id: 'call',
    label: 'Call the front desk',
    heading: 'Phone the front desk',
    body: '01865 555 0142 — someone picks up between 8am and 6pm on weekdays.',
    icon: <PhoneIcon />,
  },
  {
    id: 'directions',
    label: 'Get directions to the practice',
    heading: 'Find the practice',
    body: '14 Kingsmead Row, Marlow SL7 2BQ. Four minutes from the station, parking in the courtyard behind.',
    icon: <MapPinIcon />,
  },
  {
    id: 'hours',
    label: 'See our opening hours',
    heading: 'Opening hours',
    body: 'Weekdays 8am to 6pm, late until 8pm on Thursday, Saturday mornings 9am to 1pm.',
    icon: <ClockIcon />,
  },
]

export function ClinicHeader() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [noticeShown, setNoticeShown] = useState(true)
  const open = CONTACTS.find((c) => c.id === openId)

  return (
    <>
      {noticeShown && (
        <div data-testid="emergency-notice" className="bg-teal-900 text-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-2 text-sm">
            <p>Toothache today? We keep three same-day emergency slots free every morning.</p>
            <button
              type="button"
              data-testid="notice-dismiss"
              aria-label="Dismiss the same-day emergency notice"
              onClick={() => setNoticeShown(false)}
              className="shrink-0 rounded-full p-1 text-teal-100 hover:bg-teal-800 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-10 border-b border-teal-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <span className="text-lg font-semibold tracking-tight text-teal-900">
            Alder &amp; Vine Dental
          </span>
          <div className="flex items-center gap-1">
            {CONTACTS.map((c) => (
              <button
                key={c.id}
                type="button"
                data-testid="header-icon-button"
                aria-label={c.label}
                aria-expanded={openId === c.id}
                onClick={() => setOpenId(openId === c.id ? null : c.id)}
                className={
                  openId === c.id
                    ? 'rounded-full bg-teal-900 p-2 text-white'
                    : 'rounded-full p-2 text-teal-800 hover:bg-teal-50'
                }
              >
                {c.icon}
              </button>
            ))}
          </div>
        </div>

        {open && (
          <div data-testid="header-detail" className="border-t border-teal-100 bg-teal-50">
            <div className="mx-auto max-w-5xl px-4 py-3 text-sm text-teal-900">
              <p className="font-medium">{open.heading}</p>
              <p className="mt-1 text-teal-800">{open.body}</p>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
