import './Button.css'

function Button({ onClick, disabled=false, skin, children }) {
    const classNames = `button ${skin ? `button--${skin}` : 'button--secondary'}`;

    return (
        <button
            className={classNames}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;