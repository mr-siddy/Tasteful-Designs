// Every photograph on this site is drawn here as vector art and handed to the
// page as a data: URI. The club runs its site off a single static bundle on the
// front-desk iPad, so nothing may be fetched at render time.

const INK = '#12141A'
const EMBER = '#E1552B'
const BONE = '#F7F3EC'
const STEEL = '#2F6C7A'
const BRASS = '#D9A441'

const uri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}`

const room = (body: string) =>
  uri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" width="640" height="420">
  <defs>
    <linearGradient id="air" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1D2129"/><stop offset="1" stop-color="${INK}"/>
    </linearGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${BONE}" stop-opacity=".28"/>
      <stop offset="1" stop-color="${BONE}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="640" height="420" fill="url(#air)"/>
  ${body}
  <rect width="640" height="420" fill="none" stroke="${INK}" stroke-width="8"/>
</svg>`)

const platformRoom = room(`
  <path d="M56 0h96l-34 190H30z" fill="url(#beam)"/>
  <path d="M276 0h96l-34 190h-88z" fill="url(#beam)"/>
  <path d="M496 0h96l-34 190h-88z" fill="url(#beam)"/>
  <rect x="0" y="286" width="640" height="134" fill="#171B22"/>
  <rect x="0" y="286" width="640" height="6" fill="#20252E"/>
  <g stroke="${EMBER}" stroke-width="3" fill="#241A12">
    <rect x="34" y="300" width="168" height="66" rx="4"/>
    <rect x="236" y="300" width="168" height="66" rx="4"/>
    <rect x="438" y="300" width="168" height="66" rx="4"/>
  </g>
  <g fill="#0D0F13">
    <rect x="52" y="292" width="14" height="34" rx="4"/><rect x="170" y="292" width="14" height="34" rx="4"/>
    <rect x="254" y="292" width="14" height="34" rx="4"/><rect x="372" y="292" width="14" height="34" rx="4"/>
  </g>
  <g fill="${BONE}" opacity=".85">
    <rect x="240" y="248" width="160" height="7" rx="3"/>
  </g>
  <g fill="${STEEL}">
    <rect x="236" y="232" width="12" height="40" rx="3"/><rect x="392" y="232" width="12" height="40" rx="3"/>
  </g>
  <circle cx="320" cy="196" r="26" fill="#2A303A"/>
  <rect x="300" y="204" width="40" height="56" rx="10" fill="#2A303A"/>
`)

const rackWall = room(`
  <rect x="0" y="300" width="640" height="120" fill="#171B22"/>
  <g fill="#242A34">
    <rect x="24" y="96" width="18" height="212"/><rect x="104" y="96" width="18" height="212"/>
    <rect x="184" y="96" width="18" height="212"/><rect x="264" y="96" width="18" height="212"/>
    <rect x="344" y="96" width="18" height="212"/><rect x="424" y="96" width="18" height="212"/>
    <rect x="504" y="96" width="18" height="212"/><rect x="584" y="96" width="18" height="212"/>
  </g>
  <g fill="${EMBER}">
    <rect x="24" y="188" width="98" height="9"/><rect x="184" y="188" width="98" height="9"/>
    <rect x="344" y="188" width="98" height="9"/><rect x="504" y="188" width="98" height="9"/>
  </g>
  <g fill="#2F3641">
    <rect x="24" y="88" width="598" height="14"/>
  </g>
  <g fill="${BONE}" opacity=".8">
    <rect x="30" y="150" width="86" height="6" rx="3"/><rect x="190" y="150" width="86" height="6" rx="3"/>
    <rect x="350" y="150" width="86" height="6" rx="3"/><rect x="510" y="150" width="86" height="6" rx="3"/>
  </g>
  <g fill="#0D0F13">
    <circle cx="72" cy="286" r="20"/><circle cx="232" cy="286" r="20"/>
    <circle cx="392" cy="286" r="20"/><circle cx="552" cy="286" r="20"/>
  </g>
`)

const engineRoom = room(`
  <rect x="0" y="296" width="640" height="124" fill="#151920"/>
  <path d="M0 296h640v10H0z" fill="${STEEL}" opacity=".4"/>
  <g fill="#232935">
    <rect x="40" y="238" width="180" height="18" rx="9"/>
    <rect x="230" y="238" width="180" height="18" rx="9"/>
  </g>
  <g fill="${STEEL}">
    <rect x="46" y="256" width="14" height="44"/><rect x="196" y="256" width="14" height="44"/>
    <rect x="236" y="256" width="14" height="44"/><rect x="386" y="256" width="14" height="44"/>
  </g>
  <g fill="none" stroke="${EMBER}" stroke-width="6">
    <circle cx="500" cy="216" r="52"/>
  </g>
  <g fill="#2A303A">
    <rect x="494" y="216" width="12" height="86"/><rect x="452" y="296" width="96" height="12" rx="6"/>
    <rect x="470" y="150" width="60" height="12" rx="6"/>
  </g>
  <g fill="${BRASS}" opacity=".9">
    <rect x="40" y="120" width="200" height="8" rx="4"/>
    <rect x="40" y="140" width="140" height="8" rx="4"/>
    <rect x="40" y="160" width="168" height="8" rx="4"/>
  </g>
  <g fill="#0D0F13">
    <rect x="300" y="330" width="260" height="18" rx="9"/>
    <rect x="300" y="360" width="180" height="18" rx="9"/>
  </g>
`)

const rebuildStudio = room(`
  <rect x="0" y="300" width="640" height="120" fill="#1A1F27"/>
  <rect x="0" y="0" width="640" height="300" fill="#20262F"/>
  <rect x="60" y="60" width="220" height="150" rx="6" fill="#171B22" stroke="${STEEL}" stroke-width="4"/>
  <g fill="${STEEL}" opacity=".55">
    <rect x="80" y="84" width="120" height="8" rx="4"/><rect x="80" y="104" width="170" height="8" rx="4"/>
    <rect x="80" y="124" width="96" height="8" rx="4"/><rect x="80" y="144" width="150" height="8" rx="4"/>
    <rect x="80" y="164" width="110" height="8" rx="4"/>
  </g>
  <rect x="330" y="232" width="250" height="30" rx="14" fill="${BONE}" opacity=".9"/>
  <g fill="#2A303A">
    <rect x="348" y="262" width="14" height="44"/><rect x="548" y="262" width="14" height="44"/>
  </g>
  <g fill="none" stroke="${EMBER}" stroke-width="7" stroke-linecap="round">
    <path d="M356 200c40-40 120-40 160 0"/>
    <path d="M372 214c34-28 96-28 128 0"/>
  </g>
  <circle cx="436" cy="168" r="22" fill="#2F3641"/>
`)

const boilerLounge = room(`
  <rect x="0" y="304" width="640" height="116" fill="#181C23"/>
  <rect x="410" y="70" width="170" height="234" rx="16" fill="#242A34"/>
  <circle cx="495" cy="140" r="42" fill="#171B22" stroke="${BRASS}" stroke-width="6"/>
  <g fill="${BRASS}"><rect x="491" y="104" width="8" height="26" rx="4"/></g>
  <rect x="430" y="212" width="130" height="14" rx="7" fill="#2F3641"/>
  <rect x="430" y="240" width="90" height="14" rx="7" fill="#2F3641"/>
  <rect x="52" y="212" width="290" height="70" rx="14" fill="${EMBER}" opacity=".85"/>
  <rect x="52" y="188" width="290" height="34" rx="14" fill="#C1441F"/>
  <g fill="#0D0F13">
    <rect x="70" y="282" width="16" height="26" rx="6"/><rect x="308" y="282" width="16" height="26" rx="6"/>
  </g>
  <rect x="120" y="150" width="150" height="10" rx="5" fill="${BONE}" opacity=".7"/>
  <rect x="120" y="122" width="96" height="10" rx="5" fill="${BONE}" opacity=".45"/>
  <circle cx="200" cy="196" r="14" fill="${BONE}" opacity=".9"/>
`)

const portrait = (bg: string, skin: string, accent: string) =>
  uri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 340" width="300" height="340">
  <rect width="300" height="340" fill="${bg}"/>
  <circle cx="150" cy="128" r="66" fill="${skin}"/>
  <path d="M150 208c62 0 108 38 116 92H34c8-54 54-92 116-92z" fill="${accent}"/>
  <path d="M84 118c0-44 30-70 66-70s66 26 66 70c0 8-6 10-10 4-12-20-40-26-70-20-24 5-38 14-42 22-4 8-10 4-10-6z" fill="${INK}" opacity=".82"/>
  <rect x="0" y="300" width="300" height="40" fill="${INK}" opacity=".28"/>
</svg>`)

export const ROOM_ART = {
  platform: platformRoom,
  racks: rackWall,
  engine: engineRoom,
  rebuild: rebuildStudio,
  lounge: boilerLounge,
}

export const COACH_ART = {
  nadia: portrait('#2F6C7A', '#C98B62', EMBER),
  marcus: portrait('#3A2F27', '#8A5C3B', BRASS),
  priya: portrait('#243040', '#B57A50', STEEL),
  tomas: portrait('#31201A', '#D0A07A', EMBER),
}
