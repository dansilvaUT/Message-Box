import Submit from '../../Buttons/Submit';
import TextField from '../../Inputs/TextField';
import { useState } from 'react';

const ChatControl = () => {
    const [message, setMessage] = useState('');

    const handleMessageInput = e => {
        setMessage(e.target.value)
    }

    return (
        <section>
            <TextField
                name='message'
                placeholder='Message'
                type='text'
                func={e => handleMessageInput(e)}
                value={message}
            />
            <Submit text='Send' />
        </section>
    )
}

export default ChatControl;