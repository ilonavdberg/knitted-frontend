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


function ProductPage() {
    // This is where states are managed
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        // const targetUrl = BASE_URL + "/items" + id;
        const targetUrl = "http://localhost:8080/v1/items/1"

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
                        <Link to="/shop">
                            <ShopInfo shopName={product?.shop?.name} rating={product?.shop?.rating} reviewCount={product?.shop?.numberOfReviews}>
                                <Avatar size={96}>
                                    <img src={`data:image/jpg;base64,${product?.shop?.shopPicture?.base64Image}`} alt="shop logo"/>
                                </Avatar>
                            </ShopInfo>
                        </Link>
                        <Button skin="primary">Buy now</Button>
                    </div>
                </div>
                {/*TODO: create ImageSlider component*/}
                <div className="product-details__image">
                    <img src={`data:image/jpg;base64,${product?.photos[0].base64Image}`} alt="product photo"/>
                </div>
            </section>
        </PageLayout>
    );
}

export default ProductPage;