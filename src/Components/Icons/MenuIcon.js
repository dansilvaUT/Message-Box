import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './IconStyles/IconStyles.scss';

const MenuIcon = () => {
    return (
        <>
            <FontAwesomeIcon className="menu-bars" icon={faBars} onClick={()=> alert('Hi')}/>
        </>
    )
}

export default MenuIcon;
