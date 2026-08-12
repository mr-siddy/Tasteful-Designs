const FAQS = [
  {
    question: 'Do we need engineers to set this up?',
    answer:
      'For the first workflow, an engineer usually connects the systems, which takes about an hour. Everything after that is done by the operations team itself. Roughly four in five published workflows at our customers were built by someone who does not write code for a living.',
  },
  {
    question: 'What happens when a workflow half-finishes?',
    answer:
      'Stonecrop records what each step wrote before it stopped, so a retry resumes rather than restarts. Steps that cannot safely repeat are marked once-only and are skipped on replay, which is why a retried payment run does not pay anyone twice.',
  },
  {
    question: 'Can it run inside our own cloud?',
    answer:
      'On the Enterprise plan, yes. Stonecrop deploys into your account, holds your data inside your network boundary, and reports back only run metadata. Several of our regulated customers run it this way with no outbound access at all.',
  },
  {
    question: 'How do you handle a system we use that you have never heard of?',
    answer:
      'Every connector is built on the same public interface we use ourselves, so an internal tool with an HTTP endpoint takes an afternoon. If it only speaks to a database or a file drop, those are first-class step types too.',
  },
  {
    question: 'What does migrating actually look like?',
    answer:
      'Pick the run book that causes the most interruptions, not the most impressive one. Rebuild it in Stonecrop, dry-run it against last week, and run both in parallel for a cycle. Most teams retire the old process after a single clean parallel run.',
  },
  {
    question: 'If we leave, what happens to our workflows?',
    answer:
      'You export every workflow definition, every run record and the full audit history as portable files, and you keep read access for thirty days after the contract ends. Nothing about your process stays locked in here.',
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#F7F4EC] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            Questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            What operations leads ask us on the first call
          </h2>
        </div>

        <dl className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-semibold tracking-tight text-[#0B1F1B]">
                {faq.question}
              </dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-[#5C6B66]">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-14 text-[15px] text-[#4A5C57]">
          Still unanswered? Write to{' '}
          <a href="#contact" className="font-semibold text-[#0E5C53] underline underline-offset-4">
            hello@stonecrop.io
          </a>{' '}
          and a solutions engineer, not a form, will reply the same day.
        </p>
      </div>
    </section>
  )
}
