import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Drug House</title>
                <meta name="This is the home page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <Banner/>
        </>
    );
};

export default Home;