import './ShopInfo.css';

import RatingStars from "@/components/ratingstars/RatingStars.jsx";


function ShopInfo({ shopName, rating, reviewCount, children }) {
    return (
        <div className="shop-info">
            {children}
            <div className="shop-info__info">
                <h3 className="shop-info__name">{shopName}</h3>
                <RatingStars rating={rating} size = {26}/>
                <p className="shop-info__text">{`${reviewCount} reviews`}</p>
            </div>
        </div>
    );
}

export default ShopInfo;