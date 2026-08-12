import { FloorPlan } from './Icons'
import { SectionHeading, Shell } from './PageKit'

const KIT = [
  { area: 'Strength floor', detail: 'Twelve platforms, twelve calibrated bars, 4,800 kg of plates, five squat racks' },
  { area: 'Conditioning bay', detail: 'Six rowers, four bikes, two ski ergs, a 30 m turf lane and two sleds' },
  { area: 'Accessories', detail: 'Dumbbells to 50 kg, kettlebells to 48 kg, rings, boxes and a full band wall' },
  { area: 'Rehab annex', detail: 'Treatment table, reformer, isometric rig and a private space with a door that shuts' },
  { area: 'Changing rooms', detail: 'Six showers, day lockers, towels included, no queue at 6:00am' },
  { area: 'The rest of it', detail: 'Coffee, a canal-side bench, a bike rack under cover and a lost-property bin' },
]

const HOURS = [
  { day: 'Monday – Thursday', staffed: '5:30am – 8:30pm', note: 'Coached sessions on the hour from 6:00am' },
  { day: 'Friday', staffed: '5:30am – 7:00pm', note: 'Open Floor extends to 8:00pm' },
  { day: 'Saturday', staffed: '7:30am – 1:00pm', note: 'Engine Room 8:00am, Masters 10:30am' },
  { day: 'Sunday', staffed: '8:30am – 12:30pm', note: 'Hybrid Athlete 9:30am, then open training' },
]

export default function FacilityTour() {
  return (
    <section id="studio" className="bg-[#FBF7F1] py-20 sm:py-24">
      <Shell>
        <SectionHeading
          eyebrow="The studio"
          title="6,200 square feet on the canal side of Foundry Row"
          lede="It used to be a brass foundry, which is why the ceilings are eleven metres up and the floor takes a dropped deadlift without complaint. Here is exactly what is in the room and when a coach is in it."
          tone="pine"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <FloorPlan className="w-full rounded-3xl border border-[#E2D6C6] shadow-lg" />
            <p className="mt-4 text-sm text-[#7A6E60]">
              The strength floor and conditioning bay run at the same time, so a coached session never takes the
              whole room away from Open Floor members.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black tracking-tight text-[#14181D]">What is actually in the building</h3>
            <ul className="mt-5 divide-y divide-[#E2D6C6] border-y border-[#E2D6C6]">
              {KIT.map((item) => (
                <li key={item.area} data-testid="kit-row" className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <span className="text-sm font-bold text-[#14181D]">{item.area}</span>
                  <span className="text-sm leading-relaxed text-[#4A4438]">{item.detail}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-black tracking-tight text-[#14181D]">Staffed hours</h3>
            <table className="mt-5 w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#E2D6C6] text-[11px] uppercase tracking-[0.16em] text-[#7A6E60]">
                  <th scope="col" className="py-3 font-bold">Day</th>
                  <th scope="col" className="py-3 font-bold">Coach on the floor</th>
                  <th scope="col" className="py-3 font-bold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {HOURS.map((row) => (
                  <tr key={row.day} data-testid="hours-row" className="border-b border-[#F2EAE0]">
                    <th scope="row" className="py-3 pr-3 font-semibold text-[#14181D]">{row.day}</th>
                    <td className="py-3 pr-3 text-[#4A4438]">{row.staffed}</td>
                    <td className="py-3 text-[#7A6E60]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Shell>
    </section>
  )
}
