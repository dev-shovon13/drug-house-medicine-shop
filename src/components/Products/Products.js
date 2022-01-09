import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch("https://health-os.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    const handleSearch = e => {
        const searchText = e.target.value
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
    }

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
            <div className="d-flex justify-content-end">
                <input className='form-control mb-4 me-2 search-bar' placeholder='Search Medicine' type="text" onChange={handleSearch} />
                <button className='btn search-icon bg-primary d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faSearch} className='text-white fs-4 ' /></button>
            </div>
            {
                displayProducts.length > 0 ?
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                        {displayProducts.map(product => <Product product={product} key={product._id} />)}
                    </div>
                    :
                    <div className='text-center my-5 pb-5 text-secondary'>
                        <FontAwesomeIcon icon={faSearch} className='mb-4' style={{ fontSize: "70px" }} />
                        <h1> Sorry ! No Results Found</h1>
                    </div>
            }
        </div>
    );
};

export default Products;