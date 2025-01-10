import './Footer.css';

import { ReactComponent as GithubLogo } from '@/assets/icons/github-icon.svg';
import { ReactComponent as LinkedInLogo} from '@/assets/icons/linkedin-icon.svg';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">This web application was developed by Ilona van den Berg as the final project for the Full-Stack Developer bootcamp at NOVI Hogeschool</p>
            <p className="footer__text">Find out more about me here:</p>
            <div className="footer__social">
                <GithubLogo className="footer__social-logo" />
                <LinkedInLogo className="footer__social-logo" />
            </div>
        </footer>
    );
}

export default Footer;