import './OrdersList.scss'
import { useEffect, useState } from "react"
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { Link } from 'react-router-dom';
import { axiosPrivateClient } from '../../components/Axios';
import { ListGroup } from 'react-bootstrap';

const OrdersList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const axiosPrivate = useAxiosPrivate()

    const [{ isPending }, paypalDispatch] = usePayPalScriptReducer()

    useEffect(() => {
        getOrders()
        loadPaypalScript()
    }, [paypalDispatch])

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

    const loadPaypalScript = async () => {
        const { data } = await axiosPrivateClient.get('/payments/paypal/clientId')

        paypalDispatch({
            type: 'resetOptions',
            value: {
                'client-id': data,
                currency: 'USD'
            }
        })

        paypalDispatch({
            type: 'setLoadingStatus',
            value: 'pending'
        })

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
        <div style={{ minHeight: '60vh' }} className="bg-light">
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
                                                    <div className="order my-4 col-lg-6 shadow-lg p-3 mb-5 mx-1 rounded" key={order._id}>
                                                        <div className="card border" id='order-card'>
                                                            <div className='card-body'>
                                                                <p className="text-center fw-bold fs-5">Order ID {order._id}</p>
                                                                <div>
                                                                    <p className="fw-bold">
                                                                        Shipping
                                                                        {
                                                                            order.isDelivered ? <span className="badge bg-success text-center ms-2">DELIVERED</span> : <span className="badge bg-danger text-center ms-2">NOT DELIVERED</span>
                                                                        }
                                                                    </p>
                                                                    <span>{order.shippingAddress.fullname}</span>,&nbsp;
                                                                    <span>{order.shippingAddress.country}</span>,&nbsp;
                                                                    <span>{order.shippingAddress.city}</span>,&nbsp;
                                                                    <span>{order.shippingAddress.address}</span>,&nbsp;
                                                                    <span>{order.shippingAddress.postalcode}</span>
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
                                                                <div>
                                                                    <p className="fw-bold">Payment</p>
                                                                    <p>Method: {order.paymentMethod} {order.isPaid ? <span className='badge bg-success'>PAID</span> : <span className='badge bg-danger'>NOT PAID</span>}</p>

                                                                    {order?.paymentResult?.id ? <p>Transaction ID: {order?.paymentResult?.id}</p> : ''}

                                                                    {!order.isPaid && order.paymentMethod === 'paypal' ? (
                                                                        <ListGroup.Item>
                                                                            {isPending ? (
                                                                                <p>...</p>
                                                                            ) : (
                                                                                <div>
                                                                                    <PayPalButtons
                                                                                        createOrder={(data, actions) => {
                                                                                            return actions.order.create({
                                                                                                purchase_units: [{
                                                                                                    amount: {
                                                                                                        value: order.totalPrice
                                                                                                    }
                                                                                                }]
                                                                                            })
                                                                                                .then(orderid => {
                                                                                                    return orderid
                                                                                                })
                                                                                        }}

                                                                                        onApprove={(data, actions) => {
                                                                                            return actions.order.capture()
                                                                                                .then(async details => {
                                                                                                    try {
                                                                                                        await axiosPrivateClient.put(`/orders/${order._id}/pay`, details)
                                                                                                        await getOrders()
                                                                                                        toast.success('Payment received')
                                                                                                    } catch (error) {
                                                                                                        toast.error('Something was wrong!!! Order NOT paid. Try again')
                                                                                                    }
                                                                                                })
                                                                                        }}

                                                                                        onError={() => toast.error('Something was wrong!!! Order NOT paid. Try again')} />
                                                                                </div>
                                                                            )
                                                                            }
                                                                        </ListGroup.Item>
                                                                    )
                                                                        :
                                                                        !order.isPaid && order.paymentMethod === 'stripe' ? <p className='alert alert-warning text-center'>STRIPE</p>
                                                                            :
                                                                            !order.isPaid && order.paymentMethod === 'mpesa' ? <p className='alert alert-warning text-center'>MPESA</p>
                                                                                :
                                                                                ''
                                                                    }
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
                                                                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleCancelOrder(order._id)}>Cancel Order</button>
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