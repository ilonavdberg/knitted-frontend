import './ProductPage.css';

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import ShopInfo from "@/components/shopinfo/ShopInfo.jsx";
import Avatar from "@/components/avatar/Avatar.jsx";
import Button from "@/components/button/Button.jsx";
import ProductInfo from "@/pages/productpage/sections/product-info/ProductInfo.jsx";
import ProductToolbar from "@/pages/productpage/sections/product-toolbar/ProductToolbar.jsx";
import { useParams, Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {BASE_URL} from "@/utils/urlBuilder.js";
import axios from "axios";
import * as ImageUtils from "@/utils/ImageUtils.js";


function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const targetUrl = BASE_URL + `items/${id}`;

        async function fetchProductDetails() {
            try {
                const response = await axios.get(targetUrl);
                setProduct(response.data);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }

        fetchProductDetails();

    }, [id])


    return (
        <PageLayout>
            <ProductToolbar />
            <section className="product-details">
                <div className="product-details__info">
                    <ProductInfo
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                    <div className="product-details__shop-info">
                        <Link to={`/shop/${product?.shop?.id}`}>
                            <ShopInfo shopName={product?.shop?.name} rating={product?.shop?.averageRating} reviewCount={product?.shop?.numberOfReviews}>
                                <Avatar size={96}>
                                    <img src={ImageUtils.generateImage(product?.shop?.shopPicture?.base64Image, product?.shop?.shopPicture?.extension)} alt="shop logo"/>
                                </Avatar>
                            </ShopInfo>
                        </Link>
                        <Button skin="primary">Buy now</Button>
                    </div>
                </div>
                <div className="product-details__image">
                    <img src={ImageUtils.generateImage(product?.photos?.[0]?.base64Image, product?.photos?.[0]?.extension)} alt="product photo"/>
                </div>
            </section>
        </PageLayout>
    );
}

export default ProductPage;