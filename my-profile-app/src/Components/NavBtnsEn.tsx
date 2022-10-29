import React from "react";

const NavBtnsEn = ({nightMode})=> {

	return (
		<div>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>About me</button>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Skills</button>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Projects</button>
			<button className={(nightMode)? "btnNightMode" : "btnDayMode"}>Contact me</button>
		</div>
	
		)
}

export default NavBtnsEn

