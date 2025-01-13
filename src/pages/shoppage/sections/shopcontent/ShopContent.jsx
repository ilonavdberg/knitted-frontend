import './ShopContent.css';

import ShopNavigation from "@/pages/shoppage/sections/shop-navigation/ShopNavigation.jsx";
import Button from "@/components/button/Button.jsx";
import ShopProductCard from "@/components/shopproductcard/ShopProductCard.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";
import ReviewCard from "@/components/reviewcard/ReviewCard.jsx";

function ShopContent() {
    // save state data here?

    return (
        <div className="shop-content">
            <ShopNavigation></ShopNavigation>
            <Button skin="primary">New Product</Button>
            <div className="shop-content__products">
                <ShopProductCard status="published"/>
                <ShopProductCard status="draft"/>
                <ShopProductCard status="sold"/>
                <ShopProductCard status="published"/>
                <ShopProductCard status="sold"/>
                <ShopProductCard status="draft"/>
                <ShopProductCard status="published"/>
                <ShopProductCard status="sold"/>
                <ShopProductCard status="draft"/>
                <ShopProductCard status="draft"/>
                <ShopProductCard status="draft"/>
            </div>
            <div className="shop-content__reviews">
                <div className="shop-content__review-score">
                    <span>4.2</span>
                    <RatingStars rating={4} />
                </div>
                <div className="shop-content__review-cards">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </div>
    );
}

export default ShopContent;