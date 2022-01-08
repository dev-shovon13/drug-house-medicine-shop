import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import LimitedProduct from '../Products/LimitedProduct';
import Review from '../Review/Review';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Drug House</title>
                <meta name="This is the home page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <Banner/>
            <LimitedProduct/>
            <WhyUs/>
            <Review/>
        </>
    );
};

export default Home;