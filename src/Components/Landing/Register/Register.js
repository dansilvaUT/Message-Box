import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/reducers/userReducer';
import './Register.scss';

const Register = props => {

    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        verPassword: ''

    });

    const { push, getUser } = props;
    const handleFormChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const register = e => {
        e.preventDefault();
        const { email, username, password } = user;
        axios.post('/api/register', { username, email, password })
            .then(user => {
                getUser(user.data);
                push('/profile');
            })
            .catch(err => console.log(`Error: ${err.response.request.response}`))
    }
    // console.log('regiser user', user)
    return (
        <form className="form" onSubmit={e => register(e)}>
            <input type='text' value={user.email} name='email' placeholder='Email' onChange={e => handleFormChange(e)} />
            <input type='text' value={user.username} name='username' placeholder='Username' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.password} name='password' placeholder='Password' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.verPassword} name='verPassword' placeholder='Verify Password' onChange={e => handleFormChange(e)} />
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default connect(null, { getUser })(Register);