import './PaymentMethod.scss'
import Card from "../../components/card/Card"
import { useState, useContext, useEffect } from 'react'
import ProductsContext from '../../context/products'
import { useNavigate } from 'react-router-dom'

const PaymentMethod = () => {

    const { cartState, cartDispatch } = useContext(ProductsContext)

    const [paymentMethod, setPaymentMethod] = useState('paypal')

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
            <Card>
                <h2 className="text-center mb-3">Payment Method</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="paypal" value="paypal" id="paypal" checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label" htmlFor="paypal">
                            Paypal
                        </label>
                    </div>
                    <div class="form-check mb-4">
                        <input className="form-check-input" type="radio" name="stripe" value="stripe" id="stripe" checked={paymentMethod === 'stripe'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label" htmlFor="stripe">
                            Stripe
                        </label>
                    </div>

                    <button type='submit' className='btn text-light'>Submit</button>
                </form>
            </Card>
        </div>
    )
}

export default PaymentMethod