# Disability Awareness@Work — beta v02

An interactive workplace learning experience by **InclusionEdge**.

Second release on the multi-file architecture, following beta v01. New client-requested features and one certificate bug fix are folded in.

---

## Files you need to upload

Every file and folder below must be uploaded together, in the same structure, to the same folder on GitHub Pages (or any static web host). Missing even one file will break the site — use this list to check your upload before sharing the link.

```
your-deployment-folder/
├── index.html                                    ← the app engine — do not rename
├── config.js                                      ← your settings (access codes, branding, toggles)
├── quiz.js                                        ← the 10-question knowledge check bank
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

## What's new in beta v02

**New features (client requests):**
- **Request access code** — a "Don't have an access code?" link on the login page opens a small dialog that pre-fills an email to the course administrator.
- **Custom wrong-code error** — the error state now includes a "request a new access code" link inline, so a stuck learner isn't a dead end.
- **Visible "Skip video" button** when the videoSkip setting is on (previously the setting only unlocked free scrubbing).
- **"Next module" button label** replaces the older "Mark module complete" — more accurate to what it does. The button before the final module reads "Continue to knowledge check".
- **Restyled reset-progress button** in a caution colour with an in-app confirm modal (replacing the browser's native `confirm()` popup).
- **Kindness Traps** in Module 4 converted from tiles to a large-type carousel for easier reading.
- **"Introductory course"** replaces "Level 0" in both learner-facing spots — clearer for a non-technical audience.
- **Org badge in the persistent header** once access is granted (subtle logo + name — restrained, not a full brand takeover).
- **Independent Download / Report toggles** on the certificate page. Either can be turned off from the Admin panel without affecting the other.
- **Blank CC handling** — leaving the "also CC" email blank now cleanly omits the CC from the completion mailto entirely.
- **Dynamic quiz length** — a harness capability: the Admin panel can set how many questions to show a learner. When smaller than the bank, questions are sampled proportionally across the learning outcomes so no outcome is ever skipped. Default is 0 (show all 10) for this course.

**Fixed:**
- **Certificate name wrap in the downloadable PNG.** Long names correctly wrap to two lines now, with everything below shifting down to keep the layout clean. Short/medium names render identically to before.

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
