const INTEGRATIONS = [
  {
    name: 'Freightline TMS',
    kind: 'Transport management',
    body: 'Bookings, vessel schedules and container numbers sync both ways every four minutes. Portway never becomes the second place your team types a container number.',
  },
  {
    name: 'Portside WMS',
    kind: 'Warehouse',
    body: 'Receiving discrepancies at the deconsolidation warehouse come back as exceptions on the entry, so a short-shipped pallet is a filing question before it is an invoice dispute.',
  },
  {
    name: 'Anvil ERP',
    kind: 'Importer systems',
    body: 'Your customers push purchase orders and part masters straight in, which is where most of the classification history comes from in the first month.',
  },
  {
    name: 'ABI via your broker',
    kind: 'Customs filing',
    body: 'Portway hands the packaged filing to whichever broker holds the filer code. We do not file under our own; the licensed broker stays the licensed broker.',
  },
  {
    name: 'Deckhand email intake',
    kind: 'Documents',
    body: 'A lane address per customer. Forward anything — a phone photo of a mill certificate included — and it attaches to the right shipment with the sender recorded.',
  },
  {
    name: 'Ledgerpost accounting',
    kind: 'Finance',
    body: 'Duty, MPF, HMF and disbursement lines post to the right customer account on release, with the entry number attached to the journal entry.',
  },
]

export function IntegrationGrid() {
  return (
    <section id="integrations" className="bg-[#0B1F33] text-[#E7EEF4]">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#F2A03D]">
            Integrations
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            It has to fit the stack you already run
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#B6C6D4]">
            No forwarder is going to rip out a TMS they have run for nine years to try a filing tool.
            Portway sits beside what you have, reads from it, writes back to it, and stays quiet about
            it. Six connectors ship in the box; the rest is a documented API and a webhook per event.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((item) => (
            <li
              key={item.name}
              data-testid="integration-tile"
              className="rounded-3xl border border-[#E7EEF4]/12 bg-[#122C45] p-7"
            >
              <svg viewBox="0 0 36 36" aria-hidden="true" className="h-9 w-9">
                <rect x="0.5" y="0.5" width="35" height="35" rx="11" fill="#5AC8D8" opacity="0.12" />
                <path
                  d="M13 23l-3-3a4.2 4.2 0 016-6l2 2M23 13l3 3a4.2 4.2 0 01-6 6l-2-2"
                  fill="none"
                  stroke="#5AC8D8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.name}</h3>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F2A03D]">
                {item.kind}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#B6C6D4]">{item.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-[#93A7B8]">
          Building against something we have not met yet?{' '}
          <a href="#docs" className="font-medium text-[#9BDCE7] hover:underline">
            Read the API reference
          </a>{' '}
          or ask us on the walkthrough.
        </p>
      </div>
    </section>
  )
}
