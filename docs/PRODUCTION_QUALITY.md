# Flowtick — Production Quality & SEO Checklist

## Custom domain
- Use a real custom domain for production.
- Enforce HTTPS.
- Choose one canonical hostname.
- Do not invent a domain.

## Remove default framework content
Before launch:
- no Vite title
- no React title
- no starter logos
- no placeholder copy
- no localhost links
- no preview URLs
- no demo assets

## Metadata
Every indexable page should have:
- unique title
- useful meta description
- canonical tag
- one clear `h1`

## Technical SEO
Add:
- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- favicon
- internal links
- social share metadata
- structured data where accurate

## Breadcrumbs
Use only if the information architecture benefits from them.

## Local business schema
Do not add `LocalBusiness` schema unless Flowtick is genuinely operated as a real local business with real public details.

## Images
- proper alt text
- no keyword stuffing
- decorative images should not get misleading alt text

## Custom 404
Create a branded 404 page with a clear path back to the app.

## Console quality
Before launch:
- zero uncaught JS errors
- no failed resource requests that should succeed
- no React warnings
- no debug logs that should not ship

## Source maps
Do not publish browser-accessible production source maps unless there is a deliberate reason.

## Bundle size
- remove unused dependencies
- remove dead code
- avoid large libraries for tiny features
- lazy-load non-critical features when useful

## No-placeholder rule
Production must not contain:
- fake testimonials
- fake ratings
- fake customer logos
- demo pricing
- example.com URLs
- localhost URLs
- template social links
- default Vite/React assets

## Brand consistency
- consistent product name
- correct favicon
- correct browser title
- consistent button labels
- consistent legal naming
