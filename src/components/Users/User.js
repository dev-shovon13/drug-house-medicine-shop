import React from 'react';

const User = ({ user }) => {
    const { name, img } = user
    return (
        <div className='col'>
            <div className="card">
                <img src={img} alt="" className='img-fluid' />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default User;