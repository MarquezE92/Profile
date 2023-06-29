import React from 'react';
import styles from './Certificates.module.css';
import fullstack from '../images/Certificado-Henry.png';
import ingles from '../images/Ingles.png';
import japones from '../images/Japones.png';
import scrum from '../images/Scrum.png'

const Certificates = ()=> {

   
    return (
        <section className={styles.certificatesSection}>
            <img className={styles.certificatesFirstImg} src={fullstack} />
            <img className={styles.certificatesImg} src={scrum} />
            <img className={styles.certificatesImg} src={ingles} />
            <img className={styles.certificatesLastImg} src={japones} />

        </section>
    )
}

export default Certificates