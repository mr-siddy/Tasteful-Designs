import { CheckIcon } from './icons'

function BoardArt() {
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="Jobs moving between technicians on the board">
      <rect width="360" height="220" rx="16" fill="#0b1220" />
      {[14, 128, 242].map((x, i) => (
        <g key={x}>
          <rect x={x} y="14" width="104" height="192" rx="12" fill="#111c30" stroke="#1e293b" />
          <rect x={x + 12} y="28" width="52" height="8" rx="4" fill="#475569" />
          {[0, 1, 2].map((row) => (
            <rect
              key={row}
              x={x + 12}
              y={50 + row * 48}
              width="80"
              height="36"
              rx="8"
              fill={i === 2 && row === 0 ? '#fbbf24' : '#0b1220'}
              stroke={i === 2 && row === 0 ? 'none' : '#243247'}
            />
          ))}
        </g>
      ))}
      <path d="M100 68c40 -10 60 -24 140 -2" stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeDasharray="6 6" strokeLinecap="round" />
      <circle cx="100" cy="68" r="5" fill="#22d3ee" />
      <circle cx="240" cy="66" r="5" fill="#22d3ee" />
    </svg>
  )
}

function RouteArt() {
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="A technician's route across town, restitched around a new call">
      <rect width="360" height="220" rx="16" fill="#0b1220" />
      <g stroke="#1e293b" strokeWidth="1.2">
        <path d="M0 55h360M0 110h360M0 165h360M90 0v220M180 0v220M270 0v220" />
      </g>
      <path
        d="M40 180C90 180 96 120 140 118s56 44 100 30 62-70 78-88"
        stroke="#fbbf24"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {[
        [40, 180],
        [140, 118],
        [240, 148],
        [318, 60],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="#0b1220" stroke="#fbbf24" strokeWidth="3" />
      ))}
      <circle cx="240" cy="148" r="15" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" />
      <rect x="196" y="24" width="130" height="26" rx="13" fill="#22d3ee" opacity="0.16" />
      <text x="261" y="41" textAnchor="middle" fontSize="11" fill="#67e8f9" fontFamily="ui-sans-serif, system-ui">
        no-heat call, 2:10pm
      </text>
    </svg>
  )
}

function PaperworkArt() {
  return (
    <svg viewBox="0 0 360 220" className="h-auto w-full" role="img" aria-label="A work order turning into a sent invoice">
      <rect width="360" height="220" rx="16" fill="#0b1220" />
      <rect x="26" y="30" width="126" height="160" rx="12" fill="#111c30" stroke="#1e293b" />
      <rect x="208" y="30" width="126" height="160" rx="12" fill="#111c30" stroke="#fbbf24" strokeWidth="1.6" />
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          <rect x="42" y={54 + row * 22} width={94 - row * 9} height="7" rx="3.5" fill="#334155" />
          <rect x="224" y={54 + row * 22} width={94 - row * 9} height="7" rx="3.5" fill="#3f3013" />
        </g>
      ))}
      <rect x="224" y="164" width="60" height="14" rx="7" fill="#fbbf24" />
      <path d="M160 110h40" stroke="#22d3ee" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M192 103l8 7-8 7" stroke="#22d3ee" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

const BLOCKS = [
  {
    eyebrow: 'One screen',
    title: 'The board is the product, not a report about it',
    body: 'Most field-service software makes dispatch guess: a calendar here, a job list there, a map in a fourth tab. Taskflow puts the technicians down the columns and the day down the rows, and every job card carries the address, the equipment history and the parts it needs. If a card is red, someone is going to be late — and you knew twenty minutes before the customer did.',
    bullets: [
      'Drive time between stops is drawn on the card, not buried in a tooltip',
      'Overtime turns a column amber before anybody has to approve it',
      'A tech who calls out is one drag away from a redistributed day',
    ],
    art: BoardArt,
  },
  {
    eyebrow: 'When the day changes',
    title: 'Rerouting a forty-stop afternoon in under a minute',
    body: 'A no-heat call lands at ten past two in February and everything downstream of it has to move. Taskflow ranks who can take it by licence, by parts on the van and by how much of their route it wrecks, then shows you the three least painful options with the knock-on delay spelled out in minutes. You pick one, and every affected customer gets a new arrival window by text before you set the phone down.',
    bullets: [
      'Emergency calls scored against skills, stock and route damage',
      'Customers re-texted automatically with the new window',
      'The bumped job lands first on tomorrow, not at the bottom of a list',
    ],
    art: RouteArt,
  },
  {
    eyebrow: 'After the truck leaves',
    title: 'The paperwork writes itself on the way back to the shop',
    body: 'The technician closes the job on the tailgate: parts pulled off truck stock, labour from the clock, photos of the install and the customer signature. By the time they are back on the highway the invoice exists, the warranty registration is filed against the serial number, and the accounting sync has already run. Nobody at the office retypes anything, and no ticket sits in a glovebox until Friday.',
    bullets: [
      'Truck stock decremented as parts are used, reordered at the threshold',
      'Invoices sent same-day, with card payment taken in the driveway',
      'Equipment history attached to the address forever, not to the tech',
    ],
    art: PaperworkArt,
  },
]

export default function DeepDive() {
  return (
    <section id="board" data-testid="deep-dive" className="bg-slate-900/60 py-24">
      <div className="mx-auto max-w-6xl space-y-20 px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">The dispatch board</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What it actually feels like on a bad Tuesday
          </h2>
        </div>

        {BLOCKS.map((block, index) => {
          const Art = block.art
          return (
            <article
              key={block.title}
              data-testid="deep-dive-block"
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">{block.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{block.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-slate-400">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-slate-300">
                      <span className="mt-0.5 text-amber-400">
                        <CheckIcon />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4">
                <Art />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
