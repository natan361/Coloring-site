# גוון — אתר שירותי צביעה (פרויקט קונספט)

אתר תדמית בעברית (RTL) לעסק צביעה נייד, בנוי React + Vite + Tailwind.

> **הבהרה:** זהו **פרויקט קונספט לתיק עבודות**. "גוון" אינו עסק פעיל. פרטי הקשר,
> ההמלצות והתצלומים באתר הם להמחשה בלבד ואינם מייצגים לקוחות או עבודות אמיתיות.

---

## הפעלה

```bash
npm install
npm run dev        # http://localhost:3050
```

| פקודה | מה היא עושה |
|---|---|
| `npm run dev` | שרת פיתוח על פורט 3050 |
| `npm run build` | בנייה לפרודקשן (מריץ אוטומטית `generate-sitemap`) |
| `npm run preview` | תצוגה מקדימה של ה-build |
| `npm run verify` | בדיקת QA על כל עמודי ה-sitemap — ראו למטה |
| `npm run sitemap` | מייצר `public/sitemap.xml` מנתוני הראוטים |
| `npm run favicon` | מייצר `favicon.ico` (16/32/48) + PNG-ים מהלוגו |
| `npm run screenshot <url> [label]` | צילום מסך מלא לתיקיית `temporary screenshots/` |

## `npm run verify`

סורק את כל 18 העמודים שב-`sitemap.xml` מול שרת הפיתוח ונכשל (exit 1) על:

- **SEO** — `<title>`, meta description, canonical, Open Graph, **בדיוק תג `rel="icon"` אחד**
- **נגישות** — `<h1>` יחיד, תכונת `alt` חסרה, **יחסי ניגודיות WCAG אמיתיים**
  (כולל הרכבת שקיפות של צבע הטקסט על הרקע — בלי זה טקסט דהוי עובר בטעות)
- **תקינות** — תמונות שבורות, קישורים מתים, שגיאות קונsole, בקשות רשת כושלות

דורש ששרת הפיתוח ירוץ במקביל.

---

## מבנה

```
src/
  components/     רכיבי UI (Header, Footer, Logo, AccessibilityWidget, Seo…)
  pages/          עמוד לכל ראוט
  data/           business.js, testimonials.js, images.js, services…
  hooks/          scroll reveal, scroll-to-top
public/           robots.txt, _redirects, favicon, sitemap (מיוצר)
```

**מקור אמת יחיד:** [`src/data/business.js`](src/data/business.js) — שם, טלפון, מייל,
אזור שירות, רכז נגישות ו-`siteUrl`. שינוי שם או פרטי קשר נעשה שם בלבד.

## נגישות ותאימות חוקית

נבנה מול תקן ישראלי **ת״י 5568 רמה AA**:

- תפריט נגישות מתמיד (גודל טקסט, ניגודיות גבוהה, הדגשת קישורים, גופן קריא,
  עצירת אנימציות, סמן גדול) — ההעדפות נשמרות ב-`localStorage`
- קישור "דילוג לתוכן הראשי", ניווט מקלדת מלא, `lang="he" dir="rtl"`
- עמודי [הצהרת נגישות](src/pages/AccessibilityPage.jsx),
  [מדיניות פרטיות](src/pages/PrivacyPage.jsx) (תיקון 13) ו[תנאי שימוש](src/pages/TermsPage.jsx)
- טופס עם הסכמה מפורשת ו-opt-in שיווקי נפרד שאינו מסומן מראש

## ידוע ופתוח

- טופס יצירת הקשר **אינו שולח לשום מקום** — נשאר דמו בכוונה
- `siteUrl` מצביע על דומיין דוגמה; יש להחליף לפני העלאה
- אין `og-image.png` — שיתוף ברשתות יוצג בלי תמונה
- התצלומים מ-Unsplash (Unsplash License), להחלפה בתמונות אמיתיות

## קרדיטים

עיצוב מבוסס על מערכת העיצוב של `toptierpaintingidaho.com` (מרווחים, טיפוגרפיה,
צורות, יחסי צבע). כל התוכן, הקופי והמיתוג מקוריים.
