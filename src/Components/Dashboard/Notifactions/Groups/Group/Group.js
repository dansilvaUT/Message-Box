import { Link } from 'react-router-dom';
import ChatIcon from '../../../../Icons/ChatIcon';
import './Group.scss';

const Group = ({ groupInfo }) => {
    // console.log('rop', groupInfo)
    return (
        <section className="group-container">
            <span id="group-name">{groupInfo.name}</span>
            <Link className="link group-link" to={`/chat/${groupInfo.group_id}`}>
                <ChatIcon />
            </Link>
        </section>
    )
}

export default Group;