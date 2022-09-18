import { Row, Col } from 'react-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Row className='container-fluid checkout-steps bg-light py-2 px-5 mx-auto fs-5'>
            <Col className={step1 ? 'active' : ''}>Log In</Col>
            <Col className={step2 ? 'active' : ''}>Shipping</Col>
            <Col className={step3 ? 'active' : ''}>Payment</Col>
            <Col className={step4 ? 'active' : ''}>Place Order</Col>
        </Row>
    )
}

export default CheckoutSteps