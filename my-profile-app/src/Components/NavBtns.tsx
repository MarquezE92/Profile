
import React, { FC } from "react";

interface NavBtnsProps {
  nightMode: boolean;
  en: boolean;
}

const NavBtns: FC<NavBtnsProps> = ({ nightMode, en }) => {
  return (
    <div>
      <button className={nightMode ? "btnNightMode" : "btnDayMode"}>{en ? "About me" : "Sobre mí"}</button>
      <button className={nightMode ? "btnNightMode" : "btnDayMode"}>{en ? "Skills" : "Habilidades"}</button>
      <button className={nightMode ? "btnNightMode" : "btnDayMode"}>{en ? "Projects" : "Proyetos"}</button>
      <button className={nightMode ? "btnNightMode" : "btnDayMode"}>{en ? "Contact me" : "Contactame"}</button>
    </div>
  );
};

export default NavBtns;

