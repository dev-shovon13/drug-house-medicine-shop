import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, type, price, oldPrice, stock, brand } = product
    const addToCart = () => {
        toast.success("Added Item Successfully")
    }
    return (
        <div className='col'>
            <div className="card h-100 shadow-sm position-relative product-card">
                <div className="card-body d-flex d-md-block pb-1">
                    <img src={img} alt="" className='img-fluid product-img p-0 p-md-3' />
                    <div className='ps-2 p-md-0'>
                        <small className='fw-light text-primary'>{brand}</small>
                        <h5 className='mb-0'>{name}</h5>
                        <small className="fw-light text-secondary">{type}</small>
                    </div>
                </div>
                <div className="card-footer bg-white d-flex justify-content-between align-items-center pb-0">
                    <div>
                        {
                            oldPrice
                                ?
                                <h6 className='text-success'>&#2547; {price} <span className='fw-light'>Taka</span> <span className='ms-2 text-dark text-decoration-line-through'><span className='text-danger'>&#2547; {oldPrice} Taka</span></span></h6>
                                :
                                <h6 className='text-success'>&#2547; {price} <span className='fw-light'>Taka</span></h6>
                        }
                    </div>
                    <button className="btn btn-sm btn-outline-primary py-0 add-btn" onClick={addToCart}>
                        <span className='me-1'>Add</span>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
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