import './Menu.css';
import {Link} from "react-router-dom";
import {FunnelSimple, SortAscending} from "@phosphor-icons/react";

import Button from "@/components/button/Button.jsx";
import LinkButton from "@/components/linkbutton/LinkButton.jsx";


function Menu() {
    return (
        <header className="menu">
            <Link to="/" className="menu__product-catalog-link">View all products</Link>
            <h1 className="menu__category-name">Category</h1>
            <nav>
                <ul className="menu__filters">
                    {/*TODO: make number of list items dependent on subcategories*/}
                    <LinkButton to="/" >Sweaters</LinkButton>
                    <LinkButton to="/" >Cardigans</LinkButton>
                    <LinkButton to="/" >Tops</LinkButton>
                    <LinkButton to="/" >Pants</LinkButton>
                    <LinkButton to="/" >Skirts</LinkButton>
                    <LinkButton to="/" >Socks</LinkButton>
                    <LinkButton to="/" >Hats & Headbands</LinkButton>
                    <LinkButton to="/" >Scarves</LinkButton>
                    <LinkButton to="/" isSelected={true} >Gloves</LinkButton>
                </ul>
            </nav>
            <div className="menu__sort-and-filter">
                <Button skin="transparent">
                    <span>Sort</span>
                    <SortAscending size={32} />
                </Button>
                <Button skin="transparent">
                    <FunnelSimple size={32} />
                    <span>Filter</span>
                </Button>
            </div>
        </header>)
}

export default Menu;