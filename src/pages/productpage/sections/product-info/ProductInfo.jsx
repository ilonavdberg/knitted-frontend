import './ProductInfo.css';
import * as Formatter from "@/utils/Formatter.js";

function ProductInfo({ title, description, price }) {
    return (
        <div className="product-info">
            <h2 className="product-details__title">{title}</h2>
            <p className="product-details__price">{Formatter.formatPrice(price)}</p>
            <p className="product-details__description">{description}</p>
        </div>
    );
}

export default ProductInfo;