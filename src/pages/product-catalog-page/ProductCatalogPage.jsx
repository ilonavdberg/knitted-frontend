import './ProductCatalogPage.css'

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import Menu from "@/pages/product-catalog-page/sections/menu/Menu.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/productcard/ProductCard.jsx";
import { useSearchParams } from "react-router-dom";
import { buildUrl } from "@/utils/urlBuilder.js";
import PageSelector from "@/components/pageselector/PageSelector.jsx";

function ProductCatalogPage() {
    const [products, setProducts] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    function nextPage() {
        setPageNumber(prev => prev + 1);
    }

    function previousPage() {
        setPageNumber(prev => prev - 1);
    }


    useEffect(() => {
        async function fetchProducts() {
            const targetUrl = buildUrl("items", {
                category: searchParams.get("category"),
                subcategory: searchParams.get("subcategory"),
                price: searchParams.get("price"),
                target: searchParams.get("target"),
                size: searchParams.get("size")
            });

            try {
                const response = await axios.get(targetUrl, {
                    params: {
                        page: pageNumber
                    }
                });

                setProducts(response.data.content);
                setIsFirstPage(response.data.first);
                setIsLastPage(response.data.last);
                console.log(response);
            } catch(e) {
                console.error(e);
            }
        }

        fetchProducts();

    }, [pageNumber, searchParams])

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <PageLayout>
            <section>
                <Menu
                    category={searchParams.get("category")}
                    setSearchParams={setSearchParams}
                />
                <ul className="products">
                    {products.length > 0 ? (
                        products.map(product => {
                            return <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                photo={product.itemPhoto}
                                shopName={product.shopName}
                                shopImage={product.shopPicture}
                            />
                        })
                    ) : (
                        <p>Oops! No matches found. Try tweaking your filters for more options!</p>
                    )}
                </ul>
                <PageSelector
                    isFirstPage={isFirstPage}
                    isLastPage={isLastPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                />
            </section>
        </PageLayout>
    );
}

export default ProductCatalogPage;