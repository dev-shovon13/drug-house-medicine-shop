import { Helmet } from 'react-helmet';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Drug House</title>
                <meta name="This is the home page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <Products />
        </>
    );
};

export default Home;