import './ReviewPage.css';
import EmptyLayout from "@/components/pagelayout/EmptyLayout.jsx";
import ReviewForm from "@/pages/reviewpage/sections/ReviewForm.jsx";
import {useLocation} from "react-router-dom";

function ReviewPage() {
    const location = useLocation();
    const { orderId } = location.state || {};

    return (
        <EmptyLayout>
            <h1 className="review-page__title">Help Others With Your Review!</h1>
            <ReviewForm
                orderId={orderId}
            />
        </EmptyLayout>
    );
}

export default ReviewPage;