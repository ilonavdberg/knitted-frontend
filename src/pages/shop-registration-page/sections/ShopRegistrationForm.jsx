import './ShopRegistrationForm.css';

import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/UrlBuilder.js";
import { AuthContext } from "@/context/AuthContext.jsx";

import Button from "@/components/button/Button.jsx";


function ShopRegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { shop: userShop, login } = useContext(AuthContext);
    const [ errorMessage, setErrorMessage ] = useState("");
    const navigate = useNavigate();

    // automatically navigate to the shop after it is placed in the authContext
    useEffect(() => {
        console.log("userShop inside ShopRegistrationForm: ", userShop);
        if (typeof userShop?.id === 'number') {
            navigate(`/shop/${userShop.id}`);
        }
    }, [userShop])

    async function handleShopRegistration(data) {

        try {
            // create the new shop
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);

            if (data.image && data.image.length > 0) {
                formData.append("uploadedImage", data.image[0]);
            }

            const response = await axios.post(`${BASE_URL}shops`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            })

            // automatically login with updated roles and set shopId
            const token = response.headers.authorization.replace("Bearer ", "");
            const shopId = response.data.id;
            login(token, shopId);

        } catch(e) {
            console.error(e);
            setErrorMessage("An error occurred while creating the shop.");
        }
    }

    return (
        <form onSubmit={handleSubmit(handleShopRegistration)}>
            <fieldset className="shop-registration__form-subset">
                <legend className="shop-registration__form-subset-title">Shop details</legend>
                <label htmlFor="shop-name-field" className="shop-registration__form-question">
                    Shop Name:
                    <input
                        className="shop-registration__form-input"
                        id="shop-name-field"
                        type="text"
                        size={30}
                        {...register("name", {
                            required: "Shop name is a mandatory field",
                            minLength: {
                                value: 6,
                                message: "Shop name must be at least 6 characters"
                            },
                            maxLength: {
                                value: 30,
                                message: "Shop name cannot exceed 30 characters"
                            },
                        })}
                    />
                </label>
                {errors.name && <p className="form__error-message">{errors.name.message}</p>}

                <label htmlFor="shop-description-field" className="shop-registration__description">
                    Shop Description:
                    <textarea
                        className="shop-registration__form-input"
                        id="shop-description-field"
                        cols="30"
                        rows="10"
                        {...register("description", {
                            required: "Shop description is a mandatory field",
                            minLength: {
                                value: 50,
                                message: "Shop description must be at least 50 characters"
                            },
                            maxLength: {
                                value: 300,
                                message: "Shop description cannot exceed 300 characters"
                            },
                        })}
                     />
                </label>
                {errors.description && <p className="form__error-message">{errors.description.message}</p>}

                <label htmlFor="shop-picture-field" className="shop-registration__form-question">
                    Shop Picture:
                    <input
                        className="shop-registration__upload-file"
                        id="shop-picture-field"
                        type="file"
                        accept="image/*"
                        {...register("image", {
                            required: "Image is required",
                        })}
                    />
                </label>
                {errors.image && <p className="form__error-message">{errors.image.message}</p>}
            </fieldset>

            <div className="shop-registration__buttons">
                <Button
                    type="submit"
                    skin="primary"
                >
                    Register
                </Button>
                <Button
                    onClick={() => navigate(-1)}
                >
                    Cancel
                </Button>
            </div>
            {errorMessage && (
                <p className="form__error-message">{errorMessage}</p>
            )}
        </form>
    );
}

export default ShopRegistrationForm;