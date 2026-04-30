# SipBabylone — Project Brain

Plain HTML/CSS/JS site deployed to Vercel from a Webflow code export. No build step, no framework.

## 2nd Brain

- Pattern reference: `~/Desktop/eldar-design-development-cc/vibe-coding/vibe-coding-instructions/`
- Session start: read `vibe-coding/BRAIN.md`
- Raw export archived at: `~/Desktop/eldar-design-development-cc/vibe-coding/webflow-exported/sipbabylone.webflow/`
- Working copy: `vibe-coding/projects/sipbabylone/`

## Stack

- Plain HTML / CSS / JS — NO build step, NO framework, NO bundler
- jQuery 3.5.1 (CDN, integrity-pinned) + `js/webflow.js` (Webflow runtime)
- Custom font: `fonts/Migha-LightCondensedCNTR.otf`
- Deploy: Vercel zero-config static — GitHub push to `main` → auto-deploy

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `carrieres.html` | Careers / job applications |
| `mentions-legales.html` | French legal notices |
| `style-guide.html` | Internal Webflow design system reference (not in prod nav) |
| `404.html` | Auto-served by Vercel on not-found |
| `401.html` | Unauthorized (keep, Vercel may use it) |

## Forms

| Form | File | Status |
|---|---|---|
| Newsletter (`wf-form-Newsletter-Form`) | index.html | TODO — wire Formspree/Make ID in `js/custom.js` |
| Careers (`wf-form-Formulaire-de-carri-re`) | carrieres.html | TODO — wire Formspree/Make ID in `js/custom.js` |

Both forms are pre-wired in `js/custom.js` with Formspree stubs. Replace `YOUR_FORMSPREE_ID` with the real ID.

## Webflow Export Integrity (NON-NEGOTIABLE)

1. NEVER edit: `css/webflow.css`, `css/normalize.css`, `css/sipbabylone.webflow.css`, `js/webflow.js`
2. NEVER strip: `data-w-id`, `data-wf-page`, `data-wf-site` attributes
3. NEVER replace jQuery 3.5.1 + webflow.js
4. NEVER rename Webflow CSS classes (`.w-*` etc.)
5. Add overrides ONLY via `css/custom.css` and `js/custom.js`

## Custom Code

- Style overrides: `css/custom.css` (loaded after Webflow CSS in every `<head>`)
- Scripts: `js/custom.js` (loaded after `webflow.js` in every `</body>`)
- Per-page tweaks: inline `<style>` or `<script>` blocks at bottom of specific page's `<body>`

## Image Notes

- 4 images were renamed on export to remove spaces (Vercel/Linux 404 fix):
  - `Babylone-SIP-86-min_1Babylone-SIP-86-min.webp`
  - `Placeholder-Image-3_1Placeholder-Image-3.webp`
  - `Placeholder-Image_1Placeholder-Image.webp`
  - `map-sip-1_1map-sip-1.webp`
- If re-exporting, run the same rename step before copying files.

## Re-export Workflow

When design changes in Webflow:
1. Export ZIP → replace `webflow-exported/sipbabylone.webflow/`
2. Rename images with spaces → hyphens
3. Diff & copy HTML/CSS/JS/images/fonts → working copy
4. **Preserve**: `css/custom.css`, `js/custom.js`, `.gitignore`, `CLAUDE.md`, `SITE.md`, `README.md`
5. Re-wire `custom.css` and `custom.js` into any new pages
6. Test forms on Vercel preview before promoting

## Rules

DO:
- Read SITE.md before every task
- Add overrides via `css/custom.css` + `js/custom.js`
- Keep all Webflow attributes
- Stage specific files only (never `git add -A`)
- Update SITE.md after every change

DON'T:
- Edit Webflow CSS/JS files
- Add frameworks or build tools
- Strip `data-*` attributes
- Push without explicit user approval

## Deploy Checklist

- [ ] Open every HTML page locally — no console 404s
- [ ] Test both forms on Vercel preview URL
- [ ] Click all internal nav links
- [ ] Spot-check mobile
- [ ] Images load (no broken paths)
- [ ] Fonts load
- [ ] Analytics in `<head>` (if applicable)

## Git

- Branch: `main`
- Remote: `git@github.com:Softbird-Web/sipbabylone.git`
- One commit per logical change, stage specific files only
