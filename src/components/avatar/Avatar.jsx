import './Avatar.css';

function Avatar({size = 48, children}) {
    return (
        <div className="avatar" style={{height: `${size}px`, width: `${size}px`}}>
            {children}
        </div>
    );
}

export default Avatar;