import ChatControls from './ChatControls/ChatControls';
import io from 'socket.io-client';
import React, { Component } from 'react';
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
        console.log(this.state.messages)
        const { user_id } = this.props;
        return (
            <section>
                <div className="messages-container">
                    {this.state.messages.map(m => (
                        <section key={m.chat_id}>
                            {user_id === m.user_id
                                ?
                                <article className="chat-message-info">
                                    <p className="owner-chat-message">{m.message}</p>
                                    <span className="owner-name">@{m.username}</span>
                                </article>
                                :
                                <article className="chat-message-info">
                                    <p className="chat-message">{m.message}</p>
                                    <span className="owner-name">@{m.username}</span>
                                </article>

                            }
                        </section>
                    ))}
                    <div ref={this.messageEnd} />
                </div >
                <ChatControls handleMessageProp={this.handleMessageInput} messageInput={this.state.message} sendMessageProp={this.sendMessage} />
            </section >
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user.user_id,
        group: reduxState.chatGroupReducer.group
    }
}

export default connect(mapStateToProps)(Chats);