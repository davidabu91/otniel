/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
// import FeatureCardColumn from 'components/feature-card-column.js';
import ServiceCardColumn from 'components/mycomponents/service-card-column';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'מזכירות היישוב',
    title: 'מזכירות היישוב',
    text:
      'במזכירות היישוב ניתן לקבל את שירותי היישוב הבסיסיים, המזכירות פתוחה לקבלת קהל בימים א-ה בשעות 10:00-14:00',
      phone: "029963640",
      // peningHours: " ימים א-ה 10:00 - 14:00",

  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'ספריה',
    title: 'ספריה',
    text:
      'ספרייה יישובית, ניתן לשאול ספרים לילדים ומבוגרים. הספרייה פתוחה בימים ',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'מרפאה',
    title: 'מרפאה',
    text:
      'מרפאת קופת חולים לאומית, במרפאה אחות ורופא משפחה מידי יום, ניתן לקבל שירותי טיפת חלב',
      phone: "029963632",

  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'דואר',
    title: 'דואר',
    text:
      'שירותי דואר ישראל באמצעות מזכירת היישוב בשעות קבלת הקהל, תאי הדואר בסמוך למזכירות היישוב',
  },
];

export default function Services() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="services">
      <Container>

        <SectionHeader
          slogan="שירותים לתושב"
          title="בעתניאל מגוון שירותים"
        />

        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <ServiceCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              phone={item.phone}
              peningHours={item.peningHours}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
