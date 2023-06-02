import React, { FC } from 'react';
import styles from './ProjectCard.module.css';
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

interface ProjectCardProps {
	title: string,
    page: string,
    repo: string
  }


const ProjectCard: FC<ProjectCardProps> = ({title, page, repo})=> {

    const handlePage = ()=> {
        window.open(page, '_blank');
    }

    const handleRepo= ()=> {
        window.open(repo, '_blank');
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}></div>
            <div className={styles.txtContainer}>
                <div className={styles.title}>{title} {page? <BsBoxArrowUpRight onClick={handlePage} style={{cursor:"pointer"}}/> : null} {repo ? <BsGithub onClick={handleRepo} style={{cursor:"pointer"}}/> : null}</div>
            </div>

        </div>
    )
}

export default ProjectCard