import { useState } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import NavBtns from "./Components/NavBtns/NavBtns";
import SocialBanner from "./Components/SocialBanner/SocialBanner";
import CvButton from "./Components/CvButton/CvButton";
import ContactForm from "./Components/ContactForm/ContactForm";
import WelcomeBanner from "./Components/WelcomeBanner/WelcomeBanner";
import AboutMe from "./Components/AboutMe/AboutMe";
import ProjectCard from "./Components/ProjectCards/ProjectCard";
import Certificates from "./Components/Certificates/Certificates";
import TechnologiesCards from "./Components/TechnologiesCards/TechnologiesCards";
import { projects } from "./Utils";
import "./App.css";

const App = () => {

  const [en, setEn] = useState(true);
  const [nightMode, setNightMode] = useState(true);

  const handleNightMode = () => {
    setNightMode(!nightMode)
  }

  const handleLanguage = () => {
    setEn(!en)
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../Public/Assets/CV-Márquez-Estefanía.pdf';
    link.download = 'CV-Márquez-Estefanía.pdf';
    link.click();
  }

  const handleDownloadEn = () => {
    const link = document.createElement('a');
    link.href = '../Public/Assets/CV(en)-Márquez-Estefanía.pdf';
    link.download = 'CV-Estefanía-Márquez.pdf';
    link.click();
  }


  return (
    <div id="portfolioContainer" className={(nightMode) ? "nightMode" : "dayMode"}>
      <SocialBanner nightMode={nightMode} />
      <div id="navBtnsContainer" className={(nightMode) ? "nightMode" : "dayMode"}>
        <NavBtns nightMode={nightMode} en={en} />
      </div>
      <button id={en ? "esp" : "usa"} className="languageBtn" onClick={handleLanguage}></button>
      {(nightMode) ? (<BsSun className="modeBtn" id="sun" onClick={handleNightMode} />) : (<BsFillMoonFill className="modeBtn" id="moon" onClick={handleNightMode} />)}
      {(en) ? (<div onClick={handleDownloadEn}><CvButton nightMode={nightMode} /></div>) : (<div onClick={handleDownload}><CvButton nightMode={nightMode} /></div>)}

      <WelcomeBanner nightMode={nightMode} en={en} />

      <div className="allSectionsDiv" >

        <div className="sectionsDiv" id="About me">
          <h2 className={nightMode ? "sectionTitleNight" : "sectionTitle"}>{en ? "About me" : "Sobre mí"}</h2>
          <AboutMe nightMode={nightMode} en={en}/>
        </div>

        <div className="sectionsDiv" id="Technologies">
          <h2 className={nightMode ? "sectionTitleNight" : "sectionTitle"}>{en ? "Technologies" : "Tecnologías"}</h2>
          <TechnologiesCards />
        </div>

        <div className="sectionsDiv" id="Projects">
          <h2 className={nightMode ? "sectionTitleNight" : "sectionTitle"}>{en ? "Projects" : "Proyectos"}</h2>
          {
            projects?.map(project =>
              <ProjectCard en={en} title={project?.title} repo={project?.repo} page={project?.page} imgs={project?.imgs} descriptionEs={project.descriptionEs} descriptionEn={project.descriptionEn} technologies={project.technologies} />)
          }
        </div>

        <div className="sectionsDiv" id="Certificates">
          <h2 className={nightMode ? "sectionTitleNight" : "sectionTitle"}>{en ? "Certificates" : "Certificados"}</h2>
          <Certificates/>
        </div>

        <div className="sectionsDiv" id="Contact me">
          <h2 className={nightMode ? "sectionTitleNight" : "sectionTitle"}>{en ? "Contact me" : "Contactame"}</h2>
          <ContactForm en={en} />
        </div>
      </div>



    </div>
  )
}

export default App
