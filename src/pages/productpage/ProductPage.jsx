import './ProductPage.css';

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import ShopInfo from "@/components/shopinfo/ShopInfo.jsx";
import Avatar from "@/components/avatar/Avatar.jsx";
import Button from "@/components/button/Button.jsx";
import ProductInfo from "@/pages/productpage/sections/product-info/ProductInfo.jsx";
import ProductToolbar from "@/pages/productpage/sections/product-toolbar/ProductToolbar.jsx";
import {useParams, Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {BASE_URL} from "@/utils/urlBuilder.js";
import axios from "axios";
import {generateImage} from "@/utils/ImageUtils.js";
import {AuthContext} from "@/context/AuthContext.jsx";


function ProductPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { shop } = useContext(AuthContext);

    async function fetchProductDetails() {
        try {
            const response = await axios.get(BASE_URL + `items/${id}`);
            setProduct(response.data);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    // Refresh product details
    function refreshProductDetails() {
        fetchProductDetails();
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    async function handleOrderProduct() {
        try {
            const response = await axios.post(BASE_URL + `items/${id}/order`, {},{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            })
            console.log(response.data);

            if (response.status === 201) {
                console.log("Order created");
                navigate(`/confirmation/order/${response.data.id}`);
            }

        } catch(e) {
            console.error(e);
        }
    }


    return (
        <PageLayout>
            {(product?.shop?.id === shop?.id) && (
                <ProductToolbar
                    product={product}
                    refresh={refreshProductDetails}
                />
            )}
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
                                    <img src={generateImage(product?.shop?.shopPicture?.base64Image, product?.shop?.shopPicture?.extension)} alt="shop logo"/>
                                </Avatar>
                            </ShopInfo>
                        </Link>
                        <Button
                            onClick={handleOrderProduct}
                            skin="primary"
                        >
                            Buy now
                        </Button>
                    </div>
                </div>
                <div className="product-details__image">
                    <img src={generateImage(
                        product?.photos?.[product?.photos?.length - 1]?.base64Image,
                        product?.photos?.[product?.photos?.length - 1]?.extension
                    )}
                         alt="product photo"
                    />
                </div>
            </section>
        </PageLayout>
    );
}

export default ProductPage;