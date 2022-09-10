import './OrdersList.scss'
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Link } from 'react-router-dom';

const OrdersList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async () => {
        try {
            setIsLoading(true)
            const response = await axiosPrivate.get('/orders')
            setOrders(response.data)
        } catch (error) {
            toast.error('Failed to retrieve orders list!!! Try again')
        } finally {
            setIsLoading(false)
        }
    }

    async function handleCancelOrder(orderId) {
        try {
            const response = await axiosPrivate.delete(`/orders/${orderId}`)
            toast.success(`${response.data.message}`)
            getOrders()
        } catch (error) {
            toast.error('Could not cancel order!!! Try again')
        }
    }

    return (
        <div style={{ minHeight: '60vh'}} className="bg-light">
            {
                isLoading
                    ?
                    <p className="text-center fs-4 pt-3">Getting your orders...</p>
                    :
                    <>
                        <Toaster />
                        <p className="fs-4 text-center py-2">Your Orders [{orders.length}]</p>

                        <div className="container">
                            {
                                orders.length > 0
                                    ?
                                    <div className="orders-list row">
                                        {
                                            orders.map(order => {
                                                return (
                                                    <div className="order mx-auto my-4 col-md-6">
                                                        <div className="card border" id='order-card'>
                                                            <div className='card-body'>
                                                                <p className="text-center fw-bold fs-5">Order ID {order._id}</p>
                                                                <div>
                                                                    <p className="fw-bold">Shipping</p>
                                                                    <p>Name: {order.shippingAddress.fullname}</p>
                                                                    <p>City: {order.shippingAddress.city}</p>
                                                                    <p>Address: {order.shippingAddress.address}</p>
                                                                    <p>Postal Code: {order.shippingAddress.postalcode}</p>
                                                                    {
                                                                        order.isDelivered ? <p className="alert alert-success text-center">Delivered</p> : <p className="alert alert-danger text-center">Not Delivered</p>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <p className="fw-bold">Payment</p>
                                                                    <p>Method: {order.paymentMethod}</p>
                                                                    {
                                                                        order.isPaid ? <p className="alert alert-success text-center">Paid</p> : <p className="alert alert-danger text-center">Not Paid</p>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    <p className="fw-bold">Items</p>
                                                                    <div>
                                                                        {order.orderItems.map(item => {
                                                                            return (
                                                                                <div className="d-flex justify-content-between align-items-center">
                                                                                    <p className='w-50'>{item.title}</p>
                                                                                    <p>{item.quantity}</p>
                                                                                    <p>Ksh {item.price}</p>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                                <div className='fw-bold text-secondary text-center bg-light rounded'>
                                                                    <span className="fs-4">Total</span> <br />
                                                                    <span className="fs-4">KSH {order.totalPrice}</span>
                                                                </div>

                                                                {
                                                                    order.isPaid
                                                                        ?
                                                                        ''
                                                                        :
                                                                        <div className="cancel-order mt-4 text-center">
                                                                            <button className="btn btn-outline-danger" onClick={() => handleCancelOrder(order._id)}>Cancel Order</button>
                                                                        </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    :
                                    <p className='text-center py-3'>You have no orders <Link to="/">Go shopping</Link></p>
                            }
                        </div>
                    </>
            }
        </div >
    )
}

export default OrdersList