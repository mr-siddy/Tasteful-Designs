import { useState } from 'react'
import { IconArrowRight, IconCheck } from './icons'

type FieldName = 'workspace' | 'email' | 'stack' | 'oncall'

type Values = Record<FieldName, string>

const EMPTY: Values = { workspace: '', email: '', stack: '', oncall: '4-8' }

const ONCALL_OPTIONS = [
  { value: '1-3', label: '1–3 engineers on the rotation' },
  { value: '4-8', label: '4–8 engineers on the rotation' },
  { value: '9-20', label: '9–20 engineers on the rotation' },
  { value: '20+', label: 'More than 20, split across squads' },
]

const NAME_LIMIT = 48

function slugify(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || 'your-workspace'
}

function validate(values: Values): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {}
  if (values.workspace.trim().length < 2) {
    errors.workspace = 'Give the workspace a name your team will recognise.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'We need a work address to send the invite link to.'
  }
  return errors
}

export function WorkspaceSetup() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [confirmation, setConfirmation] = useState<Values | null>(null)

  function update(field: FieldName, next: string) {
    setValues((current) => ({ ...current, [field]: next }))
    setErrors((current) => (current[field] && next.trim() ? { ...current, [field]: '' } : current))
    setConfirmation(null)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    setConfirmation(Object.keys(found).length === 0 ? values : null)
  }

  function startOver() {
    setValues(EMPTY)
    setErrors({})
    setConfirmation(null)
  }

  const slug = slugify(values.workspace)
  const ready = (['workspace', 'email', 'stack'] as FieldName[]).filter((f) => values[f].trim() !== '').length
  const oncallLabel =
    ONCALL_OPTIONS.find((o) => o.value === values.oncall)?.label ?? ONCALL_OPTIONS[1].label

  return (
    <section id="setup" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">Set up</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl">
            Reserve your workspace in about forty seconds
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Tell us what to call the workspace and where to send the invite. The panel on the right is exactly
            what your team will see when they open the link, so type it the way you want it to read.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <form
            data-testid="setup-form"
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-9"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="workspace" className="text-sm font-semibold text-[#0B1220]">
                    Workspace name
                  </label>
                  <span data-testid="workspace-counter" className="text-xs tabular-nums text-slate-500">
                    {values.workspace.length} / {NAME_LIMIT}
                  </span>
                </div>
                <input
                  id="workspace"
                  name="workspace"
                  type="text"
                  data-testid="field-workspace"
                  maxLength={NAME_LIMIT}
                  autoComplete="organization"
                  value={values.workspace}
                  onChange={(event) => update('workspace', event.target.value)}
                  aria-invalid={errors.workspace ? true : undefined}
                  aria-describedby="workspace-hint"
                  placeholder="Northwind Platform"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#0B1220] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                />
                <p id="workspace-hint" className="mt-1.5 text-xs text-slate-500">
                  Usually the team or the platform, not the company.
                </p>
                {errors.workspace && (
                  <p data-testid="error-workspace" role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                    {errors.workspace}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-[#0B1220]">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  data-testid="field-email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => update('email', event.target.value)}
                  aria-invalid={errors.email ? true : undefined}
                  placeholder="ada@northwind.io"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#0B1220] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                />
                {errors.email && (
                  <p data-testid="error-email" role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="oncall" className="text-sm font-semibold text-[#0B1220]">
                  Rotation size
                </label>
                <select
                  id="oncall"
                  name="oncall"
                  data-testid="field-oncall"
                  value={values.oncall}
                  onChange={(event) => update('oncall', event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#0B1220] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                >
                  {ONCALL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="stack" className="text-sm font-semibold text-[#0B1220]">
                  What pages you today
                </label>
                <textarea
                  id="stack"
                  name="stack"
                  rows={3}
                  data-testid="field-stack"
                  value={values.stack}
                  onChange={(event) => update('stack', event.target.value)}
                  placeholder="Postgres, a Go checkout service and far too many cron jobs"
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-[#0B1220] outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  Optional. It seeds your service list so the first timeline is not empty.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                data-testid="setup-submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B1220] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Reserve this workspace
                <IconArrowRight />
              </button>
              <button
                type="button"
                data-testid="setup-reset"
                onClick={startOver}
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
              >
                Start over
              </button>
              <span data-testid="setup-progress" className="text-xs text-slate-500">
                {ready} of 3 details filled in
              </span>
            </div>
          </form>

          <aside
            data-testid="setup-preview"
            className="self-start rounded-3xl border border-slate-200 bg-[#0B1220] p-7 text-white shadow-xl shadow-slate-900/10 sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Live preview</p>
            <h3 className="mt-4 text-xl font-semibold" data-testid="preview-name">
              {values.workspace.trim() || 'Your workspace'}
            </h3>
            <p className="mt-2 font-mono text-sm text-orange-300" data-testid="preview-url">
              postlude.app/{slug}
            </p>

            <dl className="mt-7 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-400">Invite goes to</dt>
                <dd data-testid="preview-email" className="text-right font-medium text-white">
                  {values.email.trim() || 'nobody yet'}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-slate-400">Rotation</dt>
                <dd data-testid="preview-oncall" className="text-right font-medium text-white">
                  {oncallLabel}
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Seeded services</dt>
                <dd data-testid="preview-stack" className="mt-1.5 leading-relaxed text-slate-200">
                  {values.stack.trim() || 'Nothing yet — you can add services after the first incident.'}
                </dd>
              </div>
            </dl>

            {confirmation ? (
              <p
                data-testid="setup-confirmation"
                role="status"
                className="mt-7 flex items-start gap-2.5 rounded-2xl bg-teal-400/15 p-4 text-sm leading-relaxed text-teal-100"
              >
                <span className="mt-0.5 text-teal-300">
                  <IconCheck />
                </span>
                <span>
                  {confirmation.workspace.trim()} is reserved at postlude.app/{slugify(confirmation.workspace)} — the
                  invite link is on its way to {confirmation.email.trim()}.
                </span>
              </p>
            ) : (
              <p className="mt-7 rounded-2xl bg-white/5 p-4 text-xs leading-relaxed text-slate-400">
                Nothing is created until you press reserve. We hold the name for seven days and never email your
                team without you.
              </p>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
