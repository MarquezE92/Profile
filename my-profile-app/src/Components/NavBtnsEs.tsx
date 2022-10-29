import React from "react";

const NavBtnsEs = ({nightMode})=> {
	console.log(nightMode)
	return (
		<div>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Sobre mí</button>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Habilidades</button>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Proyectos</button>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Contactame</button>
		</div>
	
		)
}

export default NavBtnsEs