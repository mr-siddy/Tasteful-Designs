import { HeartHandIcon, PoundIcon, ShieldCheck, ToothIcon } from './Icons'

const TREATMENTS = [
  {
    name: 'New patient examination',
    price: '£68',
    duration: '45 minutes',
    blurb:
      'A full soft-tissue and gum assessment, small x-rays where they are needed, and a written plan with every option priced. You leave with the plan on paper whether or not you book anything.',
  },
  {
    name: 'Hygienist appointment',
    price: '£75',
    duration: '40 minutes',
    blurb:
      'Airflow polish and hand scaling with Rosa or Nadia. Most people come twice a year; if your gums are settled we will tell you to stretch it to nine months rather than sell you another visit.',
  },
  {
    name: 'White filling',
    price: '£145 — £220',
    duration: '50 minutes',
    blurb:
      'Composite matched to the tooth beside it, shaped and cured in one visit. The price moves with how many surfaces are involved, and we quote the exact figure before we pick up a drill.',
  },
  {
    name: 'Crown, made in-house',
    price: '£640',
    duration: 'Two visits',
    blurb:
      'Our technician Bram mills and stains it in the lab behind reception, so the fit gets checked twice by the same pair of hands that made it. No posting boxes to a lab three counties away.',
  },
  {
    name: 'Single dental implant',
    price: '£2,150',
    duration: 'Three visits over 14 weeks',
    blurb:
      'Placement, healing abutment and the final crown, all done here by Dr. Ashworth. Bone grafting, if the scan says you need it, is quoted separately and never bundled in without asking.',
  },
  {
    name: 'Root canal treatment',
    price: '£420 — £695',
    duration: '90 minutes',
    blurb:
      'Done under a rubber dam with a microscope, front teeth at the lower end and molars at the top. We finish in one sitting wherever the anatomy allows so you are not carrying a temporary around.',
  },
  {
    name: 'Emergency appointment',
    price: '£55',
    duration: '20 minutes',
    blurb:
      'The 8am weekday window. The fee covers getting you out of pain and a decision about what happens next; anything we do on the day comes off the cost of the treatment that follows.',
  },
  {
    name: 'Denture repair, same day',
    price: '£90',
    duration: 'In by 11am, out by 4pm',
    blurb:
      'A crack, a lost tooth off the plate, a reline that has gone loose. Drop it at reception in the morning and Bram has it back on the counter the same afternoon.',
  },
]

const NOTES = [
  { icon: <PoundIcon className="h-5 w-5" />, text: 'These are the prices. There is no separate private list and no consultation fee for existing patients.' },
  { icon: <ShieldCheck className="h-5 w-5" />, text: 'Written quotes are valid for six months, and we will not start work that was not on the quote.' },
  { icon: <HeartHandIcon className="h-5 w-5" />, text: 'Interest-free payment over ten months on anything above £500, arranged at reception.' },
]

export function TreatmentPriceList() {
  return (
    <section id="treatments" className="bg-[#FAF6F1] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#3FA394]/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2A7C70]">
            <ToothIcon className="h-4 w-4" />
            What things cost
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            The whole price list, printed where you can read it
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            Most practices make you ring up and ask. We would rather you knew before you walked in, so here is
            everything we do most weeks with the number beside it. If a treatment is not on this list it is because we
            do it rarely enough that the honest answer is "come in and we will scan it first".
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {TREATMENTS.map((item) => (
            <li
              key={item.name}
              data-testid="treatment-row"
              className="rounded-2xl border border-[#0F2E4A]/10 bg-white p-6 shadow-sm shadow-[#0F2E4A]/5 transition hover:border-[#3FA394]/50 hover:shadow-md"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#0F2E4A]">{item.name}</h3>
                <span className="shrink-0 rounded-full bg-[#0F2E4A]/6 px-3 py-1 text-sm font-bold text-[#0F2E4A]">
                  {item.price}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[#3FA394]">{item.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5A64]">{item.blurb}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-4 rounded-2xl border border-[#0F2E4A]/10 bg-[#F1E7DA] p-7 md:grid-cols-3">
          {NOTES.map((note) => (
            <li key={note.text} className="flex gap-3 text-sm leading-relaxed text-[#3B4A54]">
              <span className="mt-0.5 shrink-0 text-[#F2683C]">{note.icon}</span>
              {note.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
