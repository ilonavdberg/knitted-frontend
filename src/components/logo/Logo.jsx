import './Logo.css'
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <h2 className="logo">Knitted</h2>
        </Link>

    );
}

export default Logo;