const FAQS = [
  {
    question: 'I have never done Pilates or lifted anything. Is there a beginner class?',
    answer:
      'Every class here has a written beginner variation, and Reformer Foundations exists for exactly this. More usefully, the free intro session means a teacher sees you move before you ever book, so you are pointed at the right two classes rather than guessing off a timetable.',
  },
  {
    question: 'What do I need to bring, and what do you lend?',
    answer:
      'Bring water and something you can move in. We lend mats, towels, blocks, straps, bolsters and reformer socks, all washed on site daily. Showers have doors, there are lockers with real keys, and the changing room has a hairdryer that works.',
  },
  {
    question: 'Can I hold my membership if I travel or get injured?',
    answer:
      'Yes, free, for up to eight weeks a year on the Full Studio plan and four on the others. Tell the front desk or use the hold button on your account page. We have never asked anybody for a doctor\'s note and we are not going to start.',
  },
  {
    question: 'How far ahead do classes book up?',
    answer:
      'The 5:45am and 6:15pm reformer slots and Priya\'s Sunday nine o\'clock usually fill three or four days out. Everything else you can get into the day before. Booking opens fourteen days ahead and the waitlist moves — about one in five booked spots is released the night before.',
  },
  {
    question: 'Is the heated room actually hot yoga?',
    answer:
      'It is heated, but to ninety-six degrees rather than the hundred and five most hot studios run. We use infrared panels in the cedar wall instead of blowing hot air, so it is warm through the body and breathable in the lungs. If you have found hot yoga unbearable before, this is a different room.',
  },
  {
    question: 'Do you have parking, and how do I get in?',
    answer:
      'Twelve spots behind the building off Corvin Street, free to members, plus the wharf lot two minutes away. The entrance is the green door beside the old loading bay — take the stairs to the top floor, or the lift on the left if stairs are not happening today.',
  },
]

export default function FaqSection() {
  return (
    <section data-testid="faq" aria-labelledby="faq-heading" className="bg-[#FAF6F0]">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C4623A]">Questions</p>
          <h2 id="faq-heading" className="mt-3 text-3xl font-black tracking-tight text-[#16211C] sm:text-4xl">
            The six things people ask at the front desk
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5A52]">
            If yours is not here, call (555) 014-8820 and a human answers between
            six in the morning and eight at night.
          </p>
        </div>

        <dl className="mt-12 divide-y divide-[#E4DCD0] border-y border-[#E4DCD0]">
          {FAQS.map((item) => (
            <div key={item.question} data-testid="faq-item" className="grid gap-3 py-7 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
              <dt>
                <h3 className="text-lg font-black leading-snug tracking-tight text-[#16211C]">
                  {item.question}
                </h3>
              </dt>
              <dd className="text-base leading-relaxed text-[#4B5A52]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
