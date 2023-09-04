
import React, { FC } from "react";
import styles from './NavBtns.module.css';

interface NavBtnsProps {
  nightMode: boolean;
  en: boolean;
}

const handleScrollToClick = (id:string) => {
	const element = document.getElementById(id);
	if (element) {
	  const top = element.offsetTop;
	  window.scrollTo({ top, behavior: "smooth" });
	}
  };

const NavBtns: FC<NavBtnsProps> = ({ nightMode, en }) => {
  return (
    <div>
      <button onClick={()=>handleScrollToClick("About me")} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "About me" : "Sobre mí"}</button>
      <button onClick={()=>handleScrollToClick("Technologies")} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Technologies" : "Tecnologías"}</button>
      <button onClick={()=>handleScrollToClick("Projects")} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Projects" : "Proyetos"}</button>
      <button onClick={()=>handleScrollToClick("Certificates")} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Certificates" : "Certificados"}</button>
      <button onClick={()=>handleScrollToClick("Contact me")} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Contact me" : "Contactame"}</button>
    </div>
  );
};

export default NavBtns;

