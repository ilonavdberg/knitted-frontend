import './PageSelector.css';
import LinkButton from "@/components/linkbutton/LinkButton.jsx";

function PageSelector() {
    // TODO: maybe add hasNext and hasPrevious props (make it dumb / reusable)
    return (
        <div className="page-selector">
            <LinkButton to="/" isDisabled={true} >Previous</LinkButton>
            <LinkButton to="/" >Next</LinkButton>
        </div>
    );
}

export default PageSelector;