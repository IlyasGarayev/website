# Milli Yaylaq Festivalı - Frontend

A modern, responsive Single Page Application (SPA) for the "Milli Yaylaq Festivalı" (National Highland Festival) website built with React.js, featuring a green-themed design and multi-language support.

## 🌟 Features

- **Full-Screen Hero Section**: Eye-catching image slider with smooth transitions
- **Multi-Language Support**: Azerbaijani (az), English (en), and Russian (ru) with react-i18next
- **Green Theme Design**: Custom color palette with various shades of green for excellent readability
- **Responsive Design**: Fully responsive using Tailwind CSS utilities
- **Scroll Animations**: Smooth fade-in and slide-up animations using Intersection Observer
- **Mock Data Integration**: Complete client-side data simulation for demo purposes
- **Modern UI Components**: Reusable React components with consistent styling
- **SEO-Friendly Routing**: Multi-language URL structure with React Router DOM

## 🚀 Technology Stack

- **React.js 18.2.0**: Modern React with hooks and functional components
- **React Router DOM 6.3.0**: Client-side routing with language support
- **Tailwind CSS 3.1.8**: Utility-first CSS framework with custom green theme
- **Bootstrap 5.3.0**: Selected components for enhanced functionality
- **react-i18next 11.18.6**: Internationalization with JSON translation files
- **React Intersection Observer**: Scroll-based animations

## 📁 Project Structure

```
myf-festival-frontend/
├── public/
│   ├── locales/
│   │   ├── az.json                 # Azerbaijani translations
│   │   ├── en.json                 # English translations
│   │   └── ru.json                 # Russian translations
│   ├── images/
│   │   └── placeholder-image.jpg   # Demo placeholder image
│   └── index.html                  # Main HTML file
├── src/
│   ├── components/                 # Reusable React components
│   │   ├── Header.jsx              # Navigation header with language switcher
│   │   ├── Footer.jsx              # Site footer
│   │   ├── LanguageSwitcher.jsx    # Flag-based language selector
│   │   ├── ImageSlider.jsx         # Full-screen hero slider
│   │   ├── SectionBlock.jsx        # Reusable full-width sections
│   │   ├── NewsCard.jsx            # News item display component
│   │   ├── Pagination.jsx          # Pagination controls
│   │   └── PartnerSlider.jsx       # Partner logos carousel
│   ├── pages/                      # Page components
│   │   ├── Home.jsx                # Homepage with hero and sections
│   │   ├── About.jsx               # Festival information
│   │   ├── Program.jsx             # Festival schedule with day filtering
│   │   ├── NewsList.jsx            # News listing with pagination
│   │   ├── NewsDetail.jsx          # Individual news articles
│   │   ├── OzYurdunuQur.jsx        # Camping registration form
│   │   ├── Contact.jsx             # Contact information
│   │   ├── Partners.jsx            # Partners listing with filtering
│   │   ├── Sponsorship.jsx         # Sponsorship information
│   │   ├── PastFestivals.jsx       # Previous festival years
│   │   ├── GallerySections.jsx     # Gallery categories
│   │   └── GalleryMedia.jsx        # Media gallery with lightbox
│   ├── data/
│   │   └── mockData.js             # Complete mock API with multi-language data
│   ├── hooks/
│   │   └── useScrollAnimation.js   # Custom scroll animation hooks
│   ├── styles/
│   │   └── index.css               # Main CSS with Tailwind and custom styles
│   ├── utils/
│   │   └── helpers.js              # Utility functions
│   ├── i18n.js                     # Internationalization configuration
│   ├── App.js                      # Main app component with routing
│   └── index.js                    # React DOM entry point
├── tailwind.config.js              # Tailwind configuration with green theme
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🎨 Design Features

### Color Palette
- **festival-green**: Primary green shades (#22c55e family)
- **nature-green**: Natural green tones (#84cc16 family)  
- **forest-green**: Deep forest greens (#22c55e family)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Optimized Readability**: Proper line-height, spacing, and contrast
- **Responsive Text**: Scalable font sizes for all devices

### Layout
- **Full-Width Hero**: 100vw × 100vh hero section on homepage
- **Consistent Spacing**: Uniform padding and margins
- **Card-Based Design**: Modern card layouts for content
- **Smooth Animations**: Intersection Observer-based scroll animations

## 🌐 Multi-Language Support

### URL Structure
- `myf.az/az` - Azerbaijani
- `myf.az/en` - English  
- `myf.az/ru` - Russian

### Language Features
- **Dynamic Content**: All content adapts to selected language
- **Localized Slugs**: News and gallery URLs in respective languages
- **Flag-Based Switcher**: Visual language selection
- **Persistent Selection**: Language preference maintained across pages

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Enhanced layouts for medium screens
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Optimized for touch interactions

## 🔧 Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd myf-festival-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

## 📊 Mock Data Structure

The application uses comprehensive mock data in `src/data/mockData.js`:

- **Multi-language content**: All text content in az/en/ru
- **API simulation**: Realistic API responses with delays
- **Pagination support**: Built-in pagination for lists
- **Form handling**: Mock form submission responses

## 🎯 Key Pages

### Homepage (`/`)
- Full-screen hero image slider
- "Festival haqqında" section with call-to-action
- "Öz yurdunu qur" camping registration section  
- "Könüllü ol" volunteer section
- Latest news grid (3 items)
- Partner logos carousel

### Festival Information (`/about`)
- Detailed festival description
- Hero image with overlay
- Key statistics and features

### Program (`/program`)
- Day-based event filtering
- Detailed schedule with times and locations
- Responsive event cards

### News (`/news`, `/news/:slug`)
- Paginated news listing
- Full article view with metadata
- Category and date information

### Gallery (`/gallery`, `/gallery/:sectionId`)
- Gallery section categories
- Media grid with lightbox modal
- Pagination for large collections

### Camping Registration (`/oz-yurdunu-qur`)
- Nature-themed design
- Form validation
- File upload support
- Success/error messaging

## 🎨 Custom Styling

### Tailwind Configuration
- Custom green color palette
- Animation keyframes
- Extended font families
- Responsive breakpoints

### Component Classes
- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.hero-section`, `.section-block`
- `.news-card`, `.partner-logo`
- `.form-input`, `.form-textarea`

