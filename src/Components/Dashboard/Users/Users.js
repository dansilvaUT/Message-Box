import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/reducers/userReducer';
import User from './User/User';
import axios from 'axios';

const Users = props => {
    const [users, setUsers] = useState([]);

    const { getUsers } = props;

    useEffect(() => {
        axios.get('/api/users/all')
            .then(users => setUsers(users.data))
            .catch(err => console.log(`Error: ${err.message}`));
    }, [getUsers]);

    const mappUsers = list => {

    }

    console.log('uers', users)
    return (
        <section>
            <p>Users Here</p>
        </section>
    )
}

export default connect(null, { getUsers })(Users);