import Submit from '../Buttons/Submit';
import Chats from './Chats';
import io from 'socket.io-client';
import { useState } from 'react';
import './Chat.scss';

const Chat = props => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const { goBack } = props.history;
    // socket.on('room joined', data => {
    //     this.joinSuccess(data);
    // })

    console.log('chat controls', props)
    return (
        <>
            <section className='chat-container'>
                <Submit text='Close Chat' func={goBack} />
                <Chats />
            </section>
        </>

    )
}

export default Chat;