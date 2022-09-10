import './OrdersList.scss'
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import Card from "../../components/card/Card";

const OrdersList = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const axiosPrivate = useAxiosPrivate()

    const getOrders = async () => {
        try {
            setIsLoading(true)
            const response = await axiosPrivate.get('/orders')
            setOrders(response.data)
            toast.success(`Orders list received`)
        } catch (error) {
            console.error(error.message)
            toast.error('Failed to retrieve orders list!!! Try again')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getOrders()
        console.log(orders)
    }, [])

    return (
        <div style={{ minHeight: '60vh', backgroundColor: '#FFFF' }}>
            <Toaster />
            <p className="fs-4 text-center py-2">Your Orders [{orders.length}]</p>

            <div className="container">
                <div className="orders-list">
                    {
                        orders.map(order => {
                            return (
                                <div className="order mx-auto my-4">
                                    <div className="card" id='order-card'>
                                        <div className={order.isDelivered ? 'card-body bg-success text-light' : 'card-body bg-secondary text-light'}>
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
                                                <div className="d-flex justify-content-between align-items-center">
                                                    {order.orderItems.map(item => {
                                                        return (
                                                            <>
                                                                <p className='w-50'>{item.title}</p>
                                                                <p>{item.quantity}</p>
                                                                <p>Ksh {item.price}</p>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className='fw-bold text-secondary text-center bg-light rounded'>
                                                <span className="fs-4">Total</span> <br />
                                                <span className="fs-4">KSH {order.totalPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default OrdersList