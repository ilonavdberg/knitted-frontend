import './ProductInfo.css';

function ProductInfo({ title, description, price }) {
    return (
        <div className="product-info">
            <h2 className="product-details__title">{title}</h2>
            <p className="product-details__price">{`€${price}`}</p>
            <p className="product-details__description">{description}</p>
        </div>
    );
}

export default ProductInfo;