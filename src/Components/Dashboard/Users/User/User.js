import Chat from '../../../Chat/Chat';
import { Link, BrowserRouter } from 'react-router-dom';
import { ModalContainer, ModalRoute } from 'react-router-modal';

const User = ({ user, url }) => {
    // console.log('user', url)
    return (
        <article>
            <img src={user.profile_pic} alt={user.username} />
            <p>{user.username}</p>
            <BrowserRouter>
                <Link to={`${url}/chat/${user.user_id}`}>show foo</Link>
                <ModalRoute component={Chat} path={`${url}/chat/:id`} className='test-modal test-modal-foo' />
                <ModalContainer />
            </BrowserRouter>
        </article>
    )
}

export default User;