const Label = ({ name, text, classname }) => {
    return (
        <label className={classname} htmlFor={name}>{text}</label >
    )
}

export default Label;