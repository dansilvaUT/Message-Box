import { connect } from 'react-redux';
import Header from '../Header/Header';
import Heading1 from '../Headings/Heading1';
import Heading2 from '../Headings/Heading2';
import LeftArrowIcon from '../Icons/LeftArrowIcon';
import dayjs from 'dayjs';
import './Profile.scss';

const Profile = props => {
    console.log(props)
    const { username, date_joined, email, profile_pic } = props.user;

    const displayMyInfo = () => {
        return (
            <>
                <p>Username: {username}</p>
                {/* TODO: PUT PROFILE PIC HERE */}
                <ul>
                    <li>Member since: {dayjs(date_joined).format('DD/MM/YYYY')}</li>
                    <li>Email: {email}</li>
                </ul>
            </>
        )
    }

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
        <section className="profile-container">
            <Header />
            <section id="main" className="profile-info-container">
                <span id="menu-icon" className="rotated" onClick={() => toggleMenu()}>Menu <LeftArrowIcon /></span>
                <Heading1 text={`Profile for ${username}`} />
                <Heading2 classname='heading2' text='My Info' />
                <section>
                    {displayMyInfo()}
                </section>
            </section>
        </section>
    )
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps)(Profile);