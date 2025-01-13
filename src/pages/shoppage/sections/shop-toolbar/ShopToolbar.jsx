import './ShopToolbar.css';
import Button from "@/components/button/Button.jsx";

function ShopToolbar() {
    return (
        <header className="shop-toolbar">
            <h1 className="shop-toolbar__title">My Shop</h1>
            <div className="shop-toolbar__actions">
                <Button skin="primary">Edit</Button>
                <Button>Close Shop</Button>
            </div>
        </header>
    );
}

export default ShopToolbar;