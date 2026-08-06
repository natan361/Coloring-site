# CLAUDE.md — Frontend Website Rules

## Project Context
- Painting-service business website, in **Hebrew (RTL)**. The business is mobile/service-area (no fixed address).
- Visual style is modeled on `toptierpaintingidaho.com` — reference screenshots live in this folder (`screencapture-*.png`). Match the reference's **visual system**: spacing rhythm, typography scale, component shapes (pill buttons, heavily rounded cards), color relationships (dominant single accent + alternating light/dark sections), organic blob/wave shapes. Do **not** clone its literal content — this is a different business, in Hebrew, with original copy.
- Stack: **React + Vite + Tailwind CSS**.
- Copy and section structure must follow the pain → trigger → fear → desire → trust customer-psychology framework already established for this project (ask if unsure — don't default to generic feature-listing copy).

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- Match layout, spacing, typography, and color language from the reference screenshots. Swap in placeholder content only until real copy/images from the client intake are available.
- Do not add whole sections or components that have no analog in the reference's design system, and don't strip out its visual polish — but content itself (headlines, copy, section focus) should follow this project's own psychology-driven brief, not a literal translation of the reference site's English text.
- Screenshot your output, compare against the reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain (in style, not literal text) or the user says so.

## Local Dev Server
- Primary: Vite's own dev server (`npm run dev`) once the React app is scaffolded.
- For quick static prototypes (no build step), use `node serve.mjs` — serves the project root at `http://localhost:3050`.
- **Port 3000 is often occupied by an unrelated project on this machine** — this project defaults to **3050** (override with `PORT=xxxx node serve.mjs`). Check with `netstat -ano | grep ":<port>"` before assuming a port is free, and never kill a process on a port without confirming which project it belongs to.
- If a server for this project is already running, don't start a second instance.

## Screenshot Workflow
- Puppeteer is installed locally in this project (`npm install`, already done) — no manual paths needed, it resolves from `node_modules`.
- Screenshot: `node screenshot.mjs http://localhost:3050` (or whatever URL/port is actually serving).
- Optional label suffix: `node screenshot.mjs http://localhost:3050 label` → saves as `screenshot-N-label.png`.
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- After screenshotting, read the PNG with the Read tool to see and analyze it directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px".
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing — and RTL correctness (mirrored layout direction, not just flipped text).

## Brand Assets
- Check the `brand_assets/` folder before designing (create it if the client sends a logo/photos/color guide — not present yet as of the intake stage).
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display font with a clean sans. Apply tight tracking on large headings, generous line-height on body — verify the pairing supports Hebrew glyphs.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth where it fits the brand.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay and a color treatment layer where it improves legibility/mood, consistent with the reference's style.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.
- **RTL:** Use Tailwind's logical properties (`ps-`/`pe-`, `start-`/`end-`) over physical (`pl-`/`pr-`, `left-`/`right-`) so layout mirrors correctly.

## Hard Rules
- Do not silently invent business facts, stats, testimonials, or services — use what the client provided; flag gaps instead of making them up.
- Do not copy the reference site's literal English copy — adapt its *design system*, write original Hebrew content.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
