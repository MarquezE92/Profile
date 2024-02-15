import React from 'react';
import { motion } from 'framer-motion';
import styles from './Certificates.module.css';
import fullstack from '../../../public/assets/images/Certificado-Henry.png';
import ingles from '../../../public/assets/images/Ingles.png';
import japones from '../../../public/assets/images/Japones.png';
import scrum from '../../../public/assets/images/Scrum.png'

const Certificates = () => {

    const fadeInAnimation = {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    return (
        <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={fadeInAnimation}
        >
            <section className={styles.certificatesSection}>
                <img className={styles.certificatesFirstImg} src={fullstack} />
                <img className={styles.certificatesImg} src={scrum} />
                <img className={styles.certificatesImg} src={ingles} />
                <img className={styles.certificatesLastImg} src={japones} />

            </section>
        </motion.div>

    )
}

export default Certificates