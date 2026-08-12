const ROWS = [
  {
    container: 'OOLU 219 550 7',
    issue: 'Packing list missing net weights',
    owner: 'Priya Raman',
    left: '9h',
    tone: 'urgent' as const,
  },
  {
    container: 'TCNU 883 041 9',
    issue: 'Invoice quantity 40 pieces over booking',
    owner: 'Marcus Whitfield',
    left: '1d 4h',
    tone: 'watch' as const,
  },
  {
    container: 'HLXU 552 907 3',
    issue: 'Continuous bond within 8% of saturation',
    owner: 'Dana Ruiz',
    left: '2d 11h',
    tone: 'watch' as const,
  },
  {
    container: 'MSCU 118 224 0',
    issue: 'Manufacturer ID unverified for new shipper',
    owner: 'Priya Raman',
    left: '3d 2h',
    tone: 'calm' as const,
  },
]

const TONES = {
  urgent: { dot: '#E4572E', label: 'Escalated' },
  watch: { dot: '#F2A03D', label: 'Watching' },
  calm: { dot: '#7FD4A2', label: 'Queued' },
}

export function ExceptionDesk() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0D6E8C]">
              The exception desk
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              The only screen your team should have to check
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#42566B]">
              Ninety-four percent of shipments never need a person. The whole job is finding the six
              percent that do, before the deadline finds them first. Portway sorts that six percent by
              time remaining, names the missing document exactly, and assigns it to whoever owns the
              lane — so the morning stand-up is four rows long instead of a scroll through everything
              on the water.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#42566B]">
              Rows escalate on their own. When a clock crosses its threshold the owner gets a message,
              their manager sees it on the desk, and the shipment moves to the top without anyone
              being asked to refresh a report.
            </p>
          </div>

          <div className="rounded-3xl border border-[#0B1F33]/10 bg-[#F5F7F9] p-6 shadow-sm">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm font-semibold">Needs a person · 4 of 68 on the water</h3>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7C8FA2]">
                Tacoma desk
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              {ROWS.map((row) => (
                <li
                  key={row.container}
                  data-testid="exception-row"
                  className="rounded-2xl border border-[#0B1F33]/10 bg-white p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[12px] tracking-tight text-[#0B1F33]">
                        {row.container}
                      </p>
                      <p className="mt-1.5 text-sm font-medium leading-snug">{row.issue}</p>
                      <p className="mt-1 text-xs text-[#7C8FA2]">Owner · {row.owner}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="block text-sm font-semibold text-[#0B1F33]">{row.left}</span>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#42566B]">
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full"
                          style={{ background: TONES[row.tone].dot }}
                        />
                        {TONES[row.tone].label}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 px-1 text-xs leading-relaxed text-[#7C8FA2]">
              Everything not on this list is drafted, cited and waiting on a broker signature.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
