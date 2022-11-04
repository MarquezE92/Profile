import React, { useState } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import NavBtnsEn from "./Components/NavBtnsEn.tsx";
import NavBtnsEs from "./Components/NavBtnsEs.tsx";
import SocialBanner from "./Components/SocialBanner.tsx";
import CvButton from "./Components/CvButton.tsx";
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

  return (
    <div id="portfolioContainer" className={(nightMode)? "nightMode" : "dayMode"}>
      <SocialBanner nightMode={nightMode}/>
      <div id="navBtnsContainer">
        {(en)? (<NavBtnsEn nightMode={nightMode}/>): (<NavBtnsEs nightMode={nightMode}/>)}
      </div>
      {(en)? (<button id="esp" className="languageBtn" onClick={handleLanguage}></button>): (<button id="usa" className="languageBtn" onClick={handleLanguage}></button>)}
      {(nightMode)? (<BsSun className="modeBtn" id="sun" onClick={handleNightMode}/>): (<BsFillMoonFill className="modeBtn" id="moon" onClick={handleNightMode}/>)}
      {(en)? (<a href="https://docs.google.com/document/d/1F0UtSyx9vOkeEvWuHf6dbwBOLM5Jfn50WKC3olQnKt8/edit?usp=sharing" download="CV Estefanía Márquez" target="_BLANK"><CvButton nightMode={nightMode}/></a>): (<a href="https://docs.google.com/document/d/1MMh8bFdigB-1D7YxAqYZy8mxbGZDxIjxl97UBoeBMdg/edit?usp=sharing" download="CV Estefanía Márquez" target="_BLANK"><CvButton nightMode={nightMode}/></a>)}
    </div>
  )
}

export default App
