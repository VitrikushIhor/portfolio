'use client'
import Link from 'next/link';

import styles from './styles.module.scss'
import {usePathname} from 'next/navigation';

const pages = [
	{name: 'Bio', link: '/dashboard/bio'},
	{name: 'skillCategory', link: '/dashboard/skillCategory'},
	{name: 'Skills', link: '/dashboard/skills'},
	{name: 'Experience', link: '/dashboard/experience'},
	{name: 'Projects', link: '/dashboard/projects'},
];

function Navbar() {
	const pathname = usePathname()

	return (
		 <nav className={styles.nav}>
			 <div className={styles.mainContainer}>
				 <li className={styles.link}><Link href={'/'}>Home</Link></li>
				 <li className={styles.link}><Link className={`${pathname === `/dashboard` ? `${styles.active}` : ''}`}
				                                   href={'/dashboard'}>Dashboard</Link></li>
			 </div>
			 <ul className={styles.linksContainer}>
				 {pages.map((page, index) =>
						<li className={styles.link} key={index}>
							<Link className={`${pathname === `${page.link}` ? `${styles.active}` : ''}`}
							      href={page.link}>{page.name}</Link>
						</li>,
				 )}
			 </ul>
		 </nav>
	);
}

export default Navbar;
