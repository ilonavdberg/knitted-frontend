import './NavBar.css'

import {Link, NavLink} from 'react-router-dom';
import Logo from "../logo/Logo.jsx";
import Button from "../button/Button.jsx";

function NavBar() {
    //TODO: link to specific filter of product catalog
    return (
        <header className="navbar">
            <Link to="/">
                <Logo></Logo>
            </Link>
            <nav className="navbar__nav">
                <ul>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Clothing</NavLink></li>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Accessories</NavLink></li>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Home</NavLink></li>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Toys</NavLink></li>
                </ul>
            </nav>
            <Button skin="secondary">
                Login
            </Button>
        </header>
    );
}

export default NavBar;