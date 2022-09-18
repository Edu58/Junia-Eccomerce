import './PaymentMethod.scss'
import Card from "../../components/card/Card"
import { useState, useContext, useEffect } from 'react'
import ProductsContext from '../../context/products'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../../components/CheckoutSteps'
import paypalSVG from '../../assets/images/paypal-seeklogo.com.svg'
import stripeSVG from '../../assets/images/stripe-seeklogo.com.svg'
import mpesaSVG from '../../assets/images/M-PESA_LOGO.svg'

const PaymentMethod = () => {

    const { cartState, cartDispatch } = useContext(ProductsContext)

    const [paymentMethod, setPaymentMethod] = useState(cartState.cart.paymentMethod || 'paypal')

    const navigate = useNavigate()

    useEffect(() => {
        !cartState.cart.shippingAddress.address ? navigate('/shipping') : null
    }, [cartState.cart.shippingAddress.address, navigate])

    const handlePaymentMethodChange = (e) => {
        const target = e.target
        target.checked ? setPaymentMethod(target.value) : null
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        cartDispatch({
            type: "ADD_PAYMENT_METHOD",
            payload: paymentMethod
        })

        navigate('/place-order')
    }

    return (
        <div className='payment-method'>

            <CheckoutSteps step1 step2 step3 />

            <Card>
                <h2 className="text-center mb-4">Choose Payment Method</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="radio" name="paypal" value="paypal" id="paypal" checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label ms-3" htmlFor="paypal">
                            <img src={paypalSVG} alt="paypal" className='img-fluid' id='paypal-svg' />
                        </label>
                    </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="radio" name="stripe" value="stripe" id="stripe" checked={paymentMethod === 'stripe'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label ms-3" htmlFor="stripe">
                            <img src={stripeSVG} alt="stripe" className='img-fluid' id='stripe-svg' />
                        </label>
                    </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="radio" name="mpesa" value="mpesa" id="mpesa" checked={paymentMethod === 'mpesa'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label ms-3" htmlFor="mpesa">
                            <img src={mpesaSVG} alt="mpesa" id='mpesa-svg' />
                        </label>
                    </div>

                    <button type='submit' className='btn text-light'>Submit</button>
                </form>
            </Card>
        </div>
    )
}

export default PaymentMethod