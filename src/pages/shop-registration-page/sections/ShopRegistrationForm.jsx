import './ShopRegistrationForm.css';
import {useForm} from "react-hook-form";
import Button from "@/components/button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/context/AuthContext.jsx";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";

function ShopRegistrationForm() {
    const { register, handleSubmit } = useForm();
    const { shop: userShop, login } = useContext(AuthContext);
    const [ errorMessage, setErrorMessage ] = useState("");
    const navigate = useNavigate();

    // automatically navigate to the shop after it is placed in the authContext
    useEffect(() => {
        if (userShop) {
            navigate(`/shop/${userShop.id}`);
        }
    })

    async function handleShopRegistration(data) {
        console.log(userShop);
        if (!userShop) {
            setErrorMessage("You can only have one shop.");
        }

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
            console.log(response);

            // automatically login with updated roles and set shopId
            const token = response.headers.authorization.replace("Bearer ", "");
            console.log("token: ", token);
            const shopId = response.data.id;
            login(token, shopId);

        } catch(e) {
            console.error(e);
            setErrorMessage("An error occurred while creating the shop.");
        }
    }

    return (
        <form>
            <fieldset className="shop-registration__form-subset">
                <legend className="shop-registration__form-subset-title">Shop details</legend>
                <label htmlFor="shop-name-field" className="shop-registration__form-question">
                    Shop Name:
                    <input
                        className="shop-registration__form-input"
                        id="shop-name-field"
                        type="text"
                        size={30}
                        {...register("name")}
                    />
                </label>
                <label htmlFor="shop-description-field" className="shop-registration__description">
                    Shop Description:
                    <textarea
                        className="shop-registration__form-input"
                        id="shop-description-field"
                        cols="30"
                        rows="10"
                        {...register("description")}
                     />
                </label>
                <label htmlFor="shop-picture-field" className="shop-registration__form-question">
                    Shop Picture:
                    <input
                        className="shop-registration__upload-file"
                        id="shop-picture-field"
                        type="file"
                        accept="image/*"
                        {...register("image")}
                    />
                </label>
            </fieldset>

            <div className="shop-registration__buttons">
                <Button
                    onClick={handleSubmit(handleShopRegistration)}
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