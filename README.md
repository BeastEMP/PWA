# 🌐 Progressive Web Application (PWA) – E-commerce Landing Page

A modern, installable Progressive Web Application built using React, Vite, Tailwind CSS, and TypeScript. This PWA offers offline access, fast loading, responsive design, and a smooth user experience optimized for mobile and desktop.

---

## 🚀 Features

- 📲 Installable on mobile & desktop (Add to Home Screen)
- ⚡ Lightning-fast with Vite
- 📦 Offline caching with Service Workers
- 🌙 Responsive UI built using Tailwind CSS
- 🔒 Secure, modern architecture
- 🧩 Component-based structure with shadcn/ui

---

## 🧾 Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **PWA:** Service Workers + Web Manifest
- **Build Tool:** Vite

---

## 🛠 Getting Started

### 📦 Requirements
- Node.js and npm

### 🧪 Installation

```bash
# Clone the repository
git clone https://github.com/BeastEMP/PWA.git
cd PWA

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit the app at `http://localhost:5173`

---

## 📁 Folder Structure

```
/public               → Static files (manifest.json, icons, etc.)
/src
  ├── components      → UI components
  ├── pages           → Page layouts and sections
  ├── styles          → Tailwind and global CSS
  ├── main.tsx        → App entry point
  └── serviceWorker   → PWA service worker logic
```

---

## 🌍 PWA Features

- **Web App Manifest:** Defines app metadata (name, icons, start URL, theme)
- **Service Worker:** Enables offline access and background sync
- **Responsive Design:** Works across devices and screen sizes
- **App-Like Feel:** Splash screen, install prompt, home screen icon

---

## 🧩 Customization

- **Theme Colors:** Set in `manifest.json` and Tailwind config
- **Icons:** Replace `public/icons/*` with your own
- **Meta Tags:** Configure for SEO and sharing in `index.html`

---

## 🔧 Build and Deploy

```bash
npm run build
```

The production-ready files will be in the `dist/` folder. You can deploy them to:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

---

## 📄 License

This project is licensed under the MIT License.

---

> Made with 💻 and ☕ by **Aditya Yeola**
