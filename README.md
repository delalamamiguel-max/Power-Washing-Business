# Power Washing Business

A bilingual residential/commercial exterior-cleaning marketing website with service descriptions, indicative pricing, galleries, before/after imagery and quote/scheduling modals.

## Purpose and status

The repository implements a React marketing frontend. Both form handlers currently use a timer followed by a success callback; they do not submit a request to a backend or persist a booking. A success message must not be treated as proof of lead delivery or a confirmed appointment.

Static inspection also found `useLanguage` calls without an import in both form components, including calls inside submit handlers. Those are unresolved source issues, not runtime failures reproduced in this documentation pass. No application code was changed.

Reviewed November 17, 2026 against `main` at `cf511f34c8500614a81d0fffa6f3deb70512cb38`. This review describes the tracked source, not verified production behavior. Current hosting, commercial readiness and the next owner-approved milestone remain unverified.

## Repository map

| Path | Responsibility |
|---|---|
| [src/main.jsx](src/main.jsx) | React mount and language provider |
| [src/App.jsx](src/App.jsx) | Page composition, modal selection and success UI |
| [src/components/sections/](src/components/sections/) | Services, pricing, gallery, hero and before/after sections |
| [src/components/forms/](src/components/forms/) | Quote and scheduling form UI; simulated submission |
| [src/components/layout/](src/components/layout/) and [src/components/ui/](src/components/ui/) | Navigation, footer, modal and shared visual components |
| [src/translations.js](src/translations.js) | English and Spanish copy |
| [src/context/LanguageContext.jsx](src/context/LanguageContext.jsx) | In-memory language selection |
| [src/index.css](src/index.css), [public/](public/), [src/assets/](src/assets/) | Styling and images |

## Architecture and integrations

React 19 and JavaScript/JSX run in the browser, bundled with Vite 8. Lucide supplies icons; CSS supplies the visual system. The Vite configuration uses `@vitejs/plugin-react`; SWC and React Compiler are not configured in this tree. Google Fonts is imported by CSS and one hero background uses an external Unsplash URL; other imagery is local.

No server API, database, authentication, email delivery, payment or calendar integration is tracked. The language provider defaults to English and toggles Spanish in memory; some form labels remain English.

## Setup and environments

For future authorized development, use Node.js and npm compatible with the locked Vite/toolchain versions, then `npm ci` and `npm run dev`. Open the URL printed by Vite. No root Node-version pin, environment template or runtime environment-variable references are tracked. No Neon or other backend provisioning is needed for the current frontend.

The repository does not establish a canonical public domain or separate staging environment. [vercel.json](vercel.json) contains the name `powerwashingbiz`; it does not prove current Vercel project linkage or a production branch.

## Safe commands

For documentation work, inspect the repository without starting the application:

```sh
git status --short --branch
git ls-tree -r --name-only HEAD
git diff --check
git diff -- README.md
git diff --cached --name-only
```

Use an isolated documentation branch and stage only `README.md`. The package commands described elsewhere are for separately authorized development; none needs to run for a README edit. Preserve existing work and do not run installs, builds, tests, provider requests or deployment commands during documentation maintenance.

## Testing and validation

[package.json](package.json) defines `dev`, `build` (`vite build`), `lint` (`eslint .`) and `preview` (`vite preview`). There is no tracked test suite, `test` script or GitHub Actions workflow. `preview` serves built assets locally; it is not a deployment command or proof that requests reach the business.

This README pass checked document structure, relative links, original-link preservation and README-only diffs. No application tests, lint, type checks, builds, browser flows or live services were run.

## Deployment and rollback

The configured Vite build produces static assets in the default `dist/` directory. Actual hosting configuration, publish approvals and a tested rollback procedure are not documented. A future application release should preserve its previous artifact and configuration so an authorized operator can restore them; do not invent a live deployment URL from the repository name.

README changes can still trigger hosting automation when pushed. Keep this documentation branch local until publication is approved with a confirmed no-deployment path. No settings, deployments, merges or databases are changed by this documentation pass. For a documentation rollback, propose a reviewed revert of the README commit.

## Risks and guardrails

- Resolve form implementation issues and decide the submission destination before relying on the site for customer inquiries.
- Business claims, prices, contact details, image rights and translations require owner review; source copy is not independent verification of them.
- This is a public repository. Do not add customer addresses, inquiries, credentials or private operational notes. Browser-bundled values are public.
- Keep changes scoped: documentation does not authorize adding a backend, changing forms or provisioning services.

## Related documentation

The original README was the React/Vite starter; no project-specific runbook, `AGENTS.md`, `.agents/skills`, or root license file is tracked. Start with [package.json](package.json), [Vite configuration](vite.config.js) and [ESLint configuration](eslint.config.js). Existing framework references follow; this edit does not change licensing or asset attribution.

### Framework references retained from the starter

The original framework links are preserved for background; generic starter instructions do not establish this project's deployed behavior.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
- [SWC](https://swc.rs/)
- [this documentation](https://react.dev/learn/react-compiler/installation)
- [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
- [`typescript-eslint`](https://typescript-eslint.io)
