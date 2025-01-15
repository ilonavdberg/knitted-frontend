import './ProductCatalogPage.css'

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import Menu from "@/pages/product-catalog-page/sections/menu/Menu.jsx";
import PageSelector from "@/components/pageselector/PageSelector.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "@/components/productcard/ProductCard.jsx";
import Button from "@/components/button/Button.jsx";
import LinkButton from "@/components/linkbutton/LinkButton.jsx";

function ProductCatalogPage() {
    // here the state data and functions will be stored
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);

    function nextPage() {
        setPageNumber(prev => prev + 1);
    }

    function previousPage() {
        setPageNumber(prev => prev - 1);
    }

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("http://localhost:8080/v1/items", {
                    params: {
                        page: pageNumber
                    }
                });

                setProducts(response.data.content);
                setIsFirstPage(response.data.first);
                setIsLastPage(response.data.last);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }

        fetchProducts();

    }, [pageNumber])

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <PageLayout>
            <section>
                <Menu/>
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
                <div className="page-selector">
                    <LinkButton
                        onClick={previousPage}
                        disabled={isFirstPage}
                    >
                        Previous
                    </LinkButton>
                    <LinkButton
                        onClick={nextPage}
                        disabled={isLastPage}
                    >
                        Next
                    </LinkButton>
                </div>
            </section>
        </PageLayout>
    );
}

export default ProductCatalogPage;