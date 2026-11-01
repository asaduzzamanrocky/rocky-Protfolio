# Portfolio review — 1 November 2026

Reviewed the live site at https://rocky-protfolio.vercel.app/ and source on `codex/portfolio-improvements` (commit `4eaa9a1`). This audit makes no website changes.

## Priority findings

1. **Content credibility — high.** Several remaining project cards advertise conversion increases, uptime, rankings and accessibility/compliance outcomes without supporting evidence in the repository. Examples include `+85% Lead Capture`, `WCAG AAA Verified` and `HIPAA Friendly Forms`. Confirm each claim with records or replace it with a description of the actual work. The three projects updated on the review branch already use more restrained descriptions. The portfolio contains 26 entries; distinguish that from any independently verified total of 60+ delivered sites.

2. **Floating navigation can cover work — high.** The desktop side navigator is fixed over the right side of the project grid rather than reserving space in its layout. During visual review it overlapped the right-hand project cards and Live Site control area. Hide it at narrower desktop widths, reserve a side gutter, or remove it in favor of the main navigation.

3. **Availability claims are unconditional — medium.** The initial contact tooltip always says “Rocky is Online”; there is no presence check. The contact panel and success message promise a two-hour response across multiple time zones. Use an honest availability message and a response target you can sustain.

4. **Analytics are sample data and misclassify actions — medium.** `AnalyticsService` starts at 14,820 page views and 6,940 visitors and saves counters in each visitor’s localStorage. These are not shared site analytics. All `button_click` events increment WhatsApp enquiries, so email and quick-message clicks inflate that count. Form-level submission errors are also recorded as `contact_submit`. Use real analytics or explicitly identify this as demo data, and separate successful, failed and channel-specific events.

5. **Text and case studies need an editorial pass — medium.** The project heading reads “Websites Built, Fixed & Case Studies”; footer/side navigation use internal labels such as “4×2 Platforms”, and contact messages use “Transmission Dispatched”. Replace these with direct client language. Lead with 3–6 strong visual projects and explain the business need, your contribution, implementation and evidenced outcome. Add more screenshots over time rather than long grids of similar text cards.

6. **Animation lifecycle can start duplicate canvas loops — medium.** The datalines canvas schedules its draw loop both immediately and in the initial IntersectionObserver callback. Both chains overwrite the same frame handle, so cleanup can cancel only the latest handle. Start a single loop, guard against duplicate scheduling, and stop it when hidden. The existing reduced-motion check is useful, but it is read only at initialization.

7. **Section indicator omits Experience — low.** The side navigator includes `experience`, but App’s IntersectionObserver does not observe that section; it observes `services`, which the side navigator does not include. The side readout can show the wrong section. Share a single section definition between navigation and scroll tracking.

## Deployment status

The live site still exposes the older title and “All Projects (60+)” label; it does not yet contain the review branch’s updated metadata and project previews. Merging/deploying the branch is a separate next step.

## Checks and limits

The preceding implementation passed Vite production build, frontend TypeScript checks, browser project search, image loading, native modal focus containment, Escape dismissal and focus restoration, plus a 390px viewport check. In this audit, the live site loaded and Contact navigation reached the Contact section. No contact form was submitted. Formspree delivery, external project outcomes, accessibility certifications, search rankings and measured performance scores have not been verified. No Lighthouse score is claimed.
