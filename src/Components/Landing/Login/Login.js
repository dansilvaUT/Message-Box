import { useState } from 'react'
const Login = () => {

    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        verPassword: ''

    });

    const handleFormChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    console.log(user)
    return (
        <>

            <input type='text' value={user.email} name='email' placeholder='Email' onChange={e => handleFormChange(e)} />
            <input type='text' value={user.username} name='username' placeholder='Username' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.password} name='password' placeholder='Password' onChange={e => handleFormChange(e)} />
            <input type='password' value={user.verPassword} name='verPassword' placeholder='Verify Password' onChange={e => handleFormChange(e)} />
            <button>Login</button>
            <button>Sign Up</button>

        </>
    )
}

export default Login;