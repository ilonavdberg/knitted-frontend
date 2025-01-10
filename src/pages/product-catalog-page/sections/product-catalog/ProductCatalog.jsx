import './ProductCatalog.css';

function ProductCatalog({ children }) {
    // here the state data and functions will be stored

    return (
        <section className="product-catalog">
            {children}
        </section>
    );
}

export default ProductCatalog;