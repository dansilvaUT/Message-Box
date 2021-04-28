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
    useEffect(() => {

    }, []);

    const handleMessageInput = e => {
        setMessage(e.target.value)
    }

    // socket.on('room joined', data => {
    //     this.joinSuccess(data);
    // });

    const sendMessage = () => {
        socket.emit('message sent', {
            group_id: props.group.group_id,
            user_id,
            message
        });
    }

    console.log('chats', props);
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