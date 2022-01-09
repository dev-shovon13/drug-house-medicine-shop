import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import User from './User';
import NoResult from '../../shared/NoResult';
import Spinner from '../../shared/Spinner';
import SearchBar from '../../shared/SearchBar';

const Users = () => {
    const [users, setUsers] = useState([])
    const [displayUsers, setDisplayUsers] = useState([])
    useEffect(() => {
        fetch("https://health-os.herokuapp.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setDisplayUsers(data)
            })
    }, [])

    const handleSearch = e => {
        const searchText = e.target.value
        const matchedUser = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayUsers(matchedUser)
    }

    if (users.length === 0) {
        return <Spinner />
    }

    return (
        <div className='container my-4'>
            <Helmet>
                <title>Users | Drug House</title>
                <meta name="This is the user page of Drug House" content="Drug House- online medicine shop Website" />
            </Helmet>
            <SearchBar handleSearch={handleSearch} props={"User"} />
            {
                displayUsers.length > 0 ?
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
                        {
                            displayUsers.map(user => <User user={user} key={user._id} />)
                        }
                    </div>
                    :
                    <NoResult />
            }
        </div>
    );
};

export default Users;