import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, type, price, oldPrice, stock, brand } = product
    return (
        <div className='col'>
            <div className="card h-100 shadow-sm position-relative">
                <div className="card-body d-flex d-md-block ">
                    <img src={img} alt="" className='img-fluid product-img p-0 p-md-3 rounded-2' />
                    <div className='ps-2 p-md-0'>
                        <small className='fw-light text-primary'>{brand}</small>
                        <h5 className='mb-0'>{name}</h5>
                        <h6 className="mb-0 fw-light">{type}</h6>
                    </div>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center">
                    <div>
                        {
                            oldPrice
                                ?
                                <h6 className='text-success'>&#2547; {price} <span className='fw-light'>Taka</span> <span className='ms-2 text-dark text-decoration-line-through'><span className='text-danger'>&#2547; {oldPrice} Taka</span></span></h6>
                                :
                                <h6 className='text-success'>&#2547; {price} <span className='fw-light'>Taka</span></h6>
                        }
                    </div>
                    <button className="btn btn-sm btn-primary add-btn">Add to Cart</button>
                </div>
                <span className='stock bg-light py-1 px-3 rounded'>
                    {
                        stock > 1 ? <p><span className='text-success fw-bold'>{stock}</span> items left</p> : <p className='text-danger fw-bold'>Stock Out</p>
                    }
                </span>
            </div>
        </div>
    );
};

export default Product;