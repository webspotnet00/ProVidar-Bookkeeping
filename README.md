# ProVidar Bookkeeping — Website

A static website for **ProVidar Bookkeeping**. No build step, no dependencies, no
server code — plain HTML, CSS and JavaScript. It works on GitHub Pages, Netlify,
Cloudflare Pages or any basic web host.

---

## 1. What's in this folder

```
providar-website/
├── index.html              the whole site (one page, anchor navigation)
├── css/style.css           all styling — brand colours, type, layout
├── js/main.js              mobile menu, form handling, footer year
├── assets/
│   ├── mark.png            logo mark for the header
│   ├── banner.png          wide banner for the footer
│   ├── favicon.png         browser tab icon
│   ├── favicon-32.png      16/32px tab icon
│   ├── favicon-180.png     Apple touch icon
│   ├── favicon-512.png     high-res icon / PWA
│   ├── avatar.png          logo for social profiles
│   └── github-avatar.png   square avatar for the GitHub organisation
├── .nojekyll               tells GitHub Pages to serve files as-is
├── LICENSE                 usage terms
└── README.md               this file
```

---

## 2. Publish it on GitHub Pages (about five minutes)

1. Sign in to GitHub and click **New repository**.
2. Name it `providarbookkeeping` (or `providar-website`). Set it to **Public**.
   Do **not** add a README — you already have one.
3. On the new repo page, click **uploading an existing file**.
4. Unzip this package on your computer, then drag **everything inside the
   folder** into the browser window — `index.html`, the `css`, `js` and
   `assets` folders and the rest. Make sure the folder structure comes
   across; `index.html` must sit at the top level of the repo.
5. Write a commit message like `Initial site` and click **Commit changes**.
6. Go to **Settings → Pages**.
7. Under **Build and deployment → Source**, choose **Deploy from a branch**.
8. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
9. Wait about a minute, then reload the page. Your site is live at:

   ```
   https://<your-github-username>.github.io/<repository-name>/
   ```

### Using your own domain

If you bought `providarbookkeeping.com` (or any domain):

1. In **Settings → Pages → Custom domain**, type your domain and click **Save**.
2. At your domain registrar, add these DNS records:

   | Type  | Name | Value |
   |-------|------|-------|
   | A     | @    | 185.199.108.153 |
   | A     | @    | 185.199.109.153 |
   | A     | @    | 185.199.110.153 |
   | A     | @    | 185.199.111.153 |
   | CNAME | www  | `<your-github-username>.github.io` |

3. Wait for DNS to propagate (minutes to a few hours), then tick
   **Enforce HTTPS** in the same Pages settings panel.

---

## 3. Changing the content

Everything textual is in `index.html`, in plain English, in the order it appears
on the page. Look for these markers:

| Section | What to edit |
|---------|--------------|
| Header / navigation | the `.nav` block near the top |
| Hero headline | `<h1>Reliable financial records you can decide with.</h1>` |
| About, Mission, Vision | `<section id="about">` |
| Pain points | `<section id="solutions">` — one `<article class="card pain">` per complaint |
| Services | `<section id="services">` — one `<article class="card service">` per service |
| Why choose us | `<section id="why">` |
| How we work | `<section id="process">` |
| Values | `<section id="values">` |
| Contact details | `<section id="contact">`, and again in `<footer>` |
| Footer | `<footer class="site-footer">` |

To add a service, copy one whole `<article class="card service">…</article>`
block and edit the heading and paragraph inside it.

### Contact details currently on the site

- Email — `providarbookkeeping@gmail.com`
- Phone / WhatsApp — `+63 912 736 7023`
- Address — Philippines
- Office hours — 9:00am – 6:00pm US timezone

To change any of these, use Find and Replace across `index.html` and `js/main.js`
(a couple of details appear in both, so replace in both files).

---

## 4. Making the contact form send email

The form ships in **mailto mode**: when a visitor submits it, their own email
app opens with the message pre-filled and addressed to you. Nothing to set up,
but it relies on the visitor having a mail app configured — on a phone that is
usually fine, on a desktop browser it may not be.

For a form that sends reliably without the visitor's mail app, use a free form
service. **Formspree** is the simplest:

1. Create a free account at formspree.io and make a new form.
2. Copy the endpoint it gives you, e.g. `https://formspree.io/f/abcdwxyz`.
3. Open `js/main.js` and paste it here, on the line that reads:

   ```js
   var FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
   ```

   so it becomes:

   ```js
   var FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz";
   ```

4. Commit the change. The form now posts in the background and shows a
   confirmation instead of opening a mail app.

Netlify Forms and Formsubmit.co work the same way — any endpoint that accepts a
`POST` with form data will do.

---

## 5. Changing the logo or colours

Replace any file in `assets/` with your own, **keeping the same filename**, and
the site picks it up with no code changes.

The brand colours are defined once, at the top of `css/style.css`:

```css
:root {
  --navy: #0E2340;   /* primary brand colour */
  --gold: #C9A227;   /* accent */
  --ink:  #1B2431;   /* body text */
  --paper:#FFFFFF;   /* background */
}
```

Change those values and the whole site re-themes — buttons, headings, accents,
footer, everything.

---

## 6. Local preview

Open `index.html` directly in a browser to see the site. Everything works
offline except the Google Fonts, which need a connection.

For a local server (closer to how GitHub serves it), run this in the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## 7. Before you go live — a short checklist

- [ ] Confirm the business name and logo are cleared for use (domain, DTI/SEC
      registration, trademark).
- [ ] Check every phone number, email address and detail on the page is correct.
- [ ] Decide whether to keep "Office Hours: 9:00am – 6:00pm US timezone" — if
      you serve Philippine clients, a PHT hours line may be clearer.
- [ ] Add your Facebook page or website link once you have one.
- [ ] Set up the form endpoint (section 4) if you want enquiries by email.
- [ ] Add a privacy note if you collect enquiry details, especially for
      overseas clients.

---

## 8. Licence

See `LICENSE`. The site code is yours to use and modify for ProVidar
Bookkeeping. The logo and brand name are the property of ProVidar Bookkeeping.
