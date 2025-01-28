import './ShopContent.css';

import ShopNavigation from "@/pages/shoppage/sections/shop-navigation/ShopNavigation.jsx";
import Button from "@/components/button/Button.jsx";
import ShopProductCard from "@/components/shopproductcard/ShopProductCard.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";
import ReviewCard from "@/components/reviewcard/ReviewCard.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {formatDate, formatRating} from "@/utils/Formatter.js";
import {BASE_URL} from "@/utils/urlBuilder.js";
import PageSelector from "@/components/pageselector/PageSelector.jsx";
import {AuthContext} from "@/context/AuthContext.jsx";

function ShopContent({ shop }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const { shop: userShop } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [selectedContent, setSelectedContent] = useState("products");
    const [pageNumber, setPageNumber] = useState(0);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    function nextPage() {
        setPageNumber(prev => prev + 1);
        console.log("next page");
    }

    function previousPage() {
        setPageNumber(prev => prev - 1);
        console.log("previous page");
    }

    async function fetchProducts() {
        try {
            const response = await axios.get(BASE_URL + `shops/${id}/items`, {
                params: {
                    page: pageNumber,
                }
            });
            setProducts(response.data.content);
            setIsFirstPage(response.data.first);
            setIsLastPage(response.data.last);
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
    }

    async function fetchReviews() {
        try {
            const response = await axios.get(BASE_URL + `shops/${id}/reviews`, {
                params: {
                    page: pageNumber,
                }
            });
            setReviews(response.data.content);
            setIsFirstPage(response.data.first);
            setIsLastPage(response.data.last);
            console.log(response.data.content);
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        setPageNumber(0);

        if (selectedContent === "products") {
            fetchProducts();
        }

        if (selectedContent === "reviews") {
            fetchReviews();
        }

    }, [id, selectedContent]);

    useEffect(() => {
        if (selectedContent === "products") {
            fetchProducts();
        }

        if (selectedContent === "reviews") {
            fetchReviews();
        }

    }, [pageNumber]);

    return (
        <div className="shop-content">
            <ShopNavigation
                changeContent={setSelectedContent}
            />

            {selectedContent === "products" && (
                <>
                    {(shop?.id == userShop?.id) && (
                        <Button
                            skin="primary"
                            onClick={() => navigate("/shop/new-product")}
                        >
                            New Product
                        </Button>
                    )}
                    <div className="shop-content__products">
                        {products.map(product => {
                            return <ShopProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                status={product.status}
                                photo={product?.photo}
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
            <PageSelector
                isFirstPage={isFirstPage}
                isLastPage={isLastPage}
                previousPage={previousPage}
                nextPage={nextPage}
            />
        </div>
    );
}

export default ShopContent;