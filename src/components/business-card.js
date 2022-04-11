/** @jsx jsx */
import { src } from 'prettier';
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import magal from 'assets/my-assets/magal.png';

export default function BusinessCard({
  src,
  altText = 'default alt text',
  title,
  text,
  url
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} altText={altText} sx={styles.img} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
        <Text sx={styles.wrapper.subTitle}><a href={url} target="_blank">לחץ כאן לאתר העסק</a></Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    position: "relative",
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1,
    direction: "rtl",
    // background: "pink",

  },

  img: {
    // position: "absolute",
    // width: ['70px', null, null, '80px', '90px', 'auto'],
    // height: 'auto',
    // flexShrink: 0,
    // mr: [2, 3, null, null, 4, 5],
    // ml: -2,
    opacity: "50%",
    width: "200px"
  },
  wrapper: {
    // position: "absolute",
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: ["5px", "10px", "15px", "20px"],
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px'],
    },

    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
