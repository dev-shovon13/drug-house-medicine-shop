import React from 'react';

const Product = ({ product }) => {
    const { name } = product
    return (
        <div>
            {name}
        </div>
    );
};

export default Product;