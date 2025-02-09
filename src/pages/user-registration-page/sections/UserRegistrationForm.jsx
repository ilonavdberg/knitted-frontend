import './UserRegistrationForm.css';

import axios from "axios";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/UrlBuilder.js";

import Button from "@/components/button/Button.jsx";


function UserRegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function handleUserRegistration(data) {
        try {
            const formData = new FormData();
            formData.append("username", data.username);
            formData.append("password", data.password);
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("street", data.street);
            formData.append("houseNumber", data.houseNumber);
            formData.append("door", data.door);
            formData.append("zipcode", data.zipcode);
            formData.append("city", data.city);
            formData.append("email", data.email);
            formData.append("phone", data.phone);

            if (data.image && data.image.length > 0) {
                formData.append("uploadedImage", data.image[0]);
            }

            await axios.post(`${BASE_URL}auth/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            localStorage.setItem("prevPage", "/user/register");
            navigate("/user/login");


        } catch(e) {
            console.error("Error during user registration: ", e);
        }
    }
    
    return (
        <form onSubmit={handleSubmit(handleUserRegistration)} className="user-registration__form">
            <fieldset className="user-registration__form-subset">
                <legend className="user-registration__form-subset-title">User account details</legend>
                <label htmlFor="username-field" className="user-registration__form-question">
                    Username:
                    <input
                        className="user-registration__form-input"
                        id="username-field"
                        type="text"
                        {...register("username", {
                            required: "Username is a mandatory field",
                            minLength: {
                                value: 8,
                                message: "Username must be at least 8 characters"
                            },
                            maxLength: {
                                value: 30,
                                message: "Username cannot exceed 30 characters"
                            },
                        })}
                    />
                </label>
                {errors.username && <p className="form__error-message">{errors.username.message}</p>}

                <label htmlFor="password-field" className="user-registration__form-question">
                    Password:
                    <input
                        className="user-registration__form-input"
                        id="password-field"
                        type="password"
                        {...register("password", {
                            required: "Password is a mandatory field",
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,20}$/,
                                message: "Password must include a digit, uppercase letter, lowercase letter, and special character.",
                            },
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters.",
                            },
                            maxLength: {
                                value: 20,
                                message: "Password cannot exceed 20 characters.",
                            }
                        })}
                    />
                </label>
                {errors.password && <p className="form__error-message">{errors.password.message}</p>}

                <label htmlFor="user-picture-field" className="user-registration__form-question">
                    User picture:
                    <input
                        className="user-registration__upload-file"
                        id="user-picture-field"
                        type="file"
                        accept="image/*"
                        {...register("image")}
                    />
                </label>

            </fieldset>
            <fieldset className="user-registration__form-subset">
                <legend className="user-registration__form-subset-title">Contact details</legend>
                <div className="user-registration__name user-registration__contact-subset">
                    <label htmlFor="first-name-field" className="user-registration__form-question">
                        First name:
                        <input
                            className="user-registration__form-input"
                            id="first-name-field"
                            type="text"
                            {...register("firstName", {
                                required: "First name is a mandatory field",
                                }
                            )}
                        />
                    </label>
                    {errors.firstName && <p className="form__error-message">{errors.firstName.message}</p>}

                    <label htmlFor="last-name-field" className="user-registration__form-question">
                        Last name:
                        <input
                            className="user-registration__form-input"
                            id="last-name-field"
                            type="text"
                            {...register("lastName", {
                                required: "Last name is a mandatory field",
                            })}
                        />
                    </label>
                    {errors.lastName && <p className="form__error-message">{errors.lastName.message}</p>}
                </div>

                <div className="user-registration__address user-registration__contact-subset">
                    <label htmlFor="street-field" className="user-registration__form-question">
                        Street:
                        <input
                            className="user-registration__form-input"
                            id="street-field"
                            type="text"
                            {...register("street", {
                                required: "Street is a mandatory field",
                            })}
                        />
                    </label>
                    {errors.street && <p className="form__error-message">{errors.street.message}</p>}

                    <label htmlFor="house-field" className="user-registration__form-question">
                        House number:
                        <input
                            className="user-registration__form-input"
                            id="house-field"
                            type="number"
                            {...register("houseNumber", {
                                required: "House number is a mandatory field",
                            })}
                        />
                    </label>
                    {errors.houseNumber && <p className="form__error-message">{errors.houseNumber.message}</p>}

                    <label htmlFor="door-field" className="user-registration__form-question">
                        Door:
                        <input
                            className="user-registration__form-input"
                            id="door-field"
                            type="text"
                            {...register("door")}
                        />
                    </label>

                    <label htmlFor="zipcode-field" className="user-registration__form-question">
                        Zip code:
                        <input
                            className="user-registration__form-input"
                            id="zipcode-field"
                            type="text"
                            {...register("zipcode", {
                                required: "Zip code is a mandatory field",
                            })}
                        />
                    </label>
                    {errors.zipcode && <p className="form__error-message">{errors.zipcode.message}</p>}

                    <label htmlFor="city-field" className="user-registration__form-question">
                        City:
                        <input
                            className="user-registration__form-input"
                            id="city-field"
                            type="text"
                            {...register("city", {
                                required: "City is a mandatory field",
                            })}
                        />
                    </label>
                    {errors.city && <p className="form__error-message">{errors.city.message}</p>}

                </div>

                <div className="user-registration__contact user-registration__contact-subset">
                    <label htmlFor="email-field" className="user-registration__form-question">
                        Email:
                        <input
                            className="user-registration__form-input"
                            id="email-field"
                            type="email"
                            {...register("email", {
                                required: "Email is a mandatory field",
                                pattern: {
                                    value: /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                    </label>
                    {errors.email && <p className="form__error-message">{errors.email.message}</p>}

                    <label htmlFor="phone-field" className="user-registration__form-question">
                        Phone:
                        <input
                            className="user-registration__form-input"
                            id="phone-field"
                            type="text"
                            {...register("phone", {
                                required: "Phone number is a mandatory field",
                                pattern: {
                                    value: /^(\+\d{2}\s?|0)\d{9}$/,
                                    message: "Invalid phone number"
                                }
                            })}
                        />
                    </label>
                    {errors.phone && <p className="form__error-message">{errors.phone.message}</p>}
                </div>
            </fieldset>

            <div className="user-registration__buttons">
                <Button
                    type="submit"
                    skin="primary"
                >
                    Register
                </Button>
                <Button
                    onClick={() => {navigate("/")}}
                    skin="secondary"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default UserRegistrationForm;