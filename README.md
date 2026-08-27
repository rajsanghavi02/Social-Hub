# Social Hub

Social Hub is a responsive digital marketing and social media services website. Its visual direction uses an editorial warm-white, ink-black, and signal-pink design system, with subtle scroll-aware movement and accessible reduced-motion handling.

## Included Website Sections

The homepage introduces Social Hub’s positioning, service catalogue, three-step working approach, content-production focus, engagement-and-reach direction, and contact options. The contact section links to the official Instagram profile and exposes a click-to-call phone number.

## Run Locally

Install the dependencies and start the development service.

```bash
pnpm install
pnpm dev
```

To create a production build and run the automated checks, use the following commands.

```bash
pnpm check
pnpm test
pnpm build
```

## Updating the Public Phone Number

The public contact number is configured with the `VITE_SOCIAL_HUB_PHONE` environment variable. This is designed to be managed through the hosting environment’s variables or secrets settings instead of being hardcoded in the site. Set the variable with the full international number, for example:

```env
VITE_SOCIAL_HUB_PHONE=+91 1234567890
```

The setting is public by design because it is displayed in the site and used in a click-to-call link. Rebuild or restart the application after changing it.

## Content and Design Maintenance

The website content structure lives in `client/src/pages/Home.tsx`, while the visual language, responsive layouts, and motion behaviour are maintained in `client/src/index.css`. The service content is represented by a single data array, making service copy easy to update. Image URLs point to the project-managed asset store; replace these values with new managed asset URLs when future client photography is added.

The project also includes `CONFIGURATION.md` with a short guide to editable contact settings.

For the full implementation overview—including the asset inventory, environment configuration, static content locations, folder structure, and deployment workflow—see [TECHNICAL_HANDOFF.md](./TECHNICAL_HANDOFF.md).
