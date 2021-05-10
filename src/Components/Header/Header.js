import Nav from './Nav/Nav';
import './Header.scss';

const Header = props => {
    return (
        <header id="myNav" className='header'>
            <Nav id="nav-component" />
        </header>
    )
}

export default Header;