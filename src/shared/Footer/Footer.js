import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="border-top border-2 bg-gradiant">
            <div className="d-md-flex justify-content-between align-items-center container">
                <p className="p-3 text-dark ">©2022 DRUG HOUSE. All rights reserved.</p>
                <div className="d-flex justify-content-center pb-3 pb-md-0">
                    <FontAwesomeIcon icon={faTwitter} className="fa-social-icon icon-1 fs-3 me-3" />
                    <FontAwesomeIcon icon={faFacebook} className="fa-social-icon icon-2 fs-3 me-3" />
                    <FontAwesomeIcon icon={faInstagram} className="fa-social-icon icon-3 fs-3 me-3" />
                    <FontAwesomeIcon icon={faLinkedin} className="fa-social-icon icon-4 fs-3 me-3" />
                    <FontAwesomeIcon icon={faYoutube} className="fa-social-icon icon-5 fs-3" />
                </div>
            </div>
        </div>
    );
};

export default Footer;