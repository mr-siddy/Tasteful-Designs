# Brief — Copper Birch Dental (dental_clinic · landing)

Build the marketing landing page for **Copper Birch Dental**, a nine-person family
and cosmetic dental practice at 118 Halloway Street in the Rivermill district — a
converted 1920s hardware store with birch floors, skylights over every chair, and a
deliberate refusal to run on the fifteen-minute conveyor belt most clinics do. The
practice's whole positioning is *dread reduction*: roughly a third of the people who
walk in have not seen a dentist in five years or more, so the page must read calm and
plain-spoken rather than clinical or salesy — no stock-photo smiles, no scare copy
about gum disease, no exclamation marks. The palette is deep teal (`teal-900`/`teal-700`)
against warm stone neutrals with a copper-amber accent, generous section padding, soft
`rounded-3xl` cards, and every visual drawn as inline SVG or a CSS gradient — birch-leaf
brand mark, a hand-drawn arch-window hero illustration, one line-art icon per treatment,
abstract clinician portraits, and a small street map by the booking form.

The page is a single long scroll with a **sticky header whose nav follows the reader**:
six destinations — Treatments, Technology, Your visit, Membership, Patients, Questions —
and whichever of those six sections is currently under the top of the viewport has its
link marked as the current one, both visually and with `aria-current` for screen readers,
exactly one at a time, tracking upward scroll as well as downward. Below the header:
a hero (`The dentist you stop dreading`) with two calls to action; a trust band with the
4.9/812 rating, 27 years, 6,400 patients and the practice's registrations; six treatments
with real from-prices (checkup and clean from $145 through single-tooth implants from
$4,200); a technology deep-dive covering the intraoral scanner, the in-house crown mill
and low-dose digital X-rays; a dark comfort band for nervous patients; the four-step
first visit; four named clinicians with credentials and bios; three Birch Plan
memberships at $32/$54/$96 a month; three named patient reviews; six real questions with
real answers; a booking form with clinic details and hours; and a four-column footer.
Aim for a page a practice manager would actually sign off on: 8+ sections, 650+ words of
specific copy, no placeholder text anywhere.
