/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/my-assets/bannerotniel.jpg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            עתניאל <br/> הדברים הטובים באמת
          </Heading>
          {/* <Text as="p" variant="secondPrimary">
            בואו להכיר אותנו ולמצוא הכל במקום אחד <br /> אם אתם מחפשים עסקים או שירותים לתושב הגעתם למקום הנכון
          </Text> */}
          {/* <Button variant="primary">חפש כאן </Button> */}
        </Box>

        <Box sx={styles.imageBox}>
          <Image src={BannerImg}></Image>
        </Box>

      </Container>
      <Box sx={styles.banner.contentBox}>
        <Text as="p" variant="secondPrimary">

          ישוב כפרי קהילתי היושב על דרך האבות בין עיר האבות באר-שבע מדרום לעיר האבות חברון מצפון בואכה עיר הקודש ירושלים, ובסמוך למקומה של דביר המקראית.
          גבעות הישוב צופות לצד דרום על חורבות רבוד, המזוהה עם דביר המקראית היא קרית-ספר. שמו של הישוב עתניאל ניתן לו על-שם השופט "עתניאל בן קנז, אחי כלב, הקטן ממנו" אשר כבש את דביר.
          תחילת דרכו של הישוב בגרעין שהחל להתגבש בבאר-שבע בשנת תשמ"א 1980, ויעדו היה – אזור דרום הר חברון אשר החל באותה עת את צעדיו הראשונים בהתיישבות. הגרעין עבר עליות ומורדות, בעיקר מצד ההנהגה שלא אפשרה לו מיד להתיישב. לעזרתו באו אורי בראון ז"ל והרב חנן פורת ז"ל, שדחפו את תנועת אמנה ואת משרד הבטחון לאזרח את הנקודה, שאוכלסה בינתיים במאחז נחל בשם "דורית". במוצאי חג הסוכות ב-ד' חשוון תשמ"ד 11.10.1983 ב"ה עלה הגרעין לקרקע. 6 מתוך כ-17 משפחות התמקמו על הגבעה עם 8 קרוואנים, מיכל קטן של מים וגנרטור מטרטר.
          במשך 3 שנים הטלטל הישוב בין 6 ל-10 משפחות ובאלול תשמ"ז עלה גרעין חדש שמטרתו לחזק את הישוב, להקים בו ישיבה ולהגדיל את לימוד התורה במקום. הגרעין מנה 5 משפחות והתרחב ל-10 אברכים ו-10 תלמידים.
          מאז פרח הישוב ושגשג והגיע ב"ה ל-160 משפחות (כן ירבו!) מכל גווני הקשת החברתית, בעלי עיסוקים שונים היוצרים יחד ישוב רב-גוני חי ותוסס. ובתחום החינוך זכינו לישיבת הסדר גדולה ושוקקת בתלמידים רבים הלומדים תורה, ביישוב חטיבת ביניים ,ישיבה תיכונית אזורית ומיוחדת, בית-ספר יסודי מצליח , גני ילדים מעונות לפעוטים, צהרון, מועדונית וכן תלמוד תורה שפועל אחר הצהריים – כיאה לקריית ספר
        </Text>
      </Box>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      marginTop: "30px",
      textAlign: 'center',
      mb: ['20px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
