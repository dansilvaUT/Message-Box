import { connect } from 'react-redux';

const Profile = props => {
    console.log(props)
    return (
        <>Profile</>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps)(Profile);