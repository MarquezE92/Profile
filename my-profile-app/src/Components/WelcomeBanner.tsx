import {FC} from 'react';
import logo from "../images/e.png";

interface WelcomeBannerProps {
    nightMode: boolean;
    en: boolean;
  }

const WelcomeBanner: FC<WelcomeBannerProps> = ({nightMode, en})=> {
    return (
        <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
            <div className="WelcomeContent">
                <div className="logoContainer"><img src={logo} className="logo" /></div>
                <div className="WelcomeTxtContainer">
                    <p className={nightMode ? 'TxtColorNight' : 'TxtColorDay'}>{en ? '< Hello! />' :'< ¡Hola! />'}</p>
                    <br/>
                    
                    <div  className={nightMode ? 'TxtColorNight' : 'TxtColorDay'}>
                            {en ? 
                            '< Estefanía here! FULL STACK web developer exploring the unlimited potential of imagination, technology and intelligence, through code />' : 
                            '< Acá Estefanía. Desarrolladora web FULL STACK explorando el ilimitado potencial de la imaginación, tecnología e inteligencia, a través del código />'
                            }
                      
                    </div>
                </div>
            </div>
        
      </div>
    )
}

export default WelcomeBanner