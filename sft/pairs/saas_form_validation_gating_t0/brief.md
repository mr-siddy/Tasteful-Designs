# Brief — Rivetwork marketing landing page

**Task:** `saas_form_validation_gating_t0` · seed `form_validation_gating` · industry `saas` · archetype `landing`

## One-paragraph brief (the SFT input)

Build the marketing landing page for **Rivetwork**, a field-service operations
platform sold to mechanical contractors — HVAC, plumbing and refrigeration shops
running somewhere between six and four hundred technicians out of one or more
yards. Rivetwork replaces the whiteboard-plus-group-text dispatch stack: a live
dispatch board, work orders that carry photos and meter readings, a truck-side
mobile app that keeps working in a crawlspace with no signal, parts and truck
stock, and invoicing that pushes straight into QuickBooks or Sage without a
re-key. The voice is plainspoken and trade-literate — it talks about drive time,
callbacks, warranty claims and net-30, not "synergy" — and the design is a
working-hours palette: deep harbor navy `#0A1220`, rivet blue `#1F4FD8`, torch
amber `#FF9F1C` on a cool mist neutral ramp, with generous section padding, a
16px-to-64px type scale with heavy weight contrast, `rounded-2xl` cards and a
soft single-direction shadow language. The page must run long-form and be
self-contained with no network: header with five destinations and a demo CTA;
hero with a headline, a real subhead and an inline-SVG dispatch-board
illustration; a trust bar of contractor wordmarks and hard numbers; six platform
modules; two deep-dive blocks on dispatch and the offline truck app; a
four-step rollout timeline; an integration grid; three pricing tiers with real
per-tech pricing; three named customer testimonials; a security and uptime
strip; a five-question FAQ; a **"Book a walkthrough" contact form** that asks
for a name, a work email and a crew size and that must refuse to submit
anything incomplete or malformed — showing a message beside each offending
field and never showing the confirmation panel — and only confirms once every
field is valid; a closing CTA; and a four-column footer with nav, contact,
office hours and legal. All imagery is inline `<svg>` and CSS gradients; every
name, price, quote and street address is invented but specific.

## Rule under test

Submitting invalid input is blocked and shows errors. The "Book a walkthrough"
form validates the visitor's name (non-empty), work email (must look like a real
address) and crew size (a whole number of at least 1) before it will show the
confirmation panel; each failing field renders its own message.

## Symptom planted in `repo/`

The form is wired for display only — the submit handler flips straight to the
confirmation panel, so an empty or malformed submission still reads as sent and
the visitor is never told what was wrong.
