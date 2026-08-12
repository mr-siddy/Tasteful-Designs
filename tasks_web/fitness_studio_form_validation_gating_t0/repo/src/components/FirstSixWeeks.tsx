const STEPS = [
  {
    week: 'Day one',
    title: 'A free intro session, one to one',
    body:
      'Thirty-five minutes with a teacher on the reformer, before or after hours so the room is empty. You talk through what hurts, what you have done before and what you actually want, then you move a little so we can see how you hinge, squat and breathe. Nobody sells you anything in this session.',
  },
  {
    week: 'Week one',
    title: 'Two classes we pick for you',
    body:
      'You leave the intro with two specific classes on specific days, chosen by the teacher who watched you move — not a link to the timetable. Almost everybody starts with Reformer Foundations and Slow Flow, and about a third add the loft in week two.',
  },
  {
    week: 'Weeks two to five',
    title: 'The same teacher, the same twelve people',
    body:
      'You stay in one cohort for four weeks so the coaching compounds. Your teacher writes one note after every class — where the spring load went, what your left hip did — and you can read those notes any time from your account.',
  },
  {
    week: 'Week six',
    title: 'A check-in, and a real plan',
    body:
      'Twenty minutes back one to one. We film the two movements you care about, compare them to day one, and write the next eight weeks with you. This is where people decide to go unlimited, and where a few decide four classes a month is genuinely enough. Both are fine.',
  },
]

export default function FirstSixWeeks() {
  return (
    <section
      id="on-ramp"
      data-testid="on-ramp"
      aria-labelledby="on-ramp-heading"
      className="bg-[#FFFCF8] border-y border-[#E4DCD0]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">Your first six weeks</p>
          <h2 id="on-ramp-heading" className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl">
            Nobody gets dropped into a hard class on day one
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            Most studios hand you a timetable and hope. We run the same
            four-step on-ramp for every single person who walks in, whether they
            are coming off a marathon or off the sofa.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="onramp-step"
              className="relative rounded-2xl border border-[#E4DCD0] bg-[#FAF6F0] p-7"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F4A3C] text-lg font-black text-[#FAF6F0]">
                  {index + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7A8A80]">
                  {step.week}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black tracking-tight text-[#16211C]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5A52]">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-[#E9F0EB] px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-[#3C4A42]">
            The intro session is free and there is no version of it where we ask
            for a card. If Sablewood is not right for you, we will say so and
            usually name the studio down the wharf that is.
          </p>
          <a
            href="#intro"
            className="rounded-full bg-[#1F4A3C] px-6 py-3 text-sm font-bold text-[#FAF6F0] transition hover:bg-[#173A2F]"
          >
            Book the intro
          </a>
        </div>
      </div>
    </section>
  )
}
