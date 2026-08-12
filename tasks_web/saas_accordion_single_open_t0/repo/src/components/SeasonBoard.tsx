type Row = {
  title: string
  author: string
  isbn: string
  stage: string
  printer: string
  onSale: string
  tone: string
}

const ROWS: Row[] = [
  {
    title: 'The Kelp Line',
    author: 'Nadia Aslan',
    isbn: '978-1-960342-11-4',
    stage: 'Second pass',
    printer: 'Bellweather, Dexter MI',
    onSale: '4 Mar',
    tone: '#1F5E57',
  },
  {
    title: 'Nine Winters in Ålesund',
    author: 'Tomas Riis',
    isbn: '978-1-960342-12-1',
    stage: 'Cover proof',
    printer: 'Bellweather, Dexter MI',
    onSale: '4 Mar',
    tone: '#C0462A',
  },
  {
    title: 'A Field Guide to Ledgers',
    author: 'Priya Venkataraman',
    isbn: '978-1-960342-13-8',
    stage: 'At printer',
    printer: 'Coastal Web, New Bedford',
    onSale: '18 Mar',
    tone: '#141B2E',
  },
  {
    title: 'Saltmarsh Almanac',
    author: 'Ruth Okonkwo',
    isbn: '978-1-960342-14-5',
    stage: 'First pass',
    printer: 'Kestrel Litho, Leeds',
    onSale: '1 Apr',
    tone: '#8A6B3A',
  },
  {
    title: 'The Quiet Machinist',
    author: 'Owen Brady',
    isbn: '978-1-960342-15-2',
    stage: 'Copyedit',
    printer: 'Unassigned',
    onSale: '15 Apr',
    tone: '#5C6377',
  },
  {
    title: 'Letters from the Fen',
    author: 'Margit Halvorsen',
    isbn: '978-1-960342-16-9',
    stage: 'Press-ready',
    printer: 'Coastal Web, New Bedford',
    onSale: '15 Apr',
    tone: '#1F5E57',
  },
  {
    title: 'Every Bridge in Cheshire',
    author: 'Idris Farrow',
    isbn: '978-1-960342-17-6',
    stage: 'Text proof',
    printer: 'Kestrel Litho, Leeds',
    onSale: '6 May',
    tone: '#8A6B3A',
  },
  {
    title: 'Nightwork',
    author: 'Clara Bettencourt',
    isbn: '978-1-960342-18-3',
    stage: 'Acquired',
    printer: 'Unassigned',
    onSale: '20 May',
    tone: '#5C6377',
  },
]

export function SeasonBoard() {
  return (
    <section id="board" className="bg-[#141B2E] text-[#F3EDE1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E0C4B8]">
              The season board
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#FBF8F2] sm:text-5xl">
              The whole list, on one screen, honest about where it is
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[#C6CBDC]">
            This is a real spring list on Colophon, with the press's permission and the advances
            redacted. Eight titles, three printers, two on-sale dates that share a marketing push. The
            stage column is not typed by hand — it moves when a proof is approved, when a purchase
            order is acknowledged, when files go to the printer.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#2F3A5C] bg-[#1B2440]">
          <div className="hidden grid-cols-[2.1fr_1.3fr_1.1fr_1.4fr_0.7fr] gap-4 border-b border-[#2F3A5C] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8892B4] lg:grid">
            <span>Title</span>
            <span>Author</span>
            <span>Stage</span>
            <span>Printer</span>
            <span className="text-right">On sale</span>
          </div>

          <ul className="divide-y divide-[#2F3A5C]">
            {ROWS.map((row) => (
              <li
                key={row.isbn}
                data-testid="title-row"
                className="grid gap-2 px-6 py-5 lg:grid-cols-[2.1fr_1.3fr_1.1fr_1.4fr_0.7fr] lg:items-center lg:gap-4"
              >
                <div>
                  <span className="block font-medium text-[#FBF8F2]">{row.title}</span>
                  <span className="mt-0.5 block text-xs text-[#8892B4]">{row.isbn}</span>
                </div>
                <span className="text-sm text-[#C6CBDC]">{row.author}</span>
                <span className="flex items-center gap-2 text-sm text-[#C6CBDC]">
                  <svg viewBox="0 0 8 8" aria-hidden="true" className="h-2 w-2 flex-none">
                    <circle cx="4" cy="4" r="4" fill={row.tone} />
                  </svg>
                  {row.stage}
                </span>
                <span className="text-sm text-[#C6CBDC]">{row.printer}</span>
                <span className="text-sm font-medium text-[#F3EDE1] lg:text-right">{row.onSale}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#2F3A5C] bg-[#1B2440] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#E0C4B8]">
              Dates that cascade
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#C6CBDC]">
              Move a text proof by nine days and Colophon reschedules the press-ready date, the printer
              slot and the advance-copy mailing, then lists everyone who was relying on the old date.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2F3A5C] bg-[#1B2440] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#E0C4B8]">
              One record per ISBN
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#C6CBDC]">
              Hardback, paperback and audio hang off the same work, so a subtitle change corrects all
              three editions and every feed that has already carried the old one.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2F3A5C] bg-[#1B2440] p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#E0C4B8]">
              Nothing hidden in email
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#C6CBDC]">
              Printer replies, freelancer questions and rights notes thread onto the title itself, which
              is the difference between onboarding a new production editor in a week and in a season.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
