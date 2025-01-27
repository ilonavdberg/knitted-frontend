import './ShopRegistrationPage.css';
import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import ShopRegistrationForm from "@/pages/shop-registration-page/sections/ShopRegistrationForm.jsx";

function ShopRegistrationPage() {
    return (
        <EmptyLayout>
            <h1 className="shop-registration__title">Create Your Shop and Start Selling Your Knits</h1>
            <ShopRegistrationForm />
        </EmptyLayout>
    );
}

export default ShopRegistrationPage;