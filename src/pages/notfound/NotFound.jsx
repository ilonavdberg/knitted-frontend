import './NotFound.css';

import {Link} from "react-router-dom";

import PageLayout from "../../components/pagelayout/PageLayout.jsx";


function NotFound() {
    return (
        <PageLayout>
            <div className="not-found">
                <h2 className="not-found__error-code">404</h2>
                <h1 className="not-found__title">Oops! Nothing was found</h1>
                <p className="not-found__text">The page you are looking for might have been removed, had its name changed or is temporarily
                    unavailable.</p>
                <p className="not-found__text">Return to <Link to="/" className="not-found__link-homepage" >Homepage</Link></p>
            </div>
        </PageLayout>
    );
}

export default NotFound;