/** @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';

export default function ServiceCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
  peningHours,
  phone
}) {
  return (
    <Box sx={styles.card}>
      {/* <Image src={src} altText={altText} sx={styles.img} /> */}
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
        <Text sx={styles.wrapper.subTitle}><a href={`tel:${phone}`}>{phone}</a></Text>
        <Text sx={styles.wrapper.subTitle}>{peningHours}</Text>

      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0],
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: -2,
    // textAlign: "right",

    width: ['80px', null, null, '90px', null, 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: "right",
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
