import './PageSelector.css';
import LinkButton from "@/components/linkbutton/LinkButton.jsx";

function PageSelector({ isFirstPage, isLastPage }) {
    // TODO: maybe add hasNext and hasPrevious props (make it dumb / reusable)
    return (
        <div className="page-selector">
            <LinkButton
                onClick={previousPage}
                disabled={isFirstPage}
            >
                Previous
            </LinkButton>
            <LinkButton
                onClick={nextPage}
                disabled={isLastPage}
            >
                Next
            </LinkButton>
        </div>
    );
}

export default PageSelector;