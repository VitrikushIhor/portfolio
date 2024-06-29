'use client'
import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection/HeroSection';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ProjectDetails from '@/components/ProjectDetails/ProjectDetails';
import {useState} from 'react';
import {IProject} from '@/data/constants';
import Navbar from '@/components/Navbar/Navbar';

export interface AppComponent {
	project: IProject | null
	state: boolean
}

export default function Home() {
	const [openModal, setOpenModal] = useState<AppComponent>({state: false, project: null});

	return (
		 <>
			 <Navbar/>
			 <main className={styles.body}>
				 <HeroSection/>
				 <div className={styles.wrapper}>
					 <Skills/>
					 <Experience/>
				 </div>
				 <Projects openModal={openModal} setOpenModal={setOpenModal}/>
				 <div className={styles.wrapper}>
					 <Contact/>
				 </div>
				 <Footer/>
				 {openModal.state &&
						<ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>
				 }
			 </main>
		 </>
	);
}
