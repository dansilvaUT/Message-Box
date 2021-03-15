import { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Landing = ({ history: { push } }) => {
    const [registeredView, setRegisteredView] = useState(false);

    const toggleView = () => {
        setRegisteredView(!registeredView);
    }

    return (
        <section>
            <h1>Message Box!</h1>
            <h3>A place where you can just chat, literally...</h3>
            {registeredView
                ?
                <>
                    <Register push={push} />
                    <p>Already have an account? Login <span onClick={() => toggleView()}>Here</span></p>
                </>

                :
                <>
                    <Login push={push} />
                    <p>Don't have an account? Register <span onClick={() => toggleView()}>Here</span></p>
                </>

            }


        </section>
    )
}

export default Landing;