import './Button.css';

function Button({ onClick, disabled=false, type="button", skin, children }) {
    const classNames = `button ${skin ? `button--${skin}` : 'button--secondary'}`;

    return (
        <button
            className={classNames}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;