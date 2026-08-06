import GreenPageHero from '../components/GreenPageHero.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'

export default function ServicesPage() {
  return (
    <GreenPageHero
      eyebrow="השירותים שלנו"
      title="צביעה מקצועית שמשדרגת את הבית"
      description="מהסלון ועד לחזית החיצונית — כל שירות מתחיל באותה מחויבות לניקיון, דיוק ותוצאה שנשארת."
      primaryLabel="לתיאום ביקור"
      primaryTo="/contact"
      secondaryLabel="גלריית עבודות"
      secondaryTo="/gallery"
    >
      <ServicesGrid />
    </GreenPageHero>
  )
}
