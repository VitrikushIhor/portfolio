import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Telegram} from '@mui/icons-material';

import styles from './styles.module.scss'
import {FC} from 'react';
import {IBio} from '@/data/constants';

const Footer: FC<{ bio: IBio }> = ({bio}) => {
	const currentYear = new Date().getFullYear();
	return (
		 <div className={styles.FooterContainer}>
			 <footer className={styles.FooterWrapper}>
				 <h1 className={styles.Logo}>Ihor Vitrikush</h1>
				 <nav className={styles.Nav}>
					 <a className={styles.NavLink} href="#skills">Skills</a>
					 <a className={styles.NavLink} href="#experience">Experience</a>
					 <a className={styles.NavLink} href="#projects">Projects</a>
				 </nav>
				 <div className={styles.SocialMediaIcons}>
					 <a className={styles.SocialMediaIcon} href={bio?.telegram} target="display"><Telegram/></a>
					 <a className={styles.SocialMediaIcon} href={bio?.linkedin} target="display"><LinkedInIcon/></a>
					 <a className={styles.SocialMediaIcon} href={bio?.insta} target="display"><InstagramIcon/></a>
				 </div>
				 <p className={styles.Copyright}>
					 &copy; {currentYear} Ihor Vitrikush. All rights reserved.
				 </p>

			 </footer>
		 </div>
	);
}

export default Footer;
