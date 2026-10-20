# Websites for martial arts schools

Landing page for dojo owners: websites for karate, taekwondo, jiu jitsu, and other
martial arts schools, built by Gordon Jay Chan.

🔗 **Live site:** https://gordonjaychan.com/dojo/

Its own GitHub Pages repo (like `KataDataAnalysis`), served under the main
gordonjaychan.com domain. It is not linked from the main site's menu.

## Structure

```
index.html            The whole page
favicon.svg           The site gourd, wearing a black belt
assets/css/style.css  All styling (same base colors and fonts as the main site)
assets/js/app.js      Before/after sliders
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
