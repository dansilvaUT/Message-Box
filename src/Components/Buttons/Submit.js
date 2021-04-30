const Button = ({ text, func, classname }) => <button className={classname} onClick={func}>{text}</button>;
export default Button;