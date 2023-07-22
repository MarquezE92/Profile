import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from "../../Utils";
import styles from './TechnologiesCards.module.css';

const TechnologiesCards = ()=> {

    const fadeInAnimation = {
        initial: { opacity: 0, y:25 },
        whileInView: { opacity: 1, y:0, transition:{duration:1} }
      };

    return (
        <motion.div
        initial="initial"
        whileInView="whileInView"
        variants={fadeInAnimation}
      >
        <div className={styles.contenedorCards}>
          {
            technologies?.map(tech =>
              <div className={styles.card}>
                <img className={styles.icono} src={tech.img}/>
                <div className={styles.card__name}>
                   <p className={styles.name}>{tech.name}</p> 
                </div>
                
                </div>)
          }
        </div>
        </motion.div>
    )
}

export default TechnologiesCards

