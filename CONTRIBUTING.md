# Contributing to meat.mangaroa.org

## Quick Start

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone git@github.com:YOUR-USERNAME/mangaroa-meat.git
cd mangaroa-meat

# 2. Install dependencies
cd app
npm install

# 3. Set up environment
cp .env.example .env
# Ask Billy for the Shopify + Airtable tokens

# 4. Run the dev server
npm run dev
# Opens at http://localhost:4321
```

## Project Structure

```
mangaroa-meat/
├── app/                  ← The actual Astro site
│   ├── src/
│   │   ├── pages/        ← Routes (index, about, products, etc.)
│   │   ├── components/   ← React + Astro components
│   │   ├── layouts/      ← Page layouts
│   │   └── styles/       ← Tailwind + global CSS
│   ├── public/           ← Static assets (images, fonts)
│   ├── content/          ← MDX content files (if any)
│   ├── astro.config.mjs  ← Astro config
│   └── package.json
├── content/              ← SEO content + copy docs
├── strategy/             ← Business strategy docs
├── SEO_STRATEGY.md       ← SEO program overview
└── CONTRIBUTING.md       ← You are here
```

## Making Changes

### For content/copy edits

Most text lives in `app/src/pages/` and `app/src/components/`. Find the page you want to edit, change the text, and preview locally.

### For style changes

This site uses **Tailwind CSS 4**. Edit classes directly in the component files. No separate CSS files needed for most things.

## How to Submit Changes

### Option A: Branch + Pull Request (preferred)

```bash
# Create a branch for your work
git checkout -b my-changes

# Make your edits...

# Commit
git add -A
git commit -m "Update homepage copy"

# Push your branch
git push origin my-changes
```

Then go to GitHub and open a **Pull Request** from your branch to `main`. Billy will review and merge it.

### Option B: Edit on GitHub directly

1. Go to https://github.com/billy-mangaroa/mangaroa-meat
2. Navigate to the file you want to edit
3. Click the pencil icon (edit)
4. Make your changes
5. Click "Commit changes" → choose "Create a new branch" → "Propose changes"
6. This automatically opens a Pull Request

## Deployment

The site deploys automatically to **meat.mangaroa.org** when changes are merged to `main`. You don't need to do anything — just get your PR merged and it goes live.

Preview deployments are generated for every PR so you can check your changes before they go live.

## Environment Variables

You'll need these in `app/.env` to run locally:

| Variable | What it does | Where to get it |
|----------|-------------|-----------------|
| `SHOPIFY_STOREFRONT_TOKEN` | Pulls product data from Shopify | Ask Billy |
| `AIRTABLE_API_KEY` | Bulk order EOI form submissions | Ask Billy |
| `KLAVIYO_API_KEY` | Newsletter signup | Ask Billy |

If you're only editing copy/styles, the site will still build without these — the product sections will just be empty.

## Need Help?

- Message Billy on Telegram or email billy@mangaroa.org
- Open a GitHub Issue if you find a bug
