import './ShopProductCard.css';
import {Link} from "react-router-dom";
import {formatPrice} from "@/utils/Formatter.js";
import {generateImage} from "@/utils/ImageUtils.js";


function ShopProductCard({ id, title, price, status, photo }) {
    return (
        <Link to={`/product/${id}`}>
            <article className={"shop-product-card"}>
                <section className="shop-product-card__product">
                    <div className={`shop-product-card__label label--${status}`}>
                        <p>{status}</p>
                    </div>
                    <div className="shop-product-card__product-photo">
                        <img src={generateImage(photo.base64Image, generateImage(photo.extension))} alt=""/>
                    </div>
                    <h3 className="shop-product-card__product-title">{title}</h3>
                    <p className="shop-product-card__product-price">{formatPrice(price)}</p>
                </section>
            </article>
        </Link>
    );
}

export default ShopProductCard;