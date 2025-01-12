import './ProductPage.css';

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import ShopInfo from "@/components/shopinfo/ShopInfo.jsx";
import Avatar from "@/components/avatar/Avatar.jsx";
import Button from "@/components/button/Button.jsx";
import ProductInfo from "@/pages/productpage/sections/product-info/ProductInfo.jsx";


function ProductPage() {
    // This is where states are managed

    return (
        <PageLayout>
            <section className="product-details">
                <div className="product-details__info">
                    <ProductInfo
                        title="Product Title"
                        description="Lorem ipsum dolor sit amet. Vel facilis blanditiis qui blanditiis reiciendis qui repellat
                            sint. Sit odit quasi qui vero maxime rem itaque voluptatum qui vero quaerat a odio eaque hic
                            aliquid voluptatibus! Ut libero architecto quo dignissimos voluptas aut labore soluta. Aut
                            obcaecati commodi ex laboriosam illum est veniam voluptatem ut quisquam sapiente. Et aperiam
                            assumenda nam expedita cumque aut tenetur perspiciatis eos laudantium rerum."
                        price={125.00}
                    />
                    <div className="product-details__shop-info">
                        <ShopInfo shopName={'Shop name'} rating={3} reviewCount={5}>
                            <Avatar size={96}>
                                <img src="src/assets/images/shop_logo.jpg" alt="shop logo"/>
                            </Avatar>
                        </ShopInfo>
                        <Button skin="primary">Buy now</Button>
                    </div>

                </div>
                {/*TODO: create ImageSlider component*/}
                <div className="product-details__image-slider">
                    <img src="src/assets/images/product_photo.png" alt="product photo"/>
                </div>
            </section>
        </PageLayout>
    );
}

export default ProductPage;