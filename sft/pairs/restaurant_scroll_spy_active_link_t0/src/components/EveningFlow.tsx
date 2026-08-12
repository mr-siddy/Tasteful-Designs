const STEPS = [
  {
    time: '5:45pm',
    title: 'The fire settles',
    body: 'The oak that Ollie lit at six in the morning has burned down to a bed of coals with no flame on it. He rakes it into three zones — hot, medium, ash — and that arrangement is the kitchen for the rest of the night.',
  },
  {
    time: '6:00pm',
    title: 'Doors, and one seating',
    body: 'Everybody arrives inside the first half hour, because there is only one seating and the room eats roughly together. Your table is yours until you decide otherwise; we will never ask you to be finished by eight.',
  },
  {
    time: '6:30pm',
    title: 'Bread and butter, no charge for the wait',
    body: 'The loaves that went into the oven at four come out to the tables first, still warm enough to melt the Tuesday butter. If you are drinking something from the cellar list, this is when Marta will pour the first glass.',
  },
  {
    time: '8:15pm',
    title: 'The fire course',
    body: 'Whatever is over the hottest quarter of the bed — usually the sirloin and the bream — goes out in one wave, because the coals are at their best for about forty minutes and we would rather cook to the fire than to the clock.',
  },
  {
    time: '10:30pm',
    title: 'Last pour, and the ash goes out',
    body: 'The kitchen stops at ten, the bar keeps going until half past, and what is left of the fire is carried out to the yard in a steel pail. Somebody will hold the door for you and mean it.',
  },
]

export function EveningFlow() {
  return (
    <section id="evening" data-section="evening" className="bg-[#FBF6EC]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B7411F]">
            The evening
          </p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#1B1410]">
            How a Wednesday here actually goes
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#2A211B]/75">
            One seating, five hours, and a fire that decides most of the timings. If you have
            never eaten somewhere that cooks entirely on coals, this is what to expect from
            the moment you push the door open on Dorwich Street.
          </p>
        </div>

        <ol className="mt-16 space-y-4">
          {STEPS.map((step, index) => (
            <li
              key={step.time}
              className="grid gap-5 rounded-3xl bg-[#F0E4D2] p-8 sm:grid-cols-[auto_7rem_1fr] sm:items-start"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2A211B] font-serif text-xl font-semibold text-[#D8A244]">
                {index + 1}
              </span>
              <span className="font-serif text-2xl font-semibold text-[#B7411F]">{step.time}</span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1B1410]">{step.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#2A211B]/75">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
