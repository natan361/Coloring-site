import FinalCTA from '../components/FinalCTA.jsx'
import Seo from '../components/Seo.jsx'
import business from '../data/business.js'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="צרו קשר"
        description={`השאירו פרטים ונחזור אליכם לתיאום ביקור והערכת מחיר חינם, בלי התחייבות. טלפון ${business.phone}, שירות ב${business.serviceArea}.`}
      />
      <FinalCTA as="h1" />
    </>
  )
}
