import './OrderHistory.css';
import OrderCard from "@/components/ordercard/OrderCard.jsx";

function OrderHistory() {
    return (
        <section className="order-history">
            <h2 className="order-history__title">Order History</h2>
            <div>
                <OrderCard />
            </div>
        </section>
    );
}

export default OrderHistory;