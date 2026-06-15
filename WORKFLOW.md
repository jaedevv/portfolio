# Jae Serene E. Almodiel — Portfolio Website Workflow

## Phase 1: Design

### 1.1 Design System
- **Color Palette**:
  - Primary: deep indigo / violet accent
  - Secondary: warm coral or teal for contrast
  - Neutrals: slate grays, off-white, near-black
  - Dark mode: deep navy / charcoal background
- **Typography**:
  - Headings: "Plus Jakarta Sans" or "Space Grotesk" (Google Fonts)
  - Body: "Inter" or "DM Sans"
  - Weights: 400, 500, 600, 700
- **Spacing Scale**: 4px base increments (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- **Border Radius**: Small (6px), medium (12px), large (20px), full (50%)
- **Shadows**: Soft elevation for cards, colored glow for accent elements

### 1.2 Wireframes
- Sections: Hero → About → Experience → Projects → Skills → Contact
- Define grid / flexbox structure per section
- Plan responsive breakpoints:
  - Mobile: < 640px
  - Tablet: 640px–1024px
  - Desktop: > 1024px

### 1.3 Mockups
- Create high-fidelity mockup (Figma / Penpot)
- Finalize spacing, alignment, hover states, micro-interactions

---

## Phase 2: Project Setup

### 2.1 Folder Structure
```
portfolio/
├── index.html
├── assets/
│   ├── images/          # headshot, project screenshots, icons
│   ├── fonts/           # self-hosted fonts (optional)
│   └── icons/           # SVG icons (socials, tech stack)
├── css/
│   ├── reset.css        # normalize / reset
│   ├── variables.css    # design tokens (colors, fonts, spacing)
│   ├── base.css         # typography, utility classes
│   ├── layout.css       # grid, sections, containers
│   ├── components.css   # buttons, cards, nav, etc.
│   ├── animations.css   # keyframes, transitions, scroll reveals
│   └── responsive.css   # media queries
└── js/
    ├── main.js          # app entry, init
    ├── navigation.js    # mobile menu, scroll behavior, active link
    ├── animations.js    # IntersectionObserver, scroll triggers
    ├── tilt.js          # 3D perspective tilt on cards
    ├── cursor.js        # custom cursor follower
    ├── theme.js         # dark/light mode toggle
    └── contact.js       # form validation & submission
```

### 2.2 Base Setup
- Link Google Fonts in `<head>`
- Set CSS custom properties in `variables.css`
- Apply `box-sizing: border-box` global reset
- `scroll-behavior: smooth` on `html`
- `color-scheme` meta tag for native dark mode support
- Set `-webkit-font-smoothing: antialiased`

---

## Phase 3: Development

Build sections in order, each fully responsive before moving on.

### 3.1 Navigation
- Fixed / sticky top nav with glassmorphism backdrop
- Logo: "JAE" monogram or "Jae Serene" text logo
- Nav links: Home, About, Experience, Projects, Skills, Contact
- Mobile hamburger menu with animated slide-in overlay + link stagger
- Active section indicator morphing underline on scroll (IntersectionObserver)
- Nav hides on scroll down, reappears on scroll up

### 3.2 Hero Section
- Full-viewport height with split or centered layout
- Name heading: "Jae Serene E. Almodiel" with gradient text accent
- Animated subtitle: rotating words (Web Designer / Developer / Problem Solver)
- Tagline: "IT professional with a passion for clean design and efficient systems"
- CTA buttons: "View My Work" and "Contact Me" with magnetic hover effect
- Background: animated gradient mesh or floating geometric shapes
- Profile photo or ilustration with float animation
- Entry animation: letters stagger in, then subhead fades up

### 3.3 About Section
- Two-column layout: photo left, bio right (stacked on mobile)
- Professional headshot (placeholder: `https://picsum.photos/seed/jae/400/500`)
- Bio:
  > Detail-oriented professional with strong experience in improving processes, handling content, and supporting daily operations. Skilled in troubleshooting, data handling, client coordination, and delivering high-quality results. Solid background in IT, systems analysis, and administrative support.
- Stats row (with animated counters on scroll):
  - **8+ Years** Professional Experience
  - **50+** Projects Completed
  - **3+** Industries Served
  - **BS IT** Bicol University
- Resume download button with download animation

### 3.4 Experience Timeline Section
- Vertical timeline layout with alternating left/right cards (desktop), single column (mobile)
- Each entry:
  - **Web Designer / DevOps** — Pineapple Tech (Remote) | Oct 2017 – Oct 2025
    - Engaged with clients to plan and optimize site issues
    - Handled troubleshooting requests and technical concerns
    - Created mockups, prototypes and performed testing
    - Managed scheduling and client communications
    - Handled content updates, QA and documentation tasks
  - **Technical Unit Data Assistant** — TESDA Provincial Office | Jul 2017 – Sep 2017
    - Maintained databases and document logs
    - Handled document control and distribution
    - Ensured compliance with data retention requirements
    - Processed Scholarship deliverables and documentation
  - **Administrative Assistant** — Department of Education ROV | Oct 2014 – Jan 2016
    - Managed phone calls, messages and visitor assistance
    - Handled filing systems for paper and digital documents
    - Processed forms, reports and HR documentation
    - Supported staff with daily tasks and client inquiries
    - Improved workflows and communication processes
  - **Data Analyst / Data Encoder** — Albay Power Electric Corp. | Mar 2014 – May 2014
    - Produced monthly Excel-based performance reports
    - Compiled and organized reports for Finance department
    - Accurately encoded information and operational records
  - **XML Programmer / Scriptwriter** — Perfect Pitch Tech. | May 2013 – Oct 2013
    - Created use cases and documentation
    - Updated code based on new requirements
    - Collaborated across development lifecycle stages
- Timeline line draws in on scroll; cards fade and slide in on reveal

### 3.5 Projects Section
- Grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Each project card:
  - Thumbnail (placeholder: `https://picsum.photos/seed/project1/600/400`)
  - Hover: 3D perspective tilt + gradient overlay + scale
  - Tech stack badges (HTML, CSS, JS, etc.)
  - Links: Live Demo, GitHub (animated icon underlines)
- Optional filter buttons (All, Web, Design, Systems)
- Staggered reveal on scroll

### 3.6 Skills Section
- Visual grid of skill cards with icons
- Categories:
  - **Development**: Responsive Design, Software Testing, Troubleshooting
  - **Data**: Data Entry & Organization, File & Record Management, Document Processing
  - **Content**: Content Management, Social Media Management, Video Editing
  - **Operations**: Administrative Support, Calendar & Email Management, Customer Coordination
- Each card icon + label with colored accent border
- Hover: icon spin + card lift
- Skill bars or cards animate into view with staggered delay

### 3.7 Contact Section
- Split layout: form left, info right (stacked on mobile)
- Form fields: Name, Email, Subject, Message
- HTML5 validation + custom validation UX
- Submit to Formspree / Web3Forms / EmailJS
- Contact info:
  - Email: jae.webdeveloper@gmail.com
  - Phone: +639173300780
  - LinkedIn: https://www.linkedin.com/in/serenejae/
  - Location: Legazpi, Albay, PH 4500
- Social links: LinkedIn, GitHub (add others as needed)
- Lottie or animated illustration on the right side
- Success/error feedback with micro-animation

### 3.8 Footer
- "Designed & Built by Jae Serene E. Almodiel"
- Copyright with dynamic year via JS
- Back-to-top button with progress ring
- Languages: English | Filipino

---

## Phase 4: Cool Animations

### 4.1 Text Animations
- **Split-text reveal**: Each character/word animates in from below with staggered delay (GSAP or pure CSS)
- **Gradient text shift**: Animated gradient sweep on headings (`background-size: 200%` + `@keyframes`)
- **Typewriter effect**: Subtitle types in on load with blinking cursor, then loop rotating phrases
- **Glitch effect**: Brief distortion on hover for hero name (CSS clip + pseudo-elements)
- **Counter animation**: Numbers count up from 0 to final value on scroll reveal

### 4.2 Scroll Animations (IntersectionObserver)
- **Parallax layers**: Background moves slower than foreground on scroll (transform: translateZ with perspective)
- **Progress-based reveals**: Elements interpolate opacity/transform based on scroll percentage
- **Timeline draw**: Vertical line draws from top to bottom as user scrolls through Experience section
- **Staggered grid**: Skills and Projects fade-in with cascading delay per row/item
- **Reveal wrapper**: Reusable `.reveal` class with configurable direction (up, left, right, scale)

### 4.3 Card & UI Animations
- **3D perspective tilt**: Projects and skill cards tilt on mousemove via JS (vanilla-tilt.js or custom)
- **Magnetic buttons**: CTA buttons slightly follow cursor position within bounds
- **Morphing underline**: Nav active indicator morphs width/position smoothly between links
- **Image zoom on hover**: Project thumbnails scale inside clipped container
- **Border glow on focus**: Form inputs get animated gradient border on focus

### 4.4 Background Effects
- **Animated gradient mesh**: Multiple layered gradients slowly shift hue/position
- **Floating geometric shapes**: Circles, triangles, or blobs drift upward with varying speeds (CSS animation)
- **Particle system**: Light particle field in hero background (canvas or lightweight library like tsParticles)
- **Noise overlay**: Subtle grain texture overlay for depth (CSS with base64 SVG filter)

### 4.5 Theme Toggle Animation
- **Morphing sun/moon icon**: Icon smoothly transitions between sun and moon shapes
- **CSS `@property` transitions**: Animate custom properties (gradient angles, hue) smoothly
- **Page-wide crossfade**: All colors transition with `transition: background-color 0.4s, color 0.3s`

### 4.6 Cursor & Navigation
- **Custom cursor**: Circular follower with 100ms delay, shrinks on hover over links
- **Trail effect**: Subtle trailing dots or ring behind cursor (fading out)
- **Scroll progress indicator**: Thin colored bar at top of page filling as user scrolls
- **Smooth anchor scroll**: Not just `scroll-behavior: smooth` — custom easing with JS

### 4.7 Loading & Entry
- **Splash screen**: Brief animated logo + loading bar before content fades in
- **Staggered page entry**: Nav slides down, hero section elements sequence in, then remaining sections reveal on scroll
- **Reduced motion respect**: Check `prefers-reduced-motion` and disable heavy animations

---

## Phase 5: Content

### 5.1 About Text
> Detail-oriented professional with strong experience in improving processes, handling content, and supporting daily operations. Skilled in troubleshooting, data handling, client coordination, and delivering high-quality results. Solid background in IT, systems analysis, and administrative support.

### 5.2 Skills
| Category | Skills |
|----------|--------|
| Development | Responsive Design, Software Testing, Troubleshooting |
| Data & Records | File & Record Management, Data Entry & Organization, Document Processing |
| Content | Content Management, Social Media Management, Video Editing |
| Operations | Administrative Support, Calendar & Email Management, Customer Coordination |

### 5.3 Experience
| Role | Company | Period |
|------|---------|--------|
| Web Designer / DevOps | Pineapple Tech (Remote) | Oct 2017 – Oct 2025 |
| Technical Unit Data Assistant | TESDA Provincial Office | Jul 2017 – Sep 2017 |
| Administrative Assistant | DepEd ROV | Oct 2014 – Jan 2016 |
| Data Analyst / Data Encoder | Albay Power Electric Corp. | Mar 2014 – May 2014 |
| XML Programmer / Scriptwriter | Perfect Pitch Tech. | May 2013 – Oct 2013 |

### 5.4 Education
- **B.S. Information Technology** — Bicol University (2013)
- **High School Diploma** — Aquinas University of Legazpi (2009)

### 5.5 Languages
- English
- Filipino

### 5.6 Placeholder Images
- Profile: `https://picsum.photos/seed/jae/400/500`
- Projects: `https://picsum.photos/seed/project1/600/400` (replace with real screenshots)
- Icons: Lucide or Feather SVGs (inline)

### 5.7 Contact Info
- **Email**: jae.webdeveloper@gmail.com
- **Phone**: +639173300780
- **LinkedIn**: https://www.linkedin.com/in/serenejae/
- **Location**: Legazpi, Province of Albay, PH 4500

---

## Phase 6: Polish & Performance

### 6.1 Micro-interactions Checklist
- Button hover: scale(1.05) + shadow lift
- Link hover: underline slide-in or color shift
- Card hover: translateY(-6px) + shadow depth + border accent
- Form focus: border color + subtle glow
- Social icon hover: color fill + slight rotation

### 6.2 Performance
- `loading="lazy"` on all images
- `defer` all scripts
- Minify CSS/JS for production (csso, terser)
- Critical CSS inlined in `<head>`
- Font subsetting / preloading
- No render-blocking resources
- Bundle size budget: < 200KB total

---

## Phase 7: Testing

### 7.1 Responsive Testing
- Test on real devices or DevTools emulation
- Breakpoints: 360px, 640px, 768px, 1024px, 1440px
- Verify all hover/touch interactions work on mobile

### 7.2 Accessibility
- Semantic HTML (`<nav>`, `<section>`, `<article>`, `<footer>`)
- Descriptive `alt` text on all images
- Skip-to-content link
- Keyboard navigation: Tab order, focus indicators
- Color contrast: WCAG AA minimum (4.5:1 normal, 3:1 large)
- `prefers-reduced-motion` media query

### 7.3 Lighthouse Audit
- Target: 90+ on Performance, Accessibility, Best Practices, SEO
- Fix issues iteratively

---

## Phase 8: Deployment

### 8.1 Hosting Options
| Provider | Key Feature |
|----------|-------------|
| Netlify | Form handling, deploy from Git, SSL |
| Vercel | Serverless, optimized CDN |
| GitHub Pages | Free, custom domain |
| Cloudflare Pages | Fast edge network, generous free tier |

### 8.2 Deployment Steps
1. Push to GitHub repository (`jae-portfolio`)
2. Connect repo to hosting provider (auto-deploy from `main`)
3. Set custom domain (optional)
4. Enable HTTPS
5. Configure 404.html fallback

### 8.3 Post-Launch
- Add analytics (Plausible / Umami)
- Submit to Google Search Console
- Test all links and forms in production
- Add LinkedIn to featured section of profile

---

## Commit Conventions

```
feat: add hero section with split-text animation
feat: add experience timeline with scroll draw
style: animate skill cards on reveal
fix: correct mobile nav overlap on iOS
perf: lazy load project images
```

---

## Branching Strategy

```
main        — production-ready
develop     — integration
feat/*      — features (feat/hero, feat/timeline)
fix/*       — bug fixes
```

---

## Tools & Resources

| Purpose | Tool |
|---------|------|
| Design | Figma, Penpot |
| Fonts | Google Fonts, Fontsource |
| Icons | Lucide, Feather, Devicon |
| Images | picsum.photos (placeholder), Squoosh (compress) |
| Animations | CSS @keyframes, IntersectionObserver, vanilla-tilt.js, tsParticles |
| Forms | Formspree, Web3Forms, EmailJS |
| Hosting | Netlify, Vercel, GitHub Pages |
| Analytics | Plausible, Umami |
