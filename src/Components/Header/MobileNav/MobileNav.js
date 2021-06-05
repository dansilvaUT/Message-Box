import { connect } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '../../Icons/DashboardIcon';
import { getUser, clearUser } from '../../../redux/reducers/userReducer';
import LogoutIcon from '../../Icons/LogoutIcon';
import ProfileIcon from '../../Icons/ProfileIcon';
import axios from 'axios';
import './MobileNav.scss';

const MobileNav = props => {

    const { username, getUser, clearUser } = props
    useEffect(() => {
        axios.get('/api/auth/me')
            .then(user => getUser(user.data));
    }, [getUser]);

    const logout = () => {
        axios.post('/api/logout')
            .then(() => clearUser())
            .catch(err => console.log(`Error: ${err.message}`));
    }
    
    return (
        <nav className='mobile-navbar'>
            <span id="mobile-header-welcome">Logged In as<span id="header-username"> @{username}</span></span>
            <Link className='link mobile-nav-link' to='/dash'>Dashboard <DashboardIcon /></Link>
            <Link className='link mobile-nav-link' to='/profile'>Profile <ProfileIcon /></Link>
            <Link className='link mobile-nav-link' to='/' onClick={() => logout()}>Log Out <LogoutIcon /></Link>
        </nav>
    )
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.userReducer.user.username
    }
}

export default connect(mapStateToProps, { clearUser, getUser })(MobileNav);