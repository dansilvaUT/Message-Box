import Submit from '../../Buttons/Submit';
import TextField from '../../Inputs/TextField';
import { useState } from 'react';

const ChatControl = props => {
    console.log('chat controls', props)
    const { messageInput, handleMessageProp, sendMessageProp } = props
    return (
        <section>
            <TextField
                name='message'
                placeholder='Message'
                type='text'
                func={e => handleMessageProp(e)}
                value={messageInput}
            />
            <Submit text='Send' func={() => sendMessageProp()} />
        </section>
    )
}

export default ChatControl;