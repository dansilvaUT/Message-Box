import Nav from './Nav/Nav';
import LeftArrowIcon from '../Icons/LeftArrowIcon';
import './Header.scss';

const Header = props => {

    const toggleMenu = () => {
        const nav = document.getElementById("myNav");

        if (nav.className === 'header') {
            nav.className = 'header-toggle'
        } else {
            nav.className = 'header'
        }
    }

    return (
        <header id="myNav" className='header'>
            <span id="menu-icon" onClick={() => toggleMenu()}>Menu <LeftArrowIcon /></span>
            <Nav id="nav-component" />
        </header>
    )
}

export default Header;