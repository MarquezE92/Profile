import {FC} from 'react';
import styles from './AboutMe.module.css';


interface AboutMeProps {
    nightMode: boolean;
    en: boolean;
  }

const AboutMe: FC<AboutMeProps> = ({nightMode, en})=> {



    return (
                                  
        <div  className={nightMode ? 'TxtColorNight' : 'TxtColorDay'}>
            {en ? 
            '' : 
            ''
            }
            
        </div>

    )
}

export default AboutMe