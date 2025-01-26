import './AccountHeader.css';
import Button from "@/components/button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "@/context/AuthContext.jsx";

function AccountHeader() {
    const { logout } = useContext(AuthContext);

    return (
        <header className="account-header">
            <h1 className="account-header__title">My Account</h1>
            <div className="account-header__account-buttons">
                <Button
                    skin="primary"
                >
                    Edit
                </Button>
                <Button
                    skin="secondary"
                    onClick={logout}
                >
                    Logout
                </Button>
            </div>
            <div className="account-header__user">
                <p>Username: Maelynder</p>
                <p>Shop: shop name</p>
            </div>
            <div>
                <Button>
                    Go to my shop
                </Button>
            </div>
        </header>);
}

export default AccountHeader;