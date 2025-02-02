import './ReviewCard.css';
import Avatar from "@/components/avatar/Avatar.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";
import {generateImage} from "@/utils/ImageUtils.js";

function ReviewCard({ title, rating, review, date, item, username, userPicture}) {
    return (
        <article className="review-card">
            <header className="review-card__header">
                <Avatar size={96}>
                    <img src={generateImage(userPicture?.base64Image, userPicture?.extension)} alt="user profile picture"/>
                </Avatar>
                <div className="review-card__header-content">
                    <div className="review-card__header-focus">
                        <RatingStars rating={rating}/>
                        <h3 className="review-card__title">{title}</h3>
                    </div>
                    <p className="review-card__author">{`${username} | ${date}`}</p>
                </div>
            </header>
            <section className="review-card__content">
                <h4 className="review-card__product">{`Reviewed for: ${item}`}</h4>
                <p className="review-card__review">{review}</p>
            </section>
        </article>
    );
}

export default ReviewCard;