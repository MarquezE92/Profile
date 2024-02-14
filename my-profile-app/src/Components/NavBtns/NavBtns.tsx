
import { FC, useState } from "react";
import styles from './NavBtns.module.css';
import {  BsList, BsXLg } from "react-icons/bs";

interface NavBtnsProps {
  nightMode: boolean;
  en: boolean;
}



const NavBtns: FC<NavBtnsProps> = ({ nightMode, en }) => {
  const [openedList, setOpenedList] = useState(false);

  const handleScrollToClick = (id:string) => {
	const element = document.getElementById(id);
  if(openedList) {setOpenedList(false)}
	if (element) {
	  const top = element.offsetTop -100;
	  window.scrollTo({ top, behavior: "smooth" });
	}
  };

  return (
    <div className={styles.navList}>
      {
        openedList ?
        <BsXLg className={styles.closeMenu} onClick={()=>setOpenedList(false)}/> :
        <BsList className={styles.openMenu} onClick={()=>setOpenedList(true)}/>
        
      }
      
      <button onClick={()=>handleScrollToClick("About me")} id={openedList? styles.show : styles.hide} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "About me" : "Sobre mí"}</button>
      <button onClick={()=>handleScrollToClick("Technologies")} id={openedList? styles.show : styles.hide} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Technologies" : "Tecnologías"}</button>
      <button onClick={()=>handleScrollToClick("Projects")} id={openedList? styles.show : styles.hide} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Projects" : "Proyetos"}</button>
      <button onClick={()=>handleScrollToClick("Certificates")} id={openedList? styles.show : styles.hide} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Certificates" : "Certificados"}</button>
      <button onClick={()=>handleScrollToClick("Contact me")} id={openedList? styles.show : styles.hide} className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Contact me" : "Contactame"}</button>
    </div>
  );
};

export default NavBtns;

