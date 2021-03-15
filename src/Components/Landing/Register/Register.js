import { useState } from 'react';
import axios from 'axios';

const Register = ({ push }) => {

    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        verPassword: ''

    });

    const handleFormChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const register = e => {
        e.preventDefault();
        const { email, username, password } = user;
        axios.post('/api/register', { username, email, password })
            .then(user => push('/profile'))
            .catch(err => console.log(`Error: ${err.response.request.response}`))
    }
    // console.log('regiser user', user)
    return (
        <form onSubmit={e => register(e)}>
            <h3>Register</h3>
            <input type='text' value={user.email} name='email' placeholder='Email' onChange={e => handleFormChange(e)} />
            <input type='text' value={user.username} name='username' placeholder='Username' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.password} name='password' placeholder='Password' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.verPassword} name='verPassword' placeholder='Verify Password' onChange={e => handleFormChange(e)} />
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default Register;