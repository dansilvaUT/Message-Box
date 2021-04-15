import { Link } from 'react-router-dom';

const Group = ({ groupInfo }) => {
    // console.log('rop', groupInfo)
    return (
        <section>
            <p>{groupInfo.name}</p>
            <span>{groupInfo.username}</span>
            <Link to={`/chat/${groupInfo.group_id}`}>
                Open Chat
            </Link>
        </section>
    )
}

export default Group;