import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/reducers/userReducer';
import User from './User/User';
import axios from 'axios';
import Submit from '../../Buttons/Submit';
import StartChat from '../../Chat/StartChat/StartChat';
import CloseIcon from '../../Icons/CloseIcon';
import CreateIcon from '../../Icons/CreateIcon';
import './Users.scss';

const Users = props => {
    const [users, setUsers] = useState([]);
    const [chat, setChat] = useState(false);

    const { getUsers } = props;
    const { goBack } = props.history;
    const { url } = props.match;

    useEffect(() => {
        axios.get('/api/users/all')
            .then(users => setUsers(users.data))
            .catch(err => console.log(`Error: ${err.message}`));
    }, [getUsers]);

    const mapUsers = list => {

        return list.map(user => (
            <User key={user.user_id} user={user} url={url} />

        ));
    }

    const toggleCreate = () => {
        setChat(!chat);
    }
    // console.log('users component', props);
    return (
        <section>
            <section className="users-controls">
                <Submit classname='btn close-btn' icon={<CloseIcon />} type='submit' text='Close' func={goBack} />
                <Submit classname='btn add-btn' icon={<CreateIcon />} text='Create A Chat' func={() => toggleCreate()} />
            </section>
            <section>
                {chat
                    ?
                    <StartChat />
                    :
                    null
                }
            </section>
            <section className='users-container'>
                {mapUsers(users)}
            </section>
        </section>
    )
}

export default connect(null, { getUsers })(Users);