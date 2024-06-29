'use client'
import styles from './styles.module.scss';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/HeroSection/HeroSection';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ProjectDetails from '@/components/ProjectDetails/ProjectDetails';
import {useState} from 'react';
import {InterfaceProject, IProject} from '@/data/constants';

export interface AppComponent {
	project: IProject | null
	state: boolean
}

interface Interfacedata {
	data: InterfaceProject
}

export default function Wrapper({data}: Interfacedata) {
	const [openModal, setOpenModal] = useState<AppComponent>({state: false, project: null});


	return (
		 <>
			 <Navbar bio={data?.Bio}/>
			 <main className={styles.body}>
				 <HeroSection bio={data?.Bio}/>
				 <div className={styles.wrapper}>
					 <Skills skills={data.skills}/>
					 <Experience experiences={data.experiences}/>
				 </div>
				 <Projects projects={data.projects} openModal={openModal} setOpenModal={setOpenModal}/>
				 <div className={styles.wrapper}>
					 <Contact/>
				 </div>
				 <Footer bio={data?.Bio}/>
				 {openModal.state &&
						<ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>
				 }
			 </main>
		 </>
	)
}
