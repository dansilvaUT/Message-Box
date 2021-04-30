const TextField = ({ placeholder, type, name, value, func, checked, classname }) => {
    return (
        <>
            <input className={classname} placeholder={placeholder} type={type} name={name} onChange={func} value={value} checked={checked} />
        </>
    )
}

export default TextField;