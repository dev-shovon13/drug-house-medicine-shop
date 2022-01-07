import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if (products.length === 0) {
        return <div className="text-center w-75 mx-auto"><img src="https://i.ibb.co/FwncvXn/spinner.gif" alt="" className="img-fluid" /></div>
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Products | Drug House</title>
                <meta name="This is the product page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                {products.map(product => <Product product={product} key={product._id} />)}
            </div>
        </div>
    );
};

export default Products;