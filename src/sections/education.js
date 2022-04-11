/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: ' הגיל הרך',
    text:`פעוטון מלידה עד גיל שלוש, צוות מטפלות מנוסה ומקצועי.
    שלושה גני לדים עם צוות גננות וסייעות מקצועיות וכן צהרונים בכל יום`,
  },
  {
    id: 2,
    title: `בית חינוך "דביר"`,
    text:
      `בית-ספר "דביר" הנו בית ספר יסודי צומח.

      בבית הספר  כיתות  מ-א' עד ו' כ-450 תלמידים, אוכלוסיית ביה"ס מגיעה מיישובי הסביבה.
      
      "מטרת החינוך היא להכשיר את האדם לצורתו המתוקנת שהנקודה המרכזית שבה היא לעשותו טוב וישר" (איגרות הראי"ה, איגרת ק"ע)`,
    url: "https://www.hrhevron.co.il/%D7%91%D7%99%D7%A1-%D7%93%D7%91%D7%99%D7%A8-%D7%A2%D7%AA%D7%A0%D7%99%D7%90%D7%9C/",
  },
  {
    id: 3,
    title: 'ישיבה תיכונית אור עתניאל',
    text:
      `ישיבה תיכונית המובילה בתחום המחשוב ומחנכת את תלמידיה מתוך שמחה ואמון, עם צוות חם ואוהב.`,
    url: "http://orotniel.co.il/",
  },
  {
    id: 4,
    title: 'ישיבת עתניאל - בית ועד הר חברון',
    text:
     `ישיבת ההסדר עתניאל (ובשמה הרשמי - 'בית ועד הר-חברון') קמה במטרה להקים דור חדש של תלמידי חכמים, המחובר אל שרשרת הדורות שקדמו לו, ומתוך צינור יניקה זה מברר את דבר ה' המתגלה בכל יום ויום ובכל אדם ואדם, כחלק מכנסת ישראל.`,
    url: "https://otniel.org/",
  },
];

export default function Education() {
  return (
    <section sx={styles.workflow} id="education">
      <Container>
        <SectionHeader
          slogan="מוסדות חינוך"
          // title="הדברים הטובים באמת"
          isWhite={true}

        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>
                {item.id}
              </Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}> {item.title} </Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                {item.url && <Text sx={styles.wrapper.subTitle}><a href={item.url} target="_blank">לחץ כאן לאתר </a></Text>
}

              </Box>
            </Box>
          ))}

        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',

    py: [8, null, 9, null, null, 10],

  },
  grid: {
    mb: -1,
    pt: 0,
    direction: "rtl",

    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: "center",
    //['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    direction: "rtl",

    mx: ['auto'],
    px: [4, null, null, 0],
    // '&::before': {
    //   position: 'absolute',
    //   content: '""',
    //   top: 0,
    //   left: [0, null, null, null, null, 72, null, 90],
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: 'center center',
    //   width: 215,
    //   height: 60,
    //   '@media screen and (max-width:1220px)': {
    //     display: 'none',
    //   },
    // },
    // '&:nth-of-type(2n-1)::before': {
    //   backgroundImage: `url(${ArrowOdd})`,
    // },
    // '&:nth-of-type(2n)::before': {
    //   backgroundImage: `url(${ArrowEven})`,
    //   top: 17,
    // },
    // '&:last-child::before': {
    //   display: 'none',
    // },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
