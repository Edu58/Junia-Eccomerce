import './Cart.scss'
import Card from "../components/Card"
import banner from '../assets/alex-unsplash.jpg'
import ProductRows from '../components/homepage/ProductRows'
import { useContext } from 'react'
import ProductsContext from '../context/products'

const Cart = () => {

    const { cartState } = useContext(ProductsContext)

    return (
        <div className="bg py-4">
            <div className="container">
                <div className="content">
                    <div className="cart-items">
                        <p className="fw-bold fs-5">Cart ({cartState.cart.cartItems.length})</p>
                        {cartState.cart.cartItems.length > 0
                            ?
                            cartState.cart.cartItems.map((item) => {
                                return (
                                    <Card>
                                        <div className="product d-flex flex-column">
                                            <div className="d-flex justify-content-between">
                                                <div className='image d-flex'>
                                                    <img src={item.image} alt="" className="img-fluid rounded" />
                                                    <p className="ms-2">{item.title}</p>
                                                </div>
                                                <div className="price">
                                                    <p className="fs-5 fw-bold">KSH {item.price}</p>
                                                </div>
                                            </div>

                                            <div className="amount d-flex justify-content-between align-items-center mt-4">
                                                <div className="remove">
                                                    <div className="fw-bold" role="button">REMOVE</div>
                                                </div>

                                                <div className="add d-flex align-items-center">
                                                    <button className='btn text-light fw-bold'>+</button>
                                                    <div className='mx-4'>{item.quantity}</div>
                                                    <button className='btn text-light fw-bold'>-</button>
                                                </div>
                                            </div>

                                        </div>
                                    </Card>
                                )
                            })
                            :
                            <p className='text-center fw-bold'>Your cart is empty</p>
                        }
                    </div>

                    <div className="cart-summary">
                        <Card>
                            <p className='fw-bold border-bottom'>CART SUMMARY</p>

                            <div className="d-flex justify-content-between align-items-center">
                                <p className="small fw-bold">Subtotal</p>
                                <p className="fs-4 fw-bold">
                                    {cartState.cart.cartItems.reduce((a, c) => a + (c.price * c.quantity), 0)}
                                </p>
                            </div>

                            <button className='btn w-100'>Checkout ({cartState.cart.cartItems.reduce((a, c) => a + (c.price*c.quantity), 0)})</button>
                        </Card>
                    </div>
                </div>

                {/* <ProductRows categoryName="Top selling items"/>
                <ProductRows categoryName="You may also like" /> */}
            </div>
        </div>
    )
}

export default Cart