const QUESTIONS = [
  {
    q: 'I have never touched a reformer. Will I be the worst person in the room?',
    a: 'Reformer Foundations exists precisely for that, and roughly a third of the people in any Foundations class are inside their first month. The machine looks like farm equipment and then takes about two sessions to stop being intimidating. Nobody is watching you; there are no mirrors to watch yourself in either.',
  },
  {
    q: 'Is there a contract or a joining fee?',
    a: 'No to both. Monthly memberships cancel from your account page and stop at the end of the month you have already paid for. The ten-class card is a single payment with a twelve-month window, and we will extend it without arguing if you are injured or away.',
  },
  {
    q: 'I am recovering from surgery. Can I come?',
    a: 'Usually yes, from about week four, and usually into the Post-Op Reformer block rather than a group class. Bring your discharge notes or your physical therapist’s protocol to the intro session; Dara will write the six weeks around it and will happily talk to your clinician directly.',
  },
  {
    q: 'What do I wear, and do I need grip socks?',
    a: 'Anything you can move in that is not so loose it catches in the springs. Grip socks are required on the reformers for safety — we sell them at the desk for $14, and any pair you already own is fine. The loft is barefoot or socks, your choice.',
  },
  {
    q: 'How far ahead do classes fill up?',
    a: 'Weekday 6:15am and 5:45pm classes usually fill three to five days out; midday and weekend-afternoon classes are often open the night before. Waitlists move constantly because cancellations inside twelve hours release the spot automatically and text the next person on the list.',
  },
  {
    q: 'Do you have parking, and is the studio step-free?',
    a: 'Street parking on Almond Court is free after 9:30am and all day Sunday, and there is a paid lot on Bevin Street ninety seconds away. There is a ramp at our door and a step-free route to the front room. The loft is up one flight of stairs; if that does not work for you, tell us and we will run your mobility session downstairs.',
  },
  {
    q: 'Can I bring a friend, or come once to try it?',
    a: 'Unlimited members get a guest pass every month. Everyone else starts with the $25 intro session rather than dropping into a class cold — we would rather measure you first than put you on a spring load that is wrong for your hips.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-y border-[#E3D6BE] bg-[#FFFCF5]">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C2571F]">
          Front desk questions
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          The seven things people ask before they book
        </h2>
        <dl className="mt-12 divide-y divide-[#EFE4CE] border-y border-[#EFE4CE]">
          {QUESTIONS.map((item) => (
            <div key={item.q} className="py-7">
              <dt>
                <h3 className="text-lg font-semibold tracking-tight">{item.q}</h3>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-[#4A4436]">{item.a}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 text-sm text-[#6B6455]">
          Anything else, call the desk on (401) 555 0173 between 8am and 6pm, or email
          hello@sundialmovement.com and Imogen will answer it herself, usually the same day.
        </p>
      </div>
    </section>
  )
}
