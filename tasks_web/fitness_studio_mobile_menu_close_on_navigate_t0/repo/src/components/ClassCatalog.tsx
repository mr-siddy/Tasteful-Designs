const CLASSES = [
  {
    name: 'Reformer Foundations',
    price: '$32',
    length: '50 min',
    cap: 'Cap of 8',
    blurb:
      'The first six weeks of anyone’s Sundial life. Footwork, bridging, the hundred done slowly, and a spring load chosen for the body you brought in rather than the one on the poster.',
  },
  {
    name: 'Reformer Flow 2',
    price: '$34',
    length: '50 min',
    cap: 'Cap of 8',
    blurb:
      'For members who can already find their ribs on the carriage. Longer sequences, heavier springs, standing work on the platform, and one thing every week you have not done before.',
  },
  {
    name: 'Tower & Barre',
    price: '$30',
    length: '45 min',
    cap: 'Cap of 10',
    blurb:
      'Spring tower work at the wall paired with a barre section for the hips and calves. The class most of our runners and ferry-deck knees end up living in through the winter.',
  },
  {
    name: 'Mobility Loft',
    price: '$26',
    length: '40 min',
    cap: 'Cap of 12',
    blurb:
      'Upstairs on the mats: thoracic rotation, ankle and hip range, loaded stretching with a strap and a kettlebell. No mirrors, no music over 70 decibels, socks optional.',
  },
  {
    name: 'Post-Op Reformer',
    price: '$58',
    length: '55 min',
    cap: 'Two people, one instructor',
    blurb:
      'A six-week 1:2 block written with your surgeon’s protocol and your physical therapist in the loop. Shoulders, hips, spinal fusions and caesarean recovery, from week four onward.',
  },
  {
    name: 'Slow Strength',
    price: '$36',
    length: '60 min',
    cap: 'Cap of 8',
    blurb:
      'Barbells and dumbbells at a tempo you can control, built on the same patterns you learned on the reformer. Hinge, squat, press, carry — logged in the same plan you already keep.',
  },
]

export function ClassCatalog() {
  return (
    <section id="classes" className="bg-[#F7F1E6]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
            Six ways in
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Classes, and who each one is actually for
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A4436]">
            Every price below is the drop-in rate; members pay less and book from the same
            timetable. If you are not sure which room to start in, book the intro session and we
            will tell you honestly — sometimes the answer is Mobility Loft twice a week and nothing
            else for a month.
          </p>
        </div>
        <ul data-testid="class-grid" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CLASSES.map((offering) => (
            <li
              key={offering.name}
              data-testid="class-card"
              className="flex flex-col rounded-3xl border border-[#E3D6BE] bg-[#FFFCF5] p-7 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{offering.name}</h3>
                <span className="text-lg font-semibold text-[#C2571F]">{offering.price}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#7A7263]">
                {offering.length} · {offering.cap}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4A4436]">{offering.blurb}</p>
              <a
                href="#timetable"
                className="mt-6 text-sm font-semibold text-[#24493B] underline decoration-[#8FB8C9] decoration-2 underline-offset-4"
              >
                See when it runs
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
