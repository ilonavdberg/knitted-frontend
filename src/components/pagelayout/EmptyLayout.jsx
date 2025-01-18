import './PageLayout.css';
import Logo from "@/components/logo/Logo.jsx";


function EmptyLayout({ children }) {
    return (
        <div className="page">
            <main className="page__content">{children}</main>
            <footer className="footer__logo"><Logo /></footer>
        </div>
    );
}

export default EmptyLayout;