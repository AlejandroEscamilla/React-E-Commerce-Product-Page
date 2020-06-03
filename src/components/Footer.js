import React, { Component } from "react";

class Footer extends Component {
    render(){
        return  <footer className="Footer">
            <section className="footer-top">
                <p className="element-h">I AM EVERYWHERE</p>
            </section>

            <section className="footer-main">
                <div className="footer-block__left footer-main__item">
                <h3 className="element-h element-hover__underline">UNIVERSE</h3>
                    <ul className="footer-flex__container">
                            <li className="element-hover__underline">Project X</li>
                            <li className="element-hover__underline">Project Y</li>
                            <li className="element-hover__underline">Project Z</li>
                    </ul>
                </div>

                <div className="footer-block__center footer-main__item">
                <h3 className="element-h element-hover__underline">SHOP</h3>
                    <ul className="footer-flex__container">
                            <li className="element-hover__underline">HOME</li>
                            <li className="element-hover__underline">MAN</li>
                            <li className="element-hover__underline">WOMAN</li>
                            <li className="element-hover__underline">ACCESSORY</li>
                            <li className="element-hover__underline">UNIVERSE</li>
                    </ul>
                </div>

                <div className="footer-block__right footer-main__item">
                    <h3 className="element-h element-hover__underline">WHERE</h3>
                        <p  className="element-hover__underline">01001001 00100000 01000001 01001101 00100000 01000101 01010110 01000101 01010010 01011001 01010111 01001000 01000101 01010010 01000101</p>
                </div>
            </section>
            
            <section className="footer-bot">
                <ul className="footer-socialmedia">
                    <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
                    <li><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/alejandro-o-725634133/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UC6Iqw1NwI2qhXeJWRji5X0A?view_as=subscriber" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                </ul>
                <div className="footer-copyright">
                    <p>COPYRIGHT&copy;	ESCAMILLA</p>
                </div>
            </section>

        </footer>
    }
}
export default Footer;