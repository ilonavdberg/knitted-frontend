import './ShopContent.css';

import ShopNavigation from "@/pages/shoppage/sections/shop-navigation/ShopNavigation.jsx";
import Button from "@/components/button/Button.jsx";
import ShopProductCard from "@/components/shopproductcard/ShopProductCard.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";
import ReviewCard from "@/components/reviewcard/ReviewCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function ShopContent() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [selectedContent, setSelectedContent] = useState("products");
    
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`http://localhost:8080/v1/shops/${id}/items`)
                setProducts(response.data.content);
                console.log(response.data.content);
            } catch(e) {
                console.error(e);
            }
        }

        fetchProducts();

    }, [id], selectedContent === "products");

    return (
        <div className="shop-content">
            <ShopNavigation></ShopNavigation>
            <Button skin="primary">New Product</Button>
            <div className="shop-content__products">
                {products.map(product => {
                    return <ShopProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        status={product.status}
                        photo={product?.photo?.base64Image}
                    />
                })}
            </div>
            <div className="shop-content__reviews">
                <div className="shop-content__review-score">
                    <span>4.2</span>
                    <RatingStars rating={4} />
                </div>
                <div className="shop-content__review-cards">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </div>
    );
}

export default ShopContent;