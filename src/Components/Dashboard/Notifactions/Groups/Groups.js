import Heading2 from '../../../Headings/Heading2';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Groups = props => {

    const [groups, setGroups] = useState([]);
    const { user_id } = props;

    useEffect(() => {
        axios.get('/api/groups')
            .then(res => setGroups(res.data))
            .catch(err => {
                console.log(`Error: ${err.message}`);
            })
    }, [user_id]);


    console.log('groups', groups)
    return (
        <section>
            <Heading2 text='Groups' />
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        // user_id: reduxState.userReducer.user.user_id
    }
}

export default connect(mapStateToProps)(Groups);