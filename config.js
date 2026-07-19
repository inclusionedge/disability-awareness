/* config.js — Disability Awareness@Work deployment settings (beta v02)
   ---------------------------------------------------------
   HOW TO EDIT THIS FILE
   The easy way: open the site, go to yoursite.com/#/admin, log in,
   change settings on screen, click "Generate config.js", then download
   and upload the new file here (replacing this one).
   The direct way: edit the values below by hand, then upload this file.
   Either way — this file must sit in the same folder as index.html.

   Demo access code: inclusion2026   ·   Demo admin password: admin123
   CHANGE BOTH before sending this to real learners. Go to #/adminsetup
   to create a new admin password, and use the Admin panel's
   Organisations table to set your own organisation access code(s).    */
window.DAW_CONFIG = {

  /* ---- Intro video (the short video learners watch before Module 1) ---- */
  videoSrc: 'intro.mp4',              // the video file, sitting next to index.html
  videoTitle: 'A message before you begin',
  videoCaptions: 'intro.vtt',         // caption file for the video (leave as-is if you don't have one yet)
  videoSkip: false,                   // false = learner must watch to unlock modules
                                       // true  = a "Skip video" button appears alongside the player

  /* ---- Branding ---- */
  logoMain: 'inclusionedge.png',      // InclusionEdge's logo file; leave as '' to show no logo
  // Each organisation's own logo is set per-row in the Admin panel's Organisations table.

  /* ---- What learners can do at the end of the course (beta v02) ---- */
  allowCertDownload: true,            // show the "Download certificate" button on the certificate page
  allowReportCompletion: true,        // show the "Report completion" button on the certificate page

  /* ---- Completion reporting ---- */
  reportCC: 'completions@inclusionedge.com',
                                       // Every time a learner reports completion, a copy of that email
                                       // is sent here too. Leave as '' to send no CC (fully omitted from mailto).

  /* ---- Requesting an access code (beta v02) ---- */
  requestCodeEmail: '',                // Where "Request an access code" enquiries from the login page go.
                                        // Leave blank to fall back to reportCC.

  /* ---- Usage analytics (optional, fully anonymous — no learner names or data) ---- */
  goatcounter: 'inclusionedge',        // your GoatCounter site code (the part before ".goatcounter.com")
  goatcounterUrl: '',                  // optional: paste your full dashboard link here for a shortcut
                                        // in the Admin panel; leave '' and the panel will work it out
                                        // from the site code above.

  /* ---- Access ---- */
  accessDays: 30,                     // how many days a learner's device stays unlocked before
                                       // they'd need to re-enter the access code
  nameMandatory: true,                // true  = learner must type a name before starting
                                       // false = name is optional (they can still add one later,
                                       //         at the certificate step, before downloading it)

  /* ---- Knowledge check ---- */
  passThreshold: 10,                  // how many correct answers a learner needs to complete the course
  quizShowCount: 0,                   // beta v02: how many questions each learner sees.
                                       // 0 or unset = show every question in quiz.js (all 10).
                                       // A smaller number samples a proportional subset across the
                                       // learning outcomes, so no outcome is ever skipped.

  /* ---- Advanced / internal — leave these alone unless you know why you're changing them ---- */
  enableSetcode: false,                // internal helper screen; keep OFF for real deployments
  adminHash: '6cc7fd7751127e88',       // the admin password, stored scrambled (never in plain text)

  /* ---- Organisations ---- */
  // One row per client organisation. Each needs its own access code (learners type this to
  // start the course), an HR email (where their completion reports get sent), and optionally
  // their own logo file. Manage this table from the Admin panel rather than editing by hand —
  // access codes need to be scrambled the same way the admin password is.
  orgs: [
    { hash:'1c76617fe62e6f3e', label:'Demo Org', email:'reports@example.com', logo:'' } // DEMO code: inclusion2026
  ]
};
