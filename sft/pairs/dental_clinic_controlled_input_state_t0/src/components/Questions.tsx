const QUESTIONS = [
  {
    q: 'I have not been to a dentist in years. Will I get a lecture?',
    a: 'No. About a third of the people who register here are in the same position, and the clinician you see has had that conversation several hundred times. We are interested in where your mouth is today and what you want to do about it, not in a running commentary on the last decade.',
  },
  {
    q: 'How much will my first appointment actually cost?',
    a: '$155 for the examination, gum measurements, scan and photographs. X-rays, if we take them, are $38 for a small one and $95 for the full panoramic. Nothing else is charged on that visit — the written plan and the quote arrive by email afterwards at no cost.',
  },
  {
    q: 'Do you take nervous patients?',
    a: 'Yes, and we build the diary around them. That can mean a free ten-minute visit that involves no treatment at all, appointments at the quiet end of the day, agreed hand signals to stop, or inhalation sedation with our accredited provider. Tell us on the form and we will plan for it.',
  },
  {
    q: 'Can I bring a treatment plan from another practice?',
    a: 'Please do. We will read it, tell you honestly whether we would do the same thing, and give you our own quote beside theirs. Second opinions are $95 and if you go ahead with us, that comes off the first treatment.',
  },
  {
    q: 'What happens if something breaks on a Sunday?',
    a: 'Call the practice number and the message gives you the on-call rota, which covers the four practices in Kelso Park between us. If it is our weekend, you will get one of our dentists rather than a call centre. Registered patients are seen within twenty-four hours.',
  },
  {
    q: 'Do you treat children?',
    a: 'From the moment their first tooth appears. Under-fives are free whether or not a parent is a member, mostly because getting a three-year-old comfortable in the chair is far cheaper than fixing what happens if you do not. Family Lantern covers up to three children.',
  },
]

export default function Questions() {
  return (
    <section id="questions" className="bg-[#faf6f0]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f2704a]">
              Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#152046] sm:text-4xl">
              The six we are asked most
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1f2a4d]/75">
              If yours is not here, put it in the note on the request form — Marta answers
              every one of them herself, usually within the hour.
            </p>
          </div>

          <dl className="space-y-8">
            {QUESTIONS.map(({ q, a }) => (
              <div key={q} className="border-b border-[#152046]/10 pb-8 last:border-b-0">
                <dt>
                  <h3 className="text-lg font-semibold tracking-tight text-[#152046]">{q}</h3>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-[#1f2a4d]/80">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
