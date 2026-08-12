const BOARD_PREVIEW = [
  { title: 'The Kelp Line', stage: 'Second pass', tone: '#1F5E57', width: 62 },
  { title: 'Nine Winters in Ålesund', stage: 'Cover proof', tone: '#C0462A', width: 78 },
  { title: 'A Field Guide to Ledgers', stage: 'At printer', tone: '#141B2E', width: 91 },
  { title: 'Saltmarsh Almanac', stage: 'First pass', tone: '#8A6B3A', width: 34 },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#141B2E] text-[#F3EDE1]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(192,70,42,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(31,94,87,0.4),transparent_50%)]"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-[#FBF8F2]"
      >
        <path d="M0 200V96c180 44 320-18 520-6s340 74 680 22v88z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-40 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-48 lg:pt-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#3A4364] bg-[#1B2440] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E0C4B8]">
            <svg viewBox="0 0 12 12" aria-hidden="true" className="h-2.5 w-2.5">
              <circle cx="6" cy="6" r="6" fill="#C0462A" />
            </svg>
            Built for independent presses
          </p>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.04] tracking-tight text-[#FBF8F2] sm:text-6xl lg:text-[4.1rem]">
            Colophon keeps the whole season on one board
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#C6CBDC]">
            Every title you publish carries about forty moving dates — proof rounds, cover approvals,
            printer purchase orders, metadata deadlines, review-copy mailings — and most presses track
            them across a spreadsheet, a shared inbox and one production editor's memory. Colophon puts
            all of it on a single season board, so a slipped page proof reschedules everything
            downstream of it before anyone has to notice.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="rounded-full bg-[#C0462A] px-7 py-3.5 text-sm font-semibold text-[#FBF8F2] shadow-lg shadow-[#C0462A]/25 transition-colors hover:bg-[#A93B21]"
            >
              Book a walkthrough
            </a>
            <a
              href="#board"
              className="rounded-full border border-[#4A5478] px-7 py-3.5 text-sm font-semibold text-[#F3EDE1] transition-colors hover:border-[#8892B4]"
            >
              See a real season board
            </a>
          </div>

          <p className="mt-6 text-sm text-[#8892B4]">
            Fourteen-day trial on your own catalogue. No card, and we do the import for you.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-[#2F3A5C] bg-[#1B2440] p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#8892B4]">Spring list</p>
                <p className="mt-1 text-lg font-semibold text-[#FBF8F2]">Harrow &amp; Wick — 18 titles</p>
              </div>
              <span className="rounded-full bg-[#1F5E57] px-3 py-1 text-[11px] font-semibold text-[#D7EAE6]">
                On schedule
              </span>
            </div>

            <ul className="mt-6 space-y-4">
              {BOARD_PREVIEW.map((row) => (
                <li key={row.title} className="rounded-2xl bg-[#141B2E] p-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="truncate text-sm font-medium text-[#F3EDE1]">{row.title}</span>
                    <span className="flex-none text-[11px] uppercase tracking-wider text-[#8892B4]">
                      {row.stage}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#2A3350]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${row.width}%`, backgroundColor: row.tone }}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <svg viewBox="0 0 320 70" role="img" aria-label="Six weeks of proof turnaround, trending down" className="mt-6 h-auto w-full">
              <path
                d="M4 56 54 44 104 48 154 30 204 34 254 18 304 12"
                fill="none"
                stroke="#C0462A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 56 54 44 104 48 154 30 204 34 254 18 304 12V66H4z"
                fill="#C0462A"
                opacity="0.14"
              />
              {[4, 54, 104, 154, 204, 254, 304].map((x) => (
                <circle key={x} cx={x} cy={66} r="1.6" fill="#4A5478" />
              ))}
            </svg>
            <p className="mt-2 text-xs text-[#8892B4]">
              Average proof turnaround, last six weeks — 9.4 days down to 4.1
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
