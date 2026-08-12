export default function ClosingCta() {
  return (
    <section data-testid="closing-cta" aria-labelledby="closing-heading" className="bg-[#16211C]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(140deg,#1F4A3C_0%,#245445_52%,#8A5230_140%)] px-8 py-14 sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,98,58,0.4),transparent_66%)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9CC0AE]">
                Eight spots in the April on-ramp
              </p>
              <h2
                id="closing-heading"
                className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#FAF6F0] sm:text-4xl"
              >
                Come up the stairs once and see whether the room is right
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#C7D8CF]">
                The intro session is free, it takes thirty-five minutes, and the
                worst outcome is that a physio-trained teacher tells you honestly
                that somewhere else on the wharf suits you better. Four of the
                eight April spots are already spoken for.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#intro"
                  className="rounded-full bg-[#FAF6F0] px-7 py-3.5 text-center text-base font-bold text-[#1F4A3C] transition hover:bg-[#F1EAE0]"
                >
                  Book a free intro session
                </a>
                <a
                  href="tel:+15550148820"
                  className="rounded-full border-2 border-[#7FA894] px-7 py-3.5 text-center text-base font-bold text-[#FAF6F0] transition hover:bg-[#245445]"
                >
                  Call (555) 014-8820
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#3D6A59] bg-[#16332A]/70 p-7">
              <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#9CC0AE]">
                Walking in without an appointment
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#DCE9E2]">
                <li>Weekdays, the desk is staffed 6:00am to 8:00pm.</li>
                <li>Weekends, 7:30am to 2:00pm, and Saturday mornings are busy.</li>
                <li>218 Delaney Wharf — green door beside the old loading bay.</li>
                <li>Parking behind the building off Corvin Street, twelve spots.</li>
              </ul>
              <p className="mt-5 border-t border-[#3D6A59] pt-4 text-sm text-[#A9C6B7]">
                Ask for whoever is at the desk. If it is a Tuesday morning it will
                be Camille, and she will show you the reformer room herself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
