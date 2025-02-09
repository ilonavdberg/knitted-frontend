import './LoginPage.css';

import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import LoginForm from "@/pages/loginpage/sections/loginform/LoginForm.jsx";


function LoginPage() {
    return (
        <EmptyLayout>
            <h1 className="login-page__title">Sign in to Your Account</h1>
            <LoginForm />
        </EmptyLayout>
    )
}

export default LoginPage;