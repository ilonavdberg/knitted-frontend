import './LoginForm.css';
import {useForm} from "react-hook-form";
import Button from "@/components/button/Button.jsx";
import {Link} from "react-router-dom";

function LoginForm() {
    const { register, handleSubmit } = useForm();

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
                            {...register("username")}
                        />
                    </label>
                    <label className="login-form__question" htmlFor="password-field">
                        Password:
                        <input
                            id="password-field"
                            type="password"
                            {...register("password")}
                        />
                    </label>
                </fieldset>
                <div className="login-form__buttons">
                    <Button skin="primary">
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