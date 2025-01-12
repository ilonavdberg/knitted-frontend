import './ProductCard.css';

import { Link } from 'react-router-dom';
import Avatar from "@/components/avatar/Avatar.jsx";

function ProductCard({ variant = "default" }) {
    return (
        <Link to="/product">
        <article className={`product-card product-card--${variant}`}>
            <section className="product-card__shop">
                <Avatar>
                    <img src="src/assets/images/shop_logo.jpg" alt="shop logo"/>
                </Avatar>
                <h4 className="product-card__shop-name">Shop name</h4>
            </section>
            <section className="product-card__product">
                <div className="product-card__product-photo">
                    <img src="src/assets/images/product_photo.png" alt="product photo"/>
                </div>
                <h3 className="product-card__product-title">Longest allowed Product title</h3>
                <p className="product-card__product-price">€125,00</p>
            </section>
        </article>
        </Link>
    );
}

export default ProductCard;