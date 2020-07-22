import React, { Component } from "react";

class NavBar extends Component {
    render(){
        return (
            <header className="-boxshadow__gold">
            <ul className="nav nav-flex__center">
                <li className="nav-li__logo"><a href="https://alejandro-e-comm-full.netlify.app/" rel="noopener noreferrer" target="_blank"><img src={require('../Logos/AELogo.png')} alt="Lorem"/></a></li>
                <li className="nav-li__logo" id="nav-logo__text"><span className="span-color__style"><a href="https://alejandro-e-comm-full.netlify.app/Index" rel="noopener noreferrer" target="_blank">ESCAMILLA</a></span></li>
            </ul>
            
            <ul className="nav nav-ul__flex">
                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/Man" rel="noopener noreferrer" target="_blank">MAN</a></li>
                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/" rel="noopener noreferrer" target="_blank">WOMAN</a></li>
                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/" rel="noopener noreferrer" target="_blank">ACCESSORY</a></li>
                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-portfolio.netlify.app/" rel="noopener noreferrer" target="_blank">UNIVERSE</a></li>
            </ul>
        </header>
        )
    }
}
export default NavBar;