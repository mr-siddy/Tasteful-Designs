const CUSTOMERS = [
  { name: 'Harborlight Freight', shape: <path d="M4 16l8-9 8 9-8 5z" fill="currentColor" /> },
  { name: 'Fernbrook Health', shape: <path d="M12 5c5 3 6 6 6 8.5A6 6 0 1 1 6 13.5C6 11 7 8 12 5z" fill="currentColor" /> },
  { name: 'Vantage Row Capital', shape: <path d="M5 18V9h3v9zm5 0V6h3v12zm5 0v-6h3v6z" fill="currentColor" /> },
  { name: 'Kestrel Robotics', shape: <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="3" /> },
  { name: 'Northgate Grocers', shape: <path d="M12 4l7 4v8l-7 4-7-4V8z" fill="none" stroke="currentColor" strokeWidth="2.4" /> },
  { name: 'Willow & Pike', shape: <path d="M6 18c6 0 6-12 12-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /> },
]

const STATS = [
  { value: '4.2M', label: 'workflow runs completed last quarter' },
  { value: '99.98%', label: 'of runs finish without a human touching them' },
  { value: '11 hrs', label: 'given back to the average ops team every week' },
]

export default function LogoWall() {
  return (
    <section id="customers" className="border-b border-[#E2DCCE] bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7C77]">
          Operations, finance and support teams run on Stonecrop
        </h2>

        <ul className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
          {CUSTOMERS.map((customer) => (
            <li key={customer.name} className="flex items-center gap-2.5 text-[#4A5C57]">
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-[#12766A]" aria-hidden="true" focusable="false">
                {customer.shape}
              </svg>
              <span className="text-sm font-semibold tracking-tight">{customer.name}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-16 grid gap-8 border-t border-[#E9E3D6] pt-12 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center md:text-left">
              <dt className="text-4xl font-semibold tracking-tight text-[#0B1F1B]">{stat.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#5C6B66]">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 rounded-2xl bg-[#F2F6F3] px-6 py-5 text-center text-sm leading-relaxed text-[#3E524D]">
          Harborlight Freight moved 43 run books off a shared spreadsheet in their first six weeks.
          Their close is now three days shorter and nobody has reconstructed an approval chain from
          chat history since.
        </p>
      </div>
    </section>
  )
}
