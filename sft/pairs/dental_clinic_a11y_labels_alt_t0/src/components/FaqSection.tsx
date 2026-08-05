const QUESTIONS = [
  {
    question: 'What does a first visit actually cost?',
    answer:
      'Ninety-five dollars, which covers the examination, two small X-rays, the oral cancer screen and a scale and polish. If you have cover with Harbour Mutual, Northline Health, Verrow Benefits or the Ashbourne Civic Plan we bill them directly and you pay whatever is left, which for most patients is nothing.',
  },
  {
    question: 'I am genuinely frightened of dentists. Is that a problem?',
    answer:
      'It is the most ordinary thing in the world here — about a fifth of our adult patients book into the quiet room. Tell Wes when you request the appointment and he will book you a longer slot at a quieter time, with a dentist who will explain every step before it happens and stop the moment you raise your hand.',
  },
  {
    question: 'When should my child first come in?',
    answer:
      'Around their first birthday, or whenever the first tooth arrives. It costs nothing under six, takes half an hour on the children’s floor, and usually consists of counting teeth, a ride in the chair and a sticker. Dr. Theo Marchetti sees every child himself.',
  },
  {
    question: 'Something is hurting today. How fast can you see me?',
    answer:
      'Registered patients are promised a chair inside the same week and usually get one the same day if they call before 10:00am — we hold emergency slots every weekday until 3:00pm. If you are not registered with us we will still try, and we will always tell you honestly if another practice can see you sooner.',
  },
  {
    question: 'How long do clear aligners take, and do I have to come in constantly?',
    answer:
      'Most cases finish between twelve and forty weeks depending on how far the teeth have to travel. You change trays at home every ten days and come in once a month for a five-minute check, which nearly everyone books at 7:00am or in a lunch hour.',
  },
  {
    question: 'Where do I park, and can I get in without stairs?',
    answer:
      'There are eleven free patient spaces in the yard behind the building off Kell Lane, two of them wide bays beside the ramp. The north entrance is level, both ground-floor treatment rooms take a wheelchair, and a platform lift reaches the children’s floor.',
  },
]

export function FaqSection() {
  return (
    <section data-testid="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#2fb99b]">
            Questions we get every week
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            The things people ask before they pick up the phone
          </h2>
        </div>

        <dl className="mt-12 space-y-4">
          {QUESTIONS.map((entry) => (
            <div
              key={entry.question}
              data-testid="faq-item"
              className="rounded-3xl border border-[#0b2d45]/10 bg-[#f6fafb] p-7"
            >
              <dt>
                <h3 className="font-serif text-xl font-semibold">{entry.question}</h3>
              </dt>
              <dd className="mt-3 leading-relaxed text-[#0b2d45]/75">{entry.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-[#0b2d45]/65">
          Something not answered here? Call the desk on (614) 555 0142 — a person picks up, and it is
          usually Wes.
        </p>
      </div>
    </section>
  )
}
