import { SectionHeading, Shell } from './PageKit'

const FAQS = [
  {
    q: 'I have never touched a barbell. Am I going to be the worst person in the room?',
    a: 'Roughly forty percent of our members had never lifted before joining, and Barbell Foundations starts everyone with an empty bar for at least two weeks. The room is capped at eight people, so nobody is performing for an audience.',
  },
  {
    q: 'Do I have to commit to a year?',
    a: 'No. Open Floor and Coached are rolling month to month with thirty days notice. Full Program has a three-month minimum because of the one-to-one and nutrition scheduling, then it rolls too. There is no joining fee on any tier.',
  },
  {
    q: 'What happens if I get injured or have to travel for work?',
    a: 'Coached and Full Program members can pause for up to eight weeks a year at no cost. If the problem is an injury, Dev will usually rewrite the block around it rather than pause it — most injuries leave plenty you can still train.',
  },
  {
    q: 'Can I try a session before I pay for anything?',
    a: 'The free intro is a real ninety-minute session with a coach, not a sales pitch with a tour. If you want to sit in on a coached group afterwards, ask and we will put you in one that week. Nobody is asked for a card on the day.',
  },
  {
    q: 'Is there parking, and can I get here without a car?',
    a: 'Six spaces off Foundry Row and free street parking after 6:00pm. The 14 and 22 buses stop on Ironside Road two minutes away, and there is a covered bike rack by the canal-side entrance with room for about twenty bikes.',
  },
  {
    q: 'What is the difference between Coached and Full Program, honestly?',
    a: 'Session volume and one-to-one time. Coached gives you three coached sessions a week and a written block, which is the right amount for most people with jobs. Full Program removes the cap and adds monthly reviews and nutrition — it suits competitors and people rebuilding after a long layoff.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#F2EAE0] py-20 sm:py-24">
      <Shell>
        <SectionHeading
          eyebrow="Questions"
          title="The things people ask at the front desk"
          lede="If yours is not here, call (312) 555-0184 during staffed hours and you will get a coach rather than a call centre."
        />

        <dl className="mt-12 grid gap-5 lg:grid-cols-2">
          {FAQS.map((item) => (
            <div
              key={item.q}
              data-testid="faq-item"
              className="rounded-3xl border border-[#E2D6C6] bg-[#FBF7F1] p-7"
            >
              <dt>
                <h3 className="text-lg font-black leading-snug tracking-tight text-[#14181D]">{item.q}</h3>
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#4A4438]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  )
}
