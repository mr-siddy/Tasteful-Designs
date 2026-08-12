const QUESTIONS = [
  {
    q: 'I have genuinely never lifted anything. Is the trial wasted on me?',
    a: 'It is aimed squarely at you. Sixty-one percent of the current roster had never touched a barbell before their trial fortnight, and the first week of any beginner block is teaching position with an empty bar or a broomstick.',
  },
  {
    q: 'What does the movement screen involve?',
    a: 'Fifty minutes, barefoot, no lifting. We watch you squat, hinge, push, pull, carry and walk, ask about every injury you can remember, and write it all down. You leave with your first four-week block already drafted.',
  },
  {
    q: 'My back is unreliable. Will you just tell me to squat anyway?',
    a: 'No. Back to Barbell exists precisely for that, it was built with the physiotherapists two doors down at Kemp Street, and if something in your screen worries us we will ask you to see them before we load you.',
  },
  {
    q: 'Do I have to book each session in advance?',
    a: 'Yes, and only because eight people per session is a hard cap. Bookings open seven days out, you can cancel up to two hours before, and nobody has ever been charged a late fee here.',
  },
  {
    q: 'Is there a joining fee or a minimum term?',
    a: 'Neither. Membership is billed weekly, pauses for free while you travel, and cancels in a single email to the front desk. We would rather you left easily and came back later.',
  },
  {
    q: 'Can I bring a friend, or my sixteen year old?',
    a: 'Strength Hall members get two guest passes a quarter. We coach from fourteen upwards on a modified beginner block, with a parent in the room for the first three sessions.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-[#10161C]/10 bg-[#EAE5DA]">
      <div className="mx-auto max-w-4xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
            Before you send the form
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            The six things people email us about
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-[#10161C]/12 border-y border-[#10161C]/12">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item" className="py-7">
              <dt className="text-lg font-black tracking-tight text-[#10161C]">{item.q}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#4C5B54]">{item.a}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-sm text-[#6E7A72]">
          Still not answered? Email priya@ashgrovebarbell.club or ring the desk on (555) 0172 between
          nine and four on weekdays.
        </p>
      </div>
    </section>
  )
}
