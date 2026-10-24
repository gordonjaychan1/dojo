# Websites for martial arts schools

Landing page for dojo owners: websites for karate, taekwondo, jiu jitsu, and other
martial arts schools, built by Gordon Jay Chan.

🔗 **Live site:** https://gordonjaychan.com/dojo/

Its own GitHub Pages repo (like `KataDataAnalysis`), served under the main
gordonjaychan.com domain. It is not linked from the main site's menu.

## Structure

```
index.html            The whole page
demo.html             Members-only demo (/dojo/demo): a made-up school, 3 groups, passwords shown on the page
favicon.svg           The site gourd, wearing a black belt
assets/css/style.css  All styling (same base colors and fonts as the main site)
assets/js/app.js      Before/after sliders, contact popup
assets/js/i18n.js     Japanese text for the EN | 日本語 toggle (English stays in index.html)
assets/css/demo.css   Demo page only (the pretend school site inside the frame)
assets/js/demo.js     Demo password check (plain check; real client sites use encryption)
images/               Case-study screenshots, logos, og-dojo.jpg (1200×630 share card)
```

The "Get started" buttons open a contact popup on this page (also opens from
`gordonjaychan.com/dojo/#contact`). It posts to the same Formspree form as the main
site's contact page, with the subject "Dojo website: <school> (<name>)".

Bump the `?v=` numbers on `style.css` / `app.js` in `index.html` with each change.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Japanese version

The header's EN | 日本語 switch (on both the main page and the demo) swaps in the
Japanese from `assets/js/i18n.js`; the demo's keys start with `demo.`.
Elements to translate carry `data-i18n="key"` (or `data-i18n-alt`, `-aria`, `-ph`,
`-done` for attributes). When you change English text in `index.html`, update the
matching key in `i18n.js` too. Link straight to Japanese with `?lang=ja`; the choice
is remembered, and Japanese-language browsers get Japanese automatically.

