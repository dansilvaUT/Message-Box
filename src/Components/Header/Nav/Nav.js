import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, clearUser } from '../../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DashboardIcon from '../../Icons/DashboardIcon';
import ProfileIcon from '../../Icons/ProfileIcon';
import LogoutIcon from '../../Icons/LogoutIcon';
import './Nav.scss';

const Nav = props => {
    const { getUser, username, clearUser } = props;
    useEffect(() => {
        axios.get('/api/auth/me')
            .then(user => getUser(user.data))
    }, [getUser]);

    const logout = () => {
        axios.post('/api/logout')
            .then(() => clearUser())
            .catch(err => console.log(`Error: ${err.message}`));
    }
    return (
        <nav className='navbar'>
            <span id="header-welcome">Welcome<span id="header-username"> @{username}</span></span>
            <Link className='link nav-link' to='/dash'>Dashboard <DashboardIcon /></Link>
            <Link className='link nav-link' to='/profile'>Profile <ProfileIcon /></Link>
            <Link className='link nav-link' to='/' onClick={() => logout()}>Log Out <LogoutIcon /></Link>
        </nav>
    )
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.userReducer.user.username
    }
}

export default connect(mapStateToProps, { getUser, clearUser })(Nav);