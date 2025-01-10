import './HomePage.css';

import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import HeroSection from "./sections/hero-section/HeroSection.jsx";
import FeaturedProducts from "./sections/featured-products/FeaturedProducts.jsx";
import StartSellingSection from "./sections/start-selling-section/StartSellingSection.jsx";
import MissionSection from "./sections/mission-section/MissionSection.jsx";


function HomePage() {
    return (
        <PageLayout>
            <HeroSection />
            <FeaturedProducts />
            <StartSellingSection />
            <MissionSection />
        </PageLayout>
    );
}

export default HomePage;