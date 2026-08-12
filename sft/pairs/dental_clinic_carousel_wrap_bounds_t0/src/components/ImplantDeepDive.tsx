import { AnchorIcon, ClockIcon, ShieldCheck } from './Icons'

function ScanPanel() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Diagram of a cone-beam scan showing bone depth beneath a missing lower molar">
      <rect x="0" y="0" width="320" height="240" rx="20" fill="#0F2E4A" />
      <path d="M24 168h272" stroke="#3FA394" strokeWidth="2" opacity="0.5" />
      <path d="M24 40h272M24 76h272M24 112h272" stroke="#FAF6F1" strokeWidth="1" opacity="0.12" />
      <path d="M52 168c0-46 26-78 60-78s60 32 60 78" fill="none" stroke="#7FC4B8" strokeWidth="3" />
      <rect x="196" y="96" width="18" height="72" rx="9" fill="#F2683C" />
      <path d="M205 96v-24" stroke="#F2683C" strokeWidth="4" strokeLinecap="round" />
      <circle cx="205" cy="66" r="10" fill="#FAF6F1" />
      <path d="M236 100v68" stroke="#F7C74E" strokeWidth="2" strokeDasharray="6 5" />
      <text x="248" y="138" fontSize="13" fill="#F7C74E" fontFamily="ui-sans-serif, system-ui">
        11.4mm
      </text>
      <text x="30" y="212" fontSize="12" fill="#B7CFD9" fontFamily="ui-sans-serif, system-ui">
        Saltmere · cone-beam CT · lower left 6
      </text>
    </svg>
  )
}

function LabPanel() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Illustration of the in-house milling machine cutting a crown from a ceramic block">
      <rect x="0" y="0" width="320" height="240" rx="20" fill="#EDF3F2" />
      <rect x="46" y="52" width="228" height="140" rx="14" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="3" />
      <rect x="70" y="76" width="180" height="70" rx="8" fill="#CFE4E1" />
      <rect x="132" y="94" width="56" height="40" rx="6" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="2.4" />
      <path d="M160 76v18" stroke="#F2683C" strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="70" r="8" fill="#F2683C" />
      <path d="M70 164h180" stroke="#0F2E4A" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <circle cx="92" cy="176" r="5" fill="#3FA394" />
      <circle cx="110" cy="176" r="5" fill="#F7C74E" />
      <path d="M22 210h276" stroke="#3FA394" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function CalendarPanel() {
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" role="img" aria-label="Fourteen week treatment calendar with three appointments marked">
      <rect x="0" y="0" width="320" height="240" rx="20" fill="#F1E7DA" />
      <rect x="34" y="40" width="252" height="164" rx="14" fill="#FAF6F1" stroke="#0F2E4A" strokeWidth="2.6" />
      <path d="M34 74h252" stroke="#0F2E4A" strokeWidth="2.6" />
      <path d="M84 40V26M236 40V26" stroke="#0F2E4A" strokeWidth="4" strokeLinecap="round" />
      {[0, 1, 2, 3, 4, 5, 6].map((c) =>
        [0, 1, 2].map((r) => (
          <circle key={`${c}-${r}`} cx={60 + c * 33} cy={100 + r * 36} r="8" fill="#CFE4E1" />
        )),
      )}
      <circle cx="60" cy="100" r="12" fill="#F2683C" />
      <circle cx="192" cy="136" r="12" fill="#F2683C" />
      <circle cx="258" cy="172" r="12" fill="#F2683C" />
      <path d="M60 100h132M192 136h66" stroke="#F2683C" strokeWidth="2.4" strokeDasharray="5 5" />
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'Step one — the scan',
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'We look at the bone before we promise you anything',
    body: 'Every implant conversation starts with a cone-beam scan taken in the room off reception, not with a price. It tells us how much bone is under the gap and how close the nerve runs. About one enquiry in six ends with us saying the bone is not there yet and a graft has to come first — we would rather tell you that on day one than after you have paid a deposit. You get the scan images on a stick to take away, whether you go ahead with us or not.',
    bullets: ['Scan and written report: £120, deducted if you proceed', 'Reported within three working days', 'Images are yours to take to a second opinion'],
    panel: <ScanPanel />,
  },
  {
    eyebrow: 'Step two — the lab',
    icon: <AnchorIcon className="h-5 w-5" />,
    title: 'The crown is made twelve feet from the chair it goes into',
    body: 'Bram Ostler has run our lab since 2011 and mills every crown, bridge and denture we fit. That means the technician who made it can walk through and look at it in your mouth if the shade is a shred off, and a remake is a Tuesday afternoon rather than a fortnight in the post. It is also why our crown price has not moved since 2023 while the practices around us have put theirs up twice.',
    bullets: ['Zirconia and e.max milled on site', 'Shade matched in daylight by the window, not under a lamp', 'Remakes are free and usually same-week'],
    panel: <LabPanel />,
  },
  {
    eyebrow: 'Step three — the wait',
    icon: <ClockIcon className="h-5 w-5" />,
    title: 'Fourteen weeks, and you see the same dentist at all of them',
    body: 'Placement takes about an hour and most people go back to work the next morning. Then the bone needs roughly twelve weeks to grip the post, and there is nothing anyone can do to hurry that part. We check you at four weeks and eight weeks so nothing drifts, and the temporary you wear in the meantime is made properly rather than being a stopgap you are embarrassed by.',
    bullets: ['One surgeon from scan to final fit', 'Two free healing checks in between', 'Ten-year guarantee on the fixture itself'],
    panel: <CalendarPanel />,
  },
]

export function ImplantDeepDive() {
  return (
    <section id="implants" className="bg-[#FAF6F1] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2A7C70]">Implants, start to finish</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2E4A] sm:text-4xl">
            What actually happens between the gap and the tooth
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B4A54]">
            Implant marketing is mostly photographs of people laughing in kitchens. Here is the unglamorous version:
            three stages, fourteen weeks, one surgeon, and the two points where we might tell you no.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, i) => (
            <article
              key={block.title}
              data-testid="implant-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[#0F2E4A]/6 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2E4A]">
                  <span className="text-[#F2683C]">{block.icon}</span>
                  {block.eyebrow}
                </p>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-[#0F2E4A] sm:text-3xl">{block.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#3B4A54]">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm text-[#3B4A54]">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#3FA394]" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-3xl border border-[#0F2E4A]/10 bg-white p-3 shadow-lg shadow-[#0F2E4A]/5">
                {block.panel}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
