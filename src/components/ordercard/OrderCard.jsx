import './OrderCard.css';
import Button from "@/components/button/Button.jsx";
import {formatDate, formatPrice} from "@/utils/Formatter.js";
import {useNavigate} from "react-router-dom";
import * as ImageUtils from "@/utils/ImageUtils.js";


function OrderCard({ id, date, productName, productPhoto, price, shopName, reviewId }) {
    const navigate = useNavigate();

    function handleWriteReview() {
        navigate('/write-review', { state: { orderId: id } })
    }

    return (
        <article className="order-card">
            <header>
                <h2 className="order-card__date">{formatDate(date)}</h2>
            </header>
            <section className="order-card__content">
                <div className="order-card__product-photo">
                    <img src={ImageUtils.generateImage(productPhoto?.base64Image, productPhoto?.extension)} alt="product photo"/>
                </div>
                <div className="order-card__product-details">
                    <h3 className="order-card__product-name">{productName}</h3>
                    <p>{shopName}</p>
                    <p>{formatPrice(price)}</p>
                </div>
                {!reviewId && (
                    <div className="order-card__review-button">
                        <Button
                            onClick={handleWriteReview}
                            skin="tertiary"
                        >
                            Write a Review
                        </Button>
                    </div>
                )}
            </section>
        </article>
    );
}

export default OrderCard;