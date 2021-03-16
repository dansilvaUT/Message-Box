import { connect } from 'react-redux';
import Header from '../Header/Header';

const Dashboard = props => {
    // console.log('dash', props)
    return (
        <section>
            <Header />
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps)(Dashboard);