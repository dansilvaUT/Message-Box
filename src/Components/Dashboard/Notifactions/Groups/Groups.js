import Heading2 from '../../../Headings/Heading2';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserGroups } from '../../../../redux/reducers/chatGroupReducer';
import Group from './Group/Group';
import './Groups.scss';

const Groups = props => {

    const { user_id, getUserGroups, groups } = props;

    useEffect(() => {
        getUserGroups(user_id)
    }, [user_id, getUserGroups]);

    const displayChatGroups = list => {
        let groupList = list.map(group => (
            <Group key={group.group_id} groupInfo={group} />
        ))
        return groupList;
    }

    return (
        <section className="groups-container">
            <Heading2 classname='groups-heading' text='My Groups' />
            <section className="group-scroll">
                {displayChatGroups(groups)}
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user.user_id,
        groups: reduxState.chatGroupReducer.groups.data
    }
}

export default connect(mapStateToProps, { getUserGroups })(Groups);