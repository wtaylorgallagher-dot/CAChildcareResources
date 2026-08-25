# CA Childcare Resources

Static GitHub Pages website for **www.cachildcareresources.com**.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `ca-childcare-resources`.
2. Upload everything in this folder to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. In **Settings → Pages → Custom domain**, enter:
   `www.cachildcareresources.com`
7. Keep the included `CNAME` file in the repository.

## Porkbun DNS

For `www`, add:
- Type: `CNAME`
- Host: `www`
- Answer: `<your-github-username>.github.io`

For the root/apex domain (`cachildcareresources.com`), use GitHub Pages' current A/AAAA records from GitHub's official custom-domain documentation, or forward the apex to `https://www.cachildcareresources.com`.

After DNS propagates, enable **Enforce HTTPS** in GitHub Pages.

## Editing

- Global design: `assets/styles.css`
- Navigation / footer: repeated in generated HTML files
- Search behavior: `assets/app.js`
- Main landing page: `index.html`
- Provider roadmap: `start-here.html`
- Resource directory: `resources.html`
- Training explainer: `training.html`
- Guides: `/articles/`

## SEO

The site includes:
- Unique titles and meta descriptions
- Canonical URLs
- Open Graph metadata
- `robots.txt`
- `sitemap.xml`
- Semantic headings and internal links

## Important

This website is positioned as an independent educational resource and should not imply affiliation with CDSS, CCLD or EMSA. Verify current licensing requirements before publishing time-sensitive claims.
