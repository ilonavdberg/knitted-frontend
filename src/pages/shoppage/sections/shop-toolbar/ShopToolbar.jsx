import './ShopToolbar.css';
import Button from "@/components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function ShopToolbar() {
    const navigate = useNavigate();

    return (
        <header className="shop-toolbar">
            <h1 className="shop-toolbar__title">My Shop</h1>
            <div className="shop-toolbar__actions">
                <Button
                    onClick={() => navigate("/under-construction")}
                    skin="primary"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => navigate("/under-construction")}
                >
                    Close Shop
                </Button>
            </div>
        </header>
    );
}

export default ShopToolbar;