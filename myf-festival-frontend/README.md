# Milli Yaylaq Festivalı Website

A modern, responsive, and multilingual website for the National Highland Festival of Azerbaijan built with React, Next.js, and Tailwind CSS.

## 🎯 Features

- **Multilingual Support**: Available in Azerbaijani (az), English (en), and Russian (ru)
- **Dynamic Language Routing**: URL-based language switching with `/[lang]/` structure
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Mock API Integration**: Simulated backend with realistic data
- **Full Festival Management**: News, programs, partners, gallery, and more

## 🚀 Tech Stack

- **Frontend**: React 18, Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom festival theme
- **Language**: TypeScript/JavaScript
- **Animation**: CSS transitions and react-intersection-observer
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
myf-festival-frontend/
├── src/
│   ├── app/
│   │   ├── [lang]/                 # Language-specific routes
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── gallery/
│   │   │   ├── news/
│   │   │   ├── oz-yurdunu-qur/
│   │   │   ├── partners/
│   │   │   ├── past-festivals/
│   │   │   ├── program/
│   │   │   ├── sponsorship/
│   │   │   └── layout.jsx
│   │   ├── api/public/             # Mock API endpoints
│   │   ├── globals.css
│   │   └── layout.tsx
│   └── components/
│       ├── Header.jsx
│       ├── Footer.jsx
│       ├── LanguageSwitcher.jsx
│       ├── ImageSlider.jsx
│       ├── NewsCard.jsx
│       ├── SectionBlock.jsx
│       ├── Pagination.jsx
│       └── FormComponent.jsx
├── lib/
│   ├── mockData.js                 # Mock API data
│   ├── utils.js                    # Utility functions
│   └── useLanguage.js              # Language hook
├── public/
│   ├── images/
│   └── locales/                    # Translation files
│       ├── az.json
│       ├── en.json
│       └── ru.json
└── tailwind.config.ts              # Tailwind configuration
```

## 🌐 Pages & Routes

### Main Pages
- `/[lang]/` - Homepage with hero slider and sections
- `/[lang]/about` - Festival information
- `/[lang]/program` - 3-day festival program with filtering
- `/[lang]/partners` - Partners with category filtering
- `/[lang]/sponsorship` - Sponsorship information
- `/[lang]/past-festivals` - Previous festivals history
- `/[lang]/gallery` - Photo/video gallery sections
- `/[lang]/gallery/[sectionId]` - Gallery section with pagination
- `/[lang]/news` - News listing with pagination
- `/[lang]/news/[slug]` - Individual news articles
- `/[lang]/oz-yurdunu-qur` - Camping application form
- `/[lang]/contact` - Contact information

### API Endpoints
- `/api/public/homepage-data` - Homepage data
- `/api/public/news` - News listing
- `/api/public/news/[slug]` - Individual news
- `/api/public/festival` - Festival data
- `/api/public/gallery` - Gallery sections
- `/api/public/gallery/[sectionId]` - Gallery media
- `/api/public/yurdunu-qur` - Form submission
- `/api/public/contact-info` - Contact information
- `/api/public/sponsorship` - Sponsorship data

## 🎨 Design System

### Colors
- **Primary Green**: `#16a34a` (festival-primary)
- **Secondary Green**: `#15803d` (festival-secondary)
- **Accent Green**: `#22c55e` (festival-accent)
- **Green Palette**: 50-900 shades for backgrounds and UI elements

### Typography
- **Primary Font**: Inter
- **Fallbacks**: Roboto, Open Sans, sans-serif
- **Responsive**: Mobile-first typography scaling

### Components
- **Header**: Transparent to solid on scroll with language switcher
- **Footer**: Three-column layout with links and social media
- **Cards**: Consistent shadow and hover effects
- **Forms**: Accessible with proper validation
- **Animations**: Smooth transitions and scroll-triggered animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myf-festival-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🌍 Internationalization

The website supports three languages with complete translations:

- **Azerbaijani (az)**: Default language
- **English (en)**: Full translation
- **Russian (ru)**: Full translation

### Translation Files
- `public/locales/az.json` - Azerbaijani translations
- `public/locales/en.json` - English translations  
- `public/locales/ru.json` - Russian translations

### Adding New Languages
1. Create new translation file in `public/locales/`
2. Add language to `lib/utils.js` languages array
3. Update `LanguageSwitcher.jsx` component

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuration

### Tailwind Configuration
Custom theme with festival colors and animations in `tailwind.config.ts`

### Environment Variables
No environment variables required for demo version.

## 📊 Features Overview

### Homepage
- Hero image slider with 3 slides
- About festival section
- Camping application section
- Volunteer section
- Latest news (3 items)
- Partners showcase
- Responsive design

### News System
- Paginated news listing (15 per page)
- Individual news pages with view counter
- Breadcrumb navigation
- Related news suggestions

### Program Management
- 3-day festival schedule
- Day-based filtering
- Time, location, and description display
- Responsive program cards

### Partner Management
- Category-based filtering (Main, Media, Sponsors)
- Clickable partner logos
- Partner website links
- Call-to-action for new partnerships

### Gallery System
- Section-based organization
- Paginated media display (15 per page)
- Photo and video support
- Modal preview functionality

### Form System
- Camping application form
- File upload support
- Form validation
- Success/error messaging

## 🔒 Security

- Input validation on all forms
- XSS protection through React
- CSRF protection built-in
- File upload restrictions

## 🚀 Deployment

The project is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Any Node.js hosting**

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎉 Demo

The website includes comprehensive demo data:
- 20 news articles with pagination
- 3-day festival program
- 6 partner organizations
- 3 gallery sections with media
- Complete contact information
- Multilingual content

## 📞 Support

For support and questions:
- Email: info@milliyaylaq.az
- Phone: +994 XX XXX XX XX

---

**Built with ❤️ for the National Highland Festival of Azerbaijan**
