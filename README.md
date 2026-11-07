# FullStack

A small, static demo website for a fictional networking company,
**Networking Solutions**. It is a front-end learning project — HTML, CSS,
vanilla JavaScript and the DOM — with one PHP endpoint behind the contact form.

No frameworks, no build step: the pages are plain files you can open in a
browser or serve with any static file server.

## What is here

- **Multi-page layout** — `index.html` (home, services, news) and
  `html/contact.html` (contact form).
- **Responsive styling** — flexbox/grid layout with a mobile breakpoint in
  `css/styles.css`.
- **Dropdown navigation and search field** in the header.
- **Language switcher** — flag links that call `js/language-switcher.js`.
  It only translates elements carrying `class="translatable"` and a
  `data-translate-key`; none are marked yet, so today it is a working stub.
- **Contact form** — `js/contact.js` validates the fields in the browser and
  submits them with `fetch` to `php/contact-form-handler.php`, which relays the
  message with PHP's `mail()` and answers with JSON.

## Layout

```
FullStack/
├── index.html                    # Home page: header, services, news, footer
├── html/
│   └── contact.html              # Contact page and form
├── css/
│   ├── styles.css                # Stylesheet used by both pages
│   └── styles-alternate.css      # Unused earlier variant (red theme)
├── js/
│   ├── contact.js                # Client-side form validation + AJAX submit
│   └── language-switcher.js      # EN/NL translation stub
├── images/
│   ├── gb.png                    # English flag icon
│   └── nl.png                    # Dutch flag icon
├── php/
│   └── contact-form-handler.php  # Receives the form POST, sends mail, returns JSON
├── .gitignore
└── README.md
```

`css/styles-alternate.css` is not referenced by any page. It is kept as a
starting point for an alternative theme; either wire it in or remove it in a
follow-up.

## Prerequisites

- Any modern browser to view the static pages.
- [PHP](https://www.php.net/) 8.0 or newer to exercise the contact form. The
  handler uses `mail()`, so a working local mail transport (or `sendmail`
  shim) is required for messages to actually be delivered.

## Run locally

From the repository root:

```sh
php -S localhost:8000
```

Then open <http://localhost:8000/>. The contact page is at
<http://localhost:8000/html/contact.html>; without PHP the page still renders,
but submitting the form fails.

Opening `index.html` directly from disk also works for the static pages. Use a
server rather than `file://` if you want the form's relative `fetch` to resolve.

## Known limitations

These are intentional notes, not fixed here because they need product decisions
or configuration:

- `php/contact-form-handler.php` hardcodes the recipient address and has no spam
  or rate limiting; move the address into configuration before deploying.
- The `About Us` navigation entries point at `#about` and related anchors that
  have no target sections on the home page.
- The chat widget's toggle script is inline in `index.html` and only toggles a
  CSS class; there is no chat back end.
- The contact page does not load `language-switcher.js`, so its flag icons are
  inert links.

## License

No license is declared in this repository. Contact the owner before reusing the
code.
