import { connect } from 'react-redux';
import Header from '../Header/Header';
import Notifications from './Notifactions/Notifications';
import Submit from '../Buttons/Submit';
import { Switch, Route, Link } from 'react-router-dom';
import Users from './Users/Users';
import UsersIcon from '../Icons/UsersIcon';
import './Dashboard.scss';

const Dashboard = props => {
    // console.log('dash', props)
    return (
        <section className="dashboard">
            <Header />
            <span>click me</span>
            <section className='container dashboard-container'>
                <Notifications />
                <Link to='/dash/users'>
                    <Submit classname='btn search-btn' text='Search Users' icon={<UsersIcon />} />
                </Link>
                <Switch>
                    <Route path='/dash/users' component={Users} />
                </Switch>
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps)(Dashboard);