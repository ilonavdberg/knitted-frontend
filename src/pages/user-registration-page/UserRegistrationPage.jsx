import './UserRegistrationPage.css';

import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import UserRegistrationForm from "@/pages/user-registration-page/sections/UserRegistrationForm.jsx";


function UserRegistrationPage() {
    return (
        <EmptyLayout>
            <h1 className="user-registration__title">Join Our Community of Creators and Buyers</h1>
            <UserRegistrationForm />
        </EmptyLayout>
    );
}

export default UserRegistrationPage;