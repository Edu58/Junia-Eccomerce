import './PlaceOrder.scss'
import Card from "../../components/card/Card"
import { useContext } from "react"
import ProductsContext from "../../context/products"

const PlaceOrder = () => {

    const { cartState } = useContext(ProductsContext)

    return (
        <div className="place-order">
            <Card>
                <div className="container">
                    <h2>Place Order</h2>

                    <div className="place-order-preview">
                        <div className="order-list">

                            <div className="shipping-info mb-5">
                                <p className="fw-bold">Shipping</p>
                                <p>Name: Bassir ENan</p>
                                <p>Address: 19488, Naiobi , Kenya</p>
                            </div>

                            <div className="payment mb-5">
                                <p className="fw-bold">Payment</p>
                                <p>Method: Paypal</p>
                            </div>

                            <div className="items">
                                <p className='fw-bold'>Items</p>
                                {cartState.cart.cartItems.map(item => {
                                    return (
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="product d-flex flex-column py-2">
                                                    <div className="image-price">
                                                        <div className='image d-flex'>
                                                            <img src={item.image} alt="" className="img-fluid rounded" />
                                                            <span className="ms-2 w-75">{item.title}</span>
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

                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Items</td>
                                        <td className='fw-bold'>Ksh 20,000</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td className='fw-bold'>Ksh 5000</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td className='fw-bold'>Ksh 345</td>
                                    </tr>
                                </tbody>
                            </table>

                            <button className="btn btn-lg w-100 text-light">Place Order</button>

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default PlaceOrder