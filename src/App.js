import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import OzYurdunuQur from './pages/OzYurdunuQur';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Sponsorship from './pages/Sponsorship';
import PastFestivals from './pages/PastFestivals';
import GallerySections from './pages/GallerySections';
import GalleryMedia from './pages/GalleryMedia';

// Wrapper component to handle language routing
const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    if (lang && ['az', 'en', 'ru'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  
  return children;
};

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default redirect to Azerbaijani */}
          <Route path="/" element={<Navigate to="/az" replace />} />
          
          {/* Language-specific routes */}
          <Route path="/:lang" element={
            <LanguageWrapper>
              <Header />
              <main>
                <Home />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/about" element={
            <LanguageWrapper>
              <Header />
              <main>
                <About />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/program" element={
            <LanguageWrapper>
              <Header />
              <main>
                <Program />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/news" element={
            <LanguageWrapper>
              <Header />
              <main>
                <NewsList />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/news/:slug" element={
            <LanguageWrapper>
              <Header />
              <main>
                <NewsDetail />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/gallery" element={
            <LanguageWrapper>
              <Header />
              <main>
                <GallerySections />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/gallery/:sectionId" element={
            <LanguageWrapper>
              <Header />
              <main>
                <GalleryMedia />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/partners" element={
            <LanguageWrapper>
              <Header />
              <main>
                <Partners />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/sponsorship" element={
            <LanguageWrapper>
              <Header />
              <main>
                <Sponsorship />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/past-festivals" element={
            <LanguageWrapper>
              <Header />
              <main>
                <PastFestivals />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/oz-yurdunu-qur" element={
            <LanguageWrapper>
              <Header />
              <main>
                <OzYurdunuQur />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          <Route path="/:lang/contact" element={
            <LanguageWrapper>
              <Header />
              <main>
                <Contact />
              </main>
              <Footer />
            </LanguageWrapper>
          } />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<Navigate to="/az" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;