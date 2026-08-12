const DESTINATIONS = [
  { name: 'Wholesaler catalogue', schedule: 'Nightly, 02:10 ET', format: 'ONIX 3.0 full' },
  { name: 'Distributor warehouse', schedule: 'Nightly, 02:40 ET', format: 'ONIX 3.0 delta' },
  { name: 'Review-copy platform', schedule: 'Weekly, Monday', format: 'ONIX 3.0 plus jacket' },
  { name: 'Library supplier', schedule: 'Weekly, Thursday', format: 'MARC 21 export' },
  { name: 'Your own website', schedule: 'On publish', format: 'JSON over webhook' },
  { name: 'Sales rep kit', schedule: 'On season lock', format: 'PDF and spreadsheet' },
]

export function MetadataFeeds() {
  return (
    <section id="metadata" className="bg-[#FBF8F2]">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl border border-[#E3DCCE] bg-[#F3EDE1] p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#141B2E]">
                Last night's drop
              </h3>
              <span className="rounded-full bg-[#1F5E57] px-3 py-1 text-[11px] font-semibold text-[#E7F2F0]">
                All accepted
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {DESTINATIONS.map((dest) => (
                <li
                  key={dest.name}
                  data-testid="feed-row"
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl bg-[#FBF8F2] px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-[#141B2E]">
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 text-[#1F5E57]">
                      <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
                      <path
                        d="m6 10.4 2.6 2.6L14 7.6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {dest.name}
                  </span>
                  <span className="text-xs text-[#5C6377]">{dest.schedule}</span>
                  <span className="text-xs font-medium text-[#C0462A]">{dest.format}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-relaxed text-[#5C6377]">
              Every drop keeps a receipt for seven years: what was sent, when, and what came back. When a
              retailer swears they never got the price change, you can show them the file.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C0462A]">
            Metadata that leaves on time
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#141B2E] sm:text-5xl">
            Type the subtitle once, in one place
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C6377]">
            A small press typically retypes each title's metadata four or five times: once for the
            wholesaler's portal, once for the distributor's spreadsheet, once for the review-copy site,
            once for the website, and once more for whoever asks last. Every retyping is a chance for the
            subtitle, the price or the page count to drift, and a drifted record is the reason a book
            shows up as a hardback at the paperback price six weeks before publication.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5C6377]">
            Colophon holds one record per ISBN and renders whatever shape each destination wants. Change
            the price on a Tuesday afternoon and the corrected record is out the door that night, with a
            receipt against the title showing exactly which feeds carried it.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              'Validation against the ONIX 3.0 schema before anything is sent, not after it is rejected',
              'Territory rights per edition, so the North American paperback is not offered in Sydney',
              'Jacket copy, author bio and BISAC codes versioned, with who changed what and when',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#3B4256]">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-[#C0462A]">
                  <path
                    d="m4 10.5 4 4 8-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
