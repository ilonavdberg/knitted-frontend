import './ShopRegistrationForm.css';
import {useForm} from "react-hook-form";

function ShopRegistrationForm() {
    const { register, handleSubmit } = useForm();

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
                        {...register("shop-name")}
                    />
                </label>
                <label htmlFor="shop-description-field" className="shop-registration__description">
                    Shop Description:
                    <textarea
                        className="shop-registration__form-input"
                        id="shop-description-field"
                        cols="30"
                        rows="10"
                        {...register("shop-description")}
                     />
                </label>
                <label htmlFor="shop-picture-field" className="shop-registration__form-question">
                    Shop Picture:
                    <input
                        className="shop-registration__upload-file"
                        id="shop-picture-field"
                        type="file"
                        accept="image/*"
                        {...register("shop-picture")}
                    />
                </label>
            </fieldset>
        </form>
    );
}

export default ShopRegistrationForm;