export function ClosingCta() {
  return (
    <section data-testid="closing-cta" className="bg-[#0b2d45] text-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              The appointment you have been putting off takes an hour, and it is probably at 7:00am
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              No lecture about the years you missed. A look, a clean, a written plan with prices on
              it, and a chair that fits around the week you actually have. That is the whole offer.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                data-testid="closing-cta-link"
                className="rounded-full bg-[#2fb99b] px-7 py-3.5 text-sm font-semibold text-[#0b2d45] transition hover:bg-[#8fd3c4]"
              >
                Request an appointment
              </a>
              <a
                href="tel:+16145550142"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/70"
              >
                Call (614) 555 0142
              </a>
            </div>
          </div>

          <dl className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8fd3c4]">
                Where
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/80">
                14 Sorrel Street
                <br />
                Ashbourne Green
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8fd3c4]">
                When
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/80">
                Mon–Thu 7:00am – 8:00pm
                <br />
                Fri 7:00am – 5:00pm · Sat 8:00am – 4:00pm
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8fd3c4]">
                New patient exam
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/80">$95, sixty minutes</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8fd3c4]">
                In pain today
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/80">
                Call before 10:00am and we will usually see you the same day
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
