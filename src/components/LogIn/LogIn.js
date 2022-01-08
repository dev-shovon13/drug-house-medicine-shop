import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './LogIn.css'

const LogIn = () => {
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        navigate("/home")
    }
    return (
        <div className="log-in-bg py-4 text-center">
            <Helmet>
                <title>Login | Drug House</title>
                <meta name="This is the login page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <div className="container mb-5">
                <div className="bg-white rounded shadow p-5 pb-2 g-4 w-75 mx-auto log-sign">
                    <NavLink to="/home" className="text-decoration-none text-info">
                        <img src="https://i.ibb.co/25fvcGw/logo.png" alt="" className="log-sign-logo mb-3" />
                    </NavLink>                    
                    <div className="row align-items-center">
                        <div className="login-form col-12 col-lg-6 pt-2 pt-lg-0">
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <input type="text" value="01811000000" className="form-control" placeholder="Phone" />
                                </div>
                                <div className="mb-3">
                                    <input value="123456" type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="mb-3 text-start">
                                    <NavLink to="/login" className="text-decoration-none text-info">Forgot Password ?</NavLink>
                                </div>
                                <button className="btn btn-primary w-100"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Log In</button>
                            </form>
                            <div className="border-top mt-2">
                                <p className="my-0 text-secondary fw-bold">or</p>
                                <p className="mt-0 text-secondary">Log In with any of these Accounts</p>
                                <div className="d-flex gap-2 justify-content-center">
                                    <img src="https://i.ibb.co/1QLtLwg/google.png" alt="" style={{ height: "45px" }} className="me-2 border rounded-circle p-1 shadow fs-icon" />
                                    <FontAwesomeIcon icon={faGithub} className="me-2 border rounded-circle p-2 shadow fs-icon" />
                                    <FontAwesomeIcon icon={faTwitter} className="icon-twitter me-2 border rounded-circle p-2 shadow fs-icon" />
                                    <FontAwesomeIcon icon={faFacebook} className="icon-facebook me-2 border rounded-circle p-2 shadow fs-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 login-img">
                            <img src="https://i.ibb.co/JHfkkJw/login.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <p className="text-secondary pt-3">New Member ? <NavLink to="/signup" className="text-decoration-none"><span className="text-info fw-bold">Register</span></NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;