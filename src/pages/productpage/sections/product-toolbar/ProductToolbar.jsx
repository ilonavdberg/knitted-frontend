import './ProductToolbar.css';
import Button from "@/components/button/Button.jsx";
import {Trash} from "@phosphor-icons/react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import {useState} from "react";

function ProductToolbar({ product, refresh }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleArchiveProduct() {
        try {
            const response = await axios.put(BASE_URL + `items/${id}/archive`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
            if (response.status === 200) {
                navigate(`/shop/${response.data.shop.id}`);
            }
            console.log(response.data);
        } catch(e) {
            console.error(e);
        }
    }

    async function handlePublishProduct() {
        try {
            const response = await axios.put(BASE_URL + `items/${id}/publish`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
            if (response.status === 200) {
                navigate(`/shop/${response.data.shop.id}`);
            }
        } catch(e) {
            setError(e.response.data)
            console.error(e);
        }
    }

    async function handleUnpublishProduct() {
        try {
            await axios.put(BASE_URL + `items/${id}/unpublish`, {}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
            refresh();
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <header className="product-toolbar">
            <h1 className="product-toolbar__title">Product Preview</h1>
            {product.status === "draft" && (
                <>
                    <div className="product-toolbar__actions">
                        <Button
                            onClick={handlePublishProduct}
                            skin="primary"
                        >
                            Publish
                        </Button>
                        <Button
                            onClick={() => {
                                navigate(`/product/${id}/edit`)
                            }}
                            skin="secondary"
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={handleArchiveProduct}
                            skin="transparent"
                        >
                            <Trash size={32}/>
                        </Button>
                    </div>
                    <div>
                        {error && (
                            <p className="error-message">{error}</p>
                        )}
                    </div>
                </>

            )}
            {product.status === "published" && (
                <div className="product-toolbar__actions">
                    <Button
                        onClick={handleUnpublishProduct}
                    >
                        Unpublish
                    </Button>
                </div>
            )}


        </header>);
}

export default ProductToolbar;