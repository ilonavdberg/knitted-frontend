import './OrderCard.css';
import Button from "@/components/button/Button.jsx";
import {formatPrice} from "@/utils/Formatter.js";
import {useNavigate} from "react-router-dom";


function OrderCard({ id, date, productName, productPhoto, price, shopName }) {
    const navigate = useNavigate();

    function handleWriteReview() {
        navigate('/write-review', { state: { orderId: id } })
    }

    return (
        <article className="order-card">
            <header>
                <h2 className="order-card__date">{date}</h2>
            </header>
            <section className="order-card__content">
                <div className="order-card__product-photo">
                    <img src={productPhoto} alt=""/>
                </div>
                <div className="order-card__product-details">
                    <p>{productName}</p>
                    <p>{shopName}</p>
                    <p>{formatPrice(price)}</p>
                </div>
                <div  className="order-card__review-button">
                    <Button
                        onClick={handleWriteReview}
                        skin="tertiary"
                    >
                        Write a Review
                    </Button>
                </div>
            </section>
        </article>
    );
}

export default OrderCard;