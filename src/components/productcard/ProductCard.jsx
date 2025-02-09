import './ProductCard.css';

import { Link } from 'react-router-dom';
import { formatPrice } from "@/utils/Formatter.js";
import { generateImage } from "@/utils/ImageUtils.js";

import Avatar from "@/components/avatar/Avatar.jsx";


function ProductCard({id, title, price, photo, shopName, shopImage, variant = "default"}) {
    return (
        <Link to={`/product/${id}`}>
            <article className={`product-card product-card--${variant}`}>
                <section className="product-card__shop">
                    <Avatar>
                        <img src={generateImage(shopImage?.base64Image, shopImage?.extension)} alt="shop logo"/>
                    </Avatar>
                    <h4 className="product-card__shop-name">{shopName}</h4>
                </section>
                <section className="product-card__product">
                    <div className="product-card__product-photo">
                        <img src={generateImage(photo?.base64Image, photo?.extension)} alt="product photo"/>
                    </div>
                    <h3 className="product-card__product-title">{title}</h3>
                    <p className="product-card__product-price">{formatPrice(price)}</p>
                </section>
            </article>
        </Link>
    );
}

export default ProductCard;