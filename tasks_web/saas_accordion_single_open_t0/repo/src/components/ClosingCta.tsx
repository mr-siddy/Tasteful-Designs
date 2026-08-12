export function ClosingCta() {
  return (
    <section id="demo" className="relative overflow-hidden bg-[#141B2E] text-[#F3EDE1]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,94,87,0.45),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(192,70,42,0.4),transparent_45%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E0C4B8]">
            Book a walkthrough
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#FBF8F2] sm:text-5xl">
            Bring your worst season and we will put it on the board
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#C6CBDC]">
            Forty-five minutes, your own titles, no slides. Send the spreadsheet ahead of the call and
            Beatriz will have your spring list loaded before you join, so you are looking at your books
            rather than at a demo catalogue full of invented novels.
          </p>

          <ul className="mt-9 space-y-3">
            {[
              'Fourteen-day trial on your real catalogue, no card',
              'Import and printer setup done by our team',
              'Month to month after the first year, cancel in writing',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm text-[#E4E7F0]">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-[#E0C4B8]">
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

        <form
          data-testid="demo-form"
          className="rounded-3xl border border-[#2F3A5C] bg-[#1B2440] p-8 shadow-2xl shadow-black/40"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="text-lg font-semibold tracking-tight text-[#FBF8F2]">
            Ask for a time that suits your list
          </h3>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="demo-name" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8892B4]">
                Your name
              </label>
              <input
                id="demo-name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-xl border border-[#3A4364] bg-[#141B2E] px-4 py-3 text-sm text-[#F3EDE1] outline-none focus:border-[#C0462A]"
              />
            </div>

            <div>
              <label htmlFor="demo-press" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8892B4]">
                Press or imprint
              </label>
              <input
                id="demo-press"
                name="press"
                type="text"
                className="mt-2 w-full rounded-xl border border-[#3A4364] bg-[#141B2E] px-4 py-3 text-sm text-[#F3EDE1] outline-none focus:border-[#C0462A]"
              />
            </div>

            <div>
              <label htmlFor="demo-email" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8892B4]">
                Work email
              </label>
              <input
                id="demo-email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-xl border border-[#3A4364] bg-[#141B2E] px-4 py-3 text-sm text-[#F3EDE1] outline-none focus:border-[#C0462A]"
              />
            </div>

            <div>
              <label htmlFor="demo-titles" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8892B4]">
                Titles you publish a year
              </label>
              <select
                id="demo-titles"
                name="titles"
                defaultValue="10-25"
                className="mt-2 w-full rounded-xl border border-[#3A4364] bg-[#141B2E] px-4 py-3 text-sm text-[#F3EDE1] outline-none focus:border-[#C0462A]"
              >
                <option value="under-10">Fewer than ten</option>
                <option value="10-25">Ten to twenty-five</option>
                <option value="25-60">Twenty-five to sixty</option>
                <option value="over-60">More than sixty</option>
              </select>
            </div>

            <div>
              <label htmlFor="demo-notes" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#8892B4]">
                Anything we should look at first
              </label>
              <textarea
                id="demo-notes"
                name="notes"
                rows={3}
                className="mt-2 w-full rounded-xl border border-[#3A4364] bg-[#141B2E] px-4 py-3 text-sm text-[#F3EDE1] outline-none focus:border-[#C0462A]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-[#C0462A] px-6 py-3.5 text-sm font-semibold text-[#FBF8F2] transition-colors hover:bg-[#A93B21]"
          >
            Request a walkthrough
          </button>

          <p className="mt-4 text-xs leading-relaxed text-[#8892B4]">
            We reply within one working day and never pass your catalogue to anyone. Prefer email?
            Write to hello@colophon.press.
          </p>
        </form>
      </div>
    </section>
  )
}
