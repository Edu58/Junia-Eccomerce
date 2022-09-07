import './PaymentMethod.scss'
import Card from "../../components/card/Card"
import { useState } from 'react'

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('paypal')

    const handlePaymentMethodChange = (e) => {
        const target = e.target

        target.checked ? setPaymentMethod(target.value) : null
    }

    return (
        <div className='payment-method'>
            <Card>
                <h2 className="text-center mb-3">Payment Method</h2>

                <form>
                    <div class="form-check">
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