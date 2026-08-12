const STEPS = [
  {
    week: 'Week one',
    title: 'We import your catalogue',
    copy:
      'Send the season spreadsheet and a login to your distributor portal. Our team maps the columns, loads the backlist and hands back a board you can read on the Friday. You do not do the data entry.',
  },
  {
    week: 'Week two',
    title: 'Your printers and templates',
    copy:
      'We set up each printer with the specification fields they actually ask for, load your standard trim sizes and paper stocks, and send a test purchase order that your printer confirms they can read.',
  },
  {
    week: 'Week three',
    title: 'One live season, side by side',
    copy:
      'Run the coming season on Colophon and keep the spreadsheet open beside it. Most presses stop updating the spreadsheet somewhere around the second proof round and never go back to it.',
  },
  {
    week: 'From week four',
    title: 'Feeds switched on',
    copy:
      'Once the board is trusted we point the metadata feeds at your wholesaler and distributor, with the first fortnight of drops reviewed by a person here before they leave.',
  },
]

export function RolloutSteps() {
  return (
    <section id="rollout" className="border-y border-[#E3DCCE] bg-[#F3EDE1]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C0462A]">
            Getting started
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#141B2E] sm:text-5xl">
            Three weeks from spreadsheet to season board
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#5C6377]">
            Nobody at a nine-person press has a spare fortnight to configure software. Colophon
            onboarding is done by our production team on your data, and the only thing we need from you
            is one hour a week and an opinion on your own trim sizes.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.week}
              data-testid="rollout-step"
              className="relative rounded-3xl border border-[#E3DCCE] bg-[#FBF8F2] p-7"
            >
              <span className="font-serif text-5xl font-semibold text-[#E0D3BE]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C0462A]">
                {step.week}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#141B2E]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C6377]">{step.copy}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-6 rounded-3xl border border-[#E3DCCE] bg-[#FBF8F2] p-7">
          <svg viewBox="0 0 64 64" role="img" aria-label="Portrait illustration of onboarding lead Beatriz Salgado" className="h-16 w-16 flex-none">
            <circle cx="32" cy="32" r="32" fill="#141B2E" />
            <circle cx="32" cy="26" r="11" fill="#E0C4B8" />
            <path d="M12 60c2-12 10-18 20-18s18 6 20 18z" fill="#C0462A" />
          </svg>
          <p className="min-w-[16rem] flex-1 text-sm leading-relaxed text-[#3B4256]">
            <strong className="font-semibold text-[#141B2E]">Beatriz Salgado</strong> runs onboarding and
            has moved 210 presses off spreadsheets. She will be the person on your calls, and she reads
            every import before it lands on your board.
          </p>
          <a
            href="#demo"
            className="rounded-full bg-[#141B2E] px-6 py-3 text-sm font-semibold text-[#FBF8F2] transition-colors hover:bg-[#2A3350]"
          >
            Talk to Beatriz
          </a>
        </div>
      </div>
    </section>
  )
}
