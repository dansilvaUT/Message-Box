const Button = ({ text, func, classname, type, icon }) => {
    return (
        <button
            type={type}
            className={classname}
            onClick={func}>
            {text} {icon}
        </button>
    )
};

export default Button;