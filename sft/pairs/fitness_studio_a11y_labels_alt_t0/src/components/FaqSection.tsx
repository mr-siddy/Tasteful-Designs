import { useState } from 'react'
import { SectionHeading } from './PageKit'
import { MinusIcon, PlusIcon } from './Icons'

const QUESTIONS = [
  {
    question: 'I have never lifted anything in my life. Am I going to be the worst person in the room?',
    answer:
      'Foundations exists precisely because that is the most common question we get. Everyone in your intake group is in their first eight weeks, everybody starts with an empty bar, and the average member is forty-one rather than twenty-four. The people on the platforms next to you were in exactly the same group at some point.',
  },
  {
    question: 'My back, shoulder or knee is already a problem. Should I sort that out first?',
    answer:
      'Usually not. Tell us at the intro and Priya will build around it rather than wait for it. About a third of members arrive with something sore and roughly forty a year come to us straight from a physical therapist. If we think something needs a clinician before it needs load, we will say so plainly and put it in writing.',
  },
  {
    question: 'How much of a session is actually coached?',
    answer:
      'All of it. Coached sessions run at one coach per six lifters and both coaches are on the floor for the whole hour — nobody is at the desk. In open gym there is always a coach within earshot who will fix a set-up if you ask, at no extra charge.',
  },
  {
    question: 'What if I can only train twice a week?',
    answer:
      'Then we write you a two day programme. The on-ramp is designed around three sessions, but plenty of members run it over ten weeks at two a week instead of eight at three. What does not work is booking three and turning up to one, so we would rather set it at two from the start.',
  },
  {
    question: 'Is there a contract, a joining fee or a minimum term?',
    answer:
      'None of the three. Memberships run month to month; cancel any time before the 25th and the following month does not bill. Freezing for illness, travel or a new baby is free and there is no limit on how often you do it.',
  },
  {
    question: 'What should I bring to the free intro?',
    answer:
      'Clothes you can move in and trainers with a flat sole if you own a pair — running shoes are fine for a first session. Bring any imaging reports or therapy notes you have. Do not bring a lifting belt; you will not need one for a long time and we will tell you when you do.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="questions" className="bg-[#F7F3EC]">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading
          eyebrow="Questions"
          title="What people ask before they book"
          blurb="Taken from the intro calls the front desk actually fields, answered the way the coaches answer them on the phone."
        />

        <div className="mt-10 flex flex-col gap-3">
          {QUESTIONS.map((item, index) => {
            const open = openIndex === index
            return (
              <div
                key={item.question}
                data-testid="faq-item"
                className="rounded-2xl border border-[#12141A]/10 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    data-testid="faq-question"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-bold text-[#12141A]"
                  >
                    {item.question}
                    {open ? (
                      <MinusIcon className="h-5 w-5 flex-none text-[#E1552B]" />
                    ) : (
                      <PlusIcon className="h-5 w-5 flex-none text-[#E1552B]" />
                    )}
                  </button>
                </h3>
                {open ? (
                  <p
                    data-testid="faq-answer"
                    className="border-t border-[#12141A]/10 px-6 py-5 text-sm leading-relaxed text-[#12141A]/75"
                  >
                    {item.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
