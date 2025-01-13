import './ShopDetails.css';
import Avatar from "@/components/avatar/Avatar.jsx";
import ShopInfo from "@/components/shopinfo/ShopInfo.jsx";

function ShopDetails() {
    return (
        <div className="shop-details">
            <Avatar size={220}>
                <img src="src/assets/images/shop_logo.jpg" alt="shop logo"/>
            </Avatar>
            <div className="shop-details__content">
                <ShopInfo
                    shopName={'Knitting Handmade'}
                    rating={4}
                    reviewCount={5}
                ></ShopInfo>
                <p className="shop-details__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec iaculis tellus. Nam ac purus aliquam, tincidunt libero ut, molestie dui. Nullam lacinia libero at risus sodales, nec hendrerit turpis aliquam. Pellentesque vehicula hendrerit tortor, non pharetra nisl rhoncus vel. Nam imperdiet scelerisque ligula eget auctor. Duis elit risus, molestie quis metus nec, tincidunt malesuada leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida velit non elit pharetra, et elementum felis porta. </p>
            </div>
        </div>
    );
}

export default ShopDetails;