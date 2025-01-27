import './OrderHistory.css';
import OrderCard from "@/components/ordercard/OrderCard.jsx";

function OrderHistory({ orders }) {
    if (!orders) {
        return <p>Loading...</p>;
    }

    return (
        <section className="order-history">
            <h2 className="order-history__title">Order History</h2>
            {orders.length > 0 ? (
                <div>
                    {orders.map(order => {
                        return <OrderCard
                            key={order.id}
                            id={order.id}
                            date={order.createdDate}
                            productName={order.soldItem.title}
                            productPhoto={order.soldItem.itemPhoto}
                            price={order.soldItem.price}
                            shopName={order.soldItem.shopName}
                        />
                    })}
                </div>
            ) : (
                <p>It looks like your order history is empty. Explore the marketplace to find something you&#39;ll love!</p>
            )
            }
        </section>
    );
}

export default OrderHistory;