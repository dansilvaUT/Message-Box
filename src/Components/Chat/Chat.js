import ChatControls from './ChatControls/ChatControls';
import Submit from '../Buttons/Submit';
import Chats from './Chats';
import './Chat.scss';

const Chat = props => {
    const { goBack } = props.history;
    console.log('chat controls', props)
    return (
        <section className='chat-container'>
            <Submit text='Close Chat' func={goBack} />
            <Chats/>
            
        </section>
    )
}

export default Chat;