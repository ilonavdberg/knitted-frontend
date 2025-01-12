import './ShopNavigation.css';
import Button from "@/components/button/Button.jsx";
import {FunnelSimple, SortAscending} from "@phosphor-icons/react";

function ShopNavigation() {
    return (
        <nav className={"shop-navigation"}>
            <div className="shop-navigation__content-selector">
                <Button skin="transparent">Products</Button>
                <Button skin="transparent">Reviews</Button>
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