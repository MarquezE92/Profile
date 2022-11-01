import React, { useState } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import NavBtnsEn from "./Components/NavBtnsEn.tsx";
import NavBtnsEs from "./Components/NavBtnsEs.tsx";
import SocialBanner from "./Components/SocialBanner.tsx";
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
    </div>
  )
}

export default App
