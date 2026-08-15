# CONTENT_CHECKLIST.md — assets & copy you need to supply

Everything the site needs from you to turn Batch 01 placeholders into real
content. Grouped by type. Batch 01 wired the data layer so most of these are
now a one-file edit.

---

## 🖼️ Heading images & the ages "8–16 → 8–18" question (Batch 01 finding)

**Good news: no heading asset needs re-exporting for the age fix.**

All 10 `.avif` heading images were decoded and visually inspected. **None bake in
age text**, so changing 8–16 → 8–18 is a pure code edit, not an asset change.

Heading text manifest (for reference / future `alt` improvements):

| Asset | Text in image |
|---|---|
| `heroHeading.avif` | "Building Bright Minds with Tech!" |
| `aboutHeading.avif` | "Kids In Tech — Who Are We?" |
| `teachHeading.avif` / `teachHeadingMob.avif` | "What we Teach" |
| `learningHeading.avif` | "Learning Outcome" |
| `stemHeading.avif` | "Designing and STEM Learning Bootcamp" |
| `founderHeading.avif` | "Founder's Note" |
| `galleryHeading.avif` | "Our Little Place On The Internet" |
| `sponsorHeading.avif` | "Become a Sponsor" |
| `teamHeading.avif` | "Meet The Team" |

- [ ] **Ages copy fix (code, not asset):** `src/components/views/CodingClassSection.jsx`
  (~line 98) still reads "(ages 8–16)". The data layer already uses **8–18**
  (`src/data/site.js`). This visible copy edit was intentionally deferred out of
  Batch 01 (plumbing-only, zero visual change) — apply it in the content batch.

---

## 📇 Contact & org facts (`src/data/site.js`)
- [ ] Full street address + city (only "Nigeria" set).
- [ ] Google Maps embed/share URL (`site.mapUrl` empty) — for the Contact page.
- [ ] Confirm both phone numbers are current.
- [ ] **`site.loginUrl`** — currently a placeholder pointing to `/kitos` (used by
  the header **"Login to LMS"** button). Replace with the real KITOS/LMS login URL
  when the platform goes live.

## 🧑‍🤝‍🧑 Team photos (`public/assets/images/`, used by `src/app/about-us/page.jsx`)
Drop the real photo at the exact filename — no code change needed. Recommended
square-ish crop, same look as the existing team images (~334×326).
- [ ] `team1.avif` — Aliyu Mubarak (Founder) — *existing*
- [ ] `team2.avif` — Murtala Ishaq (Co-Founder & COO) — *existing image, person renamed*
- [ ] `team3.avif` — Mustapher Muhammad Lawal (Co-Founder & CTO) — *existing image, person renamed*
- [ ] `team4.avif` — Faruk Yusuf (Educator/Front End Dev) — **placeholder (copy of team3.avif); supply real photo**

## 🎓 Programs (`src/data/programs.js`)
- [ ] Confirm per-level age bands, durations, prerequisites, certification wording.
- [ ] Provide/confirm icons per track (currently reuse existing SVGs).

## 🏕️ Bootcamps (`src/data/bootcamps.js`)
- [ ] Real dates, prices, per-cohort curricula and student counts for cohorts 1–4.
- [ ] Confirm cohort 4 status (`open`) and its details (dates, venue, schedule).

## 🖼️ Gallery (`src/data/gallery.js`)
- [ ] **Re-tag all 16 photos** with true cohort/category (placeholders set to
  "Coding Sessions"). Categories: Bootcamp 1/2/3, Future Bootcamp 4, Robotics,
  Coding Sessions, Parents, Certificates, Graduation, Innovation Events.
- [ ] Improve per-image `alt` text.

## 🧑‍💻 Student Projects (`src/data/projects.js`)
- [ ] Real projects: title, student first name, track, thumbnail, live URL,
  YouTube id (for nocookie embeds), tags.

## 💬 Testimonials (`src/data/testimonials.js`)
- [ ] Real, consented parent/student quotes + names (never invented).

## 📰 News (`src/data/news.js`)
- [ ] Real posts: title, excerpt, date, cover image, body.

## 🏫 Partner Schools (`src/data/schools.js`)
- [ ] Real school names, logos, locations.

## ❓ FAQs (`src/data/faqs.js`)
- [ ] Confirm price, next-cohort dates, and "what to bring" answers (seeded as TODO).

## 📊 Stats (`src/data/stats.js`)
- [ ] Exact partner-school count and learning-hours figure.

---

## 📈 Analytics & registration env vars (Batch 10) — set in `.env.local`, NEVER commit
All are optional; the site no-ops gracefully without them.
- [ ] `NEXT_PUBLIC_GA_ID` — Google Analytics 4 (loads prod-only, after consent).
- [ ] `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity.
- [ ] `NEXT_PUBLIC_META_PIXEL_ID` — Meta (Facebook) Pixel.
- [ ] `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console verification token
  (placeholder google/yandex/yahoo codes were removed).
- [ ] `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY` — contact form.
- [ ] `NEXT_PUBLIC_ENABLE_NATIVE_REGISTER` = `"true"` to switch `/register` from the
  Google-Form link to the native form + Paystack scaffold.
- [ ] `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` — Paystack inline (only when going native/live).

## 🔐 SEO / analytics (later batches; needs your keys)
- [ ] Real search-console verification codes (Google/Yandex/Yahoo) — currently
  placeholders in `src/app/layout.js`. Provide real values or we remove them.
- [ ] `NEXT_PUBLIC_GA_ID` in `.env.local` for Google Analytics (prod only).
- [ ] OG/Twitter + JSON-LD images reference `.png` but the assets on disk are
  `.avif` (`heroHeading`, `aboutHeading`, `heroImg1`) → broken social previews.
  Provide `.png`/`.jpg` social images (1200×630) or we point tags at real files.

## 📰 News / Blog (`src/data/news.js`) — Batch 09
- [ ] Real posts (title, excerpt, cover image, author) + real `body` blocks —
  all 3 seeded posts are `[… — TODO]`. Never fabricate quotes/names.
- [ ] Bootcamp 3 Recap: real recap copy + consented student/parent quote.

## ✉️ Contact page (`src/app/contact`) — Batch 09
- [ ] **EmailJS keys** in `.env.local` (never commit): `NEXT_PUBLIC_EMAILJS_SERVICE_ID`,
  `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. Until set,
  the form gracefully falls back to a `mailto:` (no fake submit).
- [ ] **Google Map**: set `site.mapUrl` in `src/data/site.js` to the venue's
  Google Maps *embed* URL (and/or a full street address). Currently a placeholder.
- [ ] Confirm the FAQ answers with TODOs in `src/data/faqs.js` (price, next dates,
  what to bring).
