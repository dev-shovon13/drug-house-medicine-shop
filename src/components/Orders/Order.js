import React from 'react';

const Order = ({ orders }) => {
    console.log(orders);
    return (
        <div>
            {orders.map(order => <h6>{order.payment}</h6>)}
        </div>
    );
};

export default Order;