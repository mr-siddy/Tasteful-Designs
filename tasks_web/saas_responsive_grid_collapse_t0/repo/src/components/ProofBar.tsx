const LABELS = [
  { name: 'Cormorant Workwear', note: 'Fall River, MA' },
  { name: 'Pell Street Denim', note: 'Providence, RI' },
  { name: 'Juniper Tide', note: 'Asheville, NC' },
  { name: 'Bright Anvil Athletics', note: 'Chicago, IL' },
  { name: 'Sable & Stone Knitwear', note: 'Los Angeles, CA' },
]

const NUMBERS = [
  { figure: '1.4M', label: 'units planned on Grainline boards since 2022' },
  { figure: '17%', label: 'less fabric waste on a floor’s first full season' },
  { figure: '4 hrs', label: 'of Friday paperwork gone from the average floor' },
]

function Wordmark({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .filter((w) => w[0] && w[0] !== '&')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  return (
    <svg viewBox="0 0 44 44" role="img" aria-label={name} className="h-10 w-10">
      <rect
        x="1.5"
        y="1.5"
        width="41"
        height="41"
        rx="12"
        fill="#EFE9DE"
        stroke="#CBBDA6"
        strokeWidth="1.5"
      />
      <text
        x="22"
        y="28"
        textAnchor="middle"
        fill="#2C5C4F"
        fontSize="15"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  )
}

export default function ProofBar() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="border-b border-[#E0D6C6] bg-[#EFE9DE]"
    >
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2
          id="proof-heading"
          className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#7A7286]"
        >
          Cutting, sewing and shipping on Grainline this week
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LABELS.map((label) => (
            <li key={label.name} className="flex items-center gap-3">
              <Wordmark name={label.name} />
              <span className="leading-tight">
                <span className="block text-sm font-bold tracking-tight">
                  {label.name}
                </span>
                <span className="block text-xs text-[#7A7286]">{label.note}</span>
              </span>
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {NUMBERS.map((n) => (
            <div
              key={n.figure}
              className="rounded-2xl border border-[#DCCFB8] bg-[#FBF8F2] px-6 py-7 text-center"
            >
              <dt className="text-4xl font-black tracking-tight text-[#2C5C4F]">
                {n.figure}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#4A4455]">
                {n.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
