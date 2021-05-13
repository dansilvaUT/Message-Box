import { connect } from 'react-redux';
import Header from '../Header/Header';

const Profile = props => {
    console.log(props)
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

export default connect(mapStateToProps)(Profile);