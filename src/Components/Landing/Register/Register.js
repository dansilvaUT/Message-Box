import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/reducers/userReducer';
import TextField from '../../Inputs/TextField';
import Submit from '../../Buttons/Submit';
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
            <TextField classname='input landing-input' type='text' value={user.email} name='email' placeholder='Email' func={e => handleFormChange(e)} />
            <TextField classname='input landing-input' type='text' value={user.username} name='username' placeholder='Username' func={e => handleFormChange(e)}/>
            <TextField classname='input landing-input' type='password' value={user.password} name='password' placeholder='Password' func={e => handleFormChange(e)}/>
            <TextField classname='input landing-input' type='password' value={user.verPassword} name='verPassword' placeholder='Verify Password' func={e => handleFormChange(e)}/>
            <Submit classname="btn login-btn" type='submit' text='Sign Up' />
        </form>
    )
}

export default connect(null, { getUser })(Register);