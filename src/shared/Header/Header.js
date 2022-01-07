import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom border-2 shadow-sm">
            <div className="container">
                <Link to="/home" className='text-decoration-none text-danger fw-bold' >
                    <img src="https://i.ibb.co/25fvcGw/logo.png" alt="" />
                </Link>
                <img className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" src="https://i.ibb.co/TM9Jg4f/menu-icon.png" alt="" style={{ height: "45px" }} />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray' })} to="/home" className="nav-link" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#FC9219' : 'gray',
                            })} to="/products" className="nav-link" aria-current="page" >Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray' })} to="/users" className="nav-link" aria-current="page" >Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#FC9219' : 'gray' })} to="/orders" className="nav-link">
                                Orders
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <Link to="/signup" >
                            <div className="btn btn-sm btn-primary me-2">Sign Up</div>
                        </Link>
                        <Link to="/login" >
                            <div className="btn btn-sm btn-outline-primary">Log In</div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;