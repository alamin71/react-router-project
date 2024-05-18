import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <span>This is my website</span><br></br>
                <Link to="/">Home</Link>
               <Link to="/about">About me</Link>
                <Link to="/contact">Contact me</Link>
                <Link to="/users">Users</Link>
            </nav>
            
        </div>
    );
};

export default Header;