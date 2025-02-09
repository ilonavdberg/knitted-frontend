import './ReviewForm.css';

import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Star } from "@phosphor-icons/react";
import { BASE_URL } from "@/utils/UrlBuilder.js";

import Button from "@/components/button/Button.jsx";


function ReviewForm({orderId}) {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();

    async function handleReviewSubmit(data) {
        console.log(data);
        console.log(orderId);
        try {
            const response = await axios.post(`${BASE_URL}orders/${orderId}/review`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
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
                    rules={{
                        required: "Rating is required",
                    }}
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
                {errors.rating && <p className="form__error-message">{errors.rating.message}</p>}
            </fieldset>

            <fieldset  className="review-form__subset">
                <legend className="review-form__subset-title">We&#39;d love to hear your thoughts!</legend>
                <p>Your feedback is valuable! Please tell the us about your experience with the product.</p>
                <label className="review-form__question" htmlFor="review-title-field">
                    Title:
                    <input
                        id="review-title-field"
                        type="text"
                        {...register("title", {
                            required: "Review title is a mandatory field",
                            minLength: {
                                value: 6,
                                message: "Review title must be at least 6 characters"
                            },
                            maxLength: {
                                value: 50,
                                message: "Review title cannot exceed 50 characters"
                            },
                        })}
                    />
                </label>
                {errors.title && <p className="form__error-message">{errors.title.message}</p>}

                <label className="review-form__question" htmlFor="review-comment-field">
                    Comment:
                    <textarea
                        id=""
                        cols="30"
                        rows="10"
                        {...register("comment", {
                            maxLength: {
                                value: 500,
                                message: "Review comment cannot exceed 500 characters"
                            }
                        })}
                    >
                    </textarea>
                </label>
                {errors.comment && <p className="form__error-message">{errors.comment.message}</p>}
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