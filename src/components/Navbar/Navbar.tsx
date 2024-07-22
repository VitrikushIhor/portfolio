import {FC, useState} from 'react'
import {DiCssdeck} from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
import styles from './styles.module.scss'
import {InterfaceBio} from '@/types/bio.interface';

const Navbar: FC<{ bio: InterfaceBio }> = ({bio}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		 <nav className={styles.Nav}>
			 <div className={styles.NavbarContainer}>
				 <div className={styles.NavLogo}>
					 <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20', cursor: 'pointer'}}>
						 <DiCssdeck size="3rem"/> <span className={styles.Span}>Portfolio</span>
					 </a>
				 </div>
				 <div className={styles.MobileIcon}>
					 <FaBars onClick={() => {
						 setIsOpen(!isOpen)
					 }}/>
				 </div>
				 <ul className={styles.NavItems}>
					 <a className={styles.NavLink} href="#skills">Skills</a>
					 <a className={styles.NavLink} href="#experience">Experience</a>
					 <a className={styles.NavLink} href="#projects">Projects</a>
				 </ul>
				 <div className={styles.ButtonContainer}>
					 <a className={styles.GitHubButton} href={bio?.github} target="_blank">Github Profile</a>
				 </div>
				 {
						isOpen &&
						<div className={`${styles.MobileMenu} ${isOpen && styles.active}`}>
							<a className={styles.MobileLink} href="#skills" onClick={() => {
								setIsOpen(!isOpen)
							}}>Skills</a>
							<a className={styles.MobileLink} href="#experience" onClick={() => {
								setIsOpen(!isOpen)
							}}>Experience</a>
							<a className={styles.MobileLink} href="#projects" onClick={() => {
								setIsOpen(!isOpen)
							}}>Projects</a>
							<a className={styles.GitHubButton}
							   style={{
								   padding: '10px 16px',
								   background: `#854CE6`,
								   color: 'white',
								   width: 'max-content',
							   }}
							   href={bio?.github} target="_blank">Github Profile</a>
						</div>
				 }
			 </div>
		 </nav>
	)
}

export default Navbar
