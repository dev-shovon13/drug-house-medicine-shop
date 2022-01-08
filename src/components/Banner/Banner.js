import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="bg-white pb-5">
            <div className='container py-5'>
                <div className="row row-cols-1 row-cols-md-2 align-items-center">
                    <div className="col">
                        <h1 className='title w-50'>Online Pharmacy</h1>
                        <h5 className=''><Typewriter
                            words={['Medicine at your Door Step', "Best Medicine, Best Rate", "Giving your Health a new Lift"]}
                            loop={20}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h5>
                        <p className='sub-header text-secondary'>Drug House has successfully leveraged its leadership position in pharmacy business in Bangladesh. As industry leaders, we recognize the importance of the pharmacy services we provide and believe that we must be at the forefront when it comes to the introduction of new services and the expansion of the scope of practice for pharmacists. The business has been serving the nation with genuine product and excellent customer care for more than 45 years.</p>
                        <div className="d-flex my-4">
                            <div className="px-4 btn banner-btn-1 rounded-pill me-3 text-white">More Details</div>
                            <div className="px-4 btn banner-btn-2 rounded-pill">View Demo</div>
                        </div>
                    </div>
                    <div className="col text-end">
                        <img src="https://i.ibb.co/MfYBhD6/banner.png" alt="" className='banner img-fluid animate__animated animate__backInRight' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;