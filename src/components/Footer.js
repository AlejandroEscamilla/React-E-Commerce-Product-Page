import React, { Component } from "react";

class Footer extends Component {
    render(){
        return ( 
            <footer class="Footer">
                <section class="footer-main">

                    <div class="footer-block__center footer-main__item">
                        <h3 class="element-h span-color__style">SHOP</h3>
                            <ul class="footer-flex__container foot-navbar">
                                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/Index" rel="noopener noreferrer" target="_blank">HOME</a></li>
                                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/Man" rel="noopener noreferrer" target="_blank">MAN</a></li>
                                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/" rel="noopener noreferrer" target="_blank">WOMAN</a></li>
                                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-e-comm-full.netlify.app/" rel="noopener noreferrer" target="_blank">ACCESSORY</a></li>
                                <li className="nav-li__box element-hover__underline"><a href="https://alejandro-portfolio.netlify.app/" rel="noopener noreferrer" target="_blank">UNIVERSE</a></li>
                            </ul>
                    </div>

                    <div class="footer-block__right footer-main__item">
                        <h3 class="element-h span-color__style"><a href="https://alejandro-e-comm-full.netlify.app/Contact" rel="noopener noreferrer" target="_blank">Contact Us</a></h3>
                    </div>

                    <div class="footer-block__left footer-main__item">
                        <h3 class="element-h span-color__style"><a href="https://alejandro-portfolio.netlify.app/" rel="noopener noreferrer" target="_blank">UNIVERSE</a></h3>
                    </div>
                </section>
                
                <section class="footer-bot">
                    <ul class="footer-socialmedia">
                        <li><a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i class="fa fa-facebook-official"></i></a></li>
                        <li><a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i class="fa fa-twitter-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/alejandro-o-725634133/" rel="noopener noreferrer" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UC6Iqw1NwI2qhXeJWRji5X0A?view_as=subscriber" rel="noopener noreferrer" target="_blank"><i class="fa fa-youtube-play"></i></a></li>
                    </ul>
                        <div class="footer-copyright">
                            <p id="copy-and">COPYRIGHT&copy;	ESCAMILLA</p>
                        </div>
                </section>
            </footer>
        )
    }
}
export default Footer;