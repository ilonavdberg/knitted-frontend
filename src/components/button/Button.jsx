import './Button.css'

function Button({text, className}) {
    //TODO: add onClick property

    return (
        <button
            className={className}
        >
            {text}
        </button>
    );
}

export default Button;