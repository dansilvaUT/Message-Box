import ChatControls from './ChatControls/ChatControls';
import io from 'socket.io-client';
import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux';
import './Chats.scss';


class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: ''
        }
        this.messageEnd = React.createRef();
    }

    componentDidMount() {
        this.socket = io();
        this.socket.on('room joined', data => {
            this.joinSuccess(data);
        });

        this.socket.on('message dispatched', data => {
            this.updateMessages(data);
        })

        this.joinRoom();
    }

    componentWillUnmount() {
        this.socket.disconnect()
    }

    scrollToBottom = () => {
        this.messageEnd.current.scrollIntoView();
    }

    joinRoom = async () => {
        this.socket.emit('join room', {
            group_id: this.props.group[0].group_id
        })
    }

    joinSuccess(messages) {
        this.setState({
            messages
        })
        this.scrollToBottom();
    }

    handleMessageInput = (e) => {
        this.setState({ message: e.target.value })
    }

    sendMessage = () => {
        this.socket.emit('message sent', {
            group_id: this.props.group[0].group_id,
            user_id: this.props.user_id,
            message: this.state.message
        })

        this.setState({ message: '' })
    }

    updateMessages = (messages) => {
        this.setState({
            messages
        })
        this.scrollToBottom();
    }
    render() {
        return (
            <section>
                <div className="messages-container">
                    {this.state.messages.map(m => (
                        <p>{m.message}</p>
                    ))}
                    <div ref={this.messageEnd} />
                </div >
                <ChatControls handleMessageProp={this.handleMessageInput} messageInput={this.state.message} sendMessageProp={this.sendMessage} />
            </section>
        )
    }
}

// const Chats = props => {

//     const [message, setMessage] = useState('');
//     const [messages, setMessages] = useState([]);

//     const socket = io.connect();
//     const { user_id } = props;
//     const { group_id } = props.group[0];



//     useEffect(() => {

//         socket.on('room joined', data => {
//             joinSuccess(data);
//         });
//         socket.on('message dispatched', data => {
//             getMessages(data);
//         });

//         joinRoom();

//         return () => {
//             socket.disconnect();
//         }
//     }, [socket]);


//     const handleMessageInput = e => {
//         setMessage(e.target.value)
//     }

//     const joinSuccess = messages => {
//         setMessages(messages)
//     }

//     const sendMessage = () => {
//         socket.emit('message sent', {
//             group_id,
//             user_id,
//             message
//         });
//         setMessage('');
//     }

//     const getMessages = messages => {
//         setMessages(messages)
//     }
//     const joinRoom = async () => {
//         socket.emit('join room', {
//             group_id
//         })
//     }

//     console.log('chats', messages);
//     return (
// <section>
//     <div className="messages-container">
//         {messages.map(m => (
//             <p>{m.message}</p>
//         ))}
//     </div>
//     <ChatControls handleMessageProp={handleMessageInput} messageInput={message} sendMessageProp={sendMessage} />
// </section>
//     )
// }

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user.user_id,
        group: reduxState.chatGroupReducer.group
    }
}

export default connect(mapStateToProps)(Chats);