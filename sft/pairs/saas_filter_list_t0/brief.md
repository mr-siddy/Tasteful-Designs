# Brief — Stonecrop landing page (saas / landing)

Build the marketing landing page for **Stonecrop**, a workflow-automation SaaS
sold to operations, finance and support teams — the people who are currently
holding the process together themselves with a spreadsheet, a cron job one
engineer understands, and somebody who remembers. Stonecrop turns those run
books into workflows that execute on a schedule or a webhook, chase down the
human who owes an approval, retry the step that flaked at 2am without
double-charging anyone, and leave an audit trail clean enough to hand to a
regulator. The company is eight people in Providence, Rhode Island, founded in
2021, and the brand voice is dry, concrete and slightly weary of ops folklore —
it names the actual Tuesday the billing API returned 503s rather than promising
"seamless orchestration". Never use vague enterprise filler; every claim should
carry a number, a system name or a named person.

**Visual direction.** Deep evergreen ink (`#0B1F1B`) with a teal-green brand
(`#12766A`) and a single warm amber accent (`#E8A33D`) over a bone/stone neutral
(`#F7F4EC`). Alternate section backgrounds — bone, white, deep evergreen — so
the page has rhythm as you scroll. Tight tracking on large semibold headings,
generous section padding, 2xl/3xl radii, soft shadows. All visuals are inline
SVG (leaf wordmark, six customer logo marks, capability icons, a run-timeline
illustration, a retry/backoff chart, a bar sparkline) plus CSS radial-gradient
washes — no image URLs anywhere.

**Sections, in order.** Sticky header with the leaf wordmark, five nav
destinations and a trial CTA; a hero with the headline "The ops work your team
keeps doing by hand, running itself", a ~45-word subhead, two CTAs, a trust row
and a live-run panel showing a completed Vendor onboarding run; a social-proof
band with six named customers, three hard stats and a Harborlight Freight
result; a six-card platform overview (run books, approvals, data sync,
escalation clocks, audit trail, guardrails); **a template library filtered by
category chips — All, Sales, Finance, Support and Security — over twelve named
workflow templates, each with a category tag, a one-sentence description, the
number of teams using it and its step count, plus a line reading "Showing N of
12 templates"**; a reliability deep-dive on retries, dead letters and
backpressure with a three-attempt chart; an evidence deep-dive with a run
audit-trail timeline; a four-step "how it works" ladder; three pricing plans
(Starter $290, Growth $840 marked most chosen, Enterprise custom); three
testimonials attributed to named people with roles and companies; six FAQs
answered properly; a closing CTA with a labelled work-email capture; and a
four-column footer with a real street address, contact details and a legal row.

**Behaviour that matters.** The template library's category chips are the only
interactive state on the page: clicking a category shows exactly the templates
in that category and nothing else, the count line follows the grid, and clicking
**All** brings the whole twelve-template library back. Everything else is
static. No network calls, no timers, no randomness.
