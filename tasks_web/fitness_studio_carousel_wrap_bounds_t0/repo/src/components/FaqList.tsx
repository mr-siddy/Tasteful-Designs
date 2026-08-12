const QUESTIONS = [
  {
    q: 'I have never lifted anything. Am I going to be the worst person in the room?',
    a: 'Roughly a third of the members you will meet started in Foundations having never touched a barbell, several of them past fifty. Foundations exists precisely so your first six sessions happen with a coach two feet away and nobody watching.',
  },
  {
    q: 'Do I have to be fit before I join?',
    a: 'No, and we would gently push back on the idea. The first two weeks are deliberately loaded at about half of what you could manage, because the goal is a fourth week that does not hurt — not an impressive first day.',
  },
  {
    q: 'What if my schedule is unpredictable?',
    a: 'Sessions run 34 times a week from 5am to 8pm, and Open Training covers every staffed hour in between. Book in the app up to two weeks out, cancel up to two hours before with no penalty and no side-eye.',
  },
  {
    q: 'Is there a contract or an initiation fee?',
    a: 'Neither. Memberships are month to month, there is no joining fee, and you cancel by emailing the front desk. If you need to pause for travel, surgery or a hard month at work, we will hold your spot for up to eight weeks free.',
  },
  {
    q: 'I am coming back from an injury. Can you work around it?',
    a: 'Usually yes, and we will say so honestly if not. Bring whatever your physical therapist or surgeon wrote down; your coach will build the block around the restrictions and check in with your provider if you would like us to.',
  },
  {
    q: 'What does the free first session actually involve?',
    a: 'Sixty minutes: the seven-point movement screen, a resting heart rate, a few empty-bar reps, and twenty minutes of questions. Nothing heavy, nothing sold. You leave with a written summary whether or not you join.',
  },
  {
    q: 'Where do I park, and is there transit?',
    a: 'There is free street parking on Ellicott and a members lot behind the building with fourteen spaces. The CityLink Orange stops two blocks north at Hollins Market, and there is a covered bike rack inside the front door.',
  },
]

export default function FaqList() {
  return (
    <section id="faq" data-testid="faq" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime-700">Questions we get</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          The seven things people ask at the door
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          If yours is not here, call the desk on (410) 555-0188 — a coach answers, not a call centre.
        </p>

        <dl className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item" className="py-7">
              <dt className="text-lg font-bold tracking-tight text-slate-900">{item.q}</dt>
              <dd className="mt-3 text-base leading-relaxed text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
