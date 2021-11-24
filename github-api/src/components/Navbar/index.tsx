
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {

    return(
        <>
        <nav className="navbar main-navbar">
           < Link to="/" className="link-main-navbar">
                <h4>Github API</h4>
           </Link>
        </nav>
        </>
    );
}
export default Navbar;