import { useState, useEffect } from 'react';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='container my-5'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
                {users.map(user => <User user={user} key={user._id} />)}
            </div>
        </div>
    );
};

export default Users;