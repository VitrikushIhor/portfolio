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
import {InterfaceProject} from '@/types/project.interface';
import {IResponse} from '@/data/constants';

export interface IOpenModal {
	project: InterfaceProject | null
	state: boolean
}


export default function Wrapper(props: { data: IResponse }) {
	const {data} = props
	const [openModal, setOpenModal] = useState<IOpenModal>({state: false, project: null});


	return (
		 <>
			 <Navbar bio={data?.bio[0]}/>
			 <main className={styles.body}>
				 <HeroSection bio={data?.bio[0]}/>
				 <div className={styles.wrapper}>
					 <Skills skills={data.skillCategory}/>
					 <Experience experiences={data.experience}/>
				 </div>
				 <Projects projects={data.projects} openModal={openModal} setOpenModal={setOpenModal}/>
				 <div className={styles.wrapper}>
					 <Contact/>
				 </div>
				 <Footer bio={data?.bio[0]}/>
				 {openModal.state &&
						<ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>
				 }
			 </main>
		 </>
	)
}
