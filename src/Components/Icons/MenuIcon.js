import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from '../Header/MobileNav/MobileNav';
import './IconStyles/IconStyles.scss';

const MenuIcon = () => {

    const [toggle, setToggle] = useState(false);

    const showMenu = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <span className="menu-bars">
                <FontAwesomeIcon icon={faBars} onClick={() => showMenu()} />
            </span>
            {toggle
                ?
                <MobileNav />
                :
                null
            }
        </>
    )
}

export default MenuIcon;
