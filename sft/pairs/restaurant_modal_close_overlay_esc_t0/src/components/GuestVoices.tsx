const VOICES = [
  {
    quote:
      'My parents got engaged in booth nine in 1974 and we had my mother’s eightieth in the Lantern Room last April. Margo remembered which relish tray my father liked. That is not a service standard, that is just a person paying attention.',
    name: 'Nora Pelletier',
    role: 'Harlow Bend, four generations of Fridays',
  },
  {
    quote:
      'I drive up from Chicago twice a year for the perch and I have stopped pretending it is for anything else. The cracker meal crust is the whole thing. Sit at the bar, ask Junior for it pressed, thank me later.',
    name: 'Wendell Aoki',
    role: 'Drives 312 miles for a fish fry',
  },
  {
    quote:
      'We booked the Lantern Room for twenty after my father’s funeral because he would have hated anything fancier. Delia set the menu, kept the coffee coming, and never once made it feel like a transaction.',
    name: 'Fran Dombrowski',
    role: 'Two Rivers',
  },
]

export function GuestVoices() {
  return (
    <section className="bg-[#EFE7D5]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[#7C2D2D]">Guest book</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#17130F]">
            Eighty years of regulars, and their opinions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5C5445]">
            The guest book at the host stand goes back to 1946 and is currently on volume eleven.
            Three entries from this year, printed with permission.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {VOICES.map((voice) => (
            <figure
              key={voice.name}
              data-testid="guest-voice"
              className="flex h-full flex-col rounded-3xl border border-[#17130F]/10 bg-[#F6F1E4] p-7"
            >
              <div className="flex gap-1 text-[#D2A24C]" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => (
                  <svg key={star} viewBox="0 0 20 20" className="h-4 w-4">
                    <path
                      d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.6 7.7l5.8-.8Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-[#2E2A22]">
                {voice.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-[#17130F]/10 pt-5">
                <span className="block text-sm font-semibold text-[#17130F]">{voice.name}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-[#7C6B4B]">
                  {voice.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
