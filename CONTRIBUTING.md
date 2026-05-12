# Contributing to meat.mangaroa.org

## Quick Start

```bash
# 1. Clone the repo (you've been added as a collaborator)
git clone https://github.com/billy-mangaroa/mangaroa-meat.git
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

### The Workflow

There are two branches that matter:

| Branch | Site | Who can merge |
|--------|------|---------------|
| `staging` | staging.meat.mangaroa.org | You push directly |
| `main` | meat.mangaroa.org (production) | Billy approves via PR |

### Step 1: Work on staging

```bash
# Start from the staging branch
git checkout staging
git pull origin staging

# Make your edits...

# Commit and push
git add -A
git commit -m "Update homepage copy"
git push origin staging
```

This automatically deploys to **staging.meat.mangaroa.org** where you can preview your changes live.

### Step 2: When you're happy, open a PR to production

1. Go to https://github.com/billy-mangaroa/mangaroa-meat
2. Click "Pull requests" → "New pull request"
3. Set **base: main** ← **compare: staging**
4. Click "Create pull request"
5. Add a short description of what you changed
6. Billy will review and merge → goes live on meat.mangaroa.org

### Option B: Edit on GitHub directly

1. Go to https://github.com/billy-mangaroa/mangaroa-meat
2. Switch to the `staging` branch (dropdown at top-left)
3. Navigate to the file you want to edit
4. Click the pencil icon (edit)
5. Commit directly to `staging`
6. Check staging.meat.mangaroa.org to preview
7. Open a PR from `staging` → `main` when ready

## Deployment

| What happens | Where it deploys |
|-------------|-----------------|
| Push to `staging` | staging.meat.mangaroa.org (preview) |
| PR merged to `main` | meat.mangaroa.org (production) |

You can push to `staging` as many times as you want. Production only updates when Billy approves and merges your PR.

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
