import './ProductListingPage.css';
import ProductListingForm from "@/pages/product-listing-page/sections/ProductListingForm.jsx";
import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import {useParams} from "react-router-dom";

function ProductListingPage() {
    const { id } = useParams();
    console.log(id);

    return (
        <EmptyLayout>
            <h1 className="page__title">New product</h1>
            <ProductListingForm shopId={id} />
        </EmptyLayout>
    );
}

export default ProductListingPage;