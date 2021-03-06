import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom border-2 shadow-sm">
            <div className="container">
                <Link to="/home" >
                    <img src="https://i.ibb.co/25fvcGw/logo.png" alt="logo" />
                </Link>
                <img className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" src="https://i.ibb.co/TM9Jg4f/menu-icon.png" alt="" style={{ height: "45px" }} />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray', fontWeight: isActive ? '700' : '400' })} to="/home" className="nav-link" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray', fontWeight: isActive ? '700' : '400' })} to="/dashboard" className="nav-link" aria-current="page" >Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray', fontWeight: isActive ? '700' : '400' })} to="/products" className="nav-link" aria-current="page" >Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray', fontWeight: isActive ? '700' : '400' })} to="/users" className="nav-link" aria-current="page" >Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray', fontWeight: isActive ? '700' : '400' })} to="/orders" className="nav-link">
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <Link to="/signup" >
                            <div className="btn signup-btn me-2">Sign Up</div>
                        </Link>
                        <Link to="/login" >
                            <div className="btn login-btn"><FontAwesomeIcon className='me-1' icon={faSignInAlt} />Log In</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;