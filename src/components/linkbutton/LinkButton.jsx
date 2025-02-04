import './LinkButton.css';


function LinkButton({ onClick, disabled = false, selected=false, children }) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`link-button ${disabled && "link-button--disabled"} ${selected && "link-button--selected"}`}
        >
            {children}
        </button>
    );
}

export default LinkButton;