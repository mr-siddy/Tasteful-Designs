const FAQS = [
  {
    q: 'We already have a pattern system and a bookkeeper. Where does this actually sit?',
    a: 'Between them, and it is the gap nobody sells into. Your pattern software knows what the marker should be; your bookkeeper knows what got invoiced. Neither one knows what the floor actually cut and sewed this week. Grainline holds that middle record and hands it to both sides.',
  },
  {
    q: 'Our floor is twelve people and half of them do not want another app.',
    a: 'They will not get one. Operators touch a shared tablet at the end of the line to move bundles; nobody has a personal login unless they want one. The floor lead and the office do the typing, and that is roughly the same typing they were already doing on paper.',
  },
  {
    q: 'What happens on the day your service is down?',
    a: 'Cut tickets and bundle tags print, and every board exports to a PDF you can pin up. Floors that run Grainline still keep a printed ticket travelling with each run for the first two weeks, and several never stopped. A production system should never be the reason a line stops.',
  },
  {
    q: 'Can we get our data back out if we leave?',
    a: 'Yes, whole and unprompted. Styles, operations, tickets, lots, bundle history and reporting export as CSV from inside the account at any time, and we will run a full dump for you on request. There is no exit fee and no notice period beyond the thirty days on the plan.',
  },
  {
    q: 'Do you work with floors outside apparel?',
    a: 'Sometimes. Anything cut from a lay and assembled in bundles — bags, upholstery, technical soft goods, sails — maps cleanly onto the same board. If your work is not cut-and-sew, we will tell you on the first call rather than sell you a bad fit.',
  },
]

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-[#E0D6C6] bg-[#EFE9DE]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2
            id="faq-heading"
            className="text-3xl font-black tracking-tight sm:text-4xl"
          >
            Questions floor owners actually ask us
          </h2>
          <p className="mt-5 leading-relaxed text-[#4A4455]">
            These are the five that come up on nearly every first call, answered
            the way we answer them on the phone.
          </p>
          <a
            href="#book"
            className="mt-7 inline-flex rounded-full border border-[#2C5C4F] px-6 py-3 text-sm font-semibold text-[#2C5C4F] hover:bg-[#2C5C4F] hover:text-[#F6F2EC]"
          >
            Ask us a sixth one
          </a>
        </div>

        <dl className="divide-y divide-[#DCCFB8] border-y border-[#DCCFB8]">
          {FAQS.map((item) => (
            <div key={item.q} className="py-7">
              <dt>
                <h3 className="text-lg font-bold tracking-tight">{item.q}</h3>
              </dt>
              <dd className="mt-3 leading-relaxed text-[#4A4455]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
