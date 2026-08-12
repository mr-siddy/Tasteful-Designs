const BLOCKS = [
  {
    eyebrow: 'Morning',
    title: 'The board reads the whole day, not just the next hour',
    body: 'Rivetwork ranks the unassigned column by contract tier, equipment criticality and how long the customer has been waiting, then shows you the three technicians who can actually take it — licensed for the equipment, close enough to make the window, and holding the part on their truck. Dispatchers stop playing memory with fourteen names.',
    points: [
      'Drive-time estimates recalculated as jobs move',
      'License, EPA card and OSHA expiry surfaced on the card',
      'Overtime warnings before you commit the assignment',
    ],
  },
  {
    eyebrow: 'Midday',
    title: 'A callback never arrives as a surprise',
    body: 'When a customer calls back inside the warranty window, the board pulls the original visit forward with its photos, readings and the parts installed, and flags it as a return trip so it never quietly bills as new work. Owners get a weekly callback report by technician and by equipment class instead of a feeling.',
    points: [
      'Return-trip flagging tied to the original work order',
      'Callback rate by tech, trade and equipment age',
      'Warranty packets assembled from what the tech already captured',
    ],
  },
  {
    eyebrow: 'End of day',
    title: 'The paperwork is done before the truck is back at the yard',
    body: 'Techs close a call on the tailgate: readings entered, photos attached, customer signature captured, payment taken on a card reader that pairs with the phone. By the time the truck reaches the yard the invoice is in the accounting system and the job cost is already sitting against the right department.',
    points: [
      'Tap-to-pay and ACH from the truck',
      'Nightly sync to QuickBooks Desktop, Online or Sage Intacct',
      'Departmental job costing without a spreadsheet',
    ],
  },
]

export default function DispatchDeepDive() {
  return (
    <section id="dispatch" data-testid="dispatch-deep-dive" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F4FD8]">
            A day on the board
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0A1220] sm:text-4xl">
            What actually changes between 6am and the last call
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5B6577]">
            Software demos love the empty board. Here is the version with fourteen
            technicians, two no-shows and a walk-in emergency at 2:40 in the afternoon.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
              }`}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF9F1C]">
                  {block.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-[#0A1220] sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#5B6577]">{block.body}</p>
                <ul className="mt-6 space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-medium text-[#3D4658]">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-5 w-5 shrink-0"
                        role="img"
                        aria-label="Detail"
                      >
                        <circle cx="10" cy="10" r="9" fill="#EDF1FD" />
                        <path
                          d="M8.5 6.5 12 10l-3.5 3.5"
                          fill="none"
                          stroke="#1F4FD8"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <figure className="rounded-3xl border border-[#E4E8F2] bg-[linear-gradient(150deg,#F6F8FE_0%,#E9EEFB_100%)] p-6">
                <svg
                  viewBox="0 0 400 240"
                  className="h-56 w-full"
                  role="img"
                  aria-label={`Illustration for ${block.title}`}
                >
                  <rect x="0" y="0" width="400" height="240" rx="18" fill="#FFFFFF" />
                  <rect x="18" y="18" width="364" height="34" rx="10" fill="#EDF1FD" />
                  <circle cx="38" cy="35" r="8" fill="#1F4FD8" />
                  <rect x="56" y="29" width="130" height="8" rx="4" fill="#C9D5F3" />
                  <rect x="300" y="27" width="64" height="14" rx="7" fill="#FF9F1C" />
                  <rect x="18" y="66" width="172" height="76" rx="12" fill="#F6F7FB" />
                  <rect x="32" y="82" width="96" height="8" rx="4" fill="#C9D5F3" />
                  <rect x="32" y="98" width="140" height="6" rx="3" fill="#E1E7F5" />
                  <rect x="32" y="112" width="118" height="6" rx="3" fill="#E1E7F5" />
                  <rect x="210" y="66" width="172" height="76" rx="12" fill="#F6F7FB" />
                  <rect x="224" y="82" width="82" height="8" rx="4" fill="#FFD9A0" />
                  <rect x="224" y="98" width="140" height="6" rx="3" fill="#E1E7F5" />
                  <rect x="224" y="112" width="104" height="6" rx="3" fill="#E1E7F5" />
                  <rect x="18" y="156" width="364" height="66" rx="12" fill="#0A1220" />
                  <circle cx="52" cy="189" r="16" fill="#1F4FD8" />
                  <path
                    d="M44 189l6 6 12-13"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="84" y="176" width="150" height="9" rx="4.5" fill="#3A4E7A" />
                  <rect x="84" y="194" width="98" height="7" rx="3.5" fill="#22304F" />
                  <rect x="292" y="178" width="72" height="24" rx="12" fill="#FF9F1C" />
                </svg>
                <figcaption className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#5B6577]">
                  {block.eyebrow} — Rivetwork dispatch view
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
