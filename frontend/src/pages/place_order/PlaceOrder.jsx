import './PlaceOrder.scss'
import toast, { Toaster } from 'react-hot-toast';
import Card from "../../components/card/Card"
import { useContext, useEffect, useState } from "react"
import ProductsContext from "../../context/products"
import { useNavigate, Link } from 'react-router-dom'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const PlaceOrder = () => {
    const [isLoading, setIsLoading] = useState(false)

    const { cartState } = useContext(ProductsContext)

    const { cart } = cartState

    const navigate = useNavigate()

    const axiosPrivate = useAxiosPrivate()

    useEffect(() => {
        !cart.paymentMethod ? navigate('/payment-method') : null
    }, [cart.paymentMethod, navigate])

    const handlePlaceOrder = async () => {

        setIsLoading(true)

        cart.itemsPrice = parseInt(cart.cartItems.reduce((a, c) => a + (c.price * c.quantity), 0).toFixed(2))
        cart.shippingPrice = 500
        cart.taxPrice = cart.itemsPrice / 10

        const orderToPlace = {
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            shippingPrice: cart.shippingPrice,
            itemsPrice: cart.itemsPrice,
            taxPrice: cart.taxPrice,
            totalPrice: parseInt(cart.itemsPrice + cart.shippingPrice + cart.taxPrice)
        }

        try {
            const response = await axiosPrivate.post('/orders', {
                ...orderToPlace,
            })

            navigate('/order-list')
        } catch (error) {
            console.log(error)
            toast.error(`${error?.response?.data?.message}`)
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <div className="place-order">
            <Toaster />
            <Card>
                <div className="container">
                    <h2 className='mb-3'>Place Order</h2>

                    <div className="place-order-preview">
                        <div className="order-list">

                            <div className="shipping-info mb-5">
                                <p className="fw-bold">SHIPPING &nbsp; <Link to='/shipping'>Edit</Link> </p>
                                <p>Name: {cart.shippingAddress.fullname}</p>
                                <p>Country: {cart.shippingAddress.country}</p>
                                <p>City: {cart.shippingAddress.city}</p>
                                <p>Address: {cart.shippingAddress.address}</p>
                                <p>Postal code: {cart.shippingAddress.postalcode}</p>
                            </div>

                            <div className="payment mb-5">
                                <p className="fw-bold">PAYMENT &nbsp; <Link to='/payment-method'>Edit</Link></p>
                                <p>Method: {cart.paymentMethod}</p>
                            </div>

                            <div className="items">
                                <p className='fw-bold'>ITEMS &nbsp; <Link to='/cart'>Edit</Link></p>
                                {cartState.cart.cartItems.map(item => {
                                    return (
                                        <div className="card" key={item._id}>
                                            <div className="card-body">
                                                <div className="product d-flex flex-column py-2">
                                                    <div className="image-price">
                                                        <div className='image d-flex'>
                                                            <Link to={`/product/${item.category.name}/${item._id}`} className='text-decoration-none'>
                                                                <img src={item.image} alt="" className="img-fluid rounded" />
                                                                <span className="ms-2 w-75">{item.title}</span>
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <p>{item.quantity}</p>
                                                        </div>
                                                        <div className="price">
                                                            <p className="fw-bold">KSH {item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="order-price-summary">

                            <h2>Order Summary</h2>

                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Items</td>
                                        <td className='fw-bold'>Ksh {cart.cartItems.reduce((a, c) => a + (c.price * c.quantity), 0).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td className='fw-bold'>Ksh 500</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td className='fw-bold'>Ksh 245</td>
                                    </tr>
                                </tbody>
                            </table>

                            {
                                isLoading
                                    ?
                                    <button className="btn btn-lg w-100 text-light bg-success" disabled onClick={handlePlaceOrder}>Placing order...</button>
                                    :
                                    <button className="btn btn-lg w-100 text-light" onClick={handlePlaceOrder}>Place Order</button>
                            }

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PlaceOrder