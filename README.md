# 💍 Wedding Invitation

A modern, elegant digital wedding invitation built with **Next.js**, **React**, and **TypeScript**. Features a beautiful countdown timer, RSVP system, interactive photo gallery, and comprehensive wedding details—all wrapped in a responsive design.

---

## ✨ Features

- 📅 **Interactive Countdown Timer** - Track the days until the big day
- 💌 **RSVP System** - Elegant guest response management
- 🎬 **Video Intro** - Embedded wedding video introduction
- 📖 **Bible Verse Section** - Personalized spiritual message
- 🎵 **Recommendations** - Music, gifts, and travel suggestions
- ❓ **FAQ Section** - Quick answers to common questions
- 🌍 **Multi-language Support** - English and international language options
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Built with shadcn/ui components and Tailwind CSS
- ⚡ **Fast Performance** - Server-side rendering with Next.js

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections (hero, schedule, rsvp, etc.)
│   ├── ui/                # Reusable UI components (from shadcn/ui)
│   ├── language-context.tsx
│   ├── theme-provider.tsx
│   └── navbar.tsx
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                   # Utilities
│   ├── utils.ts
│   └── wedding-data.ts    # Wedding details & content
├── public/                # Static assets
├── styles/                # Additional styles
└── components.json        # Component registry config
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/raphaelswk/wedding-invitation.git
cd wedding-invitation

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Configuration

Edit wedding details in [lib/wedding-data.ts](lib/wedding-data.ts):

```typescript
// Add your wedding information here
export const weddingData = {
  // Couple names, date, location, etc.
}
```

---

## 🎨 Customization

- **Colors & Theme**: Modify Tailwind config in `tailwind.config.ts`
- **Components**: All UI components in `components/ui/` (from shadcn/ui)
- **Content**: Update text/images in component files and `lib/wedding-data.ts`
- **Languages**: Add translations in `language-context.tsx`

---

## 📦 Available Scripts

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💕 Built with Love

Perfect for sharing your special day with family and friends online!

**Happy Wedding! 🎉**