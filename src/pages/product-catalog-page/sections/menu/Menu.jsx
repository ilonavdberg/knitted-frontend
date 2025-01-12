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
                    <LinkButton to="/">Sweaters</LinkButton>
                    <LinkButton to="/">Cardigans</LinkButton>
                    <LinkButton to="/">Tops</LinkButton>
                    <LinkButton to="/">Pants</LinkButton>
                    <LinkButton to="/">Skirts</LinkButton>
                    <LinkButton to="/">Socks</LinkButton>
                    <LinkButton to="/">Hats & Headbands</LinkButton>
                    <LinkButton to="/">Scarves</LinkButton>
                    <LinkButton to="/" isSelected={true}>Gloves</LinkButton>
                </ul>
            </nav>
            <div className="menu__sort-and-filter">
                <Button skin="transparent">
                    <span>Sort</span>
                    <SortAscending size={32}/>
                </Button>
                <Button skin="transparent">
                    <FunnelSimple size={32}/>
                    <span>Filter</span>
                </Button>
            </div>
            <form className="menu__filter-options" action="">
                <fieldset>
                    <legend>Price</legend>
                    <label htmlFor="min-price-field">
                        From
                        <input type="number" id="min-price-field" name="min-price"/>
                    </label>
                    <label htmlFor="max-price-field">
                        To
                        <input type="number" id="max-price-field" name="max-price"/>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Target Group</legend>
                    <label htmlFor="target-group-females">
                        <input type="radio" id="target-group-females" name="target-group-females"/>
                        females
                    </label>
                    <label htmlFor="target-group-males">
                        <input type="radio" id="target-group-males" name="target-group-males"/>
                        males
                    </label>
                    <label htmlFor="target-group-unisex">
                        <input type="radio" id="target-group-unisex" name="target-group-unisex"/>
                        unisex
                    </label>
                    <label htmlFor="target-group-kids">
                        <input type="radio" id="target-group-kids" name="target-group-kids"/>
                        kids
                    </label>
                    <label htmlFor="target-group-babies">
                        <input type="radio" id="target-group-babies" name="target-group-babies"/>
                        babies
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Size</legend>
                    <select name="size" id="size-select">
                        {/*TODO: get sizes from backend*/}
                        <option value="">-- select a size --</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </fieldset>
                <Button skin="transparent">Save filters</Button>
            </form>
            <form className="menu__sort-options" action="">
                <fieldset>
                    <legend>Sort by</legend>
                    {/*TODO: change names of the sorting methods*/}
                    <select name="sort-by" id="sort-by-select">
                        <option value="price-asc">price ascending</option>
                        <option value="price-dsc">price descending</option>
                        <option value="date-asc">date ascending</option>
                        <option value="date-dsc">date descending</option>
                    </select>
                </fieldset>
                <Button skin="transparent">Sort now</Button>
            </form>

        </header>)
}

export default Menu;