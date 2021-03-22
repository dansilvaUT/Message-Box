import ChatControls from './ChatControls/ChatControls';
import Submit from '../Buttons/Submit';
import './Chat.scss';

const Chat = props => {
    const { goBack } = props.history;
    console.log('chat controls', props)
    return (
        <section className='chat-container'>
            <p>{props.location.pathname}</p>
            <Submit text='Close Chat' func={goBack} />
            <ChatControls />
        </section>
    )
}

export default Chat;