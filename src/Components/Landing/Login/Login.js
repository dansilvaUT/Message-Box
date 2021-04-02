import { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/reducers/userReducer';
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
            <input type='text' value={user.username} name='username' placeholder='Username' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.password} name='password' placeholder='Password' onChange={e => handleFormChange(e)} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default connect(null, { getUser })(Login);