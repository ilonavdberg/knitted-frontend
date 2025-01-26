import './MyAccountPage.css';
import PageLayout from "@/components/pagelayout/PageLayout.jsx";
import AccountHeader from "@/pages/my-account-page/sections/account-header/AccountHeader.jsx";
import CustomerDetails from "@/pages/my-account-page/sections/customerdetails/CustomerDetails.jsx";
import OrderHistory from "@/pages/my-account-page/sections/orderhistory/OrderHistory.jsx";
import axios from "axios";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import {useEffect, useState} from "react";

function MyAccountPage() {
    const [customer, setCustomer] = useState({});

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
        console.log(customer);
    }, [])

    return (
        <PageLayout>
            {console.log(customer)}
            <AccountHeader />
            <CustomerDetails />
            <OrderHistory />
        </PageLayout>
    );
}

export default MyAccountPage;