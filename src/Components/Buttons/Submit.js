const Button = ({ text, func, classname, type }) => <button type={type} className={classname} onClick={func}>{text}</button>;
export default Button;