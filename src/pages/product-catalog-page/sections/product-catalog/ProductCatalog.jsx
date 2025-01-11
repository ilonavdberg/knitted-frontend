import './ProductCatalog.css';

function ProductCatalog({ children }) {

    return (
        <section className="product-catalog">
            {children}
        </section>
    );
}

export default ProductCatalog;