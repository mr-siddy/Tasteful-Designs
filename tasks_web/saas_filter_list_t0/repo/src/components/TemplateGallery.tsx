import { useMemo, useState } from 'react'

type Category = 'Sales' | 'Finance' | 'Support' | 'Security'
type Filter = 'All' | Category

type Template = {
  name: string
  category: Category
  blurb: string
  teams: number
  steps: number
}

const FILTERS: Filter[] = ['All', 'Sales', 'Finance', 'Support', 'Security']

const TEMPLATES: Template[] = [
  {
    name: 'New logo handoff',
    category: 'Sales',
    blurb:
      'The moment a deal is marked closed-won, open the onboarding channel, assign a success manager from the rota and put the kickoff on the calendar.',
    teams: 412,
    steps: 7,
  },
  {
    name: 'Quote approval chain',
    category: 'Sales',
    blurb:
      'Send any discount over fifteen percent to the deal desk, then to finance, with a two-hour clock on each hop and an escalation when it runs out.',
    teams: 288,
    steps: 6,
  },
  {
    name: 'Territory rebalance',
    category: 'Sales',
    blurb:
      'When a rep changes patch, move their open opportunities to the new owner and tell both people in the same thread so nothing is quietly dropped.',
    teams: 133,
    steps: 5,
  },
  {
    name: 'Renewal risk sweep',
    category: 'Sales',
    blurb:
      'Every Monday, flag accounts with no meaningful contact in forty-five days and open a save play with the last three support tickets attached.',
    teams: 356,
    steps: 8,
  },
  {
    name: 'Vendor onboarding',
    category: 'Finance',
    blurb:
      'Collect the signed W-9, run the sanctions screen, and open the payables record before the first invoice ever lands in anyone’s inbox.',
    teams: 519,
    steps: 9,
  },
  {
    name: 'Month-end close checklist',
    category: 'Finance',
    blurb:
      'Fan the close tasks out to their owners, chase the three who always run late, and lock the ledger the moment the last box is ticked.',
    teams: 604,
    steps: 14,
  },
  {
    name: 'Expense exception review',
    category: 'Finance',
    blurb:
      'Pull every expense over two thousand five hundred dollars, or outside policy, into one reviewer queue instead of eleven separate email threads.',
    teams: 241,
    steps: 5,
  },
  {
    name: 'Escalation ladder',
    category: 'Support',
    blurb:
      'Page the on-call engineer after thirty minutes, the team lead after an hour and the director after two, with the ticket history already attached.',
    teams: 733,
    steps: 6,
  },
  {
    name: 'Refund authorization',
    category: 'Support',
    blurb:
      'Hold any refund above five hundred dollars for a supervisor, post the credit once it clears, and close the loop with the customer in writing.',
    teams: 197,
    steps: 7,
  },
  {
    name: 'Churn signal digest',
    category: 'Support',
    blurb:
      'Gather the week’s angry tickets, downgrade requests and unanswered check-ins into one Monday digest for the account team to work through.',
    teams: 162,
    steps: 4,
  },
  {
    name: 'Quarterly access review',
    category: 'Security',
    blurb:
      'Ask every manager to confirm what their team can reach, revoke whatever nobody claims, and file the evidence pack your auditor asks for anyway.',
    teams: 388,
    steps: 11,
  },
  {
    name: 'Offboarding sweep',
    category: 'Security',
    blurb:
      'Kill live sessions, rotate the shared keys that person held and archive the laptop return ticket, all inside an hour of the departure being logged.',
    teams: 455,
    steps: 10,
  },
]

export default function TemplateGallery() {
  const [category, setCategory] = useState<Filter>('All')

  // The chip row above the grid decides which slice of the library is on screen.
  const visible = useMemo(
    () => TEMPLATES.filter((template) => category === 'All' || template.category === category),
    [],
  )

  return (
    <section id="templates" data-testid="template-gallery" className="border-y border-[#E2DCCE] bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#12766A]">
            Template library
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1F1B] sm:text-4xl">
            Start from a workflow another team already trusts
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#4A5C57]">
            Every template ships with its steps, its approvers and its escalation clock already
            wired. Pick the category you own, open the one closest to how you work today, and change
            the parts that are yours.
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter templates by category"
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {FILTERS.map((filter) => {
            const active = filter === category
            return (
              <button
                key={filter}
                type="button"
                data-testid="template-chip"
                aria-pressed={active}
                onClick={() => setCategory(filter)}
                className={
                  active
                    ? 'rounded-full bg-[#0B1F1B] px-5 py-2.5 text-sm font-semibold text-[#F7F4EC] transition-colors'
                    : 'rounded-full border border-[#DCD5C5] bg-[#F7F4EC] px-5 py-2.5 text-sm font-semibold text-[#3E524D] transition-colors hover:border-[#12766A] hover:text-[#0B1F1B]'
                }
              >
                {filter}
              </button>
            )
          })}
        </div>

        <p data-testid="gallery-count" className="mt-6 text-sm font-medium text-[#6B7C77]">
          Showing {visible.length} of {TEMPLATES.length} templates
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((template) => (
            <article
              key={template.name}
              data-testid="template-card"
              className="flex flex-col rounded-2xl border border-[#E2DCCE] bg-[#FBFAF6] p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#E8F1EE] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0E5C53]">
                  {template.category}
                </span>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#B4C4BF]" aria-hidden="true" focusable="false">
                  <circle cx="6" cy="6" r="2.4" fill="currentColor" />
                  <circle cx="18" cy="12" r="2.4" fill="currentColor" />
                  <circle cx="6" cy="18" r="2.4" fill="currentColor" />
                  <path d="M8 7l8 4M8 17l8-4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#0B1F1B]">
                {template.name}
              </h3>
              <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-[#5C6B66]">
                {template.blurb}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[#E9E3D6] pt-4 text-xs font-medium text-[#6B7C77]">
                <span>{template.teams} teams use this</span>
                <span>{template.steps} steps</span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-[#6B7C77]">
          Need something that is not here? Fork the closest template, or start from an empty canvas
          and steal the escalation ladder from the support set.
        </p>
      </div>
    </section>
  )
}
