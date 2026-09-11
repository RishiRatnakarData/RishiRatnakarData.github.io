# Rishi Ratnakar — Portfolio Site

Recruiter-focused static portfolio built for free deployment on GitHub Pages.

## Publish for free

1. Create a **public** GitHub repository named exactly:
   `RishiRatnakarData.github.io`
2. Copy everything in this folder into that repository.
3. Your current résumé and LinkedIn URL are already configured.
4. Commit and push to `main`.
5. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch → main / root → Save**.
6. Your site will be available at:
   `https://rishiratnakardata.github.io`

## Publish another project

Open `site-config.js` and change the corresponding project:

```js
published: false
```

to:

```js
published: true
```

Do this only after you have actually validated the repository and its claims.

## Important edits before publishing

- Review the IBM experience wording and replace it with stronger verified bullets if you have them.
- When Projects 2 and 3 are validated, expand their case-study pages and mark them published.

## Local preview

From the site folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
