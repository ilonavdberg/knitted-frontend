import './FeaturedProducts.css';
import ProductCard from "../../../../components/productcard/ProductCard.jsx";
import axios from "axios";
import {useEffect, useState} from "react";


function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                return await axios.get("http://localhost:8080/v1/items");
            } catch(e) {
                console.error(e);
            }
        }

        fetchProducts().then((response) => {
            setProducts(response.data.content);
        })
    }, [])

    //This effect is added for testing purposes
    useEffect(() => {
        console.log(products);
    }, [products]); // Runs only when products changes

    return (
        <section className="featured-products">
            <h2 className="featured-products__title">Featured products</h2>
            <div className="featured-products__products">
                <ProductCard
                    title={products[0]?.title}
                    price={products[0]?.price}
                    photo={products[0]?.itemPhoto?.base64Image}
                    shopName={products[0]?.shopName}
                    shopImage={products[0]?.shopPicture?.base64Image}
                    variant="featured"
                />
                <ProductCard
                    title={products[1]?.title}
                    price={products[1]?.price}
                    photo={products[1]?.itemPhoto?.base64Image}
                    shopName={products[1]?.shopName}
                    shopImage={products[1]?.shopPicture?.base64Image}
                    variant="featured"
                />
                <ProductCard
                    title={products[2]?.title}
                    price={products[2]?.price}
                    photo={products[2]?.itemPhoto?.base64Image}
                    shopName={products[2]?.shopName}
                    shopImage={products[2]?.shopPicture?.base64Image}
                    variant="featured"
                />
                <ProductCard
                    title={products[3]?.title}
                    price={products[3]?.price}
                    photo={products[3]?.itemPhoto?.base64Image}
                    shopName={products[3]?.shopName}
                    shopImage={products[3]?.shopPicture?.base64Image}
                    variant="featured"
                />
            </div>
        </section>
    );
}

export default FeaturedProducts;