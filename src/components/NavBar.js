import React, { Component } from "react";

class NavBar extends Component {
    render(){
        return <header className="nav">

        <ul className="nav-flex__center">
            <li className="nav-li__logo"><a href="index.html"><img src={require('../Logos/AELogo.png')} alt="Escamilla Logo"></img></a></li>
            <h3 className="nav-li__logo" id="nav-logo__text"><span className="span-color__style"><a href="index.html">ESCAMILLA</a></span></h3>
        </ul>

        <ul className="nav-ul__top">
            <li className="nav-li__box element-hover__underline"><a href="contact.html"><i className="fa fa-globe"></i></a></li>
            <li className="nav-li__box element-hover__underline"><a href="contact.html"><i className="fa fa-envelope"></i></a></li>
            <li className="nav-li__box element-hover__underline"><a href="contact.html"><i className="fa fa-taxi"></i></a></li>
            <li className="nav-li__box element-hover__underline"><a href="contact.html"><i className="fa fa-drivers-license"></i></a></li>
            <li className="nav-li__box element-hover__underline"><a href="contact.html"><i className="fa fa-shopping-cart"></i></a></li>
        </ul>

        <ul className="nav nav-ul__flex">
                    <li className="nav-li__box element-hover__underline"><a href="man.html">MAN</a></li>
                    <li className="nav-li__box element-hover__underline"><a href="woman.html">WOMAN</a></li>
                    <li className="nav-li__box element-hover__underline"><a href="acc.html">ACCESORIES</a></li>
                    <li className="nav-li__box element-hover__underline"><a href="universe.html">UNIVERSE</a></li>
                    <li className="nav-li__box element-hover__type"><input type="text" placeholder="Search house, jackets ..."></input><a href="search.IHaveNoIdea"><i className="fa fa-search"></i></a></li>
        </ul>

    </header>
    }
}
export default NavBar;