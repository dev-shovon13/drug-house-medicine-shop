import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import Product from './Product';
import NoResult from '../../shared/NoResult';
import Spinner from '../../shared/Spinner';
import SearchBar from '../../shared/SearchBar';

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
        return <Spinner />
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Products | Drug House</title>
                <meta name="This is the product page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <ToastContainer theme="colored" />
            <SearchBar handleSearch={handleSearch} props={"Medicine"} />
            {
                displayProducts.length > 0 ?
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                        {displayProducts.map(product => <Product product={product} key={product._id} />)}
                    </div>
                    :
                    <NoResult />
            }
        </div>
    );
};

export default Products;