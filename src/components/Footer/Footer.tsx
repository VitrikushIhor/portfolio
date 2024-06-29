import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Bio} from '../../data/constants';
import {Telegram} from "@mui/icons-material";

import styles from "./styles.module.scss"


function Footer() {
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
					 <a className={styles.SocialMediaIcon} href={Bio.telegram} target="display"><Telegram/></a>
					 <a className={styles.SocialMediaIcon} href={Bio.linkedin} target="display"><LinkedInIcon/></a>
					 <a className={styles.SocialMediaIcon} href={Bio.insta} target="display"><InstagramIcon/></a>
				 </div>
				 <p className={styles.Copyright}>
					 &copy; {currentYear} Ihor Vitrikush. All rights reserved.
				 </p>

			 </footer>
		 </div>
	);
}

export default Footer;
