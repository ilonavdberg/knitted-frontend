import './ShopDetails.css';
import Avatar from "@/components/avatar/Avatar.jsx";
import ShopInfo from "@/components/shopinfo/ShopInfo.jsx";


function ShopDetails({ shop }) {

    return (
        <div className="shop-details">
            <Avatar size={220}>
                <img src={`data:image/jpg;base64,${shop?.shopPicture?.base64Image}`} alt="shop logo"/>
            </Avatar>
            <div className="shop-details__content">
                <ShopInfo
                    shopName={shop.name}
                    rating={shop.averageRating}
                    reviewCount={shop.numberOfReviews}
                ></ShopInfo>
                <p className="shop-details__description">{shop.description}</p>
            </div>
        </div>
    );
}

export default ShopDetails;