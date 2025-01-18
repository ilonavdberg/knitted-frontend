import './ShopPage.css';

import PageLayout from "@/components/pagelayout/PageLayout.jsx";
import ShopToolbar from "@/pages/shoppage/sections/shop-toolbar/ShopToolbar.jsx";
import ShopDetails from "@/pages/shoppage/sections/shopdetails/ShopDetails.jsx";
import ShopContent from "@/pages/shoppage/sections/shopcontent/ShopContent.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";

function ShopPage() {
    const { id } = useParams();
    const [shop, setShop] = useState({});

    useEffect(() => {
        async function fetchShop() {
            try{
                const response = await axios.get(BASE_URL + `shops/${id}/profile`);
                setShop(response.data);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }

        fetchShop();

    }, [])

    return (
        <PageLayout>
            <ShopToolbar />
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