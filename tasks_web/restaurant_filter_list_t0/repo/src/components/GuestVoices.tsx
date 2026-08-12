type Voice = {
  quote: string
  name: string
  role: string
  initials: string
}

const VOICES: Voice[] = [
  {
    quote:
      'I have eaten at the bar on my own maybe thirty times now. They have never once made me feel like a table they could not sell. That is a harder trick than the cooking, and the cooking is very good.',
    name: 'Delia Mwangi',
    role: 'Neighbour on Monroe Street since 2016',
    initials: 'DM',
  },
  {
    quote:
      'We booked the counter for our anniversary expecting theatre and got something better — six seats, a cook called Marcus explaining what hickory does to a trout, and my wife asking for the pudding cake recipe twice.',
    name: 'Grant Petrosyan',
    role: 'Drove up from Huntsville',
    initials: 'GP',
  },
  {
    quote:
      'They buy from us the way restaurants used to: they take what is ready, they pay in a week, and if the okra is finished they change the menu instead of calling somebody in California.',
    name: 'Cass Whitlow',
    role: "Hollow Bend Farm, Leiper's Fork",
    initials: 'CW',
  },
]

export function GuestVoices() {
  return (
    <section id="voices" aria-labelledby="voices-heading" className="border-b border-[#241C17]/10 bg-[#241C17] text-[#FBF6EE]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2A65A]">
            1,240 reviews, and these three
          </p>
          <h2 id="voices-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            The people who come back are the ones who live nearby
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {VOICES.map((voice) => (
            <figure
              key={voice.name}
              className="flex h-full flex-col rounded-3xl border border-[#FBF6EE]/15 bg-[#2F241D] p-7"
            >
              <svg viewBox="0 0 40 30" className="h-7 w-9" aria-hidden="true" focusable="false">
                <path
                  d="M16 4c-7 2-12 8-12 15 0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-4 2-6 5-7zm20 0c-7 2-12 8-12 15 0 5 3 8 7 8s7-3 7-7-3-7-7-7c0-4 2-6 5-7z"
                  fill="#F2A65A"
                />
              </svg>
              <blockquote className="mt-5 flex-1 leading-relaxed text-[#EFE3D4]">
                {voice.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-[#FBF6EE]/15 pt-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C4552B] text-sm font-black text-[#FBF6EE]"
                >
                  {voice.initials}
                </span>
                <span>
                  <span className="block text-sm font-black">{voice.name}</span>
                  <span className="block text-xs text-[#C3B3A2]">{voice.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
