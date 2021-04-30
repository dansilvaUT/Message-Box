import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, clearUser } from '../../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
            <span>Welcome {username}</span>
            <Link className='link nav-link' to='/dash'>Dashboard</Link>
            <Link className='link nav-link' to='/profile'>Profile</Link>
            <Link className='link nav-link' to='/' onClick={() => logout()}>Log Out</Link>
        </nav>
    )
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.userReducer.user.username
    }
}

export default connect(mapStateToProps, { getUser, clearUser })(Nav);