# Anandhu Prasad — Video Editor & Colorist Portfolio

A cinematic, modern, high-retention personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Tailored specifically for post-production video editors specializing in **DaVinci Resolve**, **Adobe Premiere Pro**, and **CapCut**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Hero Image Placeholder (How to add your photo)

1. Put your portrait/photo in the `public/` directory (e.g. `public/anandhu-portrait.jpg` or any image name).
2. Open [`components/Site.jsx`](file:///Users/ansusmacbookair/Downloads/smilora-minimal/components/Site.jsx).
3. Update the `PROFILE.heroImage` property:
   ```javascript
   export const PROFILE = {
     name: 'Anandhu Prasad',
     heroImage: '/anandhu-portrait.jpg', // Place your image in public/
     whatsapp: '919876543210',           // Your WhatsApp number
     email: 'your.email@gmail.com',
     ...
   }
   ```

---

## 🛠️ Editing Content & Projects

All portfolio data is easily customizable at the top of [`components/Site.jsx`](file:///Users/ansusmacbookair/Downloads/smilora-minimal/components/Site.jsx):
- **`PROFILE`**: Name, bio, phone, WhatsApp number, social handles, and stats.
- **`TOOLS`**: DaVinci Resolve, Premiere Pro, and CapCut skill cards and features.
- **`PROJECTS`**: Your showcase videos, thumbnails, retention stats, and descriptions.
- **`REVIEWS`**: Testimonials from clients, creators, and directors.

---

## 📦 How to Push to a New Git Repository

When you are ready to publish this to your own brand new GitHub repository:

```bash
# 1. Remove the old git remote origin (if any)
git remote remove origin

# 2. Add your new GitHub repository URL
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-NEW-REPO-NAME>.git

# 3. Ensure branch is main
git branch -M main

# 4. Stage and commit all changes
git add .
git commit -m "Initial commit: Anandhu Prasad Video Editor Portfolio"

# 5. Push to your new repository
git push -u origin main
```
