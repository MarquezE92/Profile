import React, { FC } from "react";
import styles from './SocialBanner.module.css';
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

interface SocialBannerProps {
  nightMode: boolean
}

const SocialBanner: FC<SocialBannerProps> = ({nightMode})=> {
	
	return (
		<div className={(nightMode)? styles.bannerNightMode : styles.bannerDayMode}>
			<a href="https://www.linkedin.com/in/estefan%C3%ADa-m%C3%A1rquez-137b45175/" target="_BLANK"><BsLinkedin className={styles.bannerIcon}/></a>
			<a href="https://github.com/MarquezE92" target="_BLANK"><BsGithub className={styles.bannerIcon}/></a>
			<a href="https://wa.me/542236914591" target="_BLANK"><BsWhatsapp className={styles.bannerIcon}/></a>
		</div>
	
		)
}

export default SocialBanner