import { ArrowIcon, PhoneIcon, ToothMark } from './Icons'

export function ClosingCta() {
  return (
    <section aria-labelledby="closing-heading" className="bg-[#0B2540]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#123457] via-[#0B2540] to-[#14403A] px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#C2703D]/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#4E7C6A]/25 blur-3xl"
          />

          <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#E9A876]">
            <ToothMark className="h-8 w-8" />
          </span>

          <h2 id="closing-heading" className="relative mt-8 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Come and see the room before you commit to anything
          </h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#BFCBD6]">
            A first visit is $149 and takes seventy-five minutes. If all you want is to look at the
            place, meet Priya and ask what the crown you have been putting off would actually cost,
            that is a perfectly good reason to book, and nobody will push you towards anything on the
            way out.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-[#C2703D] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#A85B2D]"
            >
              Reserve a first visit
              <ArrowIcon />
            </a>
            <a
              href="tel:+12065550142"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/60"
            >
              <PhoneIcon className="h-4 w-4" />
              (206) 555-0142
            </a>
          </div>

          <p className="relative mt-8 text-sm text-[#8FA3B5]">
            5412 Ballard Ave NW, Seattle WA 98107 · Mon–Thu 7:00–17:00 · Fri 7:00–14:00
          </p>
        </div>
      </div>
    </section>
  )
}
