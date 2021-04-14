const TextField = ({ placeholder, type, name, value, func, checked }) => {
    return (
        <>
            <input placeholder={placeholder} type={type} name={name} onChange={func} value={value} checked={checked} />
        </>
    )
}

export default TextField;