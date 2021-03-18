import Submit from '../../../Buttons/Submit';
import Chat from '../../../Chat/Chat';
import { Link, Route, Switch } from 'react-router-dom';

const User = ({ user, url }) => {
    console.log('user', url)
    return (
        <article>
            <img src={user.profile_pic} alt={user.username} />
            <p>{user.username}</p>
            <Link to={`${url}/${user.user_id}`}>
                <Submit text='Start Chat' />
            </Link>

            <section>
                <Switch>
                    <Route path={`${url}/:id`} component={Chat} />
                </Switch>
            </section>
        </article>
    )
}

export default User;