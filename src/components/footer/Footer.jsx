import './Footer.css';

import {ReactComponent as GithubLogo} from '@/assets/icons/github-icon.svg';
import {ReactComponent as LinkedInLogo} from '@/assets/icons/linkedin-icon.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">This web application was developed by Ilona van den Berg as the final project
                for the Full-Stack Developer bootcamp at NOVI Hogeschool</p>
            <p className="footer__text">Find out more about me here:</p>
            <div className="footer__social">
                <GithubLogo height="28px" width="42px"/>
                <LinkedInLogo height="40px" width="42px"/>
            </div>
        </footer>
    );
}

export default Footer;