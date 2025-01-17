import './FeaturedProducts.css';
import ProductCard from "../../../../components/productcard/ProductCard.jsx";
import axios from "axios";
import {useEffect, useState} from "react";


function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                return await axios.get("http://localhost:8080/v1/items", {
                    params: {
                        size: 4
                    }
                });
            } catch(e) {
                console.error(e);
            }
        }

        fetchProducts().then((response) => {
            setProducts(response.data.content);
        })
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <section className="featured-products">
            <h2 className="featured-products__title">Featured products</h2>
            <ul className="featured-products__products">
                {products.map(product => {
                    return <ProductCard
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        photo={product.itemPhoto.base64Image}
                        shopName={product.shopName}
                        shopImage={product.shopPicture.base64Image}
                        variant="featured"
                    />;
                })}
            </ul>
        </section>
    );
}

export default FeaturedProducts;