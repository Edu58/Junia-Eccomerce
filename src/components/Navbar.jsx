import './Navbar.scss'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container d-flex">
                <p className='fs-3 fw-bold m-auto text-light'>FREE DELIVERY IN 24H</p>

                <div className="call px-4 text-light">
                    <span className='fw-bold'>Call or Whatsapp to order</span>
                    <br />
                    <span className="fw-bold fs-5">0711 011 011</span>
                </div>
            </div>
        </div>
    )
}


export default Navbar