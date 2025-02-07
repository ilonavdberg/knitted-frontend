import './AccountHeader.css';
import Button from "@/components/button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

function AccountHeader({ username, shopId, shopName }) {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <header className="account-header">
            <h1 className="account-header__title">My Account</h1>
            <div className="account-header__account-buttons">
                <Button
                    onClick={() => navigate("/under-construction")}
                    skin="primary"
                >
                    Edit
                </Button>
                <Button
                    onClick={logout}
                    skin="secondary"
                >
                    Logout
                </Button>
            </div>
            <div className="account-header__user">
                <p className="account-header__username">Username: {username}</p>
                {shopName && (<p className="account-header__shopname">Shop: {shopName}</p>)}
            </div>

            <div>
                {shopName ? (
                    <Button
                        onClick={() => {navigate(`/shop/${shopId}`)}}
                    >
                        Go to my shop
                    </Button>
                ) : (
                    <Button
                        onClick={() => {navigate("/user/shop/register")}}
                    >
                        Open a shop
                    </Button>
                )}

            </div>
        </header>);
}

export default AccountHeader;