import './ProductListingPage.css';

import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "@/utils/UrlBuilder.js";

import ProductListingForm from "@/pages/product-listing-page/sections/ProductListingForm.jsx";
import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";


function ProductListingPage() {
    const { id } = useParams();
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
            <ProductListingForm product={product} productId={id}/>
        </EmptyLayout>
    );
}

export default ProductListingPage;