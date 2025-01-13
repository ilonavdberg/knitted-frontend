import './ShopPage.css';

import PageLayout from "@/components/pagelayout/PageLayout.jsx";
import ShopToolbar from "@/pages/shoppage/sections/shop-toolbar/ShopToolbar.jsx";
import ShopDetails from "@/pages/shoppage/sections/shopdetails/ShopDetails.jsx";
import ShopContent from "@/pages/shoppage/sections/shopcontent/ShopContent.jsx";

function ShopPage() {
    return (
        <PageLayout>
            <ShopToolbar />
            <ShopDetails />
            <hr/>
            <ShopContent></ShopContent>
        </PageLayout>
    );
}

export default ShopPage;