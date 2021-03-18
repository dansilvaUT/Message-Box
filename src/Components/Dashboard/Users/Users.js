import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/reducers/userReducer';
import User from './User/User';
import axios from 'axios';
import Submit from '../../Buttons/Submit';
import './Users.scss';

const Users = props => {
    const [users, setUsers] = useState([]);

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

    console.log('users component', props);
    return (
        <section className='users-container'>
            <Submit text='Close' func={goBack} />
            {mapUsers(users)}
        </section>
    )
}

export default connect(null, { getUsers })(Users);