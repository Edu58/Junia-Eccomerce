import './Shipping.scss'
import Card from '../../components/card/Card'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import shippingImage from '../../assets/images/Delivery address-pana.png'
import ProductsContext from '../../context/products'

const Shipping = () => {

    const { cartDispatch, cartState } = useContext(ProductsContext)

    const { cart } = cartState

    const navigate = useNavigate()

    const [fullname, setFullName] = useState(cart.shippingAddress.fullname || '')
    const [country, setCountry] = useState(cart.shippingAddress.country || '')
    const [city, setCity] = useState(cart.shippingAddress.city || '')
    const [address, setAddress] = useState(cart.shippingAddress.address || '')
    const [postalcode, setPostalCode] = useState(cart.shippingAddress.postalcode || '')

    useEffect(() => {
        !cart.cartItems.length > 0 ? navigate('/cart') : null
    }, [cart.cartItems, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (cartState.userInfo.email) {
            cartDispatch({
                type: "ADD_SHIPPING",
                payload: {
                    fullname,
                    country,
                    city,
                    address,
                    postalcode
                }
            })

            navigate('/payment-method')
        }
    }

    return (
        <div className='shipping'>
            <Card>
                <h2 className='text-center mb-5'>Shipping Address</h2>

                <form onSubmit={handleSubmit}>
                    <div className="shipping-form-contents mb-3">
                        <div className="shipping-image">
                            <img src={shippingImage} alt="" className='img-fluid' />
                        </div>

                        <div className="shipping-input-fields">
                            <div className="mb-3">
                                <label htmlFor="fullname" className='form-label'>Full Name</label>
                                <input type="text" name="fullname" id="fullname" className="form-control shadow-none" placeholder='e.g. John Doe' onChange={(e) => setFullName(e.target.value)} defaultValue={cart.shippingAddress.fullname} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className='form-label'>Country</label>
                                <input type="text" name="country" id="country" className="form-control shadow-none" placeholder='e.g. Kenya' onChange={(e) => setCountry(e.target.value)} defaultValue={cart.shippingAddress.country} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="city" className='form-label'>City</label>
                                <input type="text" name="city" id="city" className="form-control shadow-none" placeholder='e.g. Nairobi' onChange={(e) => setCity(e.target.value)} defaultValue={cart.shippingAddress.city} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className='form-label'>Address</label>
                                <input type="text" name="address" id="address" className="form-control shadow-none" placeholder='e.g. Prestige, Ngong Road' onChange={(e) => setAddress(e.target.value)} defaultValue={cart.shippingAddress.address} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="postalcode" className='form-label'>Postal Code</label>
                                <input type="text" name="postalcode" id="postalcode" className="form-control shadow-none" placeholder='e.g. 001000-1000' onChange={(e) => setPostalCode(e.target.value)} defaultValue={cart.shippingAddress.postalcode} required />
                            </div>
                        </div>
                    </div>

                    <button type='submit' className="btn text-light w-100" disabled={!fullname || !country || !city || !address || !postalcode}>Submit</button>
                </form>
            </Card>
        </div>
    )
}

export default Shipping