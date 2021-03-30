import Submit from '../Buttons/Submit';
import Chats from './Chats';
import Header from '../Header/Header';
import './Chat.scss';

const Chat = props => {
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