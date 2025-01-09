import './StartSellingSection.css';

import knittedSeller from '@/assets/images/knitting_seller.jpg';
import knitting from '@/assets/images/knitting_action.jpg';
import Button from "@/components/button/Button.jsx";

function StartSellingSection() {
    return (
        <section className="start-selling-section">
            <div className="start-selling-section__content">
                <h2 className="start-selling-section__title">Join our community of talented artisans and start selling
                    your handmade creations today</h2>
                <p className="start-selling-section__paragraph">Whether you create as a hobby or as a business, our
                    platform helps you reach a community of passionate buyers who appreciate the time and care you put
                    into each piece</p>
                <div className="start-selling-section__buttons">
                    <Button skin="primary-inversed">
                        Start selling
                    </Button>
                    <Button skin="secondary-inversed">
                        Learn more
                    </Button>
                </div>
            </div>
            <div className="start-selling-section__image">
                <img src={knittedSeller} alt="photo of a seller"/>
                <div className="start-selling-section__image-overlay"></div>
            </div>
            <div className="start-selling-section__image">
                <img src={knitting} alt="photo of someone knitting"/>
            </div>
        </section>
    );
}

export default StartSellingSection;