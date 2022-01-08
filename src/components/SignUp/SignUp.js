import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './SignUp.css'


const SignUp = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/home")
    }
    return (
        <div className="sign-up-bg text-center">
            <Helmet>
                <title>SignUp | Drug House</title>
                <meta name="This is the signup page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <div className="container py-4">
                <div className="bg-white rounded shadow p-4 g-4 w-75 mx-auto log-sign">
                    <NavLink to="/home" className="text-decoration-none text-info">
                        <img src="https://i.ibb.co/25fvcGw/logo.png" alt="" className="log-sign-logo mb-3" />
                    </NavLink>
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6">
                            <img src="https://i.ibb.co/CWFwjTw/signup.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 d-flex ">
                                    <input type="text" className="form-control" placeholder="Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Email / Phone" required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="mb-3 form-check text-start">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label text-secondary">I accept the <NavLink to="/signup" className="text-decoration-none text-info">Terms of Use</NavLink> & <NavLink to="/signup" className="text-decoration-none text-info">Privacy Policy</NavLink></label>
                                </div>
                                <button className="btn btn-primary w-100"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Submit</button>
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
                    </div>
                    <p className="text-secondary pt-2 mb-0">Already have an Account ? <NavLink to="/login" className="text-decoration-none"><span className="text-info fw-bold">Log In</span></NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;