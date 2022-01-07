import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    if (orders.length === 0) {
        return <div className="text-center w-75 mx-auto"><img src="https://i.ibb.co/FwncvXn/spinner.gif" alt="" className="img-fluid" /></div>
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Orders | Drug House</title>
                <meta name="This is the order page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <div className="row row-cols-1 row-cols-lg-2 g-3">
                {orders.map(order => <Order order={order} key={order._id} />)}
            </div>
        </div>
    );
};

export default Orders;