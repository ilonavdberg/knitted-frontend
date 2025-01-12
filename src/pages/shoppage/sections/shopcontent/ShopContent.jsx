import './ShopContent.css';
import ShopNavigation from "@/pages/shoppage/sections/shop-navigation/ShopNavigation.jsx";
import Button from "@/components/button/Button.jsx";
import ProductCard from "@/components/productcard/ProductCard.jsx";

function ShopContent() {
    return (
        <div className="shop-content">
            <ShopNavigation></ShopNavigation>
            <Button skin="primary">New Product</Button>
            <div className="shop-content__products">
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
                <ProductCard variant="shop"/>
            </div>
            <div className="shop-content__reviews">

            </div>
        </div>
    );
}

export default ShopContent;