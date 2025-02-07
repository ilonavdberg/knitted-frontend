import './NavBar.css';

import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "@/context/AuthContext.jsx";

import Logo from "../logo/Logo.jsx";
import Button from "../button/Button.jsx";


function NavBar() {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="navbar">
            <Logo />
            <nav className="navbar__nav">
                <ul>
                    <li><NavLink to='/product-catalog?category=clothing' className="navbar__link" >Clothing</NavLink></li>
                    <li><NavLink to='/product-catalog?category=accessories' className="navbar__link" >Accessories</NavLink></li>
                    <li><NavLink to='/product-catalog?category=home' className="navbar__link" >Home</NavLink></li>
                    <li><NavLink to='/product-catalog?category=toys' className="navbar__link" >Toys</NavLink></li>
                </ul>
            </nav>
            {isAuthenticated ? (
                <Button
                    onClick={() => {navigate('/user/account')}}
                    skin="secondary"
                >
                    My Account
                </Button>
            ) : (
                <Button
                    onClick={() => navigate('/user/login')}
                    skin="secondary"
                >
                    Login | Register
                </Button>
            )}

        </header>
    );
}

export default NavBar;