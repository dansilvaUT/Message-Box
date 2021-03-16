import ChatRequests from './ChatRequests/ChatRequests';
import Groups from './Groups/Groups';
import './Notifications.scss';

const Notifications = () => {
    return (
        <section className='notifications-container'>
            <ChatRequests />
            <Groups />
        </section>
    )
}

export default Notifications;