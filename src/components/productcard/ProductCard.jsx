import './ProductCard.css';

function ProductCard() {
    return (
        <article className="product-card">
            <section className="product-card__shop">
                <div className="product-card__shop-logo">
                    <img src="src/assets/images/shop_logo.jpg" alt="shop logo"/>
                </div>
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
    );
}

export default ProductCard;