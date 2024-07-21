import styles from './styles.module.scss'
import {FC} from 'react';
import {InterfaceBio} from '@/types/bio.interface';
import {FaLinkedin, FaTelegramPlane} from 'react-icons/fa';

const Footer: FC<{ bio: InterfaceBio }> = ({bio}) => {
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
					 <a className={styles.SocialMediaIcon} href={bio?.telegram} target="display"><FaTelegramPlane/></a>
					 <a className={styles.SocialMediaIcon} href={bio?.linkedin} target="display"><FaLinkedin/></a>
				 </div>
				 <p className={styles.Copyright}>
					 &copy; {currentYear} Ihor Vitrikush. All rights reserved.
				 </p>

			 </footer>
		 </div>
	);
}

export default Footer;
