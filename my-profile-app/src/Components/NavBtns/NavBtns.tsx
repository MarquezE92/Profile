
import React, { FC } from "react";
import styles from './NavBtns.module.css';

interface NavBtnsProps {
  nightMode: boolean;
  en: boolean;
}

const NavBtns: FC<NavBtnsProps> = ({ nightMode, en }) => {
  return (
    <div>
      <button className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "About me" : "Sobre mí"}</button>
      <button className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Skills" : "Habilidades"}</button>
      <button className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Projects" : "Proyetos"}</button>
      <button className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Certificates" : "Certificados"}</button>
      <button className={nightMode ? styles.btnNightMode : styles.btnDayMode}>{en ? "Contact me" : "Contactame"}</button>
    </div>
  );
};

export default NavBtns;

