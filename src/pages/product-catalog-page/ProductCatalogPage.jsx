import './ProductCatalogPage.css'

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import Menu from "@/pages/product-catalog-page/sections/menu/Menu.jsx";
import PageSelector from "@/components/pageselector/PageSelector.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "@/components/productcard/ProductCard.jsx";

function ProductCatalogPage() {
    // here the state data and functions will be stored
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                return await axios.get("http://localhost:8080/v1/items");
                // setProducts(response.data.content);
            } catch(e) {
                console.error(e);
            }
        }

        fetchProducts().then((response) => {
            console.log(response);
            setProducts(response.data.content);
        })
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <PageLayout>
            <section>
                <Menu />
                {/*<Products />*/}
                <ul className="products">
                    {products.map(product => {
                        return <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            photo={product.itemPhoto.base64Image}
                            shopName={product.shopName}
                            shopImage={product.shopPicture.base64Image}
                        />
                    })}
                </ul>
                <PageSelector />
            </section>
        </PageLayout>
    );
}

export default ProductCatalogPage;