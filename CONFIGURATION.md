# Social Hub Configuration

## Contact Number

The website reads the contact number from the `VITE_SOCIAL_HUB_PHONE` environment variable. The value is managed in the project’s environment settings, rather than being hardcoded in the source. When the final number is available, update that setting in the same format shown below.

```env
VITE_SOCIAL_HUB_PHONE=+91 1234567890
```

The value is intentionally client-visible because the number is shown publicly in the website footer and call link. After changing the environment setting, restart the local development process or rebuild the website so the updated public value is included in the site.

## Content Updates

The service descriptions, contact link, and visual sections are organised in `client/src/pages/Home.tsx`. The site’s visual rules and responsive behaviour are located in `client/src/index.css`. Keep any new imagery in the managed web asset location rather than adding large files to the source directory.
