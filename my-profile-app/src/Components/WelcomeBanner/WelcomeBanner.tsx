import {FC} from 'react';
import styles from './WelcomeBanner.module.css';
import logo from "../../images/e.png";
import me from "../../images/Me.png";

interface WelcomeBannerProps {
    nightMode: boolean;
    en: boolean;
  }

const WelcomeBanner: FC<WelcomeBannerProps> = ({nightMode, en})=> {



    return (

        <div className={styles.container}>
            <div className={styles.WelcomeContent}>
                <div className={styles.logoContainer} ><img src={logo} className={styles.logo}/><img src={me} className={styles.me}/></div>
                <div className={styles.WelcomeTxtContainer}>
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