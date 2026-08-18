# Amandil Fidaleo — Portfolio

A single-page portfolio site: About, Experience, Education, Portfolio (filterable project grid), Skills, and Contact.

## Files

- `index.html` — the page
- `assets/style.css` — all styling
- `assets/script.js` — project data, filtering, nav, and scroll animation
- `assets/img/profile.jpg` — headshot
- `assets/pdfs/` — project report PDFs

## Publishing to GitHub Pages (no terminal required)

1. **Create a GitHub account** if you don't have one, at github.com.
2. **Create a new repository.**
   - Click the **+** in the top right → **New repository**.
   - For a *personal* site at `yourusername.github.io`, name the repo exactly `yourusername.github.io` (replace with your actual GitHub username).
   - For a *project* site instead (URL like `yourusername.github.io/portfolio`), name it anything, e.g. `portfolio`.
   - Set it to **Public**, and click **Create repository**.
3. **Upload the files.**
   - On the new repo's page, click **Add file → Upload files**.
   - Drag in `index.html`, the `README.md`, and the entire `assets` folder (drag the folder itself — GitHub preserves the folder structure).
   - Scroll down and click **Commit changes**.
4. **Turn on Pages.**
   - Go to the repo's **Settings** tab → **Pages** (left sidebar, under "Code and automation").
   - Under **Source**, choose **Deploy from a branch**.
   - Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. **Wait ~1 minute**, then refresh the Pages settings page — it'll show a green banner with your live URL:
   - `https://yourusername.github.io` (if you used the personal repo name), or
   - `https://yourusername.github.io/portfolio` (if you used a project repo name).

## Updating the site later

- **Add or edit a project:** open `assets/script.js`, find the `PROJECTS` array near the top, and copy/edit an entry. Each project needs a `title`, `type`, `tag` (must match one of the `CATEGORIES` for filtering), `desc`, and a `links` array (`type: "canva"` for a Canva link, `type: "pdf"` for a local PDF in `assets/pdfs/`).
- **Swap the photo:** replace `assets/img/profile.jpg` with a new image of the same filename.
- **Add a new PDF:** drop it into `assets/pdfs/` and reference it from a project's `links` array as `assets/pdfs/your-file.pdf`.
- After editing on GitHub.com directly (pencil/edit icon on any file), Pages redeploys automatically within a minute or two.

## A note on the Canva links

The presentation links point to your personal Canva account. If you ever regenerate or disable a share link in Canva, the corresponding button on the site will break — just grab the new link and update the `url` in `assets/script.js`.
