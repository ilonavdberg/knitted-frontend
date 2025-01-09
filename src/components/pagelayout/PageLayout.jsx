import './PageLayout.css'
import NavBar from "../navbar/NavBar.jsx";
import Footer from "../footer/Footer.jsx";

function PageLayout({ children }) {
    return (
        <body className="page">
            <NavBar />
            <main className="page__content">{children}</main>
            <Footer />
        </body>
    );
}

export default PageLayout;