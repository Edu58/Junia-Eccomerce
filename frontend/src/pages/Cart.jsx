import './Cart.scss'
import Card from "../components/Card"
import ProductRows from '../components/homepage/ProductRows'
import { useContext } from 'react'
import ProductsContext from '../context/products'

const Cart = () => {

    const { cartState, cartDispatch } = useContext(ProductsContext)

    const updateQuantityHandler = (item, quantity) => {
        quantity > 0 ? cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } }) : null
    }

    const deleteItemFromCartHandler = (item) => {
        cartDispatch({ type: "DELETE_FROM_CART", payload: item })
    }

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
                                    <Card key={item.id}>
                                        <div className="product d-flex flex-column py-2">
                                            <div className="image-price d-flex justify-content-between">
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
                                                    <button className="btn fw-bold" onClick={() => deleteItemFromCartHandler(item)}>REMOVE</button>
                                                </div>

                                                <div className="add d-flex align-items-center">
                                                    <button className='btn text-light fw-bold' disabled={item.quantity <= 1} onClick={() => updateQuantityHandler(item, item.quantity - 1)}>-</button>
                                                    <div className='mx-4'>{item.quantity}</div>
                                                    <button className='btn text-light fw-bold' onClick={() => updateQuantityHandler(item, item.quantity + 1)}>+</button>
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
                                    {cartState.cart.cartItems.reduce((a, c) => a + (c.price * c.quantity), 0).toFixed(2)}
                                </p>
                            </div>

                            <button className='btn w-100'>Checkout ({cartState.cart.cartItems.reduce((a, c) => a + (c.price * c.quantity), 0).toFixed(2)})</button>
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