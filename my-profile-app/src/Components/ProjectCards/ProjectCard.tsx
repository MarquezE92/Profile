import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import Slide from '../Slide/Slide';
import { BsGithub, BsBoxArrowUpRight, BsTools } from "react-icons/bs";

interface ProjectCardProps {
	title: string,
    page: string,
    repo: string,
    imgs: string[],
    descriptionEs: string,
    descriptionEn: string,
    technologies: string,
    en: boolean
  }


const ProjectCard: FC<ProjectCardProps> = ({title, page, repo, imgs, descriptionEs, descriptionEn, technologies, en})=> {

    const fadeInAnimation = {
    initial: { opacity: 0, y:25 },
    whileInView: { opacity: 1, y:0, transition:{duration:1} }
  };

    const handlePage = ()=> {
        window.open(page, '_blank');
    }

    const handleRepo= ()=> {
        window.open(repo, '_blank');
    }

    return (
        <motion.div
      initial="initial"
      whileInView="whileInView"
      variants={fadeInAnimation}
    >
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Slide imgs={imgs}/>
            </div>
            <div className={styles.txtContainer}>
                <div className={styles.title}>{title} {page? <BsBoxArrowUpRight onClick={handlePage} style={{cursor:"pointer"}}/> : null} {repo ? <BsGithub onClick={handleRepo} style={{cursor:"pointer"}}/> : null}</div>
                <div className={styles.description}>{en? descriptionEn : descriptionEs}</div>
                <div>
                    <BsTools className={styles.icon} /> 
                    {technologies}
                </div>

            </div>

        </div>
    </motion.div>
        
    )
}

export default ProjectCard