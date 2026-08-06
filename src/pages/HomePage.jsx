import Hero from '../components/Hero.jsx'
import PropertyCards from '../components/PropertyCards.jsx'
import Process from '../components/Process.jsx'
import BlobCTA from '../components/BlobCTA.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FreshLookCTA from '../components/FreshLookCTA.jsx'
import Seo from '../components/Seo.jsx'
import business from '../data/business.js'

export default function HomePage() {
  return (
    <>
      <Seo
        description={`שירותי צביעה מקצועיים לבית ולעסק ב${business.serviceArea} — מגיעים אליכם, עובדים נקי, וגורמים לבית להרגיש חדש. הצעת מחיר חינם וללא התחייבות.`}
      />
      <Hero />
      <PropertyCards />
      <Process />
      <BlobCTA />
      <WhyChoose />
      <Testimonials />
      <FreshLookCTA />
    </>
  )
}
