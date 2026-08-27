# Social Hub — UI/UX Polish Review

## Review Scope

The review covered the full homepage at desktop and mobile dimensions, including the navigation, hero, editorial statement, service list, process section, visual-led content blocks, contact close, footer, responsive hierarchy, and available motion behaviours.

| Area | Observation | Refinement Decision |
| --- | --- | --- |
| Editorial labels | The small ordinal prefixes in the eyebrow labels compete with the larger red process numerals, creating redundant numbering. | Remove the small `01`, `02`, `03`, and `04` eyebrow prefixes while retaining the large red numbers in the process rail. |
| How We Work | The heading begins in a different grid column from the process rule below it, which weakens the section’s visual centre. | Centre the heading and supporting label over the full-width process rule on desktop, retaining a clear left-aligned reading order on narrow screens. |
| Hero hierarchy | The headline, identity card, and image form a clear initial composition. The compact intro and secondary action work well on mobile. | Preserve the hero structure; tighten motion easing so visual movement feels connected to scroll rather than delayed. |
| Service catalogue | The index, title, and explanation create a usable scanning pattern. On smaller screens, the descriptions are appropriately stacked under the titles. | Improve hover/focus feedback with a restrained pink signal line instead of relying primarily on horizontal movement. |
| Content imagery | The three visual treatments are balanced and communicate strategy, production, and reach without using generic stock imagery. | Retain the existing crop balance and add only a subtle image-scale response, avoiding decorative movement. |
| Contact close | The pink field creates a clear final call to action and contains the placeholder number and Instagram route. | Maintain contrast and spacing; improve link focus affordances for keyboard navigation. |
| Motion system | Scroll effects are modest, but the current 350 ms transition can feel slightly behind direct scrolling. Entrance motion is already intentionally limited. | Use a shorter, more responsive transition; keep one gentle scroll shift for the hero/card motif and one for the closing spark. Respect reduced-motion settings throughout. |
| Responsive UX | Typography and services stack in a logical order at mobile scale; no content is clipped. | Make the process heading centre only at wider widths and preserve its compact mobile text flow. |

## Overall Assessment

The current direction is coherent and distinctive. Its strongest features are the disciplined colour system, high-contrast editorial typography, asymmetric image rhythm, and direct service hierarchy. The remaining work is refinement rather than redesign: simplify labels, establish a more deliberate process-section axis, sharpen focus and hover cues, and soften the timing of scroll-linked movement.

> **Target experience:** The website should feel editorial and composed, with small signs of life that support navigation and recognition rather than compete with the service story.

## Post-Refinement Verification

The polished layout has been reviewed at desktop and mobile scale. The redundant ordinal prefixes are removed from the eyebrow labels, leaving the larger red process numerals as the intentional visual index. The “How We Work” title now sits centrally above the full-width process rule at larger sizes, while its narrow-screen layout keeps a readable left-aligned flow. The revised scroll movement is reduced in distance and transition duration, making it respond more directly without adding decorative motion.

## Purpose and Simplicity Audit

| Element | User purpose | Decision |
| --- | --- | --- |
| Header “Let’s Talk” action | Provides a persistent route to the contact section while scrolling. | Retain. |
| Hero “Start a Conversation” action | Moves an interested visitor directly to the contact options. | Retain. |
| Hero “Explore What We Do” link | Offers a lower-commitment route to the service catalogue. | Retain. |
| Navigation links | Provide short, descriptive anchors for the page’s principal sections. | Retain. |
| Phone link | Initiates a direct call on capable devices and displays the currently configured contact number. | Retain. |
| Instagram link | Opens Social Hub’s existing social channel in a new tab. | Retain. |
| Contact “Placeholder” badge | Communicates only an internal implementation detail. It does not help a visitor decide or act, and it visually resembles a secondary button. | Remove. |

The contact-area badge is the only element identified as nonessential. Removing it reduces visual noise, gives the phone action greater clarity, and makes the two genuine contact channels read as one quiet, purposeful group.

## Final Contact-Area Verification

The simplified contact group has been verified at desktop and mobile sizes. The phone number and Instagram link remain clear, legible, and touch-friendly; the misleading placeholder badge is gone. No additional nonfunctional buttons or decorative control-like elements were identified, and the existing motion remains restricted to meaningful logo, scroll, and section-feedback cues.

## Motion Enhancement Audit

The existing experience already uses a good foundation: a concise hero entrance, a scroll-responsive brand spark, a sticky header response, and a single section-reveal pattern. To make the page feel more engaging without introducing unnecessary animation, the refinements will stagger the service rows and process steps only as they enter view, give the content images a minimal scale-and-lift reveal, and let the contact spark settle into view with its own short offset. These effects will use only `transform` and `opacity`, use the existing intersection observer rather than adding scroll handlers, and remain fully disabled under reduced-motion preferences.

## Motion Enhancement Verification

The refined desktop and mobile compositions preserve the original clean layout while increasing the page’s perceived responsiveness. Service rows and process steps now enter with a brief stagger, content visuals settle with a small lift and scale, and the hero identity card resolves after the initial hero motion. Image hover feedback appears only on pointer devices; touch layouts receive the same scroll reveals without hover-dependent interaction. A dedicated automated guard now confirms that the page retains its reveal hooks and reduced-motion treatment.
