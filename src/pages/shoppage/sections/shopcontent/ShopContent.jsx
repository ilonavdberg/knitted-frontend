import './ShopContent.css';

import ShopNavigation from "@/pages/shoppage/sections/shop-navigation/ShopNavigation.jsx";
import Button from "@/components/button/Button.jsx";
import ShopProductCard from "@/components/shopproductcard/ShopProductCard.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";
import ReviewCard from "@/components/reviewcard/ReviewCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {formatDate, formatRating} from "@/utils/Formatter.js";
import {BASE_URL} from "@/utils/urlBuilder.js";

function ShopContent({ shop }) {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [selectedContent, setSelectedContent] = useState("products");

    useEffect(() => {
        if (selectedContent === "products") {
            async function fetchProducts() {
                try {
                    const response = await axios.get(BASE_URL + `shops/${id}/items`);
                    setProducts(response.data.content);
                    console.log(response.data.content);
                } catch(e) {
                    console.error(e);
                }
            }
            fetchProducts();
        }

        if (selectedContent === "reviews") {
            async function fetchReviews() {
                try {
                    const response = await axios.get(BASE_URL + `shops/${id}/reviews`);
                    setReviews(response.data.content);
                    console.log(response.data.content);
                } catch(e) {
                    console.error(e);
                }
            }
            fetchReviews();
        }

    }, [id, selectedContent]);

    return (
        <div className="shop-content">
            <ShopNavigation
                changeContent={setSelectedContent}
            />

            {selectedContent === "products" && (
                <>
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
                </>
            )}

            {selectedContent === "reviews" && (
                <div className="shop-content__reviews">
                    <div className="shop-content__review-score">
                        <span>{formatRating(shop.averageRating)}</span>
                        <RatingStars rating={shop.averageRating}/>
                    </div>
                    <div className="shop-content__review-cards">
                        {reviews.map(review => {
                            return <ReviewCard
                                key={review.id}
                                title={review.title}
                                rating={review.rating}
                                review={review.comment}
                                date={formatDate(review.createdDate)}
                                item={review.itemName}
                            />
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShopContent;