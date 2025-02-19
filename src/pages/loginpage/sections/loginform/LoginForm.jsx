import './LoginForm.css';

import axios from "axios";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { BASE_URL } from "@/utils/UrlBuilder.js";
import { AuthContext } from "@/context/AuthContext.jsx";

import Button from "@/components/button/Button.jsx";


function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { isAuthenticated, login } = useContext(AuthContext);

    async function handleUserLogin(data) {
        try {
            const response = await axios.post(`${BASE_URL}auth/login`, data);
            const token = response.headers.authorization.replace('Bearer ', '');
            const shopId = response.data.shopId || null;
            console.log("shopId received from backend: ", response.data.shopId)
            login(token, shopId);

        } catch(e) {
            console.error("Error during login: ", e);
        }
    }

    useEffect(() => {
        // handle navigation after logging in
        if (isAuthenticated) {
            const prevPage = localStorage.getItem("prevPage");
            console.log("previous page: ", prevPage);

            if (prevPage === "/user/register") {
                localStorage.removeItem("prevPage");
                navigate("/");
            } else {
                navigate(-1);
            }
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <form className="login-form">
                <fieldset className="login-form__fieldset">
                    <legend className="login-form__fieldset-title">Login</legend>
                    <label className="login-form__question" htmlFor="username-field">
                        Username:
                        <input
                            id="username-field"
                            type="text"
                            {...register("username", {
                                required: "Please enter your username",
                            })}
                        />
                    </label>
                    {errors.username && <p className="form__error-message">{errors.username.message}</p>}

                    <label className="login-form__question" htmlFor="password-field">
                        Password:
                        <input
                            id="password-field"
                            type="password"
                            {...register("password", {
                                required: "Please enter your password",
                            })}
                        />
                    </label>
                    {errors.password && <p className="form__error-message">{errors.password.message}</p>}
                </fieldset>

                <div className="login-form__buttons">
                    <Button
                        onClick={handleSubmit(handleUserLogin)}
                        skin="primary"
                    >
                        Login
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </div>
            </form>
            <p>Don&#39;t have an account yet? <Link to="/user/register" className="login-form__link">Sign up
                now</Link> to join our community!</p>
        </>

    )
}

export default LoginForm;