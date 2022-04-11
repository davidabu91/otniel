/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import magal from 'assets/my-assets/magal.png';
import naftaly from "assets/my-assets/naftaly.jpg";
import SectionHeader from 'components/section-header';
import BusinessCard from 'components/business-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'ההמבורגר של נתי',
    title: 'ההמבורגר של נתי',
    url: "",
    phone: '',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 2,
    imgSrc: magal,
    altText: 'מגל בוטיק',
    title: 'מגל בטיק - מאפייה',
    url: "https://magalboutique.com/",
    phone: '',
    text: "אני מגל ואני אופה עוגות, עוגיות ושלל פינוקים מרכיבים טבעיים. בתפריט שלי תמצאו גם עוגות ועוגיות מפנקות ללא סוכר, ללא גלוטן ואפילו מתוקים טבעוניים. כל המוצרים נאפים באפייה ביתית מוקפדת עם חומרי הגלם האיכותיים ביותר. קמח כוסמין מלא, סוכר קנים אורגני, שמן קוקוס אורגני, שקדים טחונים, פיסטוקים, אגוזים, קרם קוקוס טבעי, מחיות מ-100% פרי, מייפל אורגני ושוקולד מריר משובח עם אחוזי קקאו גבוהים."
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'פיצה בגבעה',
    title: 'פיצה בגבעה',
    url: "",
    phone: '',
    text:
      'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 4,
    imgSrc: naftaly,
    altText: 'ערך הדרך',
    title: 'ערך הדרך',
    url: "https://erech.org.il/",
    phone: '',
    text:
      'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
  },
];

export default function Business() {
  return (
    <section sx={{ variant: "section.feature" }} id="business">
      <Container>
        <SectionHeader
          slogan="בתי עסק בעתניאל"
          // title="עסקים בעתניאל"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <BusinessCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              url={item.url}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
