import TextField from '../../Inputs/TextField';
import { useState } from 'react';
import Submit from '../../Buttons/Submit';
import Label from '../../Label/Label';

const StartChat = () => {

    const [chatName, setChatName] = useState('');

    const handleInputChange = e => {
        setChatName(e.target.value)
    }

    console.log(chatName)

    return (
        <section className="chat-name-container">
            <TextField
                placeholder='Group or Chat name?'
                type='text'
                name='chatName'
                func={e => handleInputChange(e)}
                value={chatName}
            />
            <Submit text='Add Name' />
            <Label
                name='isPrivate'
                text='Private' />
            <TextField
                type='checkbox'
                name='private'
            />
        </section>
    )
}

export default StartChat;