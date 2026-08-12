const QUESTIONS = [
  {
    q: 'Does Weirline submit to the state on my behalf?',
    a: 'It prepares and archives the submittal, and where a state accepts an electronic file we generate it in that exact format. The submission itself is still yours: you review the report, you sign it, and Weirline records the receipt against the month. No software should be putting a licensed operator’s signature on anything.',
  },
  {
    q: 'What if my SCADA historian is twenty years old?',
    a: 'That is the normal case. We read day-files and tag exports from twelve historians including several that are long out of support, and if yours writes a nightly CSV to a folder we can almost certainly read it. Where there is genuinely no export, manual entry takes about four minutes a day and everything downstream works the same way.',
  },
  {
    q: 'Can I get my data back out?',
    a: 'Any time, without asking us. Every report, reading, lab result and submittal exports as CSV and as PDF from inside the app, and the ten-year archive exports as a single dated folder structure that opens on any computer. There is no export fee and no notice period.',
  },
  {
    q: 'Who actually answers the phone?',
    a: 'One of six people in Belfast, three of whom hold a current operator licence. There is no tiered support queue and no chatbot. During the first five days of the month — when reports are due — someone is on the phone from 6am Eastern, because that is when operators are in the plant.',
  },
  {
    q: 'We are a two-person shop. Is this too much software?',
    a: 'Two-person shops are who we built it for. The Wellhead tier is one page a day: what needs sampling, what came back from the lab, and what is due. Most of the platform is doing arithmetic and filing in the background, and you meet it once a month when the report is already written.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#FBF8F3]" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 id="faq-heading" className="text-4xl font-semibold tracking-tight lg:text-[42px]">
          Questions operators actually ask
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-[#08312F]/70">
          If yours is not here, call the office at (207) 555-0164 and ask. You will get an operator,
          not a sales engineer.
        </p>

        <dl className="mt-12 divide-y divide-[#08312F]/10 border-t border-[#08312F]/10">
          {QUESTIONS.map((item) => (
            <div key={item.q} data-testid="faq-item" className="py-8">
              <dt className="text-[19px] font-semibold tracking-tight">{item.q}</dt>
              <dd className="mt-3 text-[16px] leading-relaxed text-[#08312F]/70">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
