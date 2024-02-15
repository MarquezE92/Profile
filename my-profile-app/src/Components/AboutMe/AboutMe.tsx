import React, {FC} from 'react';
import { motion } from 'framer-motion';
import styles from './AboutMe.module.css';
import Lila from '../../../public/assets/images/Lila.jpeg';


interface AboutMeProps {
    nightMode: boolean;
    en: boolean;
  }

const AboutMe: FC<AboutMeProps> = ({nightMode, en})=> {

    const fadeInAnimation = {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        const target = event.target as HTMLSpanElement;
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.innerHTML = `<img src=${Lila} alt="Imagen Tooltip" />`;
        target.appendChild(tooltip);
      };
    
      const handleMouseOut = () => {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach((tooltip) => tooltip.remove());
      };


    return (
        <>
        <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={fadeInAnimation}
        >
        {
            en?
            <div  className={nightMode ? 'TxtColorNight' : 'TxtColorDay'} id={styles.text}>
           
            I live in Mar del Plata (a tourist city on the Atlantic coast) together with  <span
            className={styles.wordWithTooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >Lila</span>. I love having conversations with people with perspectives different from mine. I am a great problem solver and self-taught person. And I believe that learning possibilities are enhanced when working as a team.
        
        </div> :
        <div  className={nightMode ? 'TxtColorNight' : 'TxtColorDay'} id={styles.text}>
           
           Vivo en Mar del Plata (ciudad turística de la costa atlántica) junto con <span
            className={styles.wordWithTooltip}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >Lila</span>. Me encanta tener conversaciones con personas con perspectivas diferentes a la mía. Soy una gran solucionadora
           de problemas y autodidacta. Y creo que las posibilidades de aprendizaje se potencian cuando se trabaja en equipo.
  
        </div>
        }
        </motion.div>
        </>                          
        

    )
}

export default AboutMe