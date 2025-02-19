import './OrderConfirmationPage.css';

import { useNavigate, useParams } from "react-router-dom";

import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import Button from "@/components/button/Button.jsx";


function OrderConfirmationPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <EmptyLayout>
            <div className="order-confirmation__details">
                <h1 className="order-confirmation__heading">Thank you for your order</h1>
                <p className="order-confirmation__text">Your order with number #{id} is successfully completed</p>
                <div className="order-confirmation__actions">
                    <Button
                        onClick={() => navigate("/user/account")}
                        skin="primary"
                    >
                        Go to your orders
                    </Button>
                    <Button
                        onClick={() => {navigate("/")}}
                        skin="secondary"
                    >
                        Go to homepage
                    </Button>
                </div>
            </div>
        </EmptyLayout>
    );
}

export default OrderConfirmationPage;