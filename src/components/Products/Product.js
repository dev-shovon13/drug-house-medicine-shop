import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, type, price, stock, brand } = product
    return (
        <div className='col'>
            <div className="card h-100 shadow-sm position-relative">
                <div className="d-flex d-md-block ">
                    <img src={img} alt="" className='img-fluid product-img p-1 p-md-3 rounded-2' />
                    <div className="p-2 p-md-3">
                        <small className='fw-light text-primary'>{brand}</small>
                        <h5 className='mb-0'>{name}</h5>
                        <h6 className="mb-0 fw-light">{type}</h6>
                        <h6>&#2547; {price} <span className='fw-light'>Taka</span></h6>
                        <span className='stock bg-light py-1 px-3 rounded'>
                            {
                                stock > 1 ? <p className='mb-0'><span className='text-success fw-bold'>{stock}</span> items left</p> : <p className='mb-0 text-danger fw-bold'>Stock Out</p>
                            }
                        </span>
                        <button className="btn btn-sm btn-primary add-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;