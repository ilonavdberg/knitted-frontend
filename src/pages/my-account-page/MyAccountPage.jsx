import './MyAccountPage.css';

import axios from "axios";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/UrlBuilder.js";

import PageLayout from "@/components/pagelayout/PageLayout.jsx";
import AccountHeader from "@/pages/my-account-page/sections/account-header/AccountHeader.jsx";
import CustomerDetails from "@/pages/my-account-page/sections/customerdetails/CustomerDetails.jsx";
import OrderHistory from "@/pages/my-account-page/sections/orderhistory/OrderHistory.jsx";


function MyAccountPage() {
    const [customer, setCustomer] = useState({});
    const [orders, setOrders] = useState({});

    useEffect(() => {
        async function fetchCustomerDetails() {
            try {
                const response = await axios.get(`${BASE_URL}customer`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    }});
                setCustomer(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        void fetchCustomerDetails();

        async function fetchOrderHistory() {
            try {
                const response = await axios.get(`${BASE_URL}customer/orders`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    }
                })
                console.log(response.data);
                setOrders(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        void fetchOrderHistory();

    }, [])

    return (
        <PageLayout>
            {console.log("token: ", localStorage.getItem("token"))}
            <AccountHeader
                username={customer.username}
                shopId={customer.shopId}
                shopName={customer.shopName}
            />
            <CustomerDetails
                customer={customer}
            />
            <OrderHistory
                orders={orders}
            />
        </PageLayout>
    );
}

export default MyAccountPage;