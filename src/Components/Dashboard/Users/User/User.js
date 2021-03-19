import Submit from '../../../Buttons/Submit';
import Chat from '../../../Chat/Chat';
import { Link, Route, Switch } from 'react-router-dom';

const User = ({ user, url }) => {
    // console.log('user', url)
    const openChat = id => {
        return (
            <Link to={`${url}/chat/${id}`}>
                <Submit text={`Start Chat with @${user.username}`} />
            </Link>
        )
    }

    return (
        <article>
            <img src={user.profile_pic} alt={user.username} />
            <p>{user.username}</p>
            <Switch>
                <Route path={`${url}/chat/:id`} component={Chat} />
            </Switch>
            {openChat(user.user_id)}

            <section>

            </section>
        </article>
    )
}

export default User;