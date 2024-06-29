import {useState} from 'react';
import styles from './styles.module.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Contact from './components/Contact/Contact';
import {IProject} from './data/constants';

export interface AppComponent {
	project: IProject | null
	state: boolean
}


function App() {
	const [openModal, setOpenModal] = useState<AppComponent>({state: false, project: null});
	return (
		 <Router>
			 <Navbar/>
			 <div className={styles.body}>
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
			 </div>
		 </Router>
	);
}

export default App;
