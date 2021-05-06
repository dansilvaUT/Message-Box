import './User.scss';

const User = ({ user }) => {
    // console.log('user', url)
    return (
        <article className="user-info-display">
            <img src={user.profile_pic} alt={user.username} />
            <p>@{user.username}</p>
            <span>Invite to a chat?</span>
        </article>
    )
}

export default User;