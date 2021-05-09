import TextField from '../../Inputs/TextField';
import { useState } from 'react';
import Submit from '../../Buttons/Submit';
import Label from '../../Label/Label';
import axios from 'axios';
import { connect } from 'react-redux';
import './StartChat.scss';

const StartChat = props => {

    const [chatName, setChatName] = useState('');
    const [isPrivate, setPrivate] = useState(false);
    const { user_id } = props;

    const handleInputChange = e => {
        setChatName(e.target.value)
    }

    const handleCheckBoxChange = e => {
        setPrivate(e.target.checked)
    }

    const addGroup = (owner, name, privateGroup) => {
        axios.post('/api/group/create', { owner, name, privateGroup })
            .then(() => console.log('Success'))
            .catch(err => console.log(`Error: ${err.message}`));
    }
    // console.log('is it private', props)
    //TODO after group is added display it immediatly on groups(window.reload)?
    return (
        <section className="chat-name-container">
            <TextField
                classname='chat-name-field'
                placeholder='Group or Chat name?'
                type='text'
                name='chatName'
                func={e => handleInputChange(e)}
                value={chatName}
            />
            <Submit classname='btn add-group-btn' type='submit' text='Add Name' func={() => addGroup(user_id, chatName, isPrivate)} />
            <Label
                classname='private-label'
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

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user.user_id
    }
}

export default connect(mapStateToProps)(StartChat);