import './MyAccountPage.css';
import PageLayout from "@/components/pagelayout/PageLayout.jsx";
import AccountHeader from "@/pages/my-account-page/sections/account-header/AccountHeader.jsx";
import CustomerDetails from "@/pages/my-account-page/sections/customerdetails/CustomerDetails.jsx";
import OrderHistory from "@/pages/my-account-page/sections/orderhistory/OrderHistory.jsx";

function MyAccountPage() {
    return (
        <PageLayout>
            <AccountHeader />
            <CustomerDetails />
            <OrderHistory />
        </PageLayout>
    );
}

export default MyAccountPage;