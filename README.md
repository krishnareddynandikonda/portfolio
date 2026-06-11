# నందికొండ కృష్ణ వర్ధన్ రెడ్డి — Marriage Portfolio

A colorful "Modern Telugu Hindu Marriage Portfolio" for **Nandikonda Krishna Vardhan Reddy** —
yellow & white cultural luxury with floating sunflowers, rangoli/temple graphics, and Telugu +
English content. Built with React + Vite + Tailwind CSS + Framer Motion + Lucide icons.

Live (after Pages is enabled): https://krishnareddynandikonda.github.io/portfolio/

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Edit content

Everything lives in **`src/data/profileData.js`** — name, intro, the 10 story
items, biodata, family, career, horoscope, lifestyle, partner expectations,
gallery captions, and contact details. Edit and save; the page hot-reloads.

## Replace photos

Drop images into **`public/photos/`** using the names listed in
`public/photos/README.txt` (e.g. `krishna-hero.jpg`, `krishna-story-1.jpg`,
`krishna-gallery-1.jpg`). Any missing photo shows a gold placeholder, so you
can add them one at a time. 3:4 portrait crops look best.

## Buttons

- **View Profile** → scrolls to the biodata section
- **Download Biodata** → opens the browser print / save-as-PDF dialog
- **Contact Family** → opens the dialer
- **WhatsApp** → opens chat to `contact.whatsapp`

## Deploy

It's a static Vite app. Run `npm run build`, then drag `/dist` onto Netlify
Drop, or connect the repo to Vercel / GitHub Pages.

## Component architecture

```
src/
  components/
    shared.jsx              Reveal, GoldDivider, SectionHeading, Photo, Mandala
    LoadingScreen.jsx       diya/lotus loader, fades into the page
    Hero.jsx                full-screen hero + floating petals
    Intro.jsx               editorial intro block
    PhotoStory.jsx          10 alternating parallax story frames
    ProfileDetails.jsx      biodata cards with icons
    FamilyBackground.jsx    glass panel + value chips
    CareerSection.jsx       luxury timeline
    HoroscopeSection.jsx    traditional particulars table
    LifestyleSection.jsx    interest tiles with hover
    PartnerExpectations.jsx warm expectations panel
    Gallery.jsx             10-photo grid + lightbox
    Contact.jsx             phone / WhatsApp / PDF
    Footer.jsx
  data/profileData.js       single source of truth
  App.jsx, main.jsx, index.css
```
