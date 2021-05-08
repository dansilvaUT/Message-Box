import Submit from '../../Buttons/Submit';
import TextField from '../../Inputs/TextField';
import SendIcon from '../../Icons/SendIcon';
import './ChatControls.scss';

const ChatControl = props => {
    //console.log('chat controls', props)
    const { messageInput, handleMessageProp, sendMessageProp } = props
    return (
        <section className="chat-controls-container">
            <TextField
                classname='chat-message-field'
                name='message'
                placeholder='Message'
                type='text'
                func={e => handleMessageProp(e)}
                value={messageInput}
            />
            <Submit classname='btn send-message-btn' type='submit' icon={<SendIcon />} func={() => sendMessageProp()} />
        </section>
    )
}

export default ChatControl;