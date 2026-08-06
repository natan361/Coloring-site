import GreenPageHero from '../components/GreenPageHero.jsx'
import FaqList from '../components/FaqList.jsx'
import Seo from '../components/Seo.jsx'

export default function FaqPage() {
  return (
    <>
    <Seo
      title="שאלות נפוצות"
      description="כמה זמן לוקחת צביעה? צריך לפנות את הבית? מה משפיע על המחיר? התשובות לשאלות שלקוחות שואלים הכי הרבה לפני צביעה."
    />
    <GreenPageHero
      eyebrow="שאלות נפוצות"
      title="השאלות שלכם על צביעה — עם תשובות!"
      description="יש לכם שאלות על צביעת הבית או העסק? הגעתם למקום הנכון. ריכזנו כאן את השאלות הנפוצות ביותר שלקוחות שואלים על תהליך הצביעה, המחיר ומה לצפות מההתחלה ועד הסוף."
      primaryLabel="הצעת מחיר חינם"
      primaryTo="/contact"
      secondaryLabel="גלריית עבודות"
      secondaryTo="/gallery"
    >
      <FaqList />
    </GreenPageHero>
    </>
  )
}
