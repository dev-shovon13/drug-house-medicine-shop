import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    if (users.length === 0) {
        return <div className="text-center w-75 mx-auto"><img src="https://i.ibb.co/FwncvXn/spinner.gif" alt="" className="img-fluid" /></div>
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Users | Drug House</title>
                <meta name="This is the user page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
                {users.map(user => <User user={user} key={user._id} />)}
            </div>
        </div>
    );
};

export default Users;