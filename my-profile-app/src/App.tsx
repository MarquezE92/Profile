import React, { useState } from 'react';
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import './App.css';

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
      {(en)? (<button onClick={handleLanguage}>ES</button>): (<button onClick={handleLanguage}>EN</button>)}
      {(nightMode)? (<BsSun className="sun" onClick={handleNightMode}/>): (<BsFillMoonFill className="moon" onClick={handleNightMode}/>)}
    </div>
  )
}

export default App
