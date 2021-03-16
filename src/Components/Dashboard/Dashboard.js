import { connect } from 'react-redux';
import Header from '../Header/Header';
import './Dashboard.scss';

const Dashboard = props => {
    // console.log('dash', props)
    return (
        <>
            <Header />
            <section className='container dashboard-container'>
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