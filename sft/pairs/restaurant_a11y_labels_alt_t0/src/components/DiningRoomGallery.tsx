import { useState } from 'react'

/** No network is available, so every photograph on this page is drawn inline and inlined as a data URI. */
const photograph = (body: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">${body}</svg>`,
  )}`

const ROOMS = [
  {
    id: 'hearth',
    name: 'The Hearth',
    seats: 'Six stools at the fire',
    caption:
      'The whole kitchen is one twelve-foot hearth of white oak and apple, open to the room. Six stools face it across the pass, close enough that you will smell the wood change when Marisol feeds it at seven.',
    alt: 'The Hearth — a twelve-foot open oak fire with iron grill bars lowered over a bed of embers and pans resting on the shelf above',
    image: photograph(
      `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#20424c"/><stop offset="1" stop-color="#08161b"/></linearGradient>
       <linearGradient id="f" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffd479"/><stop offset="0.6" stop-color="#d2601a"/><stop offset="1" stop-color="#8f2f0c"/></linearGradient></defs>
       <rect width="640" height="420" fill="url(#g)"/>
       <rect x="60" y="70" width="520" height="280" rx="14" fill="#061216"/>
       <ellipse cx="320" cy="330" rx="250" ry="80" fill="#d2601a" opacity="0.35"/>
       <g fill="#2b1a12"><rect x="150" y="286" width="340" height="18" rx="7"/><rect x="176" y="266" width="288" height="16" rx="7"/></g>
       <path d="M320 118c40 52 66 78 66 116a66 66 0 0 1-132 0c0-38 26-64 66-116Z" fill="url(#f)"/>
       <path d="M320 190c18 26 30 38 30 58a30 30 0 0 1-60 0c0-20 12-32 30-58Z" fill="#ffeab5"/>
       <g stroke="#8fb8ae" stroke-width="6" stroke-linecap="round"><path d="M96 236h448"/><path d="M96 236v40M544 236v40"/></g>
       <g fill="#8fb8ae" opacity="0.85"><rect x="420" y="188" width="76" height="30" rx="12"/><circle cx="150" cy="204" r="13"/><rect x="190" y="180" width="20" height="40" rx="8"/></g>`,
    ),
  },
  {
    id: 'counter',
    name: 'The Oyster Counter',
    seats: 'Fourteen seats, walk-in only',
    caption:
      'Fourteen zinc-topped seats along a bed of crushed ice, shucked to order from noon on Saturday and Sunday. No reservations here — sit down, point at what you want, and Dell will keep count on the paper in front of you.',
    alt: 'The Oyster Counter — fourteen zinc-topped stools along a bed of crushed ice stacked with oysters and lemon halves',
    image: photograph(
      `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8efee"/><stop offset="1" stop-color="#a9c3c1"/></linearGradient></defs>
       <rect width="640" height="420" fill="url(#g)"/>
       <rect x="0" y="250" width="640" height="170" fill="#7d9a99"/>
       <rect x="40" y="212" width="560" height="46" rx="10" fill="#dfe7e6"/>
       <g fill="#f4f7f6"><path d="M60 250h520l-24 44H84Z"/></g>
       <g fill="#c9d6d4" stroke="#8aa3a1" stroke-width="2">
         <ellipse cx="140" cy="266" rx="30" ry="19"/><ellipse cx="220" cy="272" rx="30" ry="19"/><ellipse cx="300" cy="264" rx="30" ry="19"/>
         <ellipse cx="380" cy="272" rx="30" ry="19"/><ellipse cx="460" cy="266" rx="30" ry="19"/><ellipse cx="540" cy="272" rx="30" ry="19"/>
       </g>
       <g fill="#f0c14b"><circle cx="330" cy="316" r="17"/><circle cx="366" cy="322" r="13"/></g>
       <g fill="#0b2027" opacity="0.75"><rect x="92" y="330" width="34" height="70" rx="12"/><rect x="256" y="330" width="34" height="70" rx="12"/><rect x="420" y="330" width="34" height="70" rx="12"/></g>
       <g stroke="#0b2027" stroke-opacity="0.25" stroke-width="3"><path d="M0 190h640"/><path d="M120 40v150M320 40v150M520 40v150"/></g>`,
    ),
  },
  {
    id: 'shed',
    name: 'The Cutting Shed',
    seats: 'Twenty-two tables',
    caption:
      'The main room, which was where they cut and dressed granite until 1962. The saw marks are still in the west wall, the tables are butcher paper over oak, and the noise is on purpose.',
    alt: 'The Cutting Shed — the main dining room with rough granite walls, twenty-two paper-topped tables and low pendant lamps',
    image: photograph(
      `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4efe4"/><stop offset="1" stop-color="#cfc4b0"/></linearGradient></defs>
       <rect width="640" height="420" fill="url(#g)"/>
       <g fill="#bdb2a0" opacity="0.85">
         <rect x="0" y="30" width="200" height="70"/><rect x="210" y="30" width="230" height="70"/><rect x="450" y="30" width="190" height="70"/>
         <rect x="0" y="108" width="150" height="70"/><rect x="160" y="108" width="260" height="70"/><rect x="430" y="108" width="210" height="70"/>
       </g>
       <g stroke="#8a7f6c" stroke-width="2" opacity="0.6"><path d="M0 100h640M0 178h640"/></g>
       <g fill="#0b2027"><rect x="120" y="60" width="6" height="60"/><rect x="320" y="60" width="6" height="76"/><rect x="520" y="60" width="6" height="52"/></g>
       <g fill="#f0a35e"><circle cx="123" cy="130" r="18"/><circle cx="323" cy="146" r="18"/><circle cx="523" cy="122" r="18"/></g>
       <g fill="#fdfbf6" stroke="#b9ad99" stroke-width="2">
         <rect x="60" y="230" width="180" height="86" rx="6"/><rect x="270" y="252" width="180" height="86" rx="6"/><rect x="470" y="228" width="140" height="86" rx="6"/>
       </g>
       <g fill="#3c3226"><rect x="86" y="322" width="22" height="60" rx="8"/><rect x="196" y="322" width="22" height="60" rx="8"/><rect x="300" y="344" width="22" height="60" rx="8"/><rect x="410" y="344" width="22" height="60" rx="8"/></g>`,
    ),
  },
  {
    id: 'terrace',
    name: 'The Harbour Terrace',
    seats: 'Thirty seats, May to October',
    caption:
      'Thirty seats out on the pier deck from the first warm week in May until the lights come down in October. Blankets in the crate by the door, and the boats you are eating from tied up forty feet away.',
    alt: 'The Harbour Terrace — a pier deck of outdoor tables under strung lights with fishing boats moored behind at dusk',
    image: photograph(
      `<defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f5b06a"/><stop offset="0.55" stop-color="#8f6c8e"/><stop offset="1" stop-color="#2b3f57"/></linearGradient></defs>
       <rect width="640" height="420" fill="url(#s)"/>
       <circle cx="512" cy="120" r="34" fill="#ffe6b0" opacity="0.9"/>
       <rect x="0" y="240" width="640" height="180" fill="#22384f"/>
       <g fill="#31506b" opacity="0.8"><path d="M0 258h640v10H0zM0 286h640v8H0zM0 312h640v6H0z"/></g>
       <g fill="#0b2027"><path d="M96 236h120l-16 32H112zM104 200h12v36h-12z"/><path d="M400 244h150l-20 30H420zM410 206h10v38h-10z"/></g>
       <g stroke="#f3ece0" stroke-width="3" opacity="0.9"><path d="M20 150c80 40 160 40 240 0s160-40 240 0 100 30 120 20"/></g>
       <g fill="#ffe6b0"><circle cx="90" cy="166" r="7"/><circle cx="200" cy="176" r="7"/><circle cx="320" cy="166" r="7"/><circle cx="440" cy="176" r="7"/><circle cx="560" cy="168" r="7"/></g>
       <rect x="0" y="330" width="640" height="90" fill="#3a2c22"/>
       <g fill="#f3ece0" opacity="0.92"><rect x="70" y="300" width="130" height="14" rx="6"/><rect x="270" y="308" width="130" height="14" rx="6"/><rect x="460" y="298" width="130" height="14" rx="6"/></g>
       <g fill="#22384f"><rect x="120" y="314" width="14" height="46" rx="6"/><rect x="320" y="322" width="14" height="46" rx="6"/><rect x="510" y="312" width="14" height="46" rx="6"/></g>`,
    ),
  },
  {
    id: 'cellar',
    name: 'The Cellar',
    seats: 'Twelve at one table',
    caption:
      'Downstairs in the cut stone, twelve chairs around a single oak table with Tobias’s racks on three sides. Private dining, one seating a night, and the only room in the building that is genuinely quiet.',
    alt: 'The Cellar — a private stone room with one long oak table for twelve, candles down the middle and wine racks on three walls',
    image: photograph(
      `<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#120d09"/></linearGradient></defs>
       <rect width="640" height="420" fill="url(#g)"/>
       <g fill="#3b2f22" opacity="0.9">
         <rect x="20" y="40" width="150" height="240" rx="8"/><rect x="470" y="40" width="150" height="240" rx="8"/>
       </g>
       <g fill="#0f0b07">
         <circle cx="60" cy="80" r="12"/><circle cx="100" cy="80" r="12"/><circle cx="140" cy="80" r="12"/>
         <circle cx="60" cy="130" r="12"/><circle cx="100" cy="130" r="12"/><circle cx="140" cy="130" r="12"/>
         <circle cx="60" cy="180" r="12"/><circle cx="100" cy="180" r="12"/><circle cx="140" cy="180" r="12"/>
         <circle cx="510" cy="80" r="12"/><circle cx="550" cy="80" r="12"/><circle cx="590" cy="80" r="12"/>
         <circle cx="510" cy="130" r="12"/><circle cx="550" cy="130" r="12"/><circle cx="590" cy="130" r="12"/>
         <circle cx="510" cy="180" r="12"/><circle cx="550" cy="180" r="12"/><circle cx="590" cy="180" r="12"/>
       </g>
       <ellipse cx="320" cy="250" rx="170" ry="60" fill="#f0a35e" opacity="0.18"/>
       <rect x="180" y="248" width="280" height="120" rx="10" fill="#54402c"/>
       <rect x="196" y="238" width="248" height="18" rx="8" fill="#6b533a"/>
       <g fill="#ffe6b0"><circle cx="260" cy="232" r="8"/><circle cx="320" cy="226" r="8"/><circle cx="380" cy="232" r="8"/></g>
       <g fill="#f3ece0" opacity="0.85"><circle cx="240" cy="268" r="14"/><circle cx="320" cy="264" r="14"/><circle cx="400" cy="268" r="14"/></g>
       <g stroke="#8fb8ae" stroke-width="3" opacity="0.4"><path d="M0 300h640"/></g>`,
    ),
  },
]

export default function DiningRoomGallery() {
  const [current, setCurrent] = useState(0)
  const room = ROOMS[current]

  const step = (delta: number) => setCurrent((index) => (index + delta + ROOMS.length) % ROOMS.length)

  return (
    <section id="rooms" className="bg-[#0b2027] text-[#f3ece0]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0a35e]">Five rooms</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Pick where you want to sit
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#f3ece0]/75">
              The building holds five very different rooms and they are not interchangeable. Have a look before you
              book — the request form below lets you name the one you want, and we will get you into it if we can.
            </p>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#f3ece0]/50">
            {current + 1} of {ROOMS.length}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <figure className="overflow-hidden rounded-3xl border border-[#f3ece0]/15 bg-[#071319] shadow-2xl">
            <img
              data-testid="gallery-stage"
              src={room.image}
              alt={room.alt}
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-[#f3ece0]/10 px-6 py-5">
              <div>
                <h3 className="font-serif text-2xl font-semibold">{room.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#f0a35e]">{room.seats}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  data-testid="gallery-nav"
                  aria-label="Previous room"
                  onClick={() => step(-1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#f3ece0]/25 transition hover:border-[#f0a35e] hover:text-[#f0a35e]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M14.5 5.5 8 12l6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  data-testid="gallery-nav"
                  aria-label="Next room"
                  onClick={() => step(1)}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#f3ece0]/25 transition hover:border-[#f0a35e] hover:text-[#f0a35e]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M9.5 5.5 16 12l-6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </figcaption>
          </figure>

          <div>
            <p data-testid="gallery-caption" className="text-base leading-relaxed text-[#f3ece0]/80">
              {room.caption}
            </p>
            <ul className="mt-8 grid grid-cols-5 gap-3">
              {ROOMS.map((entry, index) => (
                <li key={entry.id}>
                  <button
                    type="button"
                    data-testid="room-shot-button"
                    aria-current={index === current}
                    onClick={() => setCurrent(index)}
                    className={`block w-full overflow-hidden rounded-xl border-2 transition ${
                      index === current ? 'border-[#f0a35e]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      data-testid="room-shot"
                      src={entry.image}
                      alt={entry.alt}
                      className="aspect-square w-full object-cover"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <dl className="mt-8 space-y-4 border-t border-[#f3ece0]/15 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[#f3ece0]/55">Reservations open</dt>
                <dd className="font-medium">30 days out, 9:00 am</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#f3ece0]/55">Walk-in seats</dt>
                <dd className="font-medium">Counter and terrace</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#f3ece0]/55">Step-free access</dt>
                <dd className="font-medium">All but the cellar</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
