import ChatControls from './ChatControls/ChatControls';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Chats.scss';

const Chats = props => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = io.connect();
    const { user_id } = props;
    const { group_id } = props.group[0];

    useEffect(() => {
        socket.on('room joined', data => {
            joinSuccess(data);
        });
        socket.on('message dispatched', data => {
            getMessages(data);
        });

        joinRoom();
    }, [socket]);

    const handleMessageInput = e => {
        setMessage(e.target.value)
    }

    const joinSuccess = messages => {
        setMessages(messages)
    }

    const sendMessage = () => {
        socket.emit('message sent', {
            group_id,
            user_id,
            message
        });
    }

    const getMessages = messages => {
        setMessages(messages)
    }

    const joinRoom = async () => {
        socket.emit('join room', {
            group_id
        })
    }

    console.log('chats', messages);
    return (
        <section>
            <div className="messages-container">
                {messages.map(m => (
                    <p>{m.message}</p>
                ))}
            </div>
            <ChatControls handleMessageProp={handleMessageInput} messageInput={message} sendMessageProp={sendMessage} />
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user.user_id,
        group: reduxState.chatGroupReducer.group
    }
}

export default connect(mapStateToProps)(Chats);