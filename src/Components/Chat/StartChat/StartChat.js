import TextField from '../../TextField/TextField';
import { useState } from 'react';

const StartChat = () => {

    const [chatName, setChatName] = useState('');

    const handleInputChange = e => {
        setChatName(e.target.value)
    }

    console.log(chatName)

    return (
        <section>
            <TextField
                placeholder='Group or Chat name?'
                type='text'
                name='chatName'
                func={e => handleInputChange(e)}
                value={chatName}
            />
        </section>
    )
}

export default StartChat;