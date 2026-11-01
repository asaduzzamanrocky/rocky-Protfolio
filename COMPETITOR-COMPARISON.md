# Portfolio benchmark and redesign

Review date: 1 November 2026. Destination: `codex/portfolio-improvements` in asaduzzamanrocky/rocky-Protfolio.

## Five portfolios reviewed

Three are close service-market comparators; two are broader design and engineering benchmarks. This is a qualitative comparison of their public content and visible presentation, not a world ranking or a claim that their commercial results are independently verified. Each site was opened and visually reviewed; no competitor source code, assets, testimonials or distinctive brand elements were copied.

| Portfolio | Relevance | Observed strength | Application to Rocky’s portfolio |
|---|---|---|---|
| [HJ Miranda](https://hjmiranda.com/work/) | WordPress and agency work | Screenshots, implementation context, and clear contact route | Explain the website need and show the work prominently |
| [Daniel Elpa](https://danielelpa.com/) | WordPress, Elementor, business clients | Audience-focused services and selected project descriptions | Connect each service with a practical client need |
| [Ramzan Raza](https://ramzanraza.com/portfolio/) | WordPress and full-stack freelance work | Visual project gallery, role labels, and live links | Keep a browsable archive behind a curated selection |
| [Brittany Chiang](https://brittanychiang.com/) | Broader engineering benchmark | Clear identity, readable hierarchy, concise contribution descriptions | Remove distracting interface elements and technical marketing language |
| [Dennis Snellenberg](https://dennissnellenberg.com/) | Broader creative benchmark | Strong personal identity, prominent work, direct enquiry path | Establish a distinct opening composition and consistent typography |

## Before and after

| Area | Before | Implemented |
|---|---|---|
| Opening | Decorative video, multiple small cards | Large editorial headline and real project preview |
| Work order | Services and profile before work | Selected work immediately after the hero |
| Case studies | Dense repeated cards and unsupported metrics | Three visual project overviews with need, approach and work shown |
| Project breadth | Repeated multi-page grid | Searchable, filterable archive of all 26 existing entries |
| Visual system | Neon effects, overlays, heavy borders | Deep forest green, mint accents, pale work section, consistent spacing |
| Navigation | Header plus overlapping floating section controls | Single sticky header, accessible mobile navigation, normal anchor links |
| Contact | Technical language, automatic online status, two-hour promise | Plain-language form, visible email/WhatsApp, no presence or response guarantee |
| Trust | Unsupported numerical claims | Removed project metric fields and unverified headline statistics from the presentation |
| Analytics | Seeded traffic and misleading event counts | Local activity starts at zero; WhatsApp and accepted-form events are separated |
| Behance | Wrong handle and reused project ID | Correct profile and four project URLs verified against the public profile |

## What was verified

- TypeScript frontend check and Vite production build pass.
- At 320px, 390px, 768px and desktop, the page has no horizontal overflow.
- Mobile navigation exposes expanded state; Escape closes it and restores focus.
- Contact navigation lands below the sticky header.
- Archive search, empty-state reset and category filtering work; search for Moringa returns one result and eCommerce returns three.
- Native project dialog enters the modal top layer, contains focus, closes with Escape and restores focus to its trigger.
- Required contact fields prevent an empty form from submitting. No test enquiry was sent.
- No missing internal anchor targets, broken loaded images, unnamed buttons or browser console errors were observed.
- Full-page desktop and mobile visual previews were inspected.

## Build measurements

The earlier review build emitted a 483.45 KB entry JavaScript bundle (151.13 KB gzip). The redesigned build emits 263.71 KB (83.74 KB gzip), about 45% less JavaScript. CSS changes from 83.56 KB to 73.67 KB. The hero does not request its former video, and the page no longer renders a background animation canvas.

These are local production build sizes, not Lighthouse scores, Core Web Vitals field measurements, or a promise of a particular real-user speed.

## Reviews and evidence

Public searches found testimonials published on the Dev Design Grow agency website, but not independent verification of the reviewers or a clear link to Rocky’s individual contribution. They were not copied, rewritten into personal testimonials, or presented as verified client reviews. No fictional customers, ratings, outcome numbers, awards or certifications were added.

The public [Behance profile](https://www.behance.net/asaduzzrocky) confirms the profile and the four design-project URLs used in the archive. The three website overviews describe observed website features; detailed responsibilities and measured outcomes can be expanded when owner records are available.

## Remaining work before calling this internationally proven

- Confirm exact responsibilities, collaborators and permissions for featured work.
- Add authentic attributable client feedback and measured outcomes when available.
- Verify Formspree delivery with an owner-approved test enquiry.
- Measure the deployed version on real devices, including keyboard and screen-reader testing.
- Merge/deploy the review branch when ready; a pushed branch does not replace the production site.

The redesign improves the portfolio against the selected benchmarks. “Best in the world” cannot be established from this comparison.
