import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Spinner from '../../shared/Spinner';
import Order from '../Orders/Order';

const Dashboard = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
    // filtering order status 
    function accepted(event) {
        return event.status === "Accepted";
    }
    function pending(event) {
        return event.status === "Pending";
    }
    function shipped(event) {
        return event.status === "Shipped";
    }
    const showAccepted = orders.filter(accepted)
    const showPending = orders.filter(pending)
    const showShipped = orders.filter(shipped)



    // spinner
    if (orders.length === 0) {
        return <Spinner />
    }

    const filtering = (filter) => {
        return (
            <div className="row row-cols-1 row-cols-lg-2 g-3">
                {filter.map(order => <Order order={order} key={order._id} />)}
            </div>
        )
    }
    return (
        <div className='container my-4'>
            <Helmet>
                <title>Dashboard | Drug House</title>
                <meta name="This is the dashboard page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 text-center text-white">
                <div className="col">
                    <div className="bg-primary py-4 rounded shadow">
                        <h5>Orders</h5>
                        <h2>{orders.length}</h2>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-success py-4 rounded shadow">
                        <h5>Total Sales</h5>
                        <h2>3478</h2>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-danger py-4 rounded shadow">
                        <h5>Store Views</h5>
                        <h2>960</h2>
                    </div>
                </div>
                <div className="col">
                    <div className="bg-warning py-4 rounded shadow">
                        <h5>Product Views</h5>
                        <h2>1273</h2>
                    </div>
                </div>
            </div>
            <h3 className="text-secondary my-4">
                Active Orders
            </h3>
            <nav className='mb-3'>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="accepted-tab" data-bs-toggle="tab" data-bs-target="#accepted" type="button" role="tab" aria-controls="accepted" aria-selected="true">Accepted</button>
                    <button className="nav-link" id="pending-tab" data-bs-toggle="tab" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" aria-selected="false">Pending</button>
                    <button className="nav-link" id="shipped-tab" data-bs-toggle="tab" data-bs-target="#shipped" type="button" role="tab" aria-controls="shipped" aria-selected="false">Shipped</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="accepted" role="tabpanel" aria-labelledby="accepted-tab">
                    {filtering(showAccepted)}
                </div>
                <div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                    {filtering(showPending)}
                </div>
                <div className="tab-pane fade" id="shipped" role="tabpanel" aria-labelledby="shipped-tab">
                    {filtering(showShipped)}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;