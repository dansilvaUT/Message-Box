import { useState } from 'react';
import axios from 'axios';

const Login = ({ push }) => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleFormChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const login = e => {
        e.preventDefault();
        const { username, password } = user;
        axios.post('/api/login', { username, password })
            .then(user => push('/dash'))
            .catch(err => console.log(`Error: ${err.response.request.response}`))
    }

    return (
        <form onSubmit={(e) => login(e)}>
            <h3>Login</h3>
            <input type='text' value={user.username} name='username' placeholder='Username' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.password} name='password' placeholder='Password' onChange={e => handleFormChange(e)} />
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;