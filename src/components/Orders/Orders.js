import { useEffect, useState } from 'react';
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-lg-2 g-3">
                {orders.map(order => <Order order={order} key={order._id} />)}
            </div>
        </div>
    );
};

export default Orders;