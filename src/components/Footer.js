import React from 'react';
import ('../App.css');
import ('./footer.css');

function Footer(props) {
    return (
        <div className="footer-basic" id="contact-me">
            <footer>
            <div className="column"></div>
            <div className="social">
                <a
                href="https://www.linkedin.com/in/sadiejo/"
                target="_blank"
                rel="noreferrer"
                >
                <i className="icon ion-social-linkedin"></i>
                </a>
    
                <a
                href="https://github.com/magiksadie"
                target="_blank"
                rel="noreferrer"
                >
                <i className="icon ion-social-github"></i>
                </a>
            </div>
            <ul className="list-inline">
                <li>
                <a href="mailto:sadiejo.harty@gmail.com"> Email Me Here</a>
                </li>
            </ul>
            <p className="copyright">© 2022 Sadie Harty</p>
            </footer>
        </div>
    );
}

export default Footer;