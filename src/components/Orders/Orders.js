import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [displayOrders, setDisplayOrders] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setDisplayOrders(data)
            })
    }, [])

    const handleSearch = e => {
        const searchText = e.target.value
        const matchedOrder = orders.filter(order => order._id.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayOrders(matchedOrder)
    }

    if (orders.length === 0) {
        return <div className="text-center w-75 mx-auto"><img src="https://i.ibb.co/FwncvXn/spinner.gif" alt="" className="img-fluid" /></div>
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Orders | Drug House</title>
                <meta name="This is the order page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <div className="d-flex justify-content-end">
                <input className='form-control mb-4 me-2 search-bar' placeholder='Search Order by Order ID' type="text" onChange={handleSearch} />
                <button className='btn search-icon bg-primary d-flex justify-content-center align-items-center'><FontAwesomeIcon icon={faSearch} className='text-white fs-4 ' /></button>
            </div>
            {
                displayOrders.length > 0 ?
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                        {displayOrders.map(order => <Order order={order} key={order._id} />)}
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

export default Orders;