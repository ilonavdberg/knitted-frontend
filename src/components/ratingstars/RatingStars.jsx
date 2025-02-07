import './RatingStars.css';

import { Star } from "@phosphor-icons/react";


function RatingStars({ rating, size = 32 }) {
    rating = Math.round(rating);

    const ratingArray = Array.from({ length: 5 }, (_, i) => i < rating);

    return (
        <div className="ratingStars" >
            {ratingArray.map((isFilled, i) => (
                <span key={i}>{isFilled ? <Star size={size} weight="fill" /> : <Star size={size} />}</span>
            ))}
        </div>
    );
}

export default RatingStars;