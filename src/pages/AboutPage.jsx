import AboutHero from '../components/AboutHero.jsx'
import ExperienceSection from '../components/ExperienceSection.jsx'
import TestimonialPlaceholder from '../components/TestimonialPlaceholder.jsx'
import CoreValues from '../components/CoreValues.jsx'
import Seo from '../components/Seo.jsx'
import business from '../data/business.js'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="אודות"
        description={`מי אנחנו ואיך אנחנו עובדים — הצוות, הערכים ושיטת העבודה של ${business.name}, צביעה מקצועית ב${business.serviceArea}.`}
      />
      <AboutHero />
      <ExperienceSection />
      <TestimonialPlaceholder />
      <CoreValues />
    </>
  )
}
