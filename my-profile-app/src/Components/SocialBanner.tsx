import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const SocialBanner = ({nightMode})=> {
	
	return (
		<div className={(nightMode)? "bannerNightMode" : "bannerDayMode"}>
			<a href="https://www.linkedin.com/in/estefan%C3%ADa-m%C3%A1rquez-137b45175/" target="_BLANK"><BsLinkedin className="bannerIcon"/></a>
			<a href="https://github.com/MarquezE92" target="_BLANK"><BsGithub className="bannerIcon"/></a>
			<a href="https://wa.me/542236914591" target="_BLANK"><BsWhatsapp className="bannerIcon"/></a>
		</div>
	
		)
}

export default SocialBanner