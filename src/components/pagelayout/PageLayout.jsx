import './PageLayout.css'
import NavBar from "../navbar/NavBar.jsx";

function PageLayout({ children }) {
    return (
        <body className="page">
            <NavBar></NavBar>
            <main className="page__content">{children}</main>
            {/*Footer*/}
        </body>
    );
}

export default PageLayout;