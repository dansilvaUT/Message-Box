const Label = ({ name, text }) => {
    return (
        <label htmlFor={name}>{text}</label >
    )
}

export default Label;