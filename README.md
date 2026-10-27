# Anandu Prasad — Video Editor & Colorist Portfolio

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

1. Put your portrait/photo in the `public/` directory (e.g. `public/anandu-portrait.jpg` or any image name).
2. Open [`components/Site.jsx`](file:///Users/ansusmacbookair/Downloads/smilora-minimal/components/Site.jsx).
3. Update the `PROFILE.heroImage` property:
   ```javascript
   export const PROFILE = {
     name: 'Anandu Prasad',
     heroImage: '/anandu-portrait.jpg', // Place your image in public/
     phone: '+91 8606502102',
     whatsapp: '918606502102',           // Your WhatsApp number
     ...
   }
   ```

---

## 📁 Adding Your Google Drive Video Links

All portfolio data and Google Drive links are in [`components/Site.jsx`](file:///Users/ansusmacbookair/Downloads/smilora-minimal/components/Site.jsx):
- **Main Drive Showreel / Portfolio Folder**:
  ```javascript
  export const PROFILE = {
    ...
    showreelDriveUrl: 'https://drive.google.com/...', // Main Showreel Drive link
  }
  ```
- **Project Specific Video Links**:
  ```javascript
  export const PROJECTS = [
    {
      id: 1,
      title: 'Project Title',
      software: 'DaVinci Resolve Studio',
      driveUrl: 'https://drive.google.com/...', // Direct video Drive link
      ...
    },
  ]
  ```
Visitors can click **"Open Video in Google Drive"** to immediately stream the master video or open the folder!

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
