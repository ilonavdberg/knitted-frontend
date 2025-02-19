import './ShopNavigation.css';

import { FunnelSimple, SortAscending } from "@phosphor-icons/react";

import Button from "@/components/button/Button.jsx";


function ShopNavigation({ changeContent }) {
    return (
        <nav className={"shop-navigation"}>
            <div className="shop-navigation__content-selector">
                <Button
                    onClick={() => changeContent("products")}
                    skin="transparent"
                >
                    Products
                </Button>
                <Button
                    onClick={() => changeContent("reviews")}
                    skin="transparent"
                >
                    Reviews
                </Button>
            </div>
            <div className="shop-navigation__sort-and-filter">
                <Button skin="transparent">
                    <FunnelSimple size={32}/>
                    <span>Filter</span>
                </Button>
                <Button skin="transparent">
                    <SortAscending size={32}/>
                    <span>Sort</span>
                </Button>
            </div>
        </nav>
    );
}

export default ShopNavigation;