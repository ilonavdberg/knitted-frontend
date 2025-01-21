import './ProductListingPage.css';
import ProductListingForm from "@/pages/product-listing-page/sections/ProductListingForm.jsx";
import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import axios from "axios";

function ProductListingPage() {
    const { id, shopId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (id) {
            async function fetchProduct() {
                const response = await axios.get(`${BASE_URL}items/${id}`);
                setProduct(response.data);
            }
            fetchProduct();
        }

    }, [id])

    return (
        <EmptyLayout>
            <h1 className="page__title">
                {id ? "Edit product" : "New product"}
            </h1>
            <ProductListingForm shopId={shopId} product={product} />
        </EmptyLayout>
    );
}

export default ProductListingPage;