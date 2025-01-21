import './ProductListingForm.css';

import { useForm } from 'react-hook-form';
import {mapToSubcategoryUI, subcategoriesData} from "@/constants/subcategoriesData.js";
import Button from "@/components/button/Button.jsx";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


function ProductListingForm({ shopId, product }) {
    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            category: "",
        }
    });
    const navigate = useNavigate();

    const category = watch('category');
    const subcategories = category ? subcategoriesData[category] : [];

    useEffect(() => {
        console.log("Received product: ", product)
        if (product) {
            setValue('title', product.title);
            setValue('description', product.description);
            setValue('price', product.price);
            setValue('category', product.category);
            setValue('subcategory', product.subcategory);
            setValue('target', product.target);
            setValue('size', product.size);
            setValue('photos', product.photo);
        }
    }, [product, setValue]);


    async function handleFormSubmit(data) {
        const formData = new FormData();

        if (data.title) {
            formData.append("title", data.title);
        }
        if (data.description) {
            formData.append("description", data.description);
        }
        if (data.price) {
            formData.append("price", data.price);
        }
        if (data.category) {
            formData.append("category", category);
        }
        if (data.subcategory) {
            formData.append("subcategory", data.subcategory);
        }
        if (data.target) {
            formData.append("target", data.target);
        }
        if (data.size) {
            formData.append("size", data.size);
        }
        // if (data.photo) {
        //     formData.append("photos", data.photo);
        // }

        Array.from(data.photos).forEach((file) => {
            formData.append("photos", file);
        });

        console.log("This is the data in the formData object: ");
        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });

        try {
            // update product
            if (!shopId) {
                formData.forEach((value, key) => {
                    console.log(`${key}: ${value}`);
                });
                await axios.put(`${BASE_URL}items/${product.id}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                navigate("/shop/" + product.shop.id)
            // create new product
            } else {
                await axios.post(BASE_URL + `shops/${shopId}/items`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                navigate("/shop/" + shopId);
            }
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <form className="product-listing__form">
            <label htmlFor="product-title-field" className="product-listing__form-question">
                Title:
                <input
                    className="product-listing__form-input"
                    id="product-title-field"
                    type="text"
                    size={30}
                    maxLength={30}
                    {...register("title")}
                />
            </label>
            <label htmlFor="product-price-field" className="product-listing__form-question">
                Price:
                <input
                    className="product-listing__form-input"
                    id="product-price-field"
                    type="number"
                    step=".01"
                    {...register("price")}
                />
            </label>
            <label htmlFor="product-description-field" className="product-listing__form-question product-listing__description">
                Description:
                <textarea
                    className="product-listing__form-input"
                    id="product-description-field"
                    cols={38}
                    rows={8}
                    maxLength={300}
                    {...register("description")}
                >
                </textarea>
            </label>
            <label htmlFor="product-image-upload" className="product-listing__form-question">
                Photo:
                <input
                    className="product-listing__upload-file"
                    type="file"
                    id="product-image-upload"
                    accept="image/*"
                    {...register("photos")}
                />
            </label>
            <label htmlFor="product-category-field" className="product-listing__form-question">
                Category:
                <select
                    className="product-listing__form-select"
                    id="product-category-field"
                    {...register("category")}
                >
                    <option value="">-- Choose category --</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Acessories</option>
                    <option value="home">Home</option>
                    <option value="toys">Toys</option>
                </select>
            </label>
            <label htmlFor="product-subcategory-field" className="product-listing__form-question">
                Subcategory:
                <select
                    className="product-listing__form-select"
                    id="product-subcategory-field"
                    {...register("subcategory")}
                >
                    <option value="">-- Choose subcategory --</option>
                    {subcategories.map((subcategory, index) => (
                        <option
                            key={index}
                            value={subcategory}
                        >
                            {mapToSubcategoryUI(subcategory)}
                        </option>
                    ))}
                </select>
            </label>

            {category === "clothing" && (
                <>
                    <label htmlFor="product-target-group-field" className="product-listing__form-question">
                        Target Group:
                        <select
                            className="product-listing__form-select"
                            id="product-target-group-field"
                            {...register("target")}
                        >
                            <option value="">-- Choose target group --</option>
                            <option value="females">females</option>
                            <option value="males">males</option>
                            <option value="unisex">unisex</option>
                            <option value="kids">kids</option>
                            <option value="babies">babies</option>
                        </select>
                    </label>
                    <label htmlFor="product-size-field" className="product-listing__form-question">
                        Size:
                        <select
                            className="product-listing__form-select"
                            id="product-size-field"
                            {...register("size")}
                        >
                            <option value="">-- Choose size --</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="3XL">3XL</option>
                            <option value="Kids 50">Kids 50</option>
                            <option value="Kids 56">Kids 56</option>
                            <option value="Kids 62">Kids 62</option>
                            <option value="ids 68">Kids 68</option>
                            <option value="Kids 7">Kids 74</option>
                            <option value="Kids 80">Kids 80</option>
                            <option value="Kids 86">Kids 86</option>
                            <option value="Kids 92">Kids 92</option>
                            <option value="Kids 98">Kids 98</option>
                            <option value="Kids 104">Kids 104</option>
                            <option value="Kids 110">Kids 110</option>
                            <option value="Kids 116">Kids 116</option>
                            <option value="Kids 122">Kids 122</option>
                            <option value="Kids 128">Kids 128</option>
                            <option value="Kids 134">Kids 134</option>
                            <option value="Kids 140">Kids 140</option>
                            <option value="Kids 146">Kids 146</option>
                            <option value="Kids 152">Kids 152</option>
                            <option value="Kids 158">Kids 158</option>
                            <option value="Kids 164">Kids 164</option>
                            <option value="Kids 170">Kids 170</option>
                            <option value="Kids 152">Kids 152</option>
                            <option value="Kids 152">Kids 152</option>
                            <option value="Socks 22-24">Socks 22-24</option>
                            <option value="Socks 25-27">Socks 25-27</option>
                            <option value="Socks 28-30">Socks 28-30</option>
                            <option value="Socks 31-34">Socks 31-34</option>
                            <option value="Socks 35-38">Socks 35-38</option>
                            <option value="Socks 39-42">Socks 39-42</option>
                            <option value="Socks 43-46">Socks 43-46</option>
                        </select>
                    </label>
                </>
            )}
            <div className="product-listing__buttons">
                <Button
                    onClick={handleSubmit(handleFormSubmit)}
                    skin="primary"
                >
                    Save product
                </Button>
                <Button
                    onClick={() => {navigate(-1)}}
                    skin="secondary"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default ProductListingForm;