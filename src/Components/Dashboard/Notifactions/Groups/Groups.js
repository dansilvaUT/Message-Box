import Heading2 from '../../../Headings/Heading2';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Group from './Group/Group';

const Groups = props => {

    const [groups, setGroups] = useState([]);
    const { user_id } = props;

    useEffect(() => {
        axios.get(`/api/groups/${user_id}`)
            .then(res => setGroups(res.data))
            .catch(err => {
                console.log(`Error: ${err.message}`);
            })
    }, [user_id]);

    const displayChatGroups = list => {
        let groupList = list.map(group => (
            <Group key={group.group_id} groupInfo={group} />
        ))
        return groupList;
    }

    // console.log('groups', groups)
    return (
        <section>
            <Heading2 text='My Groups' />
            {displayChatGroups(groups)}
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user.user_id
    }
}

export default connect(mapStateToProps)(Groups);