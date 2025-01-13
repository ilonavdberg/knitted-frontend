import './ReviewCard.css';
import Avatar from "@/components/avatar/Avatar.jsx";
import RatingStars from "@/components/ratingstars/RatingStars.jsx";

function ReviewCard() {
    return (
        <article className="review-card">
            <header className="review-card__header">
                <Avatar size={96}>
                    <img src="src/assets/images/user_avatar.jpg" alt="user profile picture"/>
                </Avatar>
                <div className="review-card__header-content">
                    <div className="review-card__header-focus">
                        <RatingStars rating={4}/>
                        <h3 className="review-card__title">Review title</h3>
                    </div>
                    <p className="review-card__author">Username | 12-05-2025</p>
                </div>
            </header>
            <section className="review-card__content">
                <h4 className="review-card__product">Reviewed for: product name</h4>
                <p className="review-card__review">Lorem ipsum dolor sit amet. Et dignissimos officiis sit eaque dolorem nam dolor alias! Rem unde velit ex libero pariatur et sequi suscipit et dolorem autem aut omnis omnis. Et laborum dolore ut earum quae qui voluptatem quia et exercitationem quas. Vel eaque corporis aut doloremque aliquam quo harum consequuntur.</p>
            </section>
        </article>
    );
}

export default ReviewCard;