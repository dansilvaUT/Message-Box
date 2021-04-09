import Submit from '../Buttons/Submit';
import Chats from './Chats';
import Header from '../Header/Header';
import io from 'socket.io-client';
import { useState } from 'react';
import './Chat.scss';

const Chat = props => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [group, setGroup] = useState('');
    
    const { goBack } = props.history;
    // console.log('chat controls', props)
    return (
        <>
            <Header />
            <section className='chat-container'>
                <Submit text='Close Chat' func={goBack} />
                <Chats />
            </section>
        </>

    )
}

export default Chat;