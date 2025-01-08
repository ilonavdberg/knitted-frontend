import './HomePage.css';
import PageLayout from "../../components/pagelayout/PageLayout.jsx";
import HeroSection from "../../components/hero-section/HeroSection.jsx";
import FeaturedProducts from "../../components/featured-products/FeaturedProducts.jsx";

function HomePage() {
    return (
        <PageLayout>
            <HeroSection />
            <FeaturedProducts />
        </PageLayout>
    );
}

export default HomePage;