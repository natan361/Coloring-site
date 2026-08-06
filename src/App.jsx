import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ResidentialPage from './pages/ResidentialPage.jsx'
import CommercialPage from './pages/CommercialPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AccessibilityPage from './pages/AccessibilityPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import AccessibilityWidget from './components/AccessibilityWidget.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import useScrollToTop from './hooks/useScrollToTop.js'

export default function App() {
  useScrollReveal()
  useScrollToTop()

  return (
    <>
      <a href="#main-content" className="skip-link">
        דילוג לתוכן הראשי
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/residential" element={<ResidentialPage />} />
          <Route path="/residential/:slug" element={<ServiceDetailPage section="residential" />} />

          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/commercial/:slug" element={<ServiceDetailPage section="commercial" />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* legal / compliance */}
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* legacy path kept working */}
          <Route path="/services" element={<Navigate to="/residential" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <AccessibilityWidget />
    </>
  )
}
