import Submit from '../Buttons/Submit';
import Chats from './Chats';
import { getGroupInfo } from '../../redux/reducers/chatGroupReducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import './Chat.scss';

const Chat = props => {

    const { goBack } = props.history;
    const { id } = props.match.params;
    const { getGroupInfo } = props;

    useEffect(() => {
        axios.get(`/api/group/${+id}`)
            .then(group => getGroupInfo(group.data))
            .catch(err => console.log(`Error: ${err.message}`));
    }, [id, getGroupInfo])
    // console.log('chat ', props)

 
    return (
        <>
            <section className='chat-container'>
                <Submit text='Close Chat' func={goBack} />
                <Chats />
            </section>
        </>

    )
}

export default connect(null, { getGroupInfo })(Chat);