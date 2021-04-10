const TextField = ({ placeholder, type, name, value, func }) => {
    return (
        <>
            <input placeholder={placeholder} type={type} name={name} onChange={func} value={value} />
        </>
    )
}

export default TextField;