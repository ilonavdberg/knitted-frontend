import './ShopDetails.css';
import Avatar from "@/components/avatar/Avatar.jsx";
import ShopInfo from "@/components/shopinfo/ShopInfo.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/utils/urlBuilder.js";

function ShopDetails({ shop }) {
    // const { id } = useParams();
    // const [shop, setShop] = useState({});
    //
    // useEffect(() => {
    //     async function fetchShop() {
    //         try{
    //             const response = await axios.get(BASE_URL + `shops/${id}/profile`);
    //             setShop(response.data);
    //             console.log(response.data);
    //         } catch(e) {
    //             console.error(e);
    //         }
    //     }
    //
    //     fetchShop();
    //
    // }, [])


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