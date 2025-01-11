import './LinkButton.css';

import { useNavigate } from 'react-router-dom';

function LinkButton({ to, isSelected=false, isDisabled = false, children }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={ () => !isDisabled && navigate({to})}
            disabled={isDisabled}
            className={`link-button ${isDisabled && "link-button--disabled"} ${isSelected && "link-button--selected"}`}
        >
            {children}
        </button>
    );
}

export default LinkButton;