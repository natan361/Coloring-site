import GreenPageHero from '../components/GreenPageHero.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import { commercialServices } from '../data/commercialServices.js'
import Seo from '../components/Seo.jsx'
import business from '../data/business.js'

export default function CommercialPage() {
  return (
    <>
    <Seo
      title="צביעה מסחרית לעסקים"
      description={`צביעת משרדים, חנויות, בנייני מגורים ומבני תעשייה ב${business.serviceArea} — עבודה בשעות שלא משבשות את הפעילות, עם גימור שנשאר לאורך זמן.`}
    />
    <GreenPageHero
      eyebrow="צביעה מסחרית"
      title="שירותי צביעה מסחרית מהמובילים באזור"
      description="מספקים תוצאות מקצועיות לעסקים בכל אזור השירות והסביבה — משרדים, מסחר, בנייני מגורים ומבני תעשייה."
      primaryLabel="לתיאום ביקור"
      primaryTo="/contact"
      secondaryLabel="גלריית עבודות"
      secondaryTo="/gallery"
    >
      <ServicesGrid services={commercialServices} basePath="/commercial" />
    </GreenPageHero>
    </>
  )
}
