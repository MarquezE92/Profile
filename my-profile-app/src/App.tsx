import React, { useState } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import NavBtns from "./Components/NavBtns";
import SocialBanner from "./Components/SocialBanner";
import CvButton from "./Components/CvButton";
import ContactForm from "./Components/ContactForm";
import logo from "./images/e.png"
import "./App.css";

const App = ()=> {

  const[en, setEn] = useState(true);
  const[nightMode, setNightMode] = useState(true);

  const handleNightMode = ()=>{
    setNightMode(!nightMode)
  }
  
  const handleLanguage = ()=>{
    setEn(!en)
  }

  const handleDownload = ()=> {
    const link = document.createElement('a');
    link.href = '../Public/Assets/CV-Márquez-Estefanía.docx';
    link.download = 'CV-Márquez-Estefanía.docx';
    link.click();
  }

  const handleDownloadEn = ()=> {
    const link = document.createElement('a');
    link.href = '../Public/Assets/CV(en)-Márquez-Estefanía.docx';
    link.download = 'CV-Estefanía-Márquez.docx';
    link.click();
  }

  return (
    <div id="portfolioContainer" className={(nightMode)? "nightMode" : "dayMode"}>
      <SocialBanner nightMode={nightMode}/>
      <div id="navBtnsContainer" className={(nightMode)? "nightMode" : "dayMode"}>
        <NavBtns nightMode={nightMode} en={en} />
      </div>
      <button id={en ? "esp" : "usa"} className="languageBtn" onClick={handleLanguage}></button>
      {(nightMode)? (<BsSun className="modeBtn" id="sun" onClick={handleNightMode}/>): (<BsFillMoonFill className="modeBtn" id="moon" onClick={handleNightMode}/>)}
      {(en)? (<div onClick={handleDownloadEn}><CvButton nightMode={nightMode}/></div>): (<div onClick={handleDownload}><CvButton nightMode={nightMode}/></div>)}
      {/* <img src={logo} style={{filter: "brightness(1.1)", mixBlendMode: "multiply"}}/>  */}
      <ContactForm en={en} />
      
    </div>
  )
}

export default App
