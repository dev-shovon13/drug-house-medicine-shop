import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import NoResult from '../../shared/NoResult';
import Order from './Order';
import Spinner from '../../shared/Spinner';
import SearchBar from '../../shared/SearchBar';



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

    // filtering dates 
    function today(event) {
        return event.date === "05-01-2022";
    }
    function yesterday(event) {
        return event.date === "04-01-2022";
    }
    const showToday = orders.filter(today)
    const showYesterday = orders.filter(yesterday)

    // search
    const handleSearch = (e) => {
        const searchText = e.target.value
        const matchedOrder = orders.filter(order => order._id.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayOrders(matchedOrder)
    }

    // spinner
    if (orders.length === 0) {
        return <Spinner />
    }

    const filtering = (filter) => {
        return (
            filter.length > 0 ?
                <div className="row row-cols-1 row-cols-lg-2 g-3">
                    {filter.map(order => <Order order={order} key={order._id} />)}
                </div>
                :
                <NoResult />
        )
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Orders | Drug House</title>
                <meta name="This is the order page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <SearchBar handleSearch={handleSearch} />
            <nav className='mb-3'>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">All</button>
                    <button className="nav-link" id="today-tab" data-bs-toggle="tab" data-bs-target="#today" type="button" role="tab" aria-controls="today" aria-selected="false">Today</button>
                    <button className="nav-link" id="yesterday-tab" data-bs-toggle="tab" data-bs-target="#yesterday" type="button" role="tab" aria-controls="yesterday" aria-selected="false">Yesterday</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    {filtering(displayOrders)}
                </div>
                <div className="tab-pane fade" id="today" role="tabpanel" aria-labelledby="today-tab">
                    {filtering(showToday)}
                </div>
                <div className="tab-pane fade" id="yesterday" role="tabpanel" aria-labelledby="yesterday-tab">
                    {filtering(showYesterday)}
                </div>
            </div>
        </div>
    );
};

export default Orders;