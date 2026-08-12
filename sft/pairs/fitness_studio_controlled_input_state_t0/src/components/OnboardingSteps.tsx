const STEPS = [
  {
    title: 'Send the trial pass form',
    time: 'Two minutes',
    body: 'Name, email, and one line about what you are chasing. Priya reads it the same day and answers from her own inbox, not a booking robot.',
  },
  {
    title: 'Come in for the movement screen',
    time: 'Fifty minutes',
    body: 'Barefoot, no lifting. We watch you squat, hinge, push, pull and walk, and we ask about every injury you can remember, including the one from netball in 2009.',
  },
  {
    title: 'Train your first written block',
    time: 'Fourteen days',
    body: 'Unlimited Strength Hall and Engine Room while the trial runs. Your program is on your platform each session with the weights already filled in.',
  },
  {
    title: 'Sit down and decide',
    time: 'Twenty minutes',
    body: 'At the end of the fortnight we go through what changed and you pick a tier, or you do not. Nobody will call you about it afterwards.',
  },
]

export function OnboardingSteps() {
  return (
    <section id="start" className="bg-[#EAE5DA]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#D9622B]">
            From the form to your first block
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Four steps, and none of them is a sales call
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4C5B54]">
            We have deliberately made joining slow. Two weeks is long enough to find out whether you
            like getting up at quarter to six, and short enough that nobody has to sign anything to
            find out.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              data-testid="onboarding-step"
              className="relative rounded-3xl border border-[#10161C]/10 bg-[#F4F1EA] p-7"
            >
              <span className="text-5xl font-black leading-none text-[#D9622B]/25">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-black tracking-tight">{step.title}</h3>
              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#6E7A72]">
                {step.time}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#4C5B54]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
