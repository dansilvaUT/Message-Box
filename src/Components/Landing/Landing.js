import { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Heading1 from '../Headings/Heading1';
import Heading2 from '../Headings/Heading2';
import './Landing.scss';

const Landing = ({ history: { push } }) => {
    const [registeredView, setRegisteredView] = useState(false);

    const toggleView = () => {
        setRegisteredView(!registeredView);
    }

    return (
        <section className='landing-container'>
            <Heading1 text='Message Box!'/>
            <Heading2 text='A place where you can just chat, literally...'/>
            {registeredView
                ?
                <>
                    <Heading2 text='Register' />
                    <Register push={push} />
                    <p>Already have an account? Login <span className="toggle-landing-view"onClick={() => toggleView()}>Here</span></p>
                </>

                :
                <>
                    <Heading2 text='Login' />
                    <Login push={push} />
                    <p>Don't have an account? Register <span className="toggle-landing-view"onClick={() => toggleView()}>Here</span></p>
                </>
            }
        </section>
    )
}

export default Landing;
