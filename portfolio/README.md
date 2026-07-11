# Paras Adhikari — Full Stack Developer Portfolio

A premium, Awwwards-style developer portfolio built with **React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion**. Dark mode only, glassmorphism UI, aurora gradient backgrounds, floating particles, cursor glow, scroll progress bar, and a fully working EmailJS contact form.

---

## ✨ Features

- Dark-only glassmorphism theme with blue / purple / cyan aurora gradients
- Animated background: aurora blobs, floating particles, subtle grid
- Custom cursor glow (desktop only, auto-disabled on touch devices)
- Scroll progress bar + smooth scrolling
- Glass navbar with active-section highlight, blur-on-scroll, mobile menu
- Hero with typing animation (`Java Developer → Spring Boot Developer → Backend Developer`) and floating "3D" tech-chip illustration
- Animated, glowing skill cards grouped by category
- Project cards with hover animation, tags, GitHub button
- GitHub stats, top languages and streak stats (via github-readme-stats)
- Glassmorphism contact form wired to **EmailJS**
- Loading screen, back-to-top button, reduced-motion support
- Fully responsive (mobile / tablet / desktop), SEO meta tags, lazy-loaded images

---

## 🚀 Getting started

This project's dependencies were **not installed automatically** in this environment (no network access in the sandbox that generated it). Install them locally:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

---

## 🔧 Required customization (placeholders to update)

Everything you need to personalize lives in a handful of files:

| What                          | File                                  |
|-------------------------------|----------------------------------------|
| Resume PDF                    | Drop file at `public/resume.pdf`      |
| GitHub / LinkedIn / Email     | `src/data/social.ts`                  |
| GitHub username (for stats)   | `src/data/social.ts` → `githubUsername` |
| Project GitHub links & screenshots | `src/data/projects.ts` (links) + `public/projects/*.png` (images) |
| EmailJS keys                  | `.env` (copy from `.env.example`)     |

### Setting up EmailJS (contact form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an **Email Service** and an **Email Template** with fields matching the form: `name`, `email`, `subject`, `message`.
3. Copy `.env.example` to `.env` and fill in:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart `npm run dev` after adding the `.env` file.

Until configured, the form will show a friendly error instead of failing silently.

> ⚠️ **Deploying (Vercel / Netlify / GitHub Pages, etc.):** `.env` is git-ignored on purpose (it holds secrets), so it will **not** be pushed to your repo. This means the Contact form will silently stop working on your live site unless you add the same three variables in your hosting provider's dashboard:
> - Vercel: Project → Settings → Environment Variables
> - Netlify: Site configuration → Environment variables
>
> Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` there with the same values as your local `.env`, then redeploy.

---

## 📁 Project structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, AnimatedBackground, CursorGlow,
│   │                   ScrollProgressBar, LoadingScreen, BackToTop
│   ├── sections/       # Hero, About, Skills, Projects, Experience,
│   │                   Education, GithubStats, Contact
│   └── ui/             # GlassCard, SectionHeading, ProjectCard
├── data/               # skills.ts, projects.ts, experience.ts, social.ts
├── hooks/              # useTypingEffect, useScrollProgress,
│                         useCursorPosition, useActiveSection
├── lib/                # small clsx utility
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎨 Design tokens

Defined in `tailwind.config.js`:

- **Colors**: `aurora.blue` (#3b82f6), `aurora.purple` (#8b5cf6), `aurora.cyan` (#22d3ee), `base.950` (#050510)
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (utility/code)
- **Utilities**: `.glass`, `.glass-strong`, `.gradient-border`, `.text-gradient`, `.btn-primary`, `.btn-outline`

---

## 🧩 Tech stack

React 18 · Vite 5 · TypeScript · Tailwind CSS 3 · Framer Motion · React Icons · @emailjs/browser

---

Made with ❤️ by Paras Adhikari
