import GreenPageHero from '../components/GreenPageHero.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import { residentialServices } from '../data/residentialServices.js'
import Seo from '../components/Seo.jsx'
import business from '../data/business.js'

export default function ResidentialPage() {
  return (
    <>
    <Seo
      title="צביעה לבתים פרטיים ודירות"
      description={`צביעת פנים, צביעת חוץ וחידוש ארונות לבתים ודירות ב${business.serviceArea}. עבודה נקייה, לוח זמנים ברור והצעת מחיר חינם.`}
    />
    <GreenPageHero
      eyebrow="צביעה למגורים"
      title="צבעי בתים מובילים בשירות לכל האזור"
      description="מתמחים בצביעת פנים, בחיפוי חוץ ובחידוש ארונות לבתים בכל אזור השירות."
      primaryLabel="לתיאום ביקור"
      primaryTo="/contact"
      secondaryLabel="גלריית עבודות"
      secondaryTo="/gallery"
    >
      <ServicesGrid services={residentialServices} basePath="/residential" />
    </GreenPageHero>
    </>
  )
}
