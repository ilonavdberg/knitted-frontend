import './ProductCatalogPage.css'

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import ProductCatalog from "./sections/product-catalog/ProductCatalog.jsx";
import Menu from "@/pages/product-catalog-page/sections/menu/Menu.jsx";
import Products from "@/pages/product-catalog-page/sections/products/Products.jsx";
import PageSelector from "@/components/pageselector/PageSelector.jsx";

function ProductCatalogPage() {
    // here the state data and functions will be stored

    return (
        <PageLayout>
            <ProductCatalog>
                <Menu />
                <Products />
                <PageSelector />
            </ProductCatalog>
        </PageLayout>
    );
}

export default ProductCatalogPage;