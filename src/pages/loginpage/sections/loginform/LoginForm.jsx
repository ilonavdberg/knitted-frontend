import './LoginForm.css';
import {useForm} from "react-hook-form";
import Button from "@/components/button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import {useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext.jsx";

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { isAuthenticated, login, setShopId } = useContext(AuthContext);

    async function handleUserLogin(data) {
        try {
            const response = await axios.post(`${BASE_URL}auth/login`, data);
            const token = response.headers.authorization.replace('Bearer ', '');
            login(token);

            const shopId = response.data.shopId;
            setShopId(shopId);

        } catch(e) {
            console.error("Error during login: ", e);
        }
    }

    useEffect(() => {
        // handle navigation after logging in
        if (isAuthenticated) {
            const prevPage = location.state?.from;

            if (prevPage === "/user/register") {
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