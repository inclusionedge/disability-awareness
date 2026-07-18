# Disability Awareness@Work — beta v01

An interactive workplace learning experience by **InclusionEdge**.

This is the **first release on the new multi-file architecture** (previously a single `index.html`, versions v1–v20). Content now lives in its own files, separate from the app engine, so editing a module's wording never means opening the engine code — and vice versa.

---

## Files you need to upload

Every file and folder below must be uploaded together, in the same structure, to the same folder on GitHub Pages (or any static web host). Missing even one file will break the site — use this list to check your upload before sharing the link.

```
your-deployment-folder/
├── index.html                                    ← the app engine — do not rename
├── config.js                                      ← your settings (access codes, branding, analytics)
├── quiz.js                                        ← the 10-question knowledge check
├── content/
│   ├── module-1-why-this-matters.js
│   ├── module-2-understanding-disability.js
│   ├── module-3-working-alongside.js
│   ├── module-4-examining-assumptions.js
│   └── module-5-recap-knowledge-check.js
├── intro.mp4                                      ← you supply this (the intro video)
├── intro.vtt                                       ← you supply this (captions for the video)
└── inclusionedge.png                               ← you supply this (the InclusionEdge logo)
```

- **The five `content/` files must keep those exact names and sit inside a `content` folder** next to `index.html`. `index.html` loads them by name.
- **Module order is set by `index.html`**, not by the content files themselves — see "Changing the number or order of modules" below.
- **`intro.mp4`, `intro.vtt`, and `inclusionedge.png`** (plus any per-organisation logo files you add in the Admin panel) are not included in this package — upload your own alongside these files, using the exact file names set in the Admin panel.

## What's new in beta v01

- **Multi-file structure** — content, quiz, settings and app engine are now separate files (see above). A wording change only ever touches one small content file.
- **Three new content block types** — images, self-hosted video clips, and select-all-that-apply quick checks, in addition to the existing text, quote, callout, stats, tiles, accordion, tabs, carousel, flip cards, myth/fact sort, MCQ, scenario and reflection blocks.
- **Any number of modules** — add, remove or reorder a line in `index.html`'s content `<script>` list (see below), and the menu, progress bar, "Module X of N" labels, certificate wording and duration all adjust automatically. Nothing needs to be counted or renumbered by hand.
- **Fixed:** the "require a name at entry" toggle in the Admin panel now actually does something — in the v20 build it was present but not wired up.
- **Fixed:** the certificate used to always display a perfect score, even if your pass mark allowed for a lower one. It now shows the learner's actual score.
- **Admin panel and setup screens rewritten** in plain language, with a hint under every field, for an administrator with no technical background.
- **GoatCounter analytics connected** — site code `inclusionedge` is set in `config.js`.

There is also a section at the very end of Module 5, clearly marked **"BETA v01 — feature preview (delete before production)"**, showing one working example of each new block type so you can click-test them once this is deployed. Delete that section from `content/module-5-recap-knowledge-check.js` once you're happy everything works — search that file for "BETA v01".

## Changing the number or order of modules

Open `index.html` and find this block (near the top of `<body>`):

```html
<script src="content/module-1-why-this-matters.js"></script>
<script src="content/module-2-understanding-disability.js"></script>
<script src="content/module-3-working-alongside.js"></script>
<script src="content/module-4-examining-assumptions.js"></script>
<script src="content/module-5-recap-knowledge-check.js"></script>
```

- **To remove a module:** delete its line (and stop uploading that file).
- **To add a module:** add a new `content/your-file-name.js` file (copy the structure of an existing one) and add a line for it here.
- **To reorder modules:** reorder these lines. The order here is the order learners see.
- **The last line is always the closing module** — the one with the knowledge check, confidence check-in, and certificate gate. Keep your recap/quiz module's line last.

## Everything else (deployment, admin panel, first login, passwords)

See the separate **Administrator User Brief** for a full step-by-step walkthrough aimed at a non-technical administrator — deploying to GitHub Pages, first login, setting a password, adding client organisations, and what each toggle does.

---

© 2026 InclusionEdge. All rights reserved.

This material and its contents are the property of InclusionEdge. No part of
this work may be reproduced, distributed, or transmitted in any form or by any
means without the prior written permission of InclusionEdge.
