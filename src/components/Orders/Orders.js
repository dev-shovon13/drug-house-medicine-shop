import { useEffect, useState } from 'react';
import Order from './Order';

const Orders = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {users.map(user => <Order orders={user.orders} key={user._id} />)}
            </div>
        </div>
    );
};

export default Orders;