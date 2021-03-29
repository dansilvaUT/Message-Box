import { Link,} from 'react-router-dom';

const User = ({ user, url }) => {
    // console.log('user', url)
    return (
        <article>
            <img src={user.profile_pic} alt={user.username} />
            <Link to={`/chat/${user.user_id}`}>
                Chat with {user.username}
            </Link>
        </article>
    )
}

export default User;