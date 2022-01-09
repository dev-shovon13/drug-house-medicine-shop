import{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../shared/Spinner';
import Product from './Product';

const LimitedProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const size = 8
    const items = products?.slice(0, size)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    if (products.length === 0) {
        return <Spinner />
    }

    return (
        <div className="py-5">
            <div className="container">
                <ToastContainer theme="colored" />
                <div className="header text-center">Our Products</div>
                <hr className='mt-0 mb-4 shadow'/>
                <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {
                        items?.map(product => <Product key={product._id} product={product} />)
                    }
                </div>
                <div className="py-5 text-center">
                    <Link to="/products">
                        <button onClick={scrollToTop} className="btn px-5 text-white see-more-btn rounded-pill">
                            See All Products
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LimitedProduct;