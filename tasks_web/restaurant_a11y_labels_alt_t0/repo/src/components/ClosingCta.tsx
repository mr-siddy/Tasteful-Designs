export default function ClosingCta() {
  return (
    <section className="bg-[#d2601a] text-[#1a0d05]">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          The fire is lit at eleven. Come at five.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#1a0d05]/80">
          Twenty-two tables, fourteen stools and one hearth, at the harbour end of the old granite works in Rockport.
          Book a table for the cutting shed, or just turn up at the counter and see what came off the boats.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#reserve"
            className="rounded-full bg-[#0b2027] px-8 py-4 text-sm font-semibold text-[#f3ece0] shadow-lg transition hover:bg-[#123340]"
          >
            Request a table
          </a>
          <a
            href="#board"
            className="rounded-full border border-[#1a0d05]/30 px-8 py-4 text-sm font-semibold transition hover:border-[#1a0d05]/70"
          >
            See what we cooked last night
          </a>
        </div>
        <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#1a0d05]/60">
          18 Quarry Landing · Rockport, Massachusetts · (978) 555 0142
        </p>
      </div>
    </section>
  )
}
