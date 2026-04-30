# SipBabylone

> Sip Café Babylone — [tagline TBD]

## Brand

- Personality: TBD
- Colors: TBD
- Fonts: Migha LightCondensedCNTR (custom, in /fonts/) + Google Fonts via Webflow CDN
- Social: Facebook (`https://www.facebook.com/p/Sip-Caf%C3%A9-Babylone-100063491082765/`), Instagram (`https://www.instagram.com/sipcafebabylone/`)

## Pages

| File | Purpose | Status |
|---|---|---|
| `index.html` | Homepage | Live (no custom tweaks yet) |
| `carrieres.html` | Careers / applications | Live (form not yet wired) |
| `mentions-legales.html` | French legal notices | Live |
| `style-guide.html` | Internal Webflow reference — not in prod nav | Internal only |
| `404.html` | Not-found page | Vercel auto-serves |
| `401.html` | Unauthorized | Vercel may serve |

## Forms & Integrations

| Form | File | Handler | Status |
|---|---|---|---|
| Newsletter | index.html | Formspree `YOUR_FORMSPREE_ID` | TODO — replace ID |
| Careers | carrieres.html | Formspree `YOUR_FORMSPREE_ID` | TODO — replace ID |

- Analytics: TBD (add GA4/GTM snippet to `<head>` when ready)

## Custom Code Locations

- Style overrides: `css/custom.css`
- All scripts + form handlers: `js/custom.js`

## Known Issues

- Newsletter and Careers forms not live yet — replace `YOUR_FORMSPREE_ID` in `js/custom.js`

## Deploy Info

- GitHub: `Softbird-Web/sipbabylone` (TBD — not yet created)
- Vercel: TBD — link after GitHub push
- Domain: TBD

## Recent Changes

- 2026-04-30 — Initial scaffold from Webflow export. Renamed 4 image files (spaces → hyphens). Wired custom.css + custom.js stubs into all pages.

## Re-export Checklist

- [ ] Replace `webflow-exported/sipbabylone.webflow/` with new export
- [ ] Rename image files with spaces → hyphens
- [ ] Copy HTML/CSS/JS/images/fonts to working copy
- [ ] Preserve: `css/custom.css`, `js/custom.js`, `CLAUDE.md`, `SITE.md`, `README.md`, `.gitignore`
- [ ] Re-wire custom files in any new HTML pages
- [ ] Test forms on Vercel preview
- [ ] Verify analytics loads
