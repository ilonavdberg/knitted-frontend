import './ProductCatalogPage.css'
import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import ProductCatalog from "./sections/product-catalog/ProductCatalog.jsx";

function ProductCatalogPage() {
    return (
        <PageLayout>
            <ProductCatalog />
        </PageLayout>
    );
}

export default ProductCatalogPage;