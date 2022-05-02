/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import FooterLogo from 'assets/logo.svg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          {/* <Link path='/'> */}
          <Text>
            עתניאל אגודה שיתופית חקלאית להתיישבות בע"מ
          </Text>
          <Text>
            ד.ה הר-חברון 9040700
          </Text>
          {/* <Image src={FooterLogo} alt='Logo'/>
          </Link> */}
          {/* <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItems.map((item, i)=> (
                <Link 
                path={item.path}
                key={i}
                label={item.label}
                sx={styles.link}
                />
              ))}
            </nav>
          </Box> */}
          <Text sx={styles.footer.copyright}><a href={`tel:029963640`}>02-9963640</a></Text>

          <Text sx={styles.footer.copyright}>
            Copyright by Otniel {new Date().getFullYear()}
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
