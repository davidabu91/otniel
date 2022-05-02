/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';

import SecurityCars from 'assets/securityCars.jpeg';
import shapePattern from 'assets/shape-pattern2.png';
import ServiceCardColumn from 'components/mycomponents/service-card-column';

const data = {
  title: 'ביטחון עתניאל',
  subTitle: 'Smart Jackpots that you may love this anytime & anywhere',
  text:
    `ביישוב רבש"ץ, צוותי חירום וצוות אבטחה מיומן עם מערכות הגנה מתקדמות, מוקד היישוב מאוייש 24/7`,
  phone: "02-5805030"
};

export default function Security() {
  return (
    <section sx={{ variant: 'section.coreFeature' }} id="security">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <ServiceCardColumn
            title={data.title}
            text={data.text}
            phone={data.phone}
            peningHours={data.peningHours}

          />

          {/* <TextFeature
            title={data.title}
            // subTitle={data.subTitle}

            description={data.description}
          /> */}
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={SecurityCars} alt="SecurityCars" />
          {/* <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape"/>
        </Box> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
    direction: "rtl",
    marginTop: "50px",
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: "center",
    //['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
    direction: "rtl",

  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: '20px',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
