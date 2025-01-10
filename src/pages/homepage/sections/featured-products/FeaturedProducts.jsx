import './FeaturedProducts.css';
import ProductCard from "../../../../components/productcard/ProductCard.jsx";


function FeaturedProducts() {
    return (
        <section className="featured-products">
            <h2 className="featured-products__title">Featured products</h2>
            <div className="featured-products__products">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default FeaturedProducts;