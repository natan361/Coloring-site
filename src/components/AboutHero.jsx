import { Link } from 'react-router-dom'
import { Button } from './ui.jsx'
import { images } from '../data/images.js'

export default function AboutHero() {
  return (
    <section className="grain relative overflow-hidden bg-paper pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="mx-auto grid max-w-content items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-pill bg-ink px-4 py-2 font-body text-sm font-bold text-ember">אודות</span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl">
            אודות גוון: השותפים המהימנים שלכם באזור
          </h1>
          <p className="font-body text-lg leading-relaxed text-muted-onlight">
            אנחנו גוון — צוות צביעה מקומי ואמין שמשרת את כל האזור. שנים רבות אנחנו מחויבים למתן שירותי צביעה
            מקצועיים ואיכותיים לבתים ולעסקים, בכל אזור השירות והסביבה.
          </p>
          <p className="font-body text-lg leading-relaxed text-muted-onlight">
            אנחנו מאמינים בכוח של גימור מושלם, והניסיון הרב שלנו מאפשר לנו לטפל בכל פרויקט — מצביעת חדר בודד ועד
            חזית של נכס מסחרי גדול — בדיוק, במקצועיות ובאכפתיות. כחלק מהקהילה המקומית אנחנו מכירים את מזג האוויר
            באזור, ומשתמשים רק בחומרים הטובים ביותר שנועדו להגן על הנכס שלכם ולייפות אותו לשנים קדימה. כשבוחרים
            בגוון, בוחרים במקצועיות מוכחת ובצוות שמחויב לשביעות הרצון המלאה שלכם.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button as={Link} to="/contact" variant="primary">
              צרו קשר
            </Button>
            <Button as={Link} to="/contact" variant="ghostDark">
              קבלו הצעת מחיר
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem_5rem_2rem_5rem] shadow-card">
          <img
            src={images.residentialHouse}
            alt="בית מטופח שנצבע על ידי הצוות שלנו"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  )
}
