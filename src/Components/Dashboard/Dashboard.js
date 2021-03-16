import { connect } from 'react-redux';
import Header from '../Header/Header';
import Notifications from './Notifactions/Notifications';
import './Dashboard.scss';

const Dashboard = props => {
    // console.log('dash', props)
    return (
        <>
            <Header />
            <section className='container dashboard-container'>
                <Notifications />
            </section>
        </>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps)(Dashboard);