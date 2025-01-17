import './ReviewCard.css';
import Avatar from "@/components/avatar/Avatar.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";

import userAvatar from '@/assets/images/user_avatar.jpg';

function ReviewCard({ title, rating, review, date, item}) {
    return (
        <article className="review-card">
            <header className="review-card__header">
                <Avatar size={96}>
                    <img src={userAvatar} alt="user profile picture"/>
                </Avatar>
                <div className="review-card__header-content">
                    <div className="review-card__header-focus">
                        <RatingStars rating={rating}/>
                        <h3 className="review-card__title">{title}</h3>
                    </div>
                    <p className="review-card__author">{`Username | ${date}`}</p>
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