# Academic Portfolio

A clean, static academic portfolio website. No build step — just HTML, CSS, and a little JS.

## Pages
- **index.html** — Home: photo, bio, education, research interests
- **publications.html** — Publications grouped by year
- **projects.html** — Project cards
- **about.html** — Longer bio, experience, awards, service

## Features
- White background by default with a 🌙 / ☀️ light/dark toggle (top-right), saved to your browser
- Responsive layout for mobile
- Active-page highlighting in the nav

## How to use
1. Add your photo at `images/profile.jpg` (a square image works best; it's cropped to a circle).
2. Find-and-replace `Your Name`, `you@university.edu`, and the `[bracketed]` placeholders across the `.html` files with your details.
3. Update the links (CV, Google Scholar, GitHub, LinkedIn) in `index.html`.

## Run locally
Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (free)
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch (root).
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the folder or connect the repo.

## Customize colors
Edit the CSS variables at the top of `css/style.css` (`:root` for light, `[data-theme="dark"]` for dark).
