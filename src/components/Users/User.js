import React from 'react';
import "./User.css"

const User = ({ user }) => {
    const { name, img, phone, address } = user
    return (
        <div className='col'>
            <div className="card h-100 shadow-sm user-card">
                <div className="d-flex p-2 pb-xl-0">
                    <img src={img} alt="" className='img-fluid user-img' />
                    <div className="p-2">
                        <h6 className="mb-0 fw-light"><span className="fw-bold text-secondary">Name: </span>{name}</h6>
                        <p className="mb-0 fw-light"><span className="fw-bold text-secondary">Phone: </span> {phone}</p>
                        <p className="mb-0 fw-light"><span className="fw-bold text-secondary">Address: </span>House: {address.house}, {address.city}-{address.pinCode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;