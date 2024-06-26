import {useState} from "react";
import Navbar from "./components/Navbar";
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import ProjectDetails from "./components/ProjectDetails";


function App() {
	const [openModal, setOpenModal] = useState({state: false, project: null});
	return (
		 <Router>
			 <Navbar/>
			 <div className={"body"}>
				 <HeroSection/>
				 <div className={"wrapper"}>
					 <Skills/>
					 <Experience/>
				 </div>
				 <Projects openModal={openModal} setOpenModal={setOpenModal}/>
				 <div className={"wrapper"}>
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
