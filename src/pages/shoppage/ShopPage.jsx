import './ShopPage.css';

import PageLayout from "@/components/pagelayout/PageLayout.jsx";
import ShopToolbar from "@/pages/shoppage/sections/shop-toolbar/ShopToolbar.jsx";
import ShopDetails from "@/pages/shoppage/sections/shopdetails/ShopDetails.jsx";
import ShopContent from "@/pages/shoppage/sections/shopcontent/ShopContent.jsx";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import {AuthContext} from "@/context/AuthContext.jsx";

function ShopPage() {
    const { id } = useParams();
    const [shop, setShop] = useState({});
    const { shop: userShop } = useContext(AuthContext);

    useEffect(() => {
        async function fetchShop() {
            try{
                const response = await axios.get(BASE_URL + `shops/${id}/profile`);
                setShop(response.data);
            } catch(e) {
                console.error(e);
            }
        }

        fetchShop();

    }, [])

    return (
        <PageLayout>
            {(shop?.id == userShop?.id) && (<ShopToolbar />)}
            <ShopDetails
                shop={shop}
            />
            <hr/>
            <ShopContent
                shop={shop}
            />
        </PageLayout>
    );
}

export default ShopPage;