import './Cart.scss'
import Card from "../components/Card"
import banner from '../assets/alex-unsplash.jpg'
import ProductRows from '../components/homepage/ProductRows'

const Cart = () => {
    return (
        <div className="bg py-4">
            <div className="container">
                <div className="content">
                    <div className="cart-items">
                        <Card>
                            <p className="fw-bold fs-5 border-bottom">Cart (3)</p>

                            <div className="product d-flex flex-column">
                                <div className="d-flex justify-content-between">
                                    <div className='image d-flex'>
                                        <img src={banner} alt="" className="img-fluid rounded" />
                                        <p className="ms-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                                    </div>
                                    <div className="price">
                                        <p className="fs-4 fw-bold">KSH 10,000</p>
                                    </div>
                                </div>

                                <div className="amount d-flex justify-content-between align-items-center mt-4">
                                    <div className="remove">
                                        <div className="fw-bold" role="button">REMOVE</div>
                                    </div>

                                    <div className="add d-flex align-items-center">
                                        <button className='btn text-light fw-bold'>+</button>
                                        <div className='mx-4'>3</div>
                                        <button className='btn text-light fw-bold'>-</button>
                                    </div>
                                </div>

                            </div>
                        </Card>
                    </div>

                    <div className="cart-summary">
                        <Card>
                            <p className='fw-bold border-bottom'>CART SUMMARY</p>

                            <div className="d-flex justify-content-between align-items-center">
                                <p className="small fw-bold">Subtotal</p>
                                <p className="fs-4 fw-bold">Ksh 10,000</p>
                            </div>

                            <button className='btn w-100'>Checkout (Ksh 10,000)</button>
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