## 🔍 SEO & Accessibility

- **Semantic HTML**: Proper HTML5 structure
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Meta Tags**: Proper page metadata
- **Alt Text**: Descriptive image alternatives

## 🚀 Performance Features

- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Intersection Observer for images
- **Optimized Images**: Responsive image handling
- **Minimal Bundle**: Tree-shaking and optimization

## 🛠️ Development Scripts

```bash
npm start          # Development server
npm run build      # Production build
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🌟 Production Deployment

1. **Build the application**
```bash
npm run build
```

2. **Deploy the `build` folder** to your web server

3. **Configure server** for SPA routing (redirect all routes to index.html)

4. **Replace placeholder images** with actual festival photos

5. **Update mock data** with real API endpoints

## 📝 Customization Guide

### Adding New Languages
1. Create new translation file in `public/locales/`
2. Update `src/i18n.js` configuration
3. Add language to `LanguageSwitcher.jsx`
4. Update URL routing in `App.js`

### Modifying Color Theme
1. Update `tailwind.config.js` color palette
2. Modify CSS custom properties in `src/styles/index.css`
3. Update component class definitions

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route to `App.js`
3. Update navigation in `Header.jsx`
4. Add translations to language files

## 🐛 Known Issues & Limitations

- **Mock Data**: All data is simulated client-side
- **Image Placeholders**: Using placeholder images for demo
- **No Backend**: Form submissions are simulated
- **Limited Media**: Gallery uses placeholder content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the Milli Yaylaq Festivalı. All rights reserved.

## 📞 Support

For technical support or questions about the festival:
- **Email**: info@myf.az
- **Phone**: +994 12 345 67 89
- **Website**: https://myf.az

---

**Built with ❤️ for the Milli Yaylaq Festivalı**