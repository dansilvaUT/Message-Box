import TextField from '../../Inputs/TextField';
import { useState } from 'react';
import Submit from '../../Buttons/Submit';
import Label from '../../Label/Label';

const StartChat = () => {

    const [chatName, setChatName] = useState('');
    const [isPrivate, setPrivate] = useState(false);

    const handleInputChange = e => {
        setChatName(e.target.value)
    }

    const handleCheckBoxChange = e => {
        setPrivate(e.target.checked)
    }

    // console.log('is it private',isPrivate)

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
                name='isPrivate'
                func={e => handleCheckBoxChange(e)}
            />
        </section>
    )
}

export default StartChat;