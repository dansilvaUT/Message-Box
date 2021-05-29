import { connect } from 'react-redux';
import Header from '../Header/Header';
import Notifications from './Notifactions/Notifications';
import Submit from '../Buttons/Submit';
import { Switch, Route, Link } from 'react-router-dom';
import Users from './Users/Users';
import UsersIcon from '../Icons/UsersIcon';
import LeftArrowIcon from '../Icons/LeftArrowIcon';
import Heading1 from '../Headings/Heading1';
import './Dashboard.scss';

const Dashboard = props => {
    // console.log('dash', props)

    const toggleMenu = () => {
        const nav = document.getElementById("myNav");
        const main = document.getElementById("main");
        if (nav.className === 'header') {
            nav.className = 'header-toggle';
            main.style.marginLeft = '150px';
        } else {
            nav.className = 'header';
            main.style.marginLeft = '0';
        }
    }
    return (
        <section className="dashboard">
            <Header />
            <section id="main" className='container dashboard-container'>
                    <span id="menu-icon" className="rotated" onClick={() => toggleMenu()}>Menu <LeftArrowIcon /></span>
                    <Heading1 text='My Dashboard'/>
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