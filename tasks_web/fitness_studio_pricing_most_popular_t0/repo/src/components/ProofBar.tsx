import { PartnerMark, ShieldIcon, StopwatchIcon } from './Icons'
import { Shell } from './PageKit'

const CREDENTIALS = [
  'USA Weightlifting Level 2 club',
  'Two staff physiotherapists on site',
  'Precision Nutrition certified coaching',
  'Registered with the Ironside Small Business Alliance',
]

const PARTNERS = ['ROGUE SUPPLY', 'CANAL PHYSIO', 'IRONSIDE FC', 'NORTHBANK RUN CO']

export default function ProofBar() {
  return (
    <section id="proof" className="border-b border-[#E2D6C6] bg-[#F2EAE0] py-14">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#7A6E60]">
              Coached since 2019, and we keep the receipts
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#4A4438]">
              Every credential below is current, every number is pulled from our own attendance and retest
              records, and every coach on the floor has been through the same internal apprenticeship.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((item) => (
                <li key={item} data-testid="credential" className="flex items-start gap-2.5 text-sm text-[#4A4438]">
                  <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#12554D]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div data-testid="proof-stat" className="rounded-2xl bg-[#14181D] px-5 py-6 text-[#FBF7F1]">
                <p className="text-3xl font-black tracking-tight">4.9</p>
                <p className="mt-1 text-xs leading-snug text-[#E2D6C6]">average member review score</p>
              </div>
              <div data-testid="proof-stat" className="rounded-2xl bg-[#12554D] px-5 py-6 text-[#FBF7F1]">
                <p className="text-3xl font-black tracking-tight">91%</p>
                <p className="mt-1 text-xs leading-snug text-[#E2D6C6]">still training after twelve months</p>
              </div>
              <div data-testid="proof-stat" className="rounded-2xl bg-[#D9481F] px-5 py-6 text-white">
                <p className="text-3xl font-black tracking-tight">5</p>
                <p className="mt-1 text-xs leading-snug text-white/85">full-time coaches, no contractors</p>
              </div>
              <div data-testid="proof-stat" className="rounded-2xl border border-[#E2D6C6] bg-[#FBF7F1] px-5 py-6">
                <p className="text-3xl font-black tracking-tight text-[#14181D]">63</p>
                <p className="mt-1 text-xs leading-snug text-[#7A6E60]">coached sessions on the weekly timetable</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-[#7A6E60]">
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
                <StopwatchIcon className="h-5 w-5" />
                Trusted by
              </span>
              {PARTNERS.map((label) => (
                <PartnerMark key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </Shell>
    </section>
  )
}
