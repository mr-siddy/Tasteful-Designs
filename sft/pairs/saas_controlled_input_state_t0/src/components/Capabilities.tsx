import { IconBell, IconChecklist, IconPeople, IconPulse, IconSearch, IconShield, IconTimeline } from './icons'

const CAPABILITIES = [
  {
    title: 'Automatic timeline',
    icon: <IconTimeline />,
    body:
      'Every alert, deploy, feature-flag flip and pinned Slack message lands on one timeline in the order it actually happened, with the UTC offset your on-call was working in.',
  },
  {
    title: 'Draft-first retros',
    icon: <IconChecklist />,
    body:
      'Postlude writes the summary, impact window and contributing factors from the timeline, so the review meeting starts from an argument about the content rather than a blank page.',
  },
  {
    title: 'Follow-through tracking',
    icon: <IconPulse />,
    body:
      'Action items get an owner, a due date and a home in Linear or Jira. Anything still open after two weeks resurfaces in the team channel with the incident it came from attached.',
  },
  {
    title: 'Contributing-factor tags',
    icon: <IconSearch />,
    body:
      'Tag what really went wrong — missing alert, unsafe migration, capacity, third party — and Postlude shows you which factor keeps coming back across a quarter of incidents.',
  },
  {
    title: 'Blameless by default',
    icon: <IconPeople />,
    body:
      'Names are for on-call rotation, not for causes. Postlude nudges passive-voice phrasing in drafts and keeps individual attribution out of the exported customer summary.',
  },
  {
    title: 'Audit-ready exports',
    icon: <IconShield />,
    body:
      'One click gives you a signed PDF with the timeline, the impact statement and the remediation status — the packet SOC 2 auditors and enterprise customers keep asking for.',
  },
  {
    title: 'Severity that means something',
    icon: <IconBell />,
    body:
      'Define Sev-1 to Sev-4 once, in plain language, and Postlude applies the same review requirements every time so a Sev-2 always gets a written review inside five days.',
  },
  {
    title: 'Quarterly incident report',
    icon: <IconPulse />,
    body:
      'A generated read-out for your engineering leadership: volume by service, time to mitigate, the three factors that cost you the most hours, and what shipped because of them.',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl">
            Everything the week after an outage asks of you
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Firefighting tools stop at "resolved". Postlude picks up there and carries the incident through
            review, remediation and reporting, so the lesson outlives the adrenaline.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <article
              key={c.title}
              data-testid="capability-card"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/[0.02] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1220] text-orange-400">
                {c.icon}
              </span>
              <h3 className="mt-5 text-base font-semibold text-[#0B1220]">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
