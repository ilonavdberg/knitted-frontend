import './ShopProductCard.css';
import {Link} from "react-router-dom";


function ShopProductCard({ status }) {
    return (
        <Link to="/product">
            <article className={"shop-product-card"}>
                <section className="shop-product-card__product">
                    <div className={`shop-product-card__label label--${status}`}>
                        <p>{status}</p>
                    </div>
                    <div className="shop-product-card__product-photo">
                        <img src="src/assets/images/product_photo.png" alt="product photo"/>
                    </div>
                    <h3 className="shop-product-card__product-title">Longest allowed Product title</h3>
                    <p className="shop-product-card__product-price">€125,00</p>
                </section>
            </article>
        </Link>
    );
}

export default ShopProductCard;