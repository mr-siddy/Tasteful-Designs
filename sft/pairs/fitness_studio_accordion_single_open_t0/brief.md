# Brief — Redpine Strength Co. (fitness_studio / landing)

Build a long-form marketing landing page for **Redpine Strength Co.**, an
eleven-year-old small-group barbell and recovery studio at 214 Kestrel Street in
the Fairmount Hill neighbourhood — a converted print works with a 40-foot lifting
floor downstairs and a recovery loft upstairs. The studio's whole personality is
*unfashionable competence*: no mirrors, no monthly leaderboard, no contracts, a
hard cap of eight lifters per coach, and a coach who writes your next session by
hand. It sells to two people at once — the thirty-something who has been "meaning
to start lifting" for three years and is intimidated by commercial gyms, and the
returning athlete rebuilding after a back injury or a hip replacement — so the
copy has to be warm and technically credible in the same breath, quoting real
numbers (6:1 ratio, 420 members, a $180/month Barbell Foundations block, a 12-week
Return to Lifting protocol run with a physio) rather than motivational slogans.

Ship it as a flat React tree of one component per section: a sticky header with
the pine-mark logo and five destinations, a hero with the studio name and a
proper thirty-word promise over a warm gradient and an inline-SVG illustration of
the lifting floor, a trust bar of stats and coaching credentials, a six-card
programme grid with real prices and session caps, the week's timetable with
coaches and remaining spots, three alternating deep-dive blocks on the coaching
method (assess before you load / train the pattern not the mirror / recover on
purpose), the recovery loft with an SVG floorplan and its amenity list, a
four-step onboarding path, three membership tiers, four named coaches with
credentials and SVG portraits, three member stories with names, ages and
outcomes, an FAQ, a closing call-to-action with a real intro-session form, and a
four-column footer with hours, address and legal links.

**The FAQ is the interactive centrepiece.** Seven front-desk questions —
contracts, experience level, injuries, parking, childcare, drop-ins, class size —
render as an accordion of buttons that expand their answer inline. It is a
strictly **single-open** accordion: opening one question collapses whatever was
open before, so exactly one answer is ever on screen, `aria-expanded` tracks it,
the page loads with every answer collapsed, and clicking an already-open question
closes it again.

Palette: pine `#123B31` / `#0B241E` with a moss `#2F6B57` mid-tone, clay `#D2683F`
and amber `#E8A33D` accents, on a warm bone `#FBF7F1` and sand `#EFE6D8` neutral
ramp with `#1B1A17` ink. Tight-tracked semibold display headings against wide-tracked
uppercase eyebrows; generous section padding; `rounded-3xl` cards with soft shadows;
alternating bone / sand / pine section backgrounds so the page has rhythm as you
scroll. All artwork is inline SVG and CSS gradients — no network requests.
