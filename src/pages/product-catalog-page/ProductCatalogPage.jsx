import './ProductCatalogPage.css'

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import Menu from "@/pages/product-catalog-page/sections/menu/Menu.jsx";
import Products from "@/pages/product-catalog-page/sections/products/Products.jsx";
import PageSelector from "@/components/pageselector/PageSelector.jsx";

function ProductCatalogPage() {
    // here the state data and functions will be stored

    return (
        <PageLayout>
            <section>
                <Menu />
                <Products />
                <PageSelector />
            </section>
        </PageLayout>
    );
}

export default ProductCatalogPage;