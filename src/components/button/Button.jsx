import './Button.css'

function Button({ skin, children }) {
    const classNames = `button ${skin ? `button--${skin}` : 'button--secondary'}`

    function handleClick(textInput) {
        console.log(textInput);
    }

    return (
        <button
            className={classNames}
            type="button"
            onClick={() => handleClick(children)} >
            {children}
        </button>
    )
}

export default Button;