import './HeroSection.css';
import {Link} from "react-router-dom";

function HeroSection() {
    return (
        <section className="hero-section">
            <h1 className="hero-section__title">Shop beautifully crafted items from independent artisans</h1>
            <Link to='/product-catalog' className="hero-section__link">Shop now</Link>
        </section>
    )
}

export default HeroSection;