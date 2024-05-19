import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>This is my website</span><br></br>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact me</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;