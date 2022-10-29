import React, { useState } from "react";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import NavBtnsEn from "./Components/NavBtnsEn.tsx";
import NavBtnsEs from "./Components/NavBtnsEs.tsx";
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
      {(en)? (<NavBtnsEn nightMode={nightMode}/>): (<NavBtnsEs nightMode={nightMode}/>)}
      {(en)? (<button id="esp" onClick={handleLanguage}></button>): (<button id="usa" onClick={handleLanguage}></button>)}
      {(nightMode)? (<BsSun className="sun" onClick={handleNightMode}/>): (<BsFillMoonFill className="moon" onClick={handleNightMode}/>)}
    </div>
  )
}

export default App
