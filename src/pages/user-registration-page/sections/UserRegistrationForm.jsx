import './UserRegistrationForm.css';
import {useForm} from "react-hook-form";
import Button from "@/components/button/Button.jsx";

function UserRegistrationForm() {
    const { register, handleSubmit } = useForm();
    
    
    return (
        <form className="user-registration__form">
            <fieldset className="user-registration__form-subset">
                <legend className="user-registration__form-subset-title">User account details</legend>
                <label htmlFor="username-field" className="user-registration__form-question">
                    Username:
                    <input
                        className="user-registration__form-input"
                        id="username-field"
                        type="text"
                        {...register("username")}
                    />
                </label>
                <label htmlFor="password-field" className="user-registration__form-question">
                    Password:
                    <input
                        className="user-registration__form-input"
                        id="password-field"
                        type="password"
                        {...register("password")}
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
                            {...register("firstName")}
                        />
                    </label>
                    <label htmlFor="last-name-field" className="user-registration__form-question">
                        Last name:
                        <input
                            className="user-registration__form-input"
                            id="last-name-field"
                            type="text"
                            {...register("lastName")}
                        />
                    </label>
                </div>

                <div className="user-registration__address user-registration__contact-subset">
                    <label htmlFor="street-field" className="user-registration__form-question">
                        Street:
                        <input
                            className="user-registration__form-input"
                            id="street-field"
                            type="text"
                            {...register("street")}
                        />
                    </label>
                    <label htmlFor="house-field" className="user-registration__form-question">
                        House number:
                        <input
                            className="user-registration__form-input"
                            id="house-field"
                            type="number"
                            {...register("houseNumber")}
                        />
                    </label>
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
                            {...register("zipcode")}
                        />
                    </label>
                    <label htmlFor="city-field" className="user-registration__form-question">
                        City:
                        <input
                            className="user-registration__form-input"
                            id="city-field"
                            type="text"
                            {...register("city")}
                        />
                    </label>
                </div>

                <div className="user-registration__contact user-registration__contact-subset">
                    <label htmlFor="email-field" className="user-registration__form-question">
                        Email:
                        <input
                            className="user-registration__form-input"
                            id="email-field"
                            type="email"
                            {...register("email")}
                        />
                    </label>
                    <label htmlFor="phone-field" className="user-registration__form-question">
                        Phone:
                        <input
                            className="user-registration__form-input"
                            id="phone-field"
                            type="text"
                            {...register("phone")}
                        />
                    </label>
                </div>
            </fieldset>
            <div className="user-registration__buttons">
                <Button skin="primary">
                    Register
                </Button>
                <Button>
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default UserRegistrationForm;