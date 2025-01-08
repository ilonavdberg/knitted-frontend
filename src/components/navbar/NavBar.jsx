import './NavBar.css'

import { NavLink } from 'react-router-dom';
import Logo from "../logo/Logo.jsx";
import Button from "../button/Button.jsx";

function NavBar() {
    //TODO: link to specific filter of product catalog
    return (
        <header className="navbar">
            <Logo></Logo>
            <nav className="navbar__nav">
                <ul>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Clothing</NavLink></li>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Accessories</NavLink></li>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Home</NavLink></li>
                    <li><NavLink to='/product-catalog' className="navbar__link" >Toys</NavLink></li>
                </ul>
            </nav>
            <Button
                className="navbar__button"
                text="Login"
            />
        </header>
    );
}

export default NavBar;