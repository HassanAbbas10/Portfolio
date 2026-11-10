# Project technology sources

The project card stacks were checked against local source on 2026-11-10.
Paths below are relative to the local home directory; these repositories are
research inputs, not dependencies of the portfolio.

| Card | Local source | Evidence |
| --- | --- | --- |
| DueRadar | `SAAS Collec/SAAS-1/homepage` | `package.json`, `README.md`, Supabase migrations, `lib/capture/ocr.ts`, `lib/capture/extract.ts`, UI imports and `app/layout.tsx` analytics wiring |
| BundleBack | `SAAS` | `package.json`, Supabase migrations, `src/lib/billing`, `src/domain/validation.ts`, chart/tour/animation components and `app/layout.tsx` |
| The Alchemy of Perfume | `Bussiness/Ecom-Builder` | `README.md`, `package.json`, `lib/api/store-api.ts`, `lib/cart-store.ts`, `lib/contact-mail.ts`, checkout/webhook routes and UI imports |
| Dev-Shop | `code/Ecommerce/MERN-Ecommerce/Website` | The original Dev-Shop README identifies the matching repository and live URL, and documents Vite, shadcn/ui and DummyJSON alongside the existing stack |
| Full Stack Ecommerce Dashboard | `code/Ecommerce/MERN-Ecommerce` | Root README, `FrontEnd/package.json`, dashboard/chart/UI imports, `BackEnd/package.json`, authentication middleware, Mongoose models and Cloudinary/Multer upload code |

Cards list the application stack and substantive libraries, grouping package
families under their public names rather than listing every utility, type package
or build dependency. Dependencies alone do not establish active use: DueRadar's
unused Three.js dependency and Alchemy's legacy WooCommerce, WordPress,
Axios and Nodemailer integrations are excluded. BundleBack uses custom CSS,
not Tailwind. Supabase database migrations establish PostgreSQL usage.

The local ecommerce storefront has evolved beyond the original Dev-Shop demo;
only technologies documented for the original demo were added to that card.
Local source could not be matched for Word-Stock, Domain Jourdan, Prize Paradise,
Eventify, Slideshare or Exclusive Store, so their existing stacks were retained.
