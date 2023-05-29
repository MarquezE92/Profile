import logo from "../images/e.png";

const WelcomeBanner = ()=> {
    return (
        <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
            <div className="WelcomeContent">
                <div className="logoContainer"><img src={logo} className="logo" /></div>
                <div className="WelcomeTxtContainer">
                    <p>{'<¡Hola!/>'}</p>
                    <p></p></div>
            </div>
        
      </div>
    )
}

export default WelcomeBanner