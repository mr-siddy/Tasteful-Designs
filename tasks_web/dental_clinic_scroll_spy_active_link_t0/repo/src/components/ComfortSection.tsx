const COMFORTS = [
  {
    title: 'A hand in the air stops everything',
    body: 'Raise your hand and the drill stops mid-cut, every time, no negotiation and no sigh. Most people use it once and never need it again.',
    glyph: (
      <path
        d="M12 21c-3.6 0-6.4-2.6-6.4-6.5V9.2a1.4 1.4 0 0 1 2.8 0v3.4V5.4a1.5 1.5 0 0 1 3 0v6.2V4.2a1.5 1.5 0 0 1 3 0v7.4V6.8a1.4 1.4 0 0 1 2.8 0v7.7C17.2 18.4 15.6 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: 'Three levels of sedation',
    body: 'Topical gel under every injection, nitrous oxide for the mildly uneasy, and oral sedation booked ahead if the thought of the building is the problem.',
    glyph: (
      <path
        d="M4 15c0-4.4 3.6-8 8-8s8 3.6 8 8M8.5 15a3.5 3.5 0 0 1 7 0M12 3v2m7.8 2.6-1.4 1.4M4.2 7.6l1.4 1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: 'Nothing happens without a price first',
    body: 'You get the number, in writing, before the chair goes back. If the number is wrong for you this month, we will tell you what can safely wait.',
    glyph: (
      <path
        d="M5 4.5h14v15l-2.3-1.8-2.4 1.8-2.3-1.8-2.3 1.8L7.3 17.7 5 19.5ZM8.5 9h7M8.5 13h4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: 'No lecture about the last five years',
    body: 'Whatever the gap has been, we start from the mouth in front of us. Shame is a terrible motivator and it keeps people away for another decade.',
    glyph: (
      <path
        d="M12 20.5s-7.5-4.3-7.5-9.6A4.4 4.4 0 0 1 12 8.2a4.4 4.4 0 0 1 7.5 2.7c0 5.3-7.5 9.6-7.5 9.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
]

export function ComfortSection() {
  return (
    <section id="comfort" className="relative overflow-hidden bg-teal-900 py-20 text-teal-50 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 20%, #2dd4bf 0, transparent 42%), radial-gradient(circle at 88% 78%, #f59e0b 0, transparent 38%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">Nervous patients</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              If you have been putting this off, start here
            </h2>
            <p className="mt-5 leading-relaxed text-teal-100">
              Dental fear is the most ordinary thing in this building. Something like one patient in three arrives
              having avoided a chair for years, usually after one bad experience a long time ago with someone who did
              not stop when they were asked to. We have built the whole appointment around undoing that, and it is
              genuinely fine to book a visit where nothing happens except a conversation.
            </p>
            <blockquote className="mt-8 border-l-4 border-amber-400 pl-5 text-lg italic leading-relaxed text-teal-50">
              “You are allowed to come in, sit down, look at the room, ask what everything is, and leave without
              opening your mouth. Two or three people a month do exactly that, and most of them come back.”
              <cite className="mt-3 block text-sm not-italic text-teal-200">
                Dr Amara Ellison, practice principal
              </cite>
            </blockquote>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {COMFORTS.map((comfort) => (
              <li
                key={comfort.title}
                data-testid="comfort-card"
                className="rounded-3xl bg-teal-950/50 p-6 ring-1 ring-teal-700/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-800 text-amber-300">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    {comfort.glyph}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{comfort.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-100">{comfort.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
