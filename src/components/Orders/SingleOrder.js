import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const SingleOrder = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState([])
    const [product, setProduct] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`https://health-os.herokuapp.com/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [orderId])
    useEffect(() => {
        fetch(`https://health-os.herokuapp.com/products/${order.productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [order.productId])
    useEffect(() => {
        fetch(`https://health-os.herokuapp.com/users/${order.user_id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [order.user_id])

    if (order.length === 0) {
        return <div className="text-center w-75 mx-auto"><img src="https://i.ibb.co/FwncvXn/spinner.gif" alt="" className="img-fluid" /></div>
    }

    const total = order?.quantity * product?.price;
    const delivery = 50;
    return (
        <div className='container my-5' style={{ height: "80vh" }}>
            <div className="card  p-2 p-md-4">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className='col p-2'>
                        <h5 className="text-secondary border-bottom text-center bg-light p-2">Order Details</h5>
                        <div className="row">
                            <div className="col-3">
                                <img src={product?.img} alt="" className='img-fluid' />
                            </div>
                            <div className="col-9">
                                <small className='text-secondary'>Order Id: #{order._id}</small>
                                <h6>{product?.name}</h6>
                                <p className='text-secondary'>{order?.quantity} {order?.quantity > 1 ? "Units" : "Unit"}</p>
                                <div className="d-flex justify-content-between w-50 border-bottom pb-1">
                                    <h6><span className='px-2 text-white rounded' style={{ backgroundColor: "#8ab3d1" }}>{order?.quantity}</span> x &#2547;{product.price}</h6>
                                    <h6>&#2547;{total}</h6>
                                </div>
                                <div className="w-50">
                                    <div className='d-flex justify-content-between'>
                                        <p>Item Total</p>
                                        <p>&#2547;{total}</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Delivery</p>
                                        <p>&#2547;{delivery}</p>
                                    </div>
                                    <div className='d-flex justify-content-between fw-bold'>
                                        <p>Grand Total</p>
                                        <p>&#2547;{total + delivery}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col p-2'>
                        <h5 className="text-secondary border-bottom text-center bg-light p-2">Customer Details</h5>
                        <div className="d-flex">
                            <div className="text-center">
                                <img src={user?.img} alt="user" style={{ height: "150px" }} className='img-fluid m-1 me-3 p-2 border rounded shadow-sm' />
                            </div>
                            <div>
                                <h6 className='fw-bold'>Name: <span className='fw-normal'>{user?.name}</span></h6>
                                <h6 className='fw-bold'>Mobile: <span className='fw-normal'>{user?.phone}</span> <FontAwesomeIcon className='fs-5 mx-2 text-primary' icon={faPhoneSquareAlt} /><FontAwesomeIcon className='fs-5 text-success' icon={faWhatsappSquare} /></h6>
                                <h6 className='fw-bold'>Address: <span className='fw-normal'>{user?.address?.house}</span></h6>
                                <h6 className='fw-bold'>Pin Code: <span className='fw-normal'>{user?.address?.pinCode}</span></h6>
                                <h6 className='fw-bold'>City: <span className='fw-normal'>{user?.address?.city}</span></h6>
                                <h6 className='fw-bold'>Payment: <span className='text-success'>{order?.payment}</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;