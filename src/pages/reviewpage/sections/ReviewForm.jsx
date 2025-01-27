import './ReviewForm.css';
import {Star} from "@phosphor-icons/react";
import {useForm, Controller} from "react-hook-form";
import Button from "@/components/button/Button.jsx";
import {BASE_URL} from "@/utils/UrlBuilder.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function ReviewForm({orderId}) {
    const {register, handleSubmit, control} = useForm();
    const navigate = useNavigate();

    async function handleReviewSubmit(data) {
        //TODO: change 1 to orderId
        console.log(data);
        console.log(orderId);
        try {
            const response = await axios.post(`${BASE_URL}orders/${14}/review`, data);
            console.log(response);
            navigate(-1);
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <form className="review__form">
            <fieldset className="review-form__subset">
                <legend className="review-form__subset-title">How would you rate this product?</legend>
                <p>Please give us a rating from 1 to 5 stars based on your experience.</p>
                <Controller
                    name="rating"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => (
                        <div>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => field.onChange(star)}
                                    style={{ cursor: 'pointer' }}
                                >
                            {star <= field.value ? <Star size={32} weight="fill"/> : <Star size={32}/>}
                        </span>
                            ))}
                        </div>
                    )}
                />
            </fieldset>

            <fieldset  className="review-form__subset">
                <legend className="review-form__subset-title">We&#39;d love to hear your thoughts!</legend>
                <p>Your feedback is valuable! Please tell the us about your experience with the product.</p>
                <label className="review-form__question" htmlFor="review-title-field">
                    Title:
                    <input
                        id="review-title-field"
                        type="text"
                        {...register("title")}
                    />
                </label>
                <label className="review-form__question" htmlFor="review-comment-field">
                    Comment:
                    <textarea
                        id=""
                        cols="30"
                        rows="10"
                        {...register("comment")}
                    >
                    </textarea>
                </label>
            </fieldset>
            <div className="review-form__buttons">
                <Button
                    onClick={handleSubmit(handleReviewSubmit)}
                    skin="primary"
                >
                    Submit Review
                </Button>
                <Button>
                    Cancel
                </Button>
            </div>
        </form>
    );
}

export default ReviewForm;