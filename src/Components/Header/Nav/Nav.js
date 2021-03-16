import { Link } from 'react-router-dom';

const Nav = props => {
    return (
        <>
            <nav>
                <Link>Dashboard</Link>
                <Link>Profile</Link>
                <Link>Messegers</Link>
                <Link>Log Out</Link>
            </nav>
        </>
    )
}

export default Nav;