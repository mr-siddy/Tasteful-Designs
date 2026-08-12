import { PlanMark, ShieldIcon, ToothMark, WaveDivider } from './Icons'

const PLANS = ['Sound Health', 'Cascadia Dental', 'Evergreen PPO', 'Rainier Benefits', 'Northlake Trust']

const CREDENTIALS = [
  {
    title: 'Fellows of the Academy of General Dentistry',
    body: 'Both doctors hold FAGD standing, which takes five hundred hours of continuing education and a written exam.',
  },
  {
    title: 'CEREC Primemill on site',
    body: 'Crowns, onlays and veneers are designed, milled and glazed in the back room the same morning.',
  },
  {
    title: 'Washington State sedation permit',
    body: 'Nitrous oxide and oral sedation are available for anxious patients, at no charge on the first visit.',
  },
]

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="relative bg-[#0B2540] text-[#EFE6DA]">
      <WaveDivider className="absolute -top-[1px] left-0 h-10 w-full rotate-180 text-[#EFE6DA]" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2703D]">
            Billed directly, no paperwork on your side
          </p>
          <h2 id="trust-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The plans we file for you
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#BFCBD6]">
            We are in network with five of the plans most common in north Seattle, and we submit the
            claim on your behalf the same day you are seen. If your plan is not on this list we are
            happy to bill it as an out-of-network provider, and our posted prices already assume you
            are paying cash.
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[#EFE6DA]">
          {PLANS.map((plan) => (
            <li key={plan} className="opacity-80 transition hover:opacity-100">
              <PlanMark label={plan} />
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {CREDENTIALS.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C2703D]/20 text-[#E9A876]">
                {item.title.includes('CEREC') ? <ToothMark className="h-6 w-6" /> : <ShieldIcon className="h-6 w-6" />}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#BFCBD6]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
