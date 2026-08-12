import { useState } from 'react'

type VolumeBand = {
  id: string
  name: string
  range: string
  note: string
}

const VOLUME_BANDS: VolumeBand[] = [
  {
    id: 'lane',
    name: 'Under 500 containers a year',
    range: 'One or two lanes',
    note: 'Usually one entry writer wearing four hats. We walk through a single lane end to end and show you what the desk looks like when the ISF is drafted the same afternoon the booking lands.',
  },
  {
    id: 'terminal',
    name: '500 to 5,000 containers a year',
    range: 'A real entry desk',
    note: 'Three to eight people, a broker you already like, and a classification history nobody has written down. This is the walkthrough most forwarders book, and it runs about forty minutes.',
  },
  {
    id: 'gateway',
    name: 'Over 5,000 containers a year',
    range: 'Multiple gateways',
    note: 'Tacoma and Savannah on different processes, two brokers, and an auditor who wants five years of records. We bring an implementation lead to this one and map the exceptions first.',
  },
]

const AGENDA = [
  'We file one of your own recent shipments in front of you, start to finish.',
  'You see the classification history and the ruling behind every proposed code.',
  'No slides, no discovery call before the demo, no contract talk unless you raise it.',
]

export function WalkthroughDialog() {
  const [open, setOpen] = useState(false)
  const [band, setBand] = useState('terminal')

  const close = () => setOpen(false)
  const chosen = VOLUME_BANDS.find((option) => option.id === band) ?? VOLUME_BANDS[0]

  return (
    <section id="walkthrough" className="bg-[#0B1F33] text-[#E7EEF4]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F2A03D]">
            Walkthroughs
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Bring one of your own containers and we will file it
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#B6C6D4]">
            Dana or Peter runs the walkthrough personally — both of them wrote entries for a living
            before they wrote software, so the questions you ask about a first sale valuation or a
            messy consolidated invoice get an actual answer. Send us a shipment you already cleared
            and we will run it through Portway live, against the real deadlines it had.
          </p>

          <ul className="mt-8 space-y-3">
            {AGENDA.map((line) => (
              <li key={line} data-testid="agenda-item" className="flex gap-3 text-sm text-[#B6C6D4]">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="#5AC8D8" strokeWidth="1.5" />
                  <path
                    d="M6 10.4l2.6 2.6L14 7.6"
                    fill="none"
                    stroke="#5AC8D8"
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
              data-testid="walkthrough-open"
              onClick={() => setOpen(true)}
              className="rounded-full bg-[#F2A03D] px-7 py-3.5 text-sm font-semibold text-[#0B1F33] shadow-lg shadow-black/25 transition-colors hover:bg-[#FFB865]"
            >
              Book a walkthrough
            </button>
            <a href="tel:2535550148" className="text-sm font-medium text-[#9BDCE7] hover:underline">
              Or call the Tacoma office — (253) 555-0148
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E7EEF4]/12 bg-[#122C45] p-8">
          <h3 className="text-lg font-semibold">What the week after looks like</h3>
          <dl className="mt-6 space-y-4 text-sm">
            {[
              { when: 'Day one', how: 'Two lanes connected, documents flowing in read-only' },
              { when: 'Day three', how: 'Classification history imported from your last 400 entries' },
              { when: 'Day eight', how: 'First live ISF filed by your own team, reviewed by ours' },
              { when: 'Day thirty', how: 'Broker handoff running, exception desk owned by you' },
            ].map((row) => (
              <div
                key={row.when}
                data-testid="rollout-window"
                className="flex justify-between gap-6 border-b border-[#E7EEF4]/10 pb-4"
              >
                <dt className="font-medium text-[#E7EEF4]">{row.when}</dt>
                <dd className="text-right text-[#93A7B8]">{row.how}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs leading-relaxed text-[#93A7B8]">
            Nothing files without a licensed broker approving it, including during onboarding. Portway
            drafts; your broker signs.
          </p>
        </div>
      </div>

      {open && (
        <div
          data-testid="walkthrough-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#04101C]/80 p-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="walkthrough-dialog-title"
            data-testid="walkthrough-dialog"
            className="relative w-full max-w-xl rounded-3xl border border-[#5AC8D8]/30 bg-[#F5F7F9] p-8 text-[#0B1F33] shadow-2xl"
          >
            <button
              type="button"
              data-testid="walkthrough-close"
              aria-label="Close the walkthrough request"
              onClick={close}
              className="absolute right-5 top-5 rounded-full border border-[#0B1F33]/15 p-2 text-[#42566B] transition-colors hover:bg-[#0B1F33]/5"
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

            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
              Forty minutes, no slides
            </p>
            <h3
              id="walkthrough-dialog-title"
              className="mt-3 text-2xl font-semibold tracking-tight"
            >
              Book a Portway walkthrough
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#42566B]">
              Tell us roughly how much you move in a year so we bring the right person, and we will
              come back with two times inside the next three business days.
            </p>

            <div className="mt-6 space-y-3">
              {VOLUME_BANDS.map((option) => {
                const active = option.id === band
                return (
                  <button
                    key={option.id}
                    type="button"
                    data-testid="volume-option"
                    aria-pressed={active}
                    onClick={() => setBand(option.id)}
                    className={[
                      'block w-full rounded-2xl border p-4 text-left transition-colors',
                      active
                        ? 'border-[#0D6E8C] bg-[#0D6E8C]/10'
                        : 'border-[#0B1F33]/15 hover:border-[#0D6E8C]/50',
                    ].join(' ')}
                  >
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-semibold">{option.name}</span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[#7C8FA2]">
                        {option.range}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#42566B]">
                      {option.note}
                    </span>
                  </button>
                )
              })}
            </div>

            <p data-testid="walkthrough-choice" className="mt-6 text-sm text-[#42566B]">
              Bringing: <span className="font-semibold text-[#0D6E8C]">{chosen.range}</span> ·{' '}
              {chosen.name}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="button"
                data-testid="walkthrough-submit"
                className="rounded-full bg-[#0B1F33] px-6 py-3 text-sm font-semibold text-[#F5F7F9] transition-colors hover:bg-[#0D6E8C]"
              >
                Send the request
              </button>
              <a
                href="tel:2535550148"
                className="text-sm font-medium text-[#0D6E8C] hover:underline"
              >
                Rather just call? (253) 555-0148
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
