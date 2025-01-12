import './ProductToolbar.css';
import Button from "@/components/button/Button.jsx";
import {Trash} from "@phosphor-icons/react";

function ProductToolbar() {
    return (
        <header className="product-toolbar">
            <h1 className="product-toolbar__title">Product Preview</h1>
            <div className="product-toolbar__actions">
                <Button skin="primary" >Publish</Button>
                <Button>Edit</Button>
                <Button skin="transparent">
                    <Trash size={32} />
                </Button>
            </div>

        </header>);
}

export default ProductToolbar;