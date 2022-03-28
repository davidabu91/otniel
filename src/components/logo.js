/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        curser: 'pointer',
        mr: 15,
        
      }}
      {...rest}
    >
      <Image src={src} alt="Otniel" sx={{width:"195px", height:"140px"}}/>
    </Link>
  );
}
