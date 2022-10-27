import React, {useState} from 'react'
import './App.css'

function App() {
  const[en, setEn] = useState(true);

  const handleLanguage = ()=>{
    setEn(!en)
  }

  return (
    <div className="App">
      {(en)? (<button onClick={handleLanguage}>ES</button>): (<button onClick={handleLanguage}>EN</button>)}
    </div>
  )
}

export default App
