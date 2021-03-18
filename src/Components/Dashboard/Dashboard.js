import { connect } from 'react-redux';
import Header from '../Header/Header';
import Notifications from './Notifactions/Notifications';
import Submit from '../Buttons/Submit';
import { Switch, Route, Link } from 'react-router-dom';
import Users from './Users/Users';
import './Dashboard.scss';

const Dashboard = props => {
    // console.log('dash', props)
    return (
        <>

            <Header />
            <section className='container dashboard-container'>
                <Notifications />
                <Link to='/dash/users'>
                    <Submit text='Search Users' />
                </Link>
                <section>
                    <Switch>
                        <Route path='/dash/users' component={Users} />
                    </Switch>
                </section>
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