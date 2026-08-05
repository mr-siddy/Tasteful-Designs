import { useEffect, useState } from 'react'

type Seating = {
  id: string
  name: string
  party: string
  note: string
}

const SEATINGS: Seating[] = [
  {
    id: 'dining-room',
    name: 'Main dining room',
    party: 'Parties of two to eight',
    note: 'Booths along the lake windows, four-tops under the mounted muskie. Ask for booth nine if you want to watch the sun go down behind Cedar Bluff.',
  },
  {
    id: 'brandy-bar',
    name: 'The brandy bar',
    party: 'First come, first served',
    note: 'Sixteen stools and four high-tops. We do not hold seats at the bar, but the whole supper menu is served there and Junior will find you a spot.',
  },
  {
    id: 'lantern-room',
    name: 'The Lantern Room',
    party: 'Parties of ten to twenty-two',
    note: 'The upstairs room under the original 1946 fixtures, one long table, its own service. Two weeks notice and we will set the menu with you.',
  },
]

const HOLD_POLICY = [
  'We hold your table for fifteen minutes past the hour you pick.',
  'A third of the room stays open for walk-ins every single night.',
  'Parties of nine or more are seated in the Lantern Room upstairs.',
]

export function ReserveDialog() {
  const [open, setOpen] = useState(false)
  const [seating, setSeating] = useState('dining-room')

  const close = () => setOpen(false)
  const chosen = SEATINGS.find((option) => option.id === seating) ?? SEATINGS[0]

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <section id="reserve" className="bg-[#0C1F17]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#E8C87E]">Reservations</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#F6F1E4]">
            Book the room you actually want
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#D9D2C0]">
            Margo takes the book by hand at the host stand, the way it has always been done, so tell
            us which room you are after and roughly when you want to sit down. Wednesday and Thursday
            are usually open the same week; Friday and Saturday fill about ten days out, and holiday
            weekends go the day they open.
          </p>

          <ul className="mt-8 space-y-3">
            {HOLD_POLICY.map((line) => (
              <li key={line} data-testid="hold-policy" className="flex gap-3 text-sm text-[#A9B49F]">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="#D2A24C" strokeWidth="1.5" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    fill="none"
                    stroke="#D2A24C"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button
              type="button"
              data-testid="reserve-open"
              onClick={() => setOpen(true)}
              className="rounded-full bg-[#D2A24C] px-7 py-3.5 text-sm font-semibold text-[#17130F] shadow-lg shadow-black/25 transition-colors hover:bg-[#E8C87E]"
            >
              Reserve a table
            </button>
            <a href="tel:5550179" className="text-sm font-medium text-[#E8C87E] hover:underline">
              Or call the host stand — (555) 0179
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[#F6F1E4]/15 bg-[#12281E] p-8">
          <h3 className="text-lg font-semibold text-[#F6F1E4]">When the book fills</h3>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              { when: 'Wednesday & Thursday', how: 'Same-week tables, almost always' },
              { when: 'Friday fish fry', how: 'Ten days out, or take the bar' },
              { when: 'Saturday prime rib', how: 'Two weeks out; end cuts by request' },
              { when: 'Sunday chicken supper', how: 'One week out, families first' },
            ].map((row) => (
              <div
                key={row.when}
                data-testid="booking-window"
                className="flex justify-between gap-6 border-b border-[#F6F1E4]/10 pb-4"
              >
                <dt className="font-medium text-[#D9D2C0]">{row.when}</dt>
                <dd className="text-right text-[#A9B49F]">{row.how}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-[#A9B49F]">
            Cancellations before three in the afternoon cost you nothing and get somebody else off
            the wait list, which is the only thing we ask.
          </p>
        </div>
      </div>

      {open && (
        <div
          data-testid="reserve-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) close()
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C1F17]/80 p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reserve-dialog-title"
            data-testid="reserve-dialog"
            className="relative w-full max-w-xl rounded-3xl border border-[#D2A24C]/40 bg-[#F6F1E4] p-8 shadow-2xl"
          >
            <button
              type="button"
              data-testid="reserve-close"
              aria-label="Close the reservation panel"
              onClick={close}
              className="absolute right-5 top-5 rounded-full border border-[#17130F]/15 p-2 text-[#5C5445] transition-colors hover:bg-[#17130F]/5"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                <path
                  d="M5 5l10 10M15 5L5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#7C2D2D]">
              Cedar Bluff Road
            </p>
            <h3
              id="reserve-dialog-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-[#17130F]"
            >
              Reserve at the Blue Iris
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5C5445]">
              Pick the room, and Margo will call you back before four o’clock to set the time. We
              seat from 4:30 to 9:00 Wednesday and Thursday, until 10:00 on Friday and Saturday.
            </p>

            <div className="mt-6 space-y-3">
              {SEATINGS.map((option) => {
                const active = option.id === seating
                return (
                  <button
                    key={option.id}
                    type="button"
                    data-testid="seat-option"
                    aria-pressed={active}
                    onClick={() => setSeating(option.id)}
                    className={[
                      'block w-full rounded-2xl border p-4 text-left transition-colors',
                      active
                        ? 'border-[#1C4535] bg-[#1C4535]/10'
                        : 'border-[#17130F]/15 hover:border-[#1C4535]/50',
                    ].join(' ')}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-semibold text-[#17130F]">{option.name}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[#7C6B4B]">
                        {option.party}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#5C5445]">
                      {option.note}
                    </span>
                  </button>
                )
              })}
            </div>

            <p data-testid="reserve-choice" className="mt-6 text-sm text-[#5C5445]">
              Requesting: <span className="font-semibold text-[#1C4535]">{chosen.name}</span> ·{' '}
              {chosen.party}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                data-testid="reserve-submit"
                className="rounded-full bg-[#1C4535] px-6 py-3 text-sm font-semibold text-[#F6F1E4] transition-colors hover:bg-[#123024]"
              >
                Send the request
              </button>
              <a href="tel:5550179" className="text-sm font-medium text-[#7C2D2D] hover:underline">
                Rather just call? (555) 0179
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
