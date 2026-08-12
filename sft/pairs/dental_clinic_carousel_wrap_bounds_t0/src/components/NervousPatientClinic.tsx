import { HeartHandIcon, LighthouseSpot, WaveIcon } from './Icons'

const SUPPORTS = [
  {
    title: 'You can come and not be treated',
    body: 'Book a "nothing appointment". You sit in the chair, we talk, you look at the room, and nobody puts an instrument anywhere near you. It is free, it takes fifteen minutes, and about forty people a year use it before they book anything real.',
  },
  {
    title: 'A hand up means stop',
    body: 'Agreed before we start, every time, with every clinician. Raise your left hand and the drill comes out, no discussion and no sighing. We would rather do a filling in three sittings than one you spend gripping the armrest through.',
  },
  {
    title: 'Wednesday mornings are quiet',
    body: 'No hygienist drills running, no waiting room crowd, and the radio off. If noise is the thing that gets you, this is the session to ask for. It books up about three weeks ahead, so ring early.',
  },
  {
    title: 'Sedation without going to hospital',
    body: 'Rhodri is our sedation lead and runs intravenous sedation here on Fridays for people who need it — £340 on top of the treatment, one companion to take you home, and you remember almost none of it afterwards.',
  },
]

export function NervousPatientClinic() {
  return (
    <section id="nervous" className="relative overflow-hidden bg-[#0F2E4A] py-20 text-[#EDF3F2] lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3FA394]/20 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-block text-[#F2683C]">
            <LighthouseSpot />
          </span>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#7FC4B8]">The nervous clinic</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            If it has been years, you are the normal one here
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#B7CFD9]">
            Roughly a third of the people who register with us have not seen a dentist in over five years, and a good
            number of those are frightened rather than lazy. Nobody on this team will lecture you about it. We have
            heard every version of the story and the only thing we care about is what we do from today.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#B7CFD9]">
            The first appointment is deliberately dull: a look, a chat, and a written plan. Nothing sharp comes out of
            a drawer unless you have agreed to it in advance.
          </p>
          <a
            href="#visit"
            data-testid="nervous-cta"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F2683C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#DD5629]"
          >
            <HeartHandIcon className="h-5 w-5" />
            Ask for a nothing appointment
          </a>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {SUPPORTS.map((item) => (
            <li
              key={item.title}
              data-testid="nervous-support"
              className="rounded-2xl border border-white/12 bg-white/6 p-6 backdrop-blur"
            >
              <span className="text-[#7FC4B8]">
                <WaveIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#B7CFD9]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
