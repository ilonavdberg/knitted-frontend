import './OrderCard.css';
import Button from "@/components/button/Button.jsx";

import defaultPhoto from "@/assets/images/item_photo_default.png";

function OrderCard() {
    return (
        <article className="order-card">
            <header>
                <h2 className="order-card__date">order date</h2>
            </header>
            <section className="order-card__content">
                <div className="order-card__product-photo">
                    <img src={defaultPhoto} alt=""/>
                </div>
                <div className="order-card__product-details">
                    <p>product name</p>
                    <p>shop name</p>
                    <p>price</p>
                </div>
                <div  className="order-card__review-button">
                    <Button
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