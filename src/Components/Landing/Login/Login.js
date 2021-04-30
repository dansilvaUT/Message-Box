import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/reducers/userReducer';
import TextField from '../../Inputs/TextField';
import Submit from '../../Buttons/Submit';
import './Login.scss';

const Login = props => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const { getUser, push } = props;

    const handleFormChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const login = e => {
        e.preventDefault();
        const { username, password } = user;
        axios.post('/api/login', { username, password })
            .then(user => {
                getUser(user.data);
                push('/dash');
            })
            .catch(err => console.log(`Error: ${err.response.request.response}`))
    }

    return (
        <form className="form" onSubmit={(e) => login(e)}>
            <TextField classname='input landing-input' type='text' value={user.username} name='username' placeholder='Username' func={e => handleFormChange(e)} />
            <TextField classname='input landing-input' type='password' value={user.password} name='password' placeholder='Password' func={e => handleFormChange(e)} />
            <Submit classname="btn login-btn" type='submit' text='Login' />
        </form>
    )
}

export default connect(null, { getUser })(Login